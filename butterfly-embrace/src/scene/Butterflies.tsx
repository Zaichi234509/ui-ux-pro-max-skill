import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Butterflies() {
  const count = 30
  const meshRef = useRef<THREE.InstancedMesh>(null)
  
  // Create simple butterfly shape (two intersecting planes)
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(0.3, 0.3)
    return geo
  }, [])

  const material = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: '#d9423e',
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    })
  }, [])

  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  // Initial positions
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 15
      const y = Math.random() * 5 + 1
      const z = (Math.random() - 0.5) * 15
      const speed = 0.5 + Math.random() * 1.5
      const offset = Math.random() * Math.PI * 2
      temp.push({ x, y, z, speed, offset })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    
    particles.forEach((particle, i) => {
      const { x, y, z, speed, offset } = particle
      
      // Flutter movement
      const newX = x + Math.sin(time * speed + offset) * 0.5
      const newY = y + Math.cos(time * speed * 0.8 + offset) * 0.3
      const newZ = z + Math.sin(time * speed * 1.2 + offset) * 0.5
      
      dummy.position.set(newX, newY, newZ)
      
      // Flapping wings rotation
      dummy.rotation.x = Math.sin(time * speed * 10 + offset) * 0.5
      dummy.rotation.y = time * speed * 0.5
      dummy.rotation.z = Math.sin(time * speed * 15 + offset) * 0.2
      
      // Size pulse
      const scale = 0.5 + Math.sin(time * speed * 2 + offset) * 0.2
      dummy.scale.set(scale, scale, scale)
      
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })
    
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[geometry, material, count]}>
      <meshBasicMaterial color="#d9423e" transparent opacity={0.6} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
    </instancedMesh>
  )
}
