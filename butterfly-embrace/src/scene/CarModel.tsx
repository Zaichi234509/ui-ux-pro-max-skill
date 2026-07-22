import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    geometry_0: THREE.Mesh
  }
  materials: any
  animations: any[]
}

export function Model(props: any) {
  const { nodes } = useGLTF('/ferrari.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null} position={[0, -1.2, 0]} scale={1.5} rotation={[0, -Math.PI / 4, 0]}>
      <mesh geometry={nodes.geometry_0.geometry}>
        <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/ferrari.glb')
