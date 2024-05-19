import * as THREE from 'three';

const ShowRoom = () => {
  return (
    <>
      <mesh
        rotation={[
          0,
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(45),
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default ShowRoom;
