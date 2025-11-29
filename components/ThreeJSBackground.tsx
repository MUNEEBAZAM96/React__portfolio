'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particle({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial
        color="#64FFDA"
        emissive="#64FFDA"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

export default function ThreeJSBackground() {
  const particles = Array.from({ length: 50 }, () => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ] as [number, number, number],
  }))

  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        {particles.map((particle, i) => (
          <Particle key={i} position={particle.position} />
        ))}
      </Canvas>
    </div>
  )
}

