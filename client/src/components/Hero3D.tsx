// Temporarily disabled all Three.js functionality due to WebGL context issues
// import { useRef, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";

// Temporarily disabled for debugging
// function FloatingParticles() {
//   const particlesRef = useRef<THREE.Group>(null);
//   
//   const particles = useMemo(() => {
//     const temp = [];
//     for (let i = 0; i < 50; i++) {
//       temp.push({
//         position: [
//           (Math.random() - 0.5) * 10,
//           (Math.random() - 0.5) * 10,
//           (Math.random() - 0.5) * 10,
//         ],
//         scale: Math.random() * 0.1 + 0.05,
//         color: Math.random() > 0.5 ? "#00E5FF" : "#7C4DFF",
//       });
//     }
//     return temp;
//   }, []);

//   useFrame((state) => {
//     if (particlesRef.current) {
//       particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
//     }
//   });

//   return (
//     <group ref={particlesRef}>
//       {particles.map((particle, index) => (
//         <mesh key={index} position={particle.position as [number, number, number]}>
//           <sphereGeometry args={[particle.scale, 8, 8]} />
//           <meshBasicMaterial color={particle.color} transparent opacity={0.6} />
//         </mesh>
//       ))}
//     </group>
//   );
// }

export default function Hero3D() {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-black via-zinc-900 to-black" data-testid="hero-3d">
      {/* Fallback gradient background with animated elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 border-2 border-primary/30 rounded-full animate-spin animate-pulse">
          <div className="w-48 h-48 m-8 border border-secondary/50 rounded-full animate-ping">
            <div className="w-32 h-32 m-8 bg-gradient-medical rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>
      
      {/* Overlay scanlines effect */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
    </div>
  );
}
