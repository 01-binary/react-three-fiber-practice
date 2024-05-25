import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import { CameraControls, ContactShadows } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { selectedColorState, selectedMeshState } from '@src/atoms/Atoms';
import { useRecoilState } from 'recoil';
import Constants from '@src/Constants';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

export default function ShowRoom() {
  const [selectedColorIdx] = useRecoilState(selectedColorState);
  const [selectedMeshName, setSelectedMeshName] =
    useRecoilState(selectedMeshState);
  const { raycaster, scene } = useThree();
  const cameraControlsRef = useRef<CameraControls>(null!);
  const gltf = useLoader(GLTFLoader, './models/custom.glb');

  useEffect(() => {
    gltf.scene.traverse((item: any) => {
      if (item.name === 'Vamp_Left') {
        const itemMat = item.material as THREE.MeshStandardMaterial;
        const cloneMat = itemMat.clone();
        item.material = cloneMat;
        setSelectedMeshName(item.name);
      }
    });
  }, [gltf.scene, setSelectedMeshName]);

  useEffect(() => {
    if (selectedMeshName === '') return;
    const obj = scene.getObjectByName(selectedMeshName) as THREE.Mesh;
    const mat = obj.material as THREE.MeshStandardMaterial;
    const color = Constants.COLOR_ARR[selectedColorIdx].color;
    mat.color = new THREE.Color(color);
  }, [scene, selectedColorIdx, selectedMeshName]);

  useFrame(() => {
    const rightShoes = gltf.scene.children[0];
    const leftShoes = gltf.scene.children[1];
    rightShoes.rotation.y = THREE.MathUtils.degToRad(10);
    leftShoes.rotation.y = THREE.MathUtils.degToRad(335);
    leftShoes.rotation.z = THREE.MathUtils.degToRad(-30);
    leftShoes.position.x = -0.25;
    leftShoes.position.z = 0.37;
    leftShoes.position.y = 0.44;
  });

  const shoesClick = () => {
    const intersects = raycaster.intersectObjects(gltf.scene.children, true);

    if (intersects.length > 0) {
      const firstObj = intersects[0].object as THREE.Mesh;
      setSelectedMeshName(firstObj.name);
      const firstMat = firstObj.material as THREE.MeshStandardMaterial;
      const cloneMat = firstMat.clone();

      firstObj.material = cloneMat;
      const mat = firstObj.material as THREE.MeshStandardMaterial;
      mat.emissive = new THREE.Color('#B7F2F1');
      setTimeout(() => {
        mat.emissive = new THREE.Color('black');
      }, 500);

      cameraControlsRef.current.fitToBox(firstObj, true);
    }
  };

  return (
    <>
      <directionalLight position={[3, 3, 3]} />
      <pointLight position={[0, 1, 0]} intensity={3} />
      <CameraControls
        ref={cameraControlsRef}
        enabled={true}
        dollyToCursor={true}
        minDistance={0.5}
        maxDistance={10}
      />
      <mesh scale={5} position={[0, -0.51, 0]}>
        <cylinderGeometry args={[0.4, 0.2, 0.2, 50]} />
        <meshStandardMaterial />
      </mesh>
      <primitive object={gltf.scene} onClick={shoesClick} />

      <ContactShadows
        position={[0, 0, 0]}
        scale={5}
        color="#000000"
        resolution={512}
        opacity={0.8}
        blur={0.5}
      />
    </>
  );
}
