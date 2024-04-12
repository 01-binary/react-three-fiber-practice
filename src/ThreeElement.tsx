import { useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as Three from "three";

const ThreeElement = () => {
  useFrame((state, delta) => {});

  useEffect(() => {}, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial wireframe color={"red"} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial
          color={"red"}
          visible={true}
          transparent={true}
          opacity={1}
          side={Three.FrontSide}
          alphaTest={0.5}
          depthTest={true}
          depthWrite={true}
        />
      </mesh>
      <mesh position={[4, 0, 0]}>
        <boxGeometry />
        <meshLambertMaterial
          color={"red"}
          visible={true}
          transparent={true}
          opacity={1}
          side={Three.FrontSide}
          alphaTest={0.5}
          depthTest={true}
          depthWrite={true}
          emissive={"blue"}
        />
      </mesh>
    </>
  );
};

export default ThreeElement;
