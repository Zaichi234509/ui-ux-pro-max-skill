import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

export default function EnvironmentSetup() {
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    if (lightRef.current) {
      const time = state.clock.getElapsedTime()
      lightRef.current.position.x = Math.sin(time * 0.5) * 5
      lightRef.current.position.z = Math.cos(time * 0.3) * 5
      lightRef.current.intensity = 20 + Math.sin(time * 2) * 5
    }
  })

  return (
    <>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 5, 20]} />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} color="#ffffff" />
      
      {/* Hu Tao red/orange main lighting */}
      <spotLight
        position={[5, 10, 5]}
        angle={0.5}
        penumbra={1}
        intensity={50}
        color="#d9423e"
        castShadow
      />
      <spotLight
        position={[-5, 8, -5]}
        angle={0.8}
        penumbra={1}
        intensity={30}
        color="#c39a58"
      />
      
      {/* Dynamic roaming light */}
      <pointLight ref={lightRef} color="#d9423e" distance={10} intensity={20} />

      {/* Environment map for reflections */}
      <Environment preset="studio" environmentIntensity={0.5} />
      
      {/* Ash/Embers in the air */}
      <Sparkles count={150} scale={15} size={1.5} speed={0.4} opacity={0.3} color="#d9423e" />
      <Sparkles count={50} scale={10} size={2} speed={0.2} opacity={0.2} color="#c39a58" />
    </>
  )
}
