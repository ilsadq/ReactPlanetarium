import { Suspense, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";

const RocketModel = () => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, 'rocket/scene.gltf');

  useFrame(() => {
    ref.current.rotation.z -= 0.005;
  })

  return (
    <mesh position={[1.3, 0.5, 3]} scale={0.1} rotation={[1, 5, 0]} ref={ref}>
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
    </mesh>
  )
}

export default RocketModel;