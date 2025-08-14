import { create } from "zustand";

interface GlobalState {
  // Theme state
  accentColor: "cyan" | "violet";
  setAccentColor: (color: "cyan" | "violet") => void;
  
  // Demo state
  srStrength: number;
  setSrStrength: (strength: number) => void;
  
  // Debug state
  showDebugPanel: boolean;
  setShowDebugPanel: (show: boolean) => void;
  
  // Navigation state
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  // Theme
  accentColor: "cyan",
  setAccentColor: (color) => set({ accentColor: color }),
  
  // Demo
  srStrength: 85,
  setSrStrength: (strength) => set({ srStrength: strength }),
  
  // Debug
  showDebugPanel: typeof window !== "undefined" && window.location.search.includes("debug=1"),
  setShowDebugPanel: (show) => set({ showDebugPanel: show }),
  
  // Navigation
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
}));
