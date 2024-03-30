import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as Three from 'three';

const ThreeElement = () => {
  const boxRef = useRef<Three.Mesh>(null);
  const { size, gl, scene, camera } = useThree();

  useFrame((state, delta) => {
    boxRef.current!.rotation.x += delta;
    // boxRef.current!.position.y -= 0.01;
    // boxRef.current!.scale.z += 0.01;

    // console.log(boxRef.current);
    // console.log(state, delta);
  });

  console.log(size);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        ref={boxRef}
        rotation={[
          Three.MathUtils.degToRad(45),
          Three.MathUtils.degToRad(45),
          0,
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial color={'red'} />
      </mesh>
    </>
  );
};

export default ThreeElement;
