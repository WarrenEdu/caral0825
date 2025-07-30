import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Facebook, Youtube, Instagram } from "lucide-react";
import caralLogoBanner from "@/assets/caral-logo-banner.png";
import zacLogo from "@/assets/zac-logo.png";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ES");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <motion.header 
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Red Banner */}
      <div className="bg-red-600 h-12 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <img 
            src={caralLogoBanner} 
            alt="Caral Logo" 
            className="h-8 w-auto object-contain"
          />
          <span className="text-white font-bold text-xl tracking-wider">CARAL</span>
        </div>
        
        {/* Language & Portal buttons */}
        <div className="absolute right-4 flex items-center space-x-2 text-xs text-white">
          <span>Portal de Transparencia</span>
          <span>|</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
            className="text-white hover:bg-red-700 h-6 px-2 text-xs"
          >
            <Globe className="h-3 w-3 mr-1" />
            {language}
          </Button>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="text-white hover:bg-red-700 h-6 w-6 p-0">
              <Facebook className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-red-700 h-6 w-6 p-0">
              <Youtube className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-red-700 h-6 w-6 p-0">
              <Instagram className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-elegant border-b border-border' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src={zacLogo} 
                alt="ZAC Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <Button 
                  key={item}
                  variant="ghost" 
                  className={`${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-caral-ochre'} hover:bg-caral-sand/20`}
                >
                  {item}
                </Button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isScrolled ? 
                (isMenuOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />) :
                (isMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />)
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white">
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
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;