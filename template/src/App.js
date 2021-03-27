import { VRCanvas } from '@react-three/xr'

function App() {
  return (
    <VRCanvas>
      <mesh>
        <sphereBufferGeometry args={[2,16,16]} />
        <meshBasicMaterial color={"white"} wireframe={true} />
      </mesh>
    </VRCanvas>
  );
}

export default App;
