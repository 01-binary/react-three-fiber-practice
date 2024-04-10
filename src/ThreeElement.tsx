import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as Three from 'three';
import { useControls } from 'leva';

const ThreeElement = () => {
  const boxRef = useRef<Three.Mesh>(null);
  const groupRef = useRef<Three.Group>(null);
  const { size, gl, scene, camera } = useThree();

  const box = useControls({
    rotation: { value: 10, min: -360, max: 360, step: 1 },
  });

  useFrame((state, delta) => {
    // boxRef.current!.rotation.x += delta;
    // boxRef.current!.position.y -= 0.01;
    // boxRef.current!.scale.z += 0.01;
    // console.log(boxRef.current);
    // console.log(state, delta);
    scene.rotation.x += 0.01;
    groupRef.current!.rotation.x += delta;
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <group position={[0, 0, 0]} ref={groupRef}>
        <axesHelper args={[5]} />
        <mesh
          ref={boxRef}
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(0),
          ]}
        >
          <boxGeometry />
          <meshStandardMaterial color={'red'} />
        </mesh>
        <mesh
          ref={boxRef}
          position={[0, 2, 0]}
          scale={[1, 1, 1]}
          rotation={[
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(0),
          ]}
        >
          <boxGeometry />
          <meshStandardMaterial color={'green'} />
        </mesh>
        <mesh
          ref={boxRef}
          position={[2, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(0),
            Three.MathUtils.degToRad(0),
          ]}
        >
          <axesHelper args={[3]} />
          <boxGeometry />
          <meshStandardMaterial color={'blue'} />
        </mesh>
      </group>
    </>
  );
};

export default ThreeElement;
