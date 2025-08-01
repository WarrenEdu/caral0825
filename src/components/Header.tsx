import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import caralLogoBanner from "@/assets/caral-logo-banner.png"; 
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const RED_COLOR_CLASS = "bg-[rgb(180,24,35)]";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allMenuItems = [
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
    },
    { 
      title: "Estadísticas", 
      href: "#", 
      subItems: ["Visitantes", "Investigación", "Impacto"] 
    }
  ];

  const leftMenuItems = allMenuItems.slice(0, 4);
  const rightMenuItems = allMenuItems.slice(4);

  const renderDropdownContent = (subItems) => {
    let firstColumn = [];
    let secondColumn = [];

    if (subItems.length <= 4) {
      firstColumn = subItems;
    } else {
      const half = Math.ceil(subItems.length / 2);
      firstColumn = subItems.slice(0, half);
      secondColumn = subItems.slice(half);
    }

    return (
      <div className="flex flex-col md:flex-row py-8 px-12 w-full max-w-7xl mx-auto">
        {/* Sección Izquierda: Subtítulos dinámicos */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-4 pr-12 mb-8 md:mb-0">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 border-b border-dashed border-white/50 pb-2">Contenido</h3>
            <ul className="space-y-2">
              {firstColumn.map((item) => (
                <li key={item}><a href="#" className="text-gray-200 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          {secondColumn.length > 0 && (
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 border-b border-dashed border-white/50 pb-2 hidden md:block"></h3>
              <ul className="space-y-2">
                {secondColumn.map((item) => (
                  <li key={item}><a href="#" className="text-gray-200 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Separador Vertical (visible en desktop) */}
        <div className="hidden md:flex justify-center items-center px-6"> 
          <div className="h-full w-px border-l-2 border-dashed border-white/50"></div>
        </div>

        {/* Sección Derecha: Experience historic Florida. (Fija) */}
        <div className="flex-1 pl-12 flex flex-col justify-center items-start text-left">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Experience historic <br /> Florida.
          </h2>
          <Button 
            variant="ghost" 
            className="text-white text-lg hover:text-gray-300 transition-colors flex items-center gap-2 px-0"
          >
            BUY TICKETS <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-barlow ${
        isScrolled || activeDropdown 
          ? RED_COLOR_CLASS + ' shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div 
        className="container mx-auto px-4"
        onMouseLeave={() => setActiveDropdown(null)} 
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo para Mobile (visible solo en mobile, a la izquierda) */}
          <div className="lg:hidden flex items-center">
            <img 
              src={caralLogoBanner} 
              alt="Caral Logo" 
              className="h-12 w-auto object-contain" // Ajustado tamaño para mobile
            />
          </div>

          {/* Desktop Navigation - Left Side */}
          <nav className="hidden lg:flex flex-1 justify-end items-center pr-6">
            <div className="flex gap-x-8"> {/* Ajustado gap-x de 10 a 8 para más espacio */}
              {leftMenuItems.map((menuItem) => (
                <div 
                  key={menuItem.title} 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(menuItem.title)}
                >
                  <a 
                    href={menuItem.href} 
                    className={`flex items-center gap-1 text-white text-[12px] font-semibold hover:text-gray-300 transition-colors whitespace-nowrap`} {/* text-[13px] cambiado a text-[12px] */}
                  >
                    {menuItem.title}
                    {menuItem.subItems.length > 0 && (
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === menuItem.title ? 'rotate-180' : ''}`} />
                    )}
                  </a>
                </div>
              ))}
            </div>
          </nav>

          {/* Logo Central (para desktop) */}
          <div className="hidden lg:flex items-center mx-10"> {/* Ajustado mx de 12 a 10 */}
            <img 
              src={caralLogoBanner} 
              alt="Caral Logo" 
              className="h-16 w-auto object-contain" 
            />
          </div>

          {/* Desktop Navigation - Right Side */}
          <nav className="hidden lg:flex flex-1 justify-start items-center pl-6">
            <div className="flex gap-x-8"> {/* Ajustado gap-x de 10 a 8 para más espacio */}
              {rightMenuItems.map((menuItem) => (
                <div 
                  key={menuItem.title} 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(menuItem.title)}
                >
                  <a 
                    href={menuItem.href} 
                    className={`flex items-center gap-1 text-white text-[12px] font-semibold hover:text-gray-300 transition-colors whitespace-nowrap`} {/* text-[13px] cambiado a text-[12px] */}
                  >
                    {menuItem.title}
                    {menuItem.subItems.length > 0 && (
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === menuItem.title ? 'rotate-180' : ''}`} />
                    )}
                  </a>
                </div>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button (a la derecha) */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white ml-auto" // ml-auto lo empuja a la derecha
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Dropdown Menu (visible solo en desktop) */}
      {activeDropdown && allMenuItems.find(item => item.title === activeDropdown)?.subItems.length > 0 && (
        <motion.div
          className={`absolute top-full left-0 right-0 ${RED_COLOR_CLASS} z-40 shadow-xl border-t border-gray-700 hidden lg:block`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderDropdownContent(allMenuItems.find(item => item.title === activeDropdown).subItems)}
        </motion.div>
      )}

      {/* Mobile Navigation (con efecto y color) */}
      {isMenuOpen && (
        <motion.div
          className={`lg:hidden py-4 border-t border-gray-700 ${RED_COLOR_CLASS} shadow-lg`} {/* Aplicado RED_COLOR_CLASS */}
          initial={{ opacity: 0, y: -20 }} // Inicia un poco arriba y transparente
          animate={{ opacity: 1, y: 0 }}   // Se desliza hacia abajo y aparece
          exit={{ opacity: 0, y: -20 }}    // Efecto al salir
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <nav className="flex flex-col space-y-2 px-4">
            {allMenuItems.map((menuItem) => (
              <div key={menuItem.title}>
                <Button 
                  variant="ghost" 
                  className="justify-start text-white hover:bg-white/10 w-full" // Ajustado hover para el nuevo fondo
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
                          className="block px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-colors" // Ajustado hover
                          onClick={() => setIsMenuOpen(false)}
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
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;