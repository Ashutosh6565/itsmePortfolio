import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

const AnimatedCore = () => {
  const groupRef = useRef(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.18
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.18
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.6} rotationIntensity={0.55} floatIntensity={0.75}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.9, 4]} />
          <MeshDistortMaterial
            color="#67e8f9"
            emissive="#312e81"
            emissiveIntensity={0.34}
            roughness={0.26}
            metalness={0.62}
            distort={0.36}
            speed={1.9}
          />
        </mesh>
      </Float>
      <mesh position={[-2.2, -1.35, -0.9]} rotation={[0.8, 0.1, 0.4]}>
        <torusGeometry args={[0.72, 0.07, 16, 90]} />
        <meshStandardMaterial color="#f59e0b" emissive="#92400e" emissiveIntensity={0.18} metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[2.25, 1.18, -0.7]} rotation={[0.2, 0.7, 0.9]}>
        <octahedronGeometry args={[0.58, 0]} />
        <meshStandardMaterial color="#a78bfa" emissive="#5b21b6" emissiveIntensity={0.26} metalness={0.44} roughness={0.28} />
      </mesh>
    </group>
  )
}

const HeroScene = () => (
  <div className="hero-scene" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 7], fov: 48 }} dpr={[1, 1.7]}>
      <ambientLight intensity={0.9} />
      <pointLight position={[4, 4, 4]} intensity={1.4} color="#67e8f9" />
      <pointLight position={[-4, -2, 3]} intensity={0.85} color="#f59e0b" />
      <AnimatedCore />
      <Sparkles count={54} scale={[7, 5, 4]} size={1.35} speed={0.42} color="#ffffff" />
    </Canvas>
  </div>
)

export default HeroScene
