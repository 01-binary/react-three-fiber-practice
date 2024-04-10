import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as Three from 'three';
import { useControls } from 'leva';
import { Box, Cone, Sphere } from '@react-three/drei';

const ThreeElement = () => {
  const boxRef = useRef<Three.Mesh>(null);
  const { size, gl, scene, camera } = useThree();

  useFrame((state, delta) => {
    // boxRef.current!.rotation.x += delta;
    // boxRef.current!.position.y -= 0.01;
    // boxRef.current!.scale.z += 0.01;
    // console.log(boxRef.current);
    // console.log(state, delta);
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <Sphere position={[2, 0, 0]}></Sphere>
      <Cone></Cone>
      <Box position={[-2, 0, 0]}>
        <meshStandardMaterial color={'red'} />
      </Box>
      {/* <mesh ref={boxRef} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={'red'} />
      </mesh> */}
    </>
  );
};

export default ThreeElement;
