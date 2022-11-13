import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";


const MoonModel = () => {
  const ref = useRef();
  const [moon] = useLoader(TextureLoader, ['moon/lroc_color_poles_4k.jpg'])

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  })

  return (
    <mesh position={[0, 0, 0]} ref={ref} scale={2.5}>
      <sphereGeometry attach="geometry" args={[1, 42, 42]} />
      <meshStandardMaterial map={moon} />
    </mesh>
  )
}

export default MoonModel;