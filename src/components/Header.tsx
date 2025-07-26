import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Facebook, Youtube, Instagram } from "lucide-react";
import caralLogo from "@/assets/caral-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ES");

  const menuItems = [
    "Institución",
    "Museo Caral", 
    "Ruta Caral",
    "Conócenos",
    "Comunicaciones",
    "Publicaciones",
    "Tienda Caral",
    "Estadísticas"
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={caralLogo} 
              alt="Caral Logo" 
              className="h-10 w-10 object-cover rounded"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">CARAL</h1>
              <p className="text-xs text-muted-foreground">PERÚ</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Button 
                key={item}
                variant="ghost" 
                className="text-foreground hover:text-primary hover:bg-caral-sand/20"
              >
                {item}
              </Button>
            ))}
          </nav>

          {/* Language & Social Icons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
              className="hidden md:flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{language}</span>
            </Button>
            
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Button 
                  key={item}
                  variant="ghost" 
                  className="justify-start text-foreground hover:text-primary hover:bg-caral-sand/20"
                >
                  {item}
                </Button>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
                  className="flex items-center space-x-1"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language}</span>
                </Button>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Youtube className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;