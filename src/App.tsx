import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import LightTest from './LightTest';
import MaterialTest from './MaterialTest';

function App() {
  return (
    <>
      <Canvas
        // orthographic
        camera={{
          // near: 1,
          // far: 100,
          // fov: 75,
          position: [5, 5, 5],
        }}
      >
        {/* Math.PI = 180 */}
        <color attach="background" args={['black']} />
        <OrbitControls
        // minAzimuthAngle={-Math.PI / 4}
        // maxAzimuthAngle={Math.PI / 4}
        />
        {/* <axesHelper args={[6]} /> */}
        {/* <gridHelper args={[10, 10]} /> */}
        {/* <MaterialTest /> */}
        <LightTest />
      </Canvas>
    </>
  );
}

export default App;
