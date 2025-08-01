import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import tampaBayHistoryCenterLogo from "@/assets/caral-logo-banner.png"; // Asumo que este es el logo correcto
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Estado para controlar la visibilidad del dropdown

  // Definir el color rojo del banner/dropdown
  const RED_COLOR_CLASS = "bg-[rgb(180,24,35)]";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: "INSTRITUCION", href: "#" },
    { title: "MUSEO CARAL", href: "#" },
    { title: "RUTA CARAL", href: "#" },
    { title: "CONOCENOS", href: "#" },
    { title: "COMUNICACION", href: "#" },
    { title: "PUBLICACIONES", href: "#" },
  ];

  // Contenido común para todos los dropdowns
  const dropdownContent = (
    <div className="flex flex-col md:flex-row p-8 w-full max-w-7xl mx-auto">
      {/* Sección Izquierda: Current Exhibits & More to Explore */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 pr-8 mb-8 md:mb-0">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-dashed border-white/50 pb-2">Current Exhibits</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Invisible Immigrants: Spaniards in the U.S. (1868-1945)</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Mapping the American Sea</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-dashed border-white/50 pb-2">More to Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Gallery Map</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Florida Front and Center</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Touchton Map Library</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Travails & Triumphs</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Treasure Seekers</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">All Past Exhibits</a></li>
          </ul>
        </div>
      </div>

      {/* Separador Vertical (visible en desktop) */}
      <div className="hidden md:block w-px bg-white/50 border-l border-dashed border-white/50 my-auto h-auto min-h-[200px]"></div>

      {/* Sección Derecha: Experience historic Florida. */}
      <div className="flex-1 pl-8 flex flex-col justify-center items-start text-left">
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

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-barlow ${
        isScrolled || isDropdownVisible // <-- Aplicar color rojo si hay scroll O si el dropdown está visible
          ? RED_COLOR_CLASS + ' shadow-lg' // Fondo rojo y sombra
          : 'bg-transparent' // Fondo transparente por defecto
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div 
        className="container mx-auto px-4"
        onMouseLeave={() => setIsDropdownVisible(false)} // Ocultar dropdown al salir del área del header/dropdown
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo Central */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center">
            <img 
              src={tampaBayHistoryCenterLogo} 
              alt="Tampa Bay History Center Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-between items-center px-4">
            {/* Links a la izquierda del logo */}
            <div className="flex gap-x-8">
              {menuItems.slice(0, 3).map((item) => (
                <div 
                  key={item.title} 
                  onMouseEnter={() => setIsDropdownVisible(true)} // Mostrar dropdown y pintar header
                >
                  <a 
                    href={item.href} 
                    className={`text-white text-sm uppercase font-semibold hover:text-gray-300 transition-colors`}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
            
            {/* Links a la derecha del logo */}
            <div className="flex gap-x-8">
              {menuItems.slice(3, -1).map((item) => (
                <div 
                  key={item.title} 
                  onMouseEnter={() => setIsDropdownVisible(true)} // Mostrar dropdown y pintar header
                >
                  <a 
                    href={item.href} 
                    className={`text-white text-sm uppercase font-semibold hover:text-gray-300 transition-colors`}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
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

          {/* Enlace 'SUPPORT' en desktop (siempre a la derecha) */}
          <a 
            href={menuItems.find(item => item.title === "SUPPORT")?.href} 
            className={`hidden lg:block text-white text-sm uppercase font-semibold hover:text-gray-300 transition-colors ml-auto pl-8`}
            onMouseEnter={() => setIsDropdownVisible(true)} // Mostrar dropdown y pintar header
          >
            SUPPORT
          </a>
        </div>
      </div>

      {/* Dropdown Menu (visible solo en desktop y cuando isDropdownVisible es true) */}
      {isDropdownVisible && (
        <motion.div
          className={`absolute top-full left-0 right-0 ${RED_COLOR_CLASS} z-40 py-8 shadow-xl border-t border-gray-700 hidden lg:block`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {dropdownContent}
        </motion.div>
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 border-t border-gray-700 bg-black bg-opacity-90">
          <nav className="flex flex-col space-y-2 px-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 text-white text-base hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;