import { Canvas } from '@react-three/fiber';
import ShowRoom from '@components/three/ShowRoom';

const Home = () => {
  return (
    <>
      <Canvas>
        <axesHelper args={[5]} />
        <gridHelper />
        <ShowRoom />
      </Canvas>
    </>
  );
};

export default Home;
