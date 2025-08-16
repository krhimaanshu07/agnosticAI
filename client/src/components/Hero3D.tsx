// SVG-based 3D medical scanner visualization

export default function Hero3D() {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-background via-muted/20 to-background" data-testid="hero-3d">
      {/* 3D Medical Gantry Scanner SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="animate-gantry-rotate"
            style={{
              filter: "drop-shadow(0 0 20px rgba(0, 229, 255, 0.3))"
            }}
          >
            {/* Outer gantry ring */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="#00E5FF"
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
              stroke="#7C4DFF"
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
                fill="currentColor"
                rx="5"
                opacity="0.9"
                className="text-foreground"
              />
              
              {/* Bottom detector */}
              <rect
                x="185"
                y="320"
                width="30"
                height="40"
                fill="currentColor"
                rx="5"
                opacity="0.9"
                className="text-foreground"
              />
              
              {/* Side detectors */}
              <rect
                x="40"
                y="185"
                width="40"
                height="30"
                fill="currentColor"
                rx="5"
                opacity="0.7"
                className="text-foreground"
              />
              <rect
                x="320"
                y="185"
                width="40"
                height="30"
                fill="currentColor"
                rx="5"
                opacity="0.7"
                className="text-foreground"
              />
            </g>
            
            {/* Scanning beams */}
            <g className="animate-scan-beam">
              <line
                x1="200"
                y1="80"
                x2="200"
                y2="320"
                stroke="#00E5FF"
                strokeWidth="2"
                opacity="0.4"
              />
              <line
                x1="80"
                y1="200"
                x2="320"
                y2="200"
                stroke="#7C4DFF"
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
              fill="currentColor"
              rx="10"
              opacity="0.6"
              className="text-muted-foreground"
            />
            
            {/* Center focal point */}
            <circle
              cx="200"
              cy="200"
              r="8"
              fill="#00E5FF"
              opacity="0.8"
              className="animate-pulse"
            />
            
            {/* Floating medical data points */}
            <g className="animate-float">
              <circle cx="120" cy="120" r="3" fill="#00E5FF" opacity="0.6" />
              <circle cx="280" cy="120" r="3" fill="#7C4DFF" opacity="0.6" />
              <circle cx="120" cy="280" r="3" fill="#7C4DFF" opacity="0.6" />
              <circle cx="280" cy="280" r="3" fill="#00E5FF" opacity="0.6" />
            </g>
            
            {/* Technical annotations */}
            <text
              x="200"
              y="30"
              textAnchor="middle"
              fill="currentColor"
              fontSize="12"
              fontFamily="monospace"
              opacity="0.7"
              className="text-muted-foreground"
            >
              CT GANTRY
            </text>
            
            <text
              x="200"
              y="385"
              textAnchor="middle"
              fill="currentColor"
              fontSize="10"
              fontFamily="monospace"
              opacity="0.5"
              className="text-muted-foreground"
            >
              AI ENHANCEMENT ACTIVE
            </text>
          </svg>
        </div>
      </div>
      
      {/* Medical grid overlay */}
      <div className="absolute inset-0 medical-grid opacity-10" />
      
      {/* Overlay scanlines effect */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20" />
    </div>
  );
}