import { useHelper, useTexture, Environment } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as Three from 'three';

const LightTest = () => {
  const meshRef = useRef<Three.Mesh>(null);
  const groupRef = useRef<Three.Group>(null);
  const dLight = useRef<Three.DirectionalLight>(null!);
  const sLight = useRef<Three.SpotLight>(null!);

  useHelper(dLight, Three.DirectionalLightHelper);
  useHelper(sLight, Three.SpotLightHelper);
  const matcap = useTexture('./asd.jpeg');
  useFrame((state, delta) => {});

  useEffect(() => {
    const len = groupRef.current.children.length;
    for (let i = 0; i < len; i++) {
      const mesh = groupRef.current.children[i] as Three.Mesh;
      mesh.geometry = meshRef.current.geometry;
      mesh.position.x = (i % (len / 2)) * 2 - 2;
      mesh.position.z = 0;
      if (i >= len / 2) {
        mesh.position.z = 2;
      }
    }
  }, []);

  return (
    <>
      {/* <ambientLight color={'blue'} intensity={0.5} /> */}
      {/* <hemisphereLight args={['blue', 'yellow', 5]} /> */}
      {/* <directionalLight
        position={[0, 5, 0]}
        intensity={5}
        ref={dLight}
        target-position={[0, 0, 2]}
      /> */}
      {/* <pointLight
        color={'white'}
        position={[0, 0, 2]}
        intensity={10}
        distance={5}
      /> */}
      {/* <spotLight
        color={'white'}
        position={[0, 5, 0]}
        intensity={300}
        distance={50}
        ref={sLight}
        angle={Three.MathUtils.degToRad(30)}
      /> */}
      <Environment files={'./hdr.hdr'} background blur={0.1} />
      <mesh rotation-x={[Three.MathUtils.degToRad(-90)]} position-y={-1}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color={'#020059'} side={Three.DoubleSide} />
      </mesh>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2]} />
        <meshBasicMaterial color={'green'} visible={false} />
      </mesh>
      <group ref={groupRef}>
        <mesh>
          <meshLambertMaterial
            color={'red'}
            visible={true}
            transparent={true}
            opacity={1}
            side={Three.FrontSide}
            alphaTest={0.5}
            depthTest={true}
            depthWrite={true}
            emissive={'black'}
          />
        </mesh>
        <mesh>
          <meshPhongMaterial
            color={'red'}
            visible={true}
            transparent={true}
            opacity={1}
            side={Three.FrontSide}
            alphaTest={0.5}
            depthTest={true}
            depthWrite={true}
            emissive={'black'}
            specular={'#fff'}
            shininess={30}
            flatShading={true}
          />
        </mesh>
        <mesh>
          <meshStandardMaterial
            color={'red'}
            visible={true}
            transparent={true}
            opacity={1}
            side={Three.FrontSide}
            alphaTest={0.5}
            depthTest={true}
            depthWrite={true}
            emissive={'black'}
            flatShading={true}
            roughness={1}
            metalness={0.5}
          />
        </mesh>
        <mesh>
          <meshPhysicalMaterial
            color={'#fff'}
            visible={true}
            transparent={true}
            opacity={1}
            side={Three.FrontSide}
            alphaTest={0.5}
            depthTest={true}
            depthWrite={true}
            emissive={'black'}
            flatShading={true}
            roughness={0}
            metalness={0}
            clearcoat={0}
            clearcoatRoughness={0}
            transmission={1}
            thickness={0.5}
            ior={2.33}
          />
        </mesh>
        <mesh>
          <meshToonMaterial />
        </mesh>
      </group>
    </>
  );
};

export default LightTest;
