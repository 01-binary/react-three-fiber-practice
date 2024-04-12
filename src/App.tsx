import { Canvas } from '@react-three/fiber';
import ThreeElement from './ThreeElement';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';

function App() {
  return (
    <>
      <Canvas
        // orthographic
        camera={{
          near: 1,
          far: 100,
          fov: 75,
          position: [5, 5, 5],
        }}
      >
        {/* Math.PI = 180 */}
        <color attach="background" args={['white']} />
        <OrbitControls
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
        />
        <axesHelper args={[6]} />
        <gridHelper args={[10, 10]} />
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
