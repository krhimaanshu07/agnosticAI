import { Link } from "react-router-dom";
import { siteConfig } from "@/site.config";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800" data-testid="footer">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
                <i className="fas fa-atom text-white text-sm"></i>
              </div>
              <span className="text-xl font-dm-sans font-bold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Transforming medical imaging through OEM-agnostic GenAI technology. 
              Upgrade your image quality without replacing your equipment.
            </p>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <div className="space-y-3">
              <Link to="/solutions" className="block text-zinc-400 hover:text-primary transition-colors">
                X-Ray Super-Resolution
              </Link>
              <Link to="/solutions" className="block text-zinc-400 hover:text-primary transition-colors">
                CT Enhancement
              </Link>
              <Link to="/solutions" className="block text-zinc-400 hover:text-primary transition-colors">
                MRI Super-Resolution
              </Link>
              <Link to="/solutions" className="block text-zinc-400 hover:text-primary transition-colors">
                Digital Pathology
              </Link>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <div className="space-y-3">
              <Link to="/about" className="block text-zinc-400 hover:text-primary transition-colors">
                About Us
              </Link>
              <a href="#" className="block text-zinc-400 hover:text-primary transition-colors">
                Careers
              </a>
              <a href="#" className="block text-zinc-400 hover:text-primary transition-colors">
                News
              </a>
              <a href="#" className="block text-zinc-400 hover:text-primary transition-colors">
                Partners
              </a>
            </div>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <div className="space-y-3">
              <a href="#" className="block text-zinc-400 hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-zinc-400 hover:text-primary transition-colors">
                API Reference
              </a>
              <a href="#" className="block text-zinc-400 hover:text-primary transition-colors">
                Status Page
              </a>
              <Link to="/contact" className="block text-zinc-400 hover:text-primary transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-zinc-400 text-sm mb-4 md:mb-0">
              © {siteConfig.company.foundedYear} {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
