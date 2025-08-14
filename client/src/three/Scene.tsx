import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Loader } from "@react-three/drei";
import Gantry from "./Gantry";

interface SceneProps {
  className?: string;
}

export default function Scene({ className }: SceneProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
          camera={{ position: [0, 0, 6], fov: 50 }}
          className="w-full h-full bg-transparent"
        >
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={1}
          />
          
          <Environment preset="city" />
          
          {/* Enhanced lighting setup */}
          <ambientLight intensity={0.1} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.5}
            color="#00E5FF"
            castShadow
          />
          <pointLight
            position={[-10, -10, -5]}
            intensity={0.3}
            color="#7C4DFF"
          />
          <spotLight
            position={[0, 15, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            color="#ffffff"
            castShadow
          />
          
          <Gantry />
          
          <fog attach="fog" args={["#000000", 5, 15]} />
        </Canvas>
      </Suspense>
    </div>
  );
}
