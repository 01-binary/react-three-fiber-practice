import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ShowRoom from '@components/three/ShowRoom';

const Home = () => {
  return (
    <>
      <Canvas>
        <axesHelper args={[5]} />
        <gridHelper />
        <OrbitControls />
        <directionalLight position={[3, 3, 3]} />
        <ShowRoom />
      </Canvas>
    </>
  );
};

export default Home;
