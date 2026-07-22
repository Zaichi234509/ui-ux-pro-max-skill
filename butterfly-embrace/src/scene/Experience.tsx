import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, PresentationControls, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import CarPlaceholder from './CarPlaceholder'
import EnvironmentSetup from './EnvironmentSetup'
import Butterflies from './Butterflies'
import { useAppStore } from '../store'

export default function Experience() {
  const groupRef = useRef<THREE.Group>(null)
  const { started } = useAppStore()

  useEffect(() => {
    if (started && groupRef.current) {
      // Entrance animation
      gsap.fromTo(
        groupRef.current.position,
        { y: -5, z: -10 },
        { y: 0, z: 0, duration: 2.5, ease: 'power3.out' }
      )
      gsap.fromTo(
        groupRef.current.rotation,
        { y: Math.PI * 0.5 },
        { y: -Math.PI * 0.1, duration: 3, ease: 'power2.out' }
      )
    }
  }, [started])

  useFrame((state) => {
    if (!started) return
    // Gentle floating based on mouse position
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.pointer.x * Math.PI) / 10 - Math.PI * 0.1,
        0.05
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (state.pointer.y * Math.PI) / 20,
        0.05
      )
    }
  })

  return (
    <>
      <EnvironmentSetup />
      
      <PresentationControls
        global
        snap
        rotation={[0, -Math.PI * 0.1, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <group ref={groupRef}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <CarPlaceholder />
          </Float>
          <ContactShadows position={[0, -1.4, 0]} opacity={0.7} scale={10} blur={2.5} far={4} color="#d9423e" />
        </group>
      </PresentationControls>

      <Butterflies />
    </>
  )
}
