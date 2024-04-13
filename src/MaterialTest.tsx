import { useTexture } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';
import * as Three from 'three';

const MaterialTest = () => {
  const meshRef = useRef<Three.Mesh>(null);
  const groupRef = useRef<Three.Group>(null);

  const controls = useControls({
    thickness: { value: 1, min: 0, max: 10, step: 0.1 },
  });
  const matcap = useTexture('./asd.jpeg');
  useFrame((state, delta) => {});

  useEffect(() => {
    const len = groupRef.current.children.length;
    for (let i = 0; i < len; i++) {
      const mesh = groupRef.current.children[i] as Three.Mesh;
      mesh.geometry = meshRef.current.geometry;
      mesh.position.x = (i % (len / 2)) * 2 - 4;
      mesh.position.z = 0;
      if (i >= len / 2) {
        mesh.position.z = 2;
      }
    }
  }, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2]} />
        <meshBasicMaterial color={'green'} visible={false} />
      </mesh>
      <group ref={groupRef}>
        <mesh>
          <meshBasicMaterial color="green" wireframe />
        </mesh>
        <mesh>
          <meshBasicMaterial
            color={'red'}
            visible={true}
            transparent={true}
            opacity={1}
            side={Three.FrontSide}
            alphaTest={0.5}
            depthTest={true}
            depthWrite={true}
          />
        </mesh>
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
          <meshNormalMaterial />
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
            thickness={controls.thickness}
            ior={2.33}
          />
        </mesh>
        <mesh>
          <meshDepthMaterial />
        </mesh>
        <mesh>
          <meshMatcapMaterial matcap={matcap} />
        </mesh>
        <mesh>
          <meshToonMaterial />
        </mesh>
      </group>
    </>
  );
};

export default MaterialTest;
