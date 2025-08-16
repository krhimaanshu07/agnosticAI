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
    <div className="w-full h-full relative bg-gradient-to-br from-background via-muted/20 to-background" data-testid="hero-3d">
      {/* 3D Medical Gantry Scanner SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="animate-gantry-rotate drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))"
          }}
        >
          {/* Outer gantry ring */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            opacity="0.8"
            className="animate-pulse"
          />
          
          {/* Inner gantry ring */}
          <circle
            cx="200"
            cy="200"
            r="140"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="4"
            opacity="0.6"
          />
          
          {/* Gantry structure */}
          <g transform="rotate(0 200 200)">
            {/* Top detector */}
            <rect
              x="185"
              y="40"
              width="30"
              height="40"
              fill="hsl(var(--foreground))"
              rx="5"
              opacity="0.9"
            />
            
            {/* Bottom detector */}
            <rect
              x="185"
              y="320"
              width="30"
              height="40"
              fill="hsl(var(--foreground))"
              rx="5"
              opacity="0.9"
            />
            
            {/* Side detectors */}
            <rect
              x="40"
              y="185"
              width="40"
              height="30"
              fill="hsl(var(--foreground))"
              rx="5"
              opacity="0.7"
            />
            <rect
              x="320"
              y="185"
              width="40"
              height="30"
              fill="hsl(var(--foreground))"
              rx="5"
              opacity="0.7"
            />
          </g>
          
          {/* Scanning beams */}
          <g className="animate-scan-beam">
            <line
              x1="200"
              y1="80"
              x2="200"
              y2="320"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              opacity="0.4"
            />
            <line
              x1="80"
              y1="200"
              x2="320"
              y2="200"
              stroke="hsl(var(--secondary))"
              strokeWidth="2"
              opacity="0.4"
            />
          </g>
          
          {/* Patient table */}
          <rect
            x="170"
            y="190"
            width="60"
            height="20"
            fill="hsl(var(--muted-foreground))"
            rx="10"
            opacity="0.6"
          />
          
          {/* Center focal point */}
          <circle
            cx="200"
            cy="200"
            r="8"
            fill="hsl(var(--primary))"
            opacity="0.8"
            className="animate-pulse"
          />
          
          {/* Floating medical data points */}
          <g className="animate-float">
            <circle cx="120" cy="120" r="3" fill="hsl(var(--primary))" opacity="0.6" />
            <circle cx="280" cy="120" r="3" fill="hsl(var(--secondary))" opacity="0.6" />
            <circle cx="120" cy="280" r="3" fill="hsl(var(--secondary))" opacity="0.6" />
            <circle cx="280" cy="280" r="3" fill="hsl(var(--primary))" opacity="0.6" />
          </g>
          
          {/* Technical annotations */}
          <text
            x="200"
            y="30"
            textAnchor="middle"
            fill="hsl(var(--muted-foreground))"
            fontSize="12"
            fontFamily="monospace"
            opacity="0.7"
          >
            CT GANTRY
          </text>
          
          <text
            x="200"
            y="385"
            textAnchor="middle"
            fill="hsl(var(--muted-foreground))"
            fontSize="10"
            fontFamily="monospace"
            opacity="0.5"
          >
            AI ENHANCEMENT ACTIVE
          </text>
        </svg>
      </div>
      
      {/* Medical grid overlay */}
      <div className="absolute inset-0 medical-grid opacity-10" />
      
      {/* Overlay scanlines effect */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20" />
    </div>
  );
}
