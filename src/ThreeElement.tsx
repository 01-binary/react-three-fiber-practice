import { useThree, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';
import * as Three from 'three';

const ThreeElement = () => {
  const { size, gl, scene, camera } = useThree();
  const boxRef = useRef<Three.Mesh>(null);
  const boxCopyRef = useRef<Three.Mesh>(null);
  const boxControl = useControls({
    width: { value: 1, min: 0.1, max: 10, step: 0.1 },
  });
  useFrame((state, delta) => {
    // boxRef.current!.rotation.x += delta;
    // boxRef.current!.position.y -= 0.01;
    // boxRef.current!.scale.z += 0.01;
    // console.log(boxRef.current);
    // console.log(state, delta);
  });

  useEffect(() => {
    boxCopyRef.current.geometry = boxRef.current?.geometry;
  }, [boxControl.width]);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <boxGeometry args={[boxControl.width, 2, 2, 2, 2, 2]} />
        <meshStandardMaterial wireframe />
      </mesh>

      <mesh ref={boxCopyRef}>
        <meshStandardMaterial color={'red'} />
      </mesh>
    </>
  );
};

export default ThreeElement;
