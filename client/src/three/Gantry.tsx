import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cylinder, Torus } from "@react-three/drei";
import * as THREE from "three";

export default function Gantry() {
  const gantryRef = useRef<THREE.Group>(null);
  const scanBeamRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gantryRef.current) {
      gantryRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      gantryRef.current.rotation.x = Math.PI / 12; // 15-degree tilt
    }
    
    if (scanBeamRef.current) {
      const time = state.clock.elapsedTime;
      scanBeamRef.current.rotation.z = time * 2;
      
      // Pulsing effect for scan beams
      const opacity = 0.3 + Math.sin(time * 3) * 0.5;
      scanBeamRef.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.Material) {
          (child.material as any).opacity = Math.max(0.1, opacity);
        }
      });
    }
  });

  return (
    <group ref={gantryRef} data-testid="gantry-group">
      {/* Outer gantry ring */}
      <Torus args={[2.5, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#00E5FF" 
          emissive="#00E5FF" 
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Torus>
      
      {/* Inner gantry ring */}
      <Torus args={[1.8, 0.03, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#7C4DFF" 
          emissive="#7C4DFF" 
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </Torus>
      
      {/* Support structures */}
      <group>
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, index) => (
          <group key={index} rotation={[0, 0, angle]}>
            <Cylinder args={[0.02, 0.02, 1.4]} position={[2.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <meshStandardMaterial 
                color="#444"
                metalness={0.7}
                roughness={0.3}
              />
            </Cylinder>
          </group>
        ))}
      </group>
      
      {/* Scan beams */}
      <group ref={scanBeamRef}>
        {/* Primary scan beam */}
        <Cylinder args={[0.01, 0.01, 3]} position={[0, 0, 0]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <meshBasicMaterial 
            color="#00E5FF"
            transparent
            opacity={0.7}
          />
        </Cylinder>
        
        {/* Secondary scan beams */}
        <Cylinder args={[0.008, 0.008, 2.5]} position={[0, 0, 0]} rotation={[Math.PI / 2, (3 * Math.PI) / 4, 0]}>
          <meshBasicMaterial 
            color="#00E5FF"
            transparent
            opacity={0.5}
          />
        </Cylinder>
        
        <Cylinder args={[0.008, 0.008, 2.5]} position={[0, 0, 0]} rotation={[Math.PI / 2, (5 * Math.PI) / 4, 0]}>
          <meshBasicMaterial 
            color="#7C4DFF"
            transparent
            opacity={0.4}
          />
        </Cylinder>
      </group>
    </group>
  );
}
