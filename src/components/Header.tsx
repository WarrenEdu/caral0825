import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Facebook, Youtube, Instagram, ChevronDown } from "lucide-react";
import caralLogoBanner from "@/assets/caral-logo-banner.png";
import zacLogo from "@/assets/zac-logo.png";
import transparenciaLogo from "@/assets/transparencia-logo.png";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ES");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Institución",
      items: ["¿Quiénes somos?", "Organización", "Alta dirección", "Directorio"]
    },
    {
      title: "Museo Caral",
      items: ["Salas Temáticas", "Experiencias Educativas", "Visitas mediadas", "Talleres Caral"]
    },
    {
      title: "Ruta Caral",
      items: ["Horarios y tarifas", "Viajes culturales", "Ciudad sagrada de caral", "Aspero", "Vichama", "Peñico"]
    },
    {
      title: "Conócenos",
      items: ["Historia de caral", "Investigaciones", "Descubrimientos", "Arqueología"]
    },
    {
      title: "Comunicaciones",
      items: ["Noticias", "Prensa", "Eventos", "Boletines"]
    },
    {
      title: "Publicaciones",
      items: ["Libros", "Revistas", "Artículos", "Documentos"]
    },
    {
      title: "Tienda Caral",
      items: []
    },
    {
      title: "Estadísticas",
      items: ["Visitantes", "Investigación", "Impacto"]
    }
  ];

  return (
    <motion.header 
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Red Banner */}
      <div className="bg-[rgb(180,24,35)] h-12 flex items-center justify-center relative">
        <div className="flex items-center">
          <img 
            src={caralLogoBanner} 
            alt="Caral Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>
        
        {/* Language & Portal buttons */}
        <div className="absolute right-4 flex items-center space-x-2 text-xs text-white">
          <img 
            src={transparenciaLogo} 
            alt="Portal de Transparencia" 
            className="h-6 w-auto object-contain hidden lg:block"
          />
          <span className="hidden lg:block">|</span>
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
        
        {/* Mobile Transparency Logo */}
        <div className="lg:hidden absolute right-4 top-14">
          <img 
            src={transparenciaLogo} 
            alt="Portal de Transparencia" 
            className="h-4 w-auto object-contain"
          />
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
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((menuItem) => (
                <div 
                  key={menuItem.title}
                  className="relative"
                  onMouseEnter={() => menuItem.items.length > 0 && setActiveDropdown(menuItem.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Button 
                    variant="ghost" 
                    className={`${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-caral-ochre'} hover:bg-caral-sand/20 flex items-center gap-1`}
                  >
                    {menuItem.title}
                    {menuItem.items.length > 0 && (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                  
                  {/* Dropdown Menu */}
                  {menuItem.items.length > 0 && activeDropdown === menuItem.title && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-64 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 p-4 z-50"
                      onMouseEnter={() => setActiveDropdown(menuItem.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="space-y-2">
                        {menuItem.items.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
              {menuItems.map((menuItem) => (
                <div key={menuItem.title} className="px-4">
                  <Button 
                    variant="ghost" 
                    className="justify-start text-foreground hover:text-primary hover:bg-caral-sand/20 w-full"
                    onClick={() => {
                      if (menuItem.items.length > 0) {
                        setOpenMobileSubmenu(
                          openMobileSubmenu === menuItem.title ? null : menuItem.title
                        );
                      }
                    }}
                  >
                    {menuItem.title}
                    {menuItem.items.length > 0 && (
                      <ChevronDown 
                        className={`ml-auto h-4 w-4 transition-transform ${
                          openMobileSubmenu === menuItem.title ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </Button>
                  {menuItem.items.length > 0 && openMobileSubmenu === menuItem.title && (
                    <div className="ml-4 mt-2 space-y-1">
                      {menuItem.items.map((subItem) => (
                        <Button
                          key={subItem}
                          variant="ghost"
                          className="justify-start text-sm text-muted-foreground hover:text-primary hover:bg-caral-sand/20 w-full"
                        >
                          {subItem}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;