import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Float,
  MeshDistortMaterial,
  Sparkles,
  Environment,
} from '@react-three/drei'
import * as THREE from 'three'

function MorphShape() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.3
    meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.15
    const target = hovered ? 1.2 : 1
    meshRef.current.scale.lerp(
      new THREE.Vector3(target, target, target),
      0.1,
    )
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <MeshDistortMaterial
          color="#0a0a18"
          metalness={0.95}
          roughness={0.18}
          distort={0.42}
          speed={2}
          envMapIntensity={1.6}
        />
      </mesh>
    </Float>
  )
}

function WireShell() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = -t * 0.18
    ref.current.rotation.x = t * 0.1
  })
  return (
    <mesh ref={ref} scale={1.08}>
      <torusKnotGeometry args={[1, 0.32, 80, 16]} />
      <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.4} />
    </mesh>
  )
}

export default function ShowcaseScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      shadows
    >
      <color attach="background" args={['#050505']} />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        color="#00d4ff"
        castShadow
      />
      <directionalLight
        position={[-5, -3, 3]}
        intensity={1.0}
        color="#7c3aed"
      />
      <pointLight position={[0, 0, 3]} intensity={1.2} color="#ffffff" />

      <MorphShape />
      <WireShell />
      <Sparkles
        count={120}
        scale={[8, 8, 8]}
        size={2}
        speed={0.4}
        color="#00d4ff"
      />

      <Environment preset="night" />

      <OrbitControls
        enablePan={false}
        enableZoom
        minDistance={2.8}
        maxDistance={7}
        autoRotate
        autoRotateSpeed={0.6}
        makeDefault
      />
    </Canvas>
  )
}
