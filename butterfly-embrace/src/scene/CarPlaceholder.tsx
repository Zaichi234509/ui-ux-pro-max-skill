import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Edges, Text } from '@react-three/drei'
import * as THREE from 'three'

export default function CarPlaceholder() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      // Add subtle glow pulse
      const material = meshRef.current.material as THREE.MeshStandardMaterial
      const time = state.clock.getElapsedTime()
      material.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.2
    }
  })

  return (
    <group position={[0, -0.5, 0]}>
      {/* Stand-in for the car */}
      <Box args={[4.5, 1.2, 2]} ref={meshRef}>
        <meshStandardMaterial 
          color="#0a0a0a" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#d9423e"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
        <Edges
          linewidth={2}
          threshold={15}
          color="#d9423e"
        />
      </Box>
      
      {/* Decorative text on placeholder */}
      <Text
        position={[0, 0, 1.01]}
        fontSize={0.2}
        color="#c39a58"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/cinzel/v11/8vII7wQbxzz1FT9wS_1zD-W5.woff"
      >
        GLB CAR MODEL HERE
      </Text>
      <Text
        position={[0, -0.3, 1.01]}
        fontSize={0.08}
        color="#ffffff"
        fillOpacity={0.5}
        anchorX="center"
        anchorY="middle"
      >
        FERRARI "BUTTERFLY EMBRACE"
      </Text>
    </group>
  )
}
