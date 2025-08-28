import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/site.config";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur" : "glass-card border-b"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" data-testid="logo-link">
            <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all">
              <i className="fas fa-atom text-white text-sm"></i>
            </div>
            <span className="text-xl font-dm-sans font-bold text-foreground">
              {siteConfig.name}
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {siteConfig.nav.map((item) => (
              item.name === "Demos" ? (
                <a
                  key={item.name}
                  href="https://website-bookstore-watt-newspaper.trycloudflare.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors focus-visible text-muted-foreground hover:text-primary cursor-pointer"
                  data-testid={`nav-link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors focus-visible ${
                    isActive(item.href) 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  data-testid={`nav-link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://website-bookstore-watt-newspaper.trycloudflare.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="cta-demos">
                See Demos
              </Button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-zinc-300 hover:text-white"
                data-testid="mobile-menu-button"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 glass-card border-l border-zinc-800">
              <div className="flex flex-col space-y-6 mt-8">
                {siteConfig.nav.map((item) => (
                  item.name === "Demos" ? (
                    <a
                      key={item.name}
                      href="https://website-bookstore-watt-newspaper.trycloudflare.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-left transition-colors text-zinc-300 hover:text-primary cursor-pointer"
                      data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-left transition-colors ${
                        isActive(item.href) 
                          ? "text-primary" 
                          : "text-zinc-300 hover:text-primary"
                      }`}
                      data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <div className="pt-6 border-t border-zinc-800 space-y-4">
                  {/* Theme toggle removed - dark mode only */}
                  <a
                    href="https://website-bookstore-watt-newspaper.trycloudflare.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      See Demos
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
