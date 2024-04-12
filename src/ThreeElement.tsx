import { useThree, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';
import * as Three from 'three';

const ThreeElement = () => {
  useFrame((state, delta) => {
  
  });

  useEffect(() => {
  }, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh  position={[0, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>

    </>
  );
};

export default ThreeElement;
