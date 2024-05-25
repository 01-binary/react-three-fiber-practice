import * as THREE from 'three';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { CameraControls, ContactShadows } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

let angle = 0;

const ShowRoom = () => {
  const [isFitting, setIsFitting] = useState(false);
  const cameraControlsRef = useRef<CameraControls>(null);
  const { raycaster } = useThree();
  const gltf = useLoader(GLTFLoader, './models/custom.glb');

  useEffect(() => {
    gltf.scene.children.forEach((shoe) => {
      shoe.children.forEach((mesh) => {
        mesh.castShadow = true;
      });
    });
    cameraControlsRef.current?.addEventListener('control', () => {
      setIsFitting(true);
    });
    cameraControlsRef.current?.addEventListener('sleep', () => {
      setIsFitting(false);
    });
  }, []);

  useFrame(() => {
    if (isFitting) return;
    cameraControlsRef.current?.setPosition(
      Math.sin(angle) * 2,
      0.8,
      Math.cos(angle) * 2,
      true
    );
    angle += 0.01;

    const rightShoe = gltf.scene.children[0];
    const leftShoe = gltf.scene.children[1];

    rightShoe.rotation.y = THREE.MathUtils.degToRad(10);
    leftShoe.rotation.y = THREE.MathUtils.degToRad(335);
    leftShoe.rotation.z = THREE.MathUtils.degToRad(-30);
    leftShoe.position.x = -0.25;
    leftShoe.position.y = 0.37;
    leftShoe.position.z = 0.44;
  });

  const onClick = () => {
    const intersects = raycaster.intersectObjects(gltf.scene.children, true);

    if (intersects.length > 0) {
      const firstObject = intersects[0].object as THREE.Mesh;
      const material = firstObject.material as THREE.MeshStandardMaterial;
      const clone = material.clone();
      firstObject.material = clone;
      const newMaterial = firstObject.material as THREE.MeshStandardMaterial;
      newMaterial.color = new THREE.Color('red');
      cameraControlsRef.current?.fitToBox(firstObject, true);
    }
  };
  return (
    <>
      <directionalLight position={[3, 3, 3]} />
      <pointLight position={[0, 1, 0]} intensity={3} />
      <CameraControls
        ref={cameraControlsRef}
        dollyToCursor
        minDistance={0.5}
        maxDistance={10}
        onChange={() => {}}
      />
      <mesh castShadow position={[1, 0.3, 1]}>
        <boxGeometry args={[0.5, 0.5]} />
        <meshStandardMaterial />
      </mesh>
      <mesh scale={5} position={[0, -0.51, 0]}>
        <cylinderGeometry args={[0.4, 0.2, 0.2, 50]} />
        <meshStandardMaterial />
      </mesh>
      <primitive object={gltf.scene} onClick={onClick} />
      <ContactShadows
        position={[0, 0, 0]}
        scale={5}
        color="#000"
        resolution={512}
        opacity={0.8}
        blur={0.5}
      />
    </>
  );
};

export default ShowRoom;
