import { Canvas } from '@react-three/fiber';
import ThreeElement from './ThreeElement';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';

function App() {
  const color = useControls({
    value: 'green',
  });

  const grid = useControls({
    segment: { value: 10, min: 1, max: 100, step: 1 },
  });

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
        <color attach="background" args={[color.value]} />
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
        <axesHelper args={[6]} />
        <gridHelper args={[10, grid.segment, 'pink', 'black']} />
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
