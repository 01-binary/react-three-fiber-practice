import { Canvas } from '@react-three/fiber';
import ThreeElement from './ThreeElement';

function App() {
  return (
    <>
      <Canvas
        // orthographic
        camera={{
          near: 1,
          far: 20,
          fov: 75,
          position: [0, 5, 5],
        }}
      >
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
