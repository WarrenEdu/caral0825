import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Facebook, Youtube, Instagram, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import caralLogoBanner from "@/assets/caral-logo-banner.png";
import zacLogo from "@/assets/zac-logo.png";
import transparenciaLogo from "@/assets/transparencia-logo.png";
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
      <div className="bg-red-600 h-12 flex items-center justify-center">
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
            className="h-6 w-auto object-contain"
          />
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
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {menuItems.map((menuItem) => (
                  <NavigationMenuItem key={menuItem.title}>
                    {menuItem.items.length > 0 ? (
                      <>
                        <NavigationMenuTrigger 
                          className={`${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-caral-ochre'} bg-transparent hover:bg-caral-sand/20 data-[state=open]:bg-caral-sand/20`}
                        >
                          {menuItem.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-48 p-2">
                            {menuItem.items.map((subItem) => (
                              <NavigationMenuLink
                                key={subItem}
                                className="block px-3 py-2 text-sm text-foreground hover:bg-caral-sand/20 hover:text-primary rounded-md cursor-pointer transition-colors"
                              >
                                {subItem}
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink 
                        className={`px-4 py-2 text-sm font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-caral-ochre'} hover:bg-caral-sand/20 rounded-md cursor-pointer`}
                      >
                        {menuItem.title}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

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
                  >
                    {menuItem.title}
                    {menuItem.items.length > 0 && <ChevronDown className="ml-auto h-4 w-4" />}
                  </Button>
                  {menuItem.items.length > 0 && (
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