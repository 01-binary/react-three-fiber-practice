import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as Three from 'three';
import { useControls } from 'leva';

const ThreeElement = () => {
  const boxRef = useRef<Three.Mesh>(null);
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
  });

  console.log(size);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        ref={boxRef}
        rotation={[
          Three.MathUtils.degToRad(45),
          Three.MathUtils.degToRad(box.rotation),
          0,
        ]}
      >
        <boxGeometry />
        {/* <sphereGeometry /> */}
        <meshStandardMaterial color={'red'} />
      </mesh>
    </>
  );
};

export default ThreeElement;
