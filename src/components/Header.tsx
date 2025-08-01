import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react"; // Añadimos ChevronDown para los dropdowns
import caralLogoBanner from "@/assets/caral-logo-banner.png"; // Usamos caralLogoBanner para este menú
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Estado para controlar qué dropdown está abierto

  // Definir el color rojo del banner/dropdown (rgb(180, 24, 35))
  const RED_COLOR_CLASS = "bg-[rgb(180,24,35)]";

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
      href: "#", 
      subItems: ["¿Quiénes somos?", "Organización", "Alta dirección", "Directorio"] 
    },
    { 
      title: "Museo Caral", 
      href: "#", 
      subItems: ["Salas Temáticas", "Experiencias Educativas", "Visitas mediadas", "Talleres Caral"] 
    },
    { 
      title: "Ruta Caral", 
      href: "#", 
      subItems: ["Horarios y tarifas", "Viajes culturales", "Ciudad sagrada de caral", "Aspero", "Vichama", "Peñico"] 
    },
    { 
      title: "Conócenos", 
      href: "#", 
      subItems: ["Historia de caral", "Investigaciones", "Descubrimientos", "Arqueología"] 
    },
    { 
      title: "Comunicaciones", 
      href: "#", 
      subItems: ["Noticias", "Prensa", "Eventos", "Boletines"] 
    },
    { 
      title: "Publicaciones", 
      href: "#", 
      subItems: ["Libros", "Revistas", "Artículos", "Documentos"] 
    },
    { 
      title: "Tienda Caral", 
      href: "#", 
      subItems: [] 
    }, // No tiene submenú
    { 
      title: "Estadísticas", 
      href: "#", 
      subItems: ["Visitantes", "Investigación", "Impacto"] 
    }
  ];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-barlow ${
        isScrolled || activeDropdown // Fondo rojo si hay scroll O si algún dropdown está abierto
          ? RED_COLOR_CLASS + ' shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div 
        className="container mx-auto px-4"
        onMouseLeave={() => setActiveDropdown(null)} // Cerrar cualquier dropdown al salir del área del header
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo Central (para desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center">
            <img 
              src={caralLogoBanner} 
              alt="Caral Logo" 
              className="h-16 w-auto object-contain" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-between items-center px-4">
            {menuItems.map((menuItem) => (
              <div 
                key={menuItem.title} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(menuItem.title)} // Abrir el dropdown al pasar el mouse
              >
                <a 
                  href={menuItem.href} 
                  className={`flex items-center gap-1 text-white text-sm uppercase font-semibold hover:text-gray-300 transition-colors`}
                >
                  {menuItem.title}
                  {menuItem.subItems.length > 0 && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === menuItem.title ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown Menu (solo si tiene subItems y está activo) */}
                {menuItem.subItems.length > 0 && activeDropdown === menuItem.title && (
                  <motion.div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[200px] ${RED_COLOR_CLASS} rounded-lg shadow-lg border border-white/10 p-4 z-50`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ul className="space-y-2">
                      {menuItem.subItems.map((subItem) => (
                        <li key={subItem}>
                          <a 
                            href="#" 
                            className="block px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors whitespace-nowrap"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 border-t border-gray-700 bg-black bg-opacity-90">
          <nav className="flex flex-col space-y-2 px-4">
            {menuItems.map((menuItem) => (
              <div key={menuItem.title}>
                <Button 
                  variant="ghost" 
                  className="justify-start text-white hover:bg-gray-700 w-full"
                  onClick={() => setActiveDropdown(activeDropdown === menuItem.title ? null : menuItem.title)}
                >
                  {menuItem.title}
                  {menuItem.subItems.length > 0 && (
                    <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${activeDropdown === menuItem.title ? 'rotate-180' : ''}`} />
                  )}
                </Button>
                {activeDropdown === menuItem.title && menuItem.subItems.length > 0 && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {menuItem.subItems.map((subItem) => (
                      <li key={subItem}>
                        <a 
                          href="#" 
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)} // Cerrar menú móvil al seleccionar un subitem
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;