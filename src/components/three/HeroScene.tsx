import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

function Icosahedron() {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.25
    groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.2
    if (wireRef.current) {
      wireRef.current.rotation.x = -t * 0.2
      wireRef.current.rotation.z = t * 0.15
    }
  })

  return (
    <group ref={groupRef} scale={1.6}>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh ref={innerRef} castShadow receiveShadow>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#0a0a18"
            metalness={0.95}
            roughness={0.15}
            distort={0.32}
            speed={1.6}
            envMapIntensity={1.4}
          />
        </mesh>
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[1.08, 1]} />
          <meshBasicMaterial
            color="#00d4ff"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>
    </group>
  )
}

function Particles({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      sz[i] = Math.random() * 0.04 + 0.01
    }
    return [pos, sz]
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#7c3aed"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  )
}

function OrbitingRings() {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const ring3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3
      ring1.current.rotation.y = t * 0.2
    }
    if (ring2.current) {
      ring2.current.rotation.x = t * -0.25
      ring2.current.rotation.z = t * 0.15
    }
    if (ring3.current) {
      ring3.current.rotation.y = t * -0.2
      ring3.current.rotation.z = t * -0.3
    }
  })

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[2.3, 0.008, 16, 200]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[2.7, 0.006, 16, 200]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[3.1, 0.004, 16, 200]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 8, 18]} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#00d4ff" />
      <directionalLight position={[-5, -3, 3]} intensity={0.8} color="#7c3aed" />
      <pointLight position={[0, 0, 3]} intensity={1.2} color="#ffffff" />

      <Icosahedron />
      <OrbitingRings />
      <Particles />

      <Environment preset="city" />
    </Canvas>
  )
}
