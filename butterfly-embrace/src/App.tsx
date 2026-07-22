import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import Experience from './scene/Experience'
import Overlay from './components/Overlay'
import LoadingScreen from './components/LoadingScreen'
import Cursor from './components/Cursor'
import { useAppStore } from './store'

function App() {
  const { started } = useAppStore()

  useEffect(() => {
    // Disable right click for premium feel
    const handleContextMenu = (e: MouseEvent) => e.preventDefault()
    document.addEventListener('contextmenu', handleContextMenu)
    return () => document.removeEventListener('contextmenu', handleContextMenu)
  }, [])

  return (
    <div className="w-full h-full bg-black">
      <LoadingScreen />
      <Cursor />
      
      {started && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Overlay />
        </div>
      )}

      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 2, 10], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 30]} />
        
        <Suspense fallback={null}>
          <Experience />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
