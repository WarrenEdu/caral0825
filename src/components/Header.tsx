import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Asegúrate de que Button siga siendo el componente adecuado
import { Menu, X } from "lucide-react"; // Mantener para el menú móvil
// Importa el logo que usaremos para "Tampa Bay History Center"
// Asumo que caralLogoBanner ahora es el logo que representa "Tampa Bay History Center" por tu uso anterior.
import tampaBayHistoryCenterLogo from "@/assets/caral-logo-banner.png"; 
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Para el cambio de color al hacer scroll

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: "EXPERIENCE", href: "#" },
    { title: "EXHIBITS", href: "#" },
    { title: "LEARNING", href: "#" },
    { title: "BLOG", href: "#" },
    { title: "ABOUT", href: "#" },
    { title: "SUPPORT", href: "#" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-barlow ${
        isScrolled
          ? 'bg-black bg-opacity-70 shadow-lg' // Fondo más oscuro y sombra al hacer scroll
          : 'bg-transparent' // Fondo transparente por defecto
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20"> {/* Ajustar altura para el diseño */}
          {/* Logo Central (se muestra solo en desktop y toma el lugar central) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center">
            <img 
              src={tampaBayHistoryCenterLogo} 
              alt="Tampa Bay History Center Logo" 
              className="h-16 w-auto object-contain" // Ajustar tamaño del logo
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-between items-center px-4"> {/* Ajustar px para separar del logo */}
            {/* Links a la izquierda del logo */}
            <div className="flex gap-x-8"> {/* Espacio entre los enlaces */}
              {menuItems.slice(0, 3).map((item) => (
                <a 
                  key={item.title} 
                  href={item.href} 
                  className={`text-white text-sm uppercase font-semibold hover:text-gray-300 transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            
            {/* Links a la derecha del logo */}
            <div className="flex gap-x-8">
              {menuItems.slice(3).map((item) => (
                <a 
                  key={item.title} 
                  href={item.href} 
                  className={`text-white text-sm uppercase font-semibold hover:text-gray-300 transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button (a la derecha) */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white ml-auto" // ml-auto para empujar a la derecha en móvil
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Enlace 'SUPPORT' en desktop (siempre a la derecha) */}
          {/* Este elemento debe ir fuera del nav para mantenerlo a la extrema derecha, como en la imagen */}
          <a 
            href="#" 
            className={`hidden lg:block text-white text-sm uppercase font-semibold hover:text-gray-300 transition-colors ml-auto pl-8 ${isScrolled ? 'text-white' : 'text-white'}`}
          >
            SUPPORT
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 border-t border-gray-700 bg-black bg-opacity-90">
          <nav className="flex flex-col space-y-2 px-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 text-white text-base hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)} // Cerrar menú al hacer clic
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