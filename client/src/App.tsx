import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Technology from "@/pages/Technology";
import Demos from "@/pages/Demos";
import Pricing from "@/pages/Pricing";
import Security from "@/pages/Security";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";
import { useGlobalStore } from "@/store/useGlobalStore";

function App() {
  const { showDebugPanel } = useGlobalStore();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Debug Panel */}
      {showDebugPanel && (
        <div className="fixed bottom-4 right-4 glass-card p-4 rounded-lg text-xs font-mono z-50">
          <div className="text-primary font-bold mb-2">Debug Info</div>
          <div>FPS: <span id="fps-counter">60</span></div>
          <div>GPU: <span>WebGL 2.0</span></div>
          <div>SR Strength: <span>85%</span></div>
        </div>
      )}
    </div>
  );
}

export default App;
