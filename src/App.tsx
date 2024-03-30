import { Canvas } from '@react-three/fiber';
import ThreeElement from './ThreeElement';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas
        // orthographic
        camera={{
          // near: 1,
          // far: 20,
          fov: 75,
          position: [0, 5, 5],
        }}
      >
        {/* Math.PI = 180 */}
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
        <axesHelper args={[6]} />
        <gridHelper args={[10, 10, 'pink', 'black']} />
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
