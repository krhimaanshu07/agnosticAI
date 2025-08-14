import { useState, useRef, useCallback } from "react";
import { useGlobalStore } from "@/store/useGlobalStore";

interface CompareSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  modality: string;
  controls?: boolean;
  className?: string;
}

export default function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  modality,
  controls = true,
  className = "",
}: CompareSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [windowLevel, setWindowLevel] = useState(50);
  const [windowWidth, setWindowWidth] = useState(70);
  const [isInverted, setIsInverted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { srStrength, setSrStrength } = useGlobalStore();

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      setSliderPosition(percentage);
    },
    [isDragging]
  );

  const handleTouchStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const percentage = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
      setSliderPosition(percentage);
    },
    [isDragging]
  );

  const reset = () => {
    setSliderPosition(50);
    setWindowLevel(50);
    setWindowWidth(70);
    setIsInverted(false);
    setSrStrength(85);
  };

  return (
    <div className={`w-full ${className}`} data-testid={`compare-slider-${modality.toLowerCase()}`}>
      <div
        ref={containerRef}
        className="compare-container relative cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Before image */}
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className={`absolute inset-0 w-full h-full object-cover select-none ${
            isInverted ? "filter invert" : ""
          }`}
          draggable={false}
          data-testid={`before-image-${modality.toLowerCase()}`}
        />

        {/* After image */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className={`absolute inset-0 w-full h-full object-cover select-none ${
            isInverted ? "filter invert" : ""
          }`}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          draggable={false}
          data-testid={`after-image-${modality.toLowerCase()}`}
        />

        {/* Slider */}
        <div
          className="compare-slider"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          data-testid={`slider-handle-${modality.toLowerCase()}`}
        >
          <div className="compare-handle" />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
          Original
        </div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
          Enhanced
        </div>
      </div>

      {/* Controls */}
      {controls && (
        <div className="mt-6">
          <div className="grid md:grid-cols-3 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Window Level
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={windowLevel}
                onChange={(e) => setWindowLevel(Number(e.target.value))}
                className="w-full accent-primary focus-visible"
                data-testid="window-level-slider"
              />
              <div className="text-xs text-zinc-400 font-mono mt-1">
                {windowLevel - 50} HU
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Window Width
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={windowWidth}
                onChange={(e) => setWindowWidth(Number(e.target.value))}
                className="w-full accent-primary focus-visible"
                data-testid="window-width-slider"
              />
              <div className="text-xs text-zinc-400 font-mono mt-1">
                {windowWidth * 20} HU
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                SR Strength
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={srStrength}
                onChange={(e) => setSrStrength(Number(e.target.value))}
                className="w-full accent-primary focus-visible"
                data-testid="sr-strength-slider"
              />
              <div className="text-xs text-zinc-400 font-mono mt-1">
                {srStrength}%
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={reset}
              className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors focus-visible"
              data-testid="reset-button"
            >
              <i className="fas fa-undo mr-2"></i>Reset
            </button>

            <button
              onClick={() => setIsInverted(!isInverted)}
              className={`px-4 py-2 rounded-lg transition-colors focus-visible ${
                isInverted
                  ? "bg-primary text-primary-foreground"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
              data-testid="invert-button"
            >
              <i className="fas fa-adjust mr-2"></i>
              {isInverted ? "Normal" : "Invert"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
