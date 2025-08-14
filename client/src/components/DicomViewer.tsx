import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function DicomViewer() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [pixelValue, setPixelValue] = useState(-150);
  const [position, setPosition] = useState([256, 256]);
  const [scale, setScale] = useState("0.5 mm/px");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      const dicomFiles = files.filter(
        (file) =>
          file.name.endsWith(".dcm") ||
          file.name.endsWith(".dicom") ||
          file.type === "application/dicom"
      );

      if (dicomFiles.length > 0) {
        toast({
          title: "DICOM File Loaded",
          description: `Successfully loaded "${dicomFiles[0].name}". DICOM viewer would initialize here.`,
        });
        // TODO: Implement Cornerstone3D DICOM viewer initialization
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please upload DICOM (.dcm) files only.",
          variant: "destructive",
        });
      }
    },
    [toast]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        toast({
          title: "DICOM File Selected",
          description: `Selected "${file.name}". DICOM viewer would initialize here.`,
        });
        // TODO: Implement Cornerstone3D DICOM viewer initialization
      }
    },
    [toast]
  );

  const handleBrowseFiles = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto" data-testid="dicom-viewer">
      {/* Drop Zone */}
      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center mb-6 transition-colors ${
          isDragOver
            ? "border-primary bg-primary/10"
            : "border-zinc-600 hover:border-zinc-500"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-testid="dicom-drop-zone"
      >
        <i className="fas fa-cloud-upload-alt text-4xl text-zinc-400 mb-4"></i>
        <p className="text-zinc-300 mb-2">Drag and drop DICOM files here</p>
        <p className="text-zinc-500 text-sm mb-4">
          Supports .dcm files and simple series
        </p>
        <Button
          onClick={handleBrowseFiles}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          data-testid="browse-files-button"
        >
          Browse Files
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".dcm,.dicom,application/dicom"
          multiple
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      {/* DICOM Viewer Controls */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <Button
          variant="outline"
          className="bg-zinc-800 text-zinc-300 border-zinc-600 hover:bg-zinc-700"
          data-testid="zoom-in-button"
        >
          <i className="fas fa-search-plus mr-2"></i>Zoom In
        </Button>
        <Button
          variant="outline"
          className="bg-zinc-800 text-zinc-300 border-zinc-600 hover:bg-zinc-700"
          data-testid="zoom-out-button"
        >
          <i className="fas fa-search-minus mr-2"></i>Zoom Out
        </Button>
        <Button
          variant="outline"
          className="bg-zinc-800 text-zinc-300 border-zinc-600 hover:bg-zinc-700"
          data-testid="pan-button"
        >
          <i className="fas fa-hand-paper mr-2"></i>Pan
        </Button>
        <Button
          variant="outline"
          className="bg-zinc-800 text-zinc-300 border-zinc-600 hover:bg-zinc-700"
          data-testid="window-level-button"
        >
          <i className="fas fa-adjust mr-2"></i>W/L
        </Button>
        <Button
          variant="outline"
          className="bg-zinc-800 text-zinc-300 border-zinc-600 hover:bg-zinc-700"
          data-testid="reset-viewport-button"
        >
          <i className="fas fa-undo mr-2"></i>Reset
        </Button>
        <Button
          variant="outline"
          className="bg-zinc-800 text-zinc-300 border-zinc-600 hover:bg-zinc-700"
          data-testid="measure-button"
        >
          <i className="fas fa-ruler mr-2"></i>Measure
        </Button>
      </div>

      {/* Pixel Readout */}
      <div className="text-center text-zinc-400 font-mono text-sm" data-testid="pixel-readout">
        Pixel Value: <span className="text-primary">{pixelValue} HU</span> |{" "}
        Position: <span className="text-primary">{position.join(", ")}</span> |{" "}
        Scale: <span className="text-primary">{scale}</span>
      </div>

      {/* DICOM Viewport (placeholder) */}
      <div className="mt-6 h-96 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800">
        <div className="text-center text-zinc-500">
          <i className="fas fa-image text-6xl mb-4"></i>
          <p className="text-xl font-semibold mb-2">DICOM Viewport</p>
          <p className="text-sm">Upload a DICOM file to view medical images</p>
        </div>
      </div>
    </div>
  );
}
