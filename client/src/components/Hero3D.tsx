import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Bloom, EffectComposer } from "@react-three/drei";
import * as THREE from "three";
import Gantry from "@/three/Gantry";

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={60} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false}
        autoRotate 
        autoRotateSpeed={0.5} 
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00E5FF" />
      <pointLight position={[-10, -10, 10]} intensity={0.3} color="#7C4DFF" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#00E5FF"
        castShadow
      />
      
      <Gantry />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ],
        scale: Math.random() * 0.1 + 0.05,
        color: Math.random() > 0.5 ? "#00E5FF" : "#7C4DFF",
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position as [number, number, number]}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshBasicMaterial color={particle.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full relative" data-testid="hero-3d">
      <Canvas
        shadows
        gl={{ antialias: true }}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
      
      {/* Overlay scanlines effect */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
    </div>
  );
}
