'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function CodeSnippet({ position, code, color }: { position: [number, number, number], code: string, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 1, 0.1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.2}
        color="#64FFDA"
        anchorX="center"
        anchorY="middle"
      >
        {code}
      </Text>
    </mesh>
  )
}

function FloatingSpheres() {
  const spheres = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (spheres.current) {
      spheres.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={spheres}>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="#64FFDA" emissive="#64FFDA" emissiveIntensity={0.5} />
          </mesh>
        )
      })}
    </group>
  )
}

export default function FloatingCode() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#64FFDA" />
        
        <CodeSnippet position={[-1, 1, 0]} code="React" color="#61DAFB" />
        <CodeSnippet position={[1, 0, 0]} code="Next.js" color="#000000" />
        <CodeSnippet position={[-1, -1, 0]} code="TS" color="#3178C6" />
        
        <FloatingSpheres />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

