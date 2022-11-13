import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import MoonModel from "./MoonModel";
import RocketModel from "./RocketModel";

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress}% Loaded</Html>
}

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} color='black' />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <MoonModel />
      </Suspense>
      <RocketModel />
    </Canvas>
  )
}

export default Scene;