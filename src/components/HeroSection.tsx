import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Asegúrate de que esta imagen sea un mapa real o reemplázala con la URL de tu mapa de fondo.
// Basado en la imagen, el fondo es un mapa, no el vichama-banner.jpg anterior.
// Si no tienes una URL de mapa, puedes usar una genérica de un CDN o un placeholder.
// Ejemplo: import mapBackground from "@/assets/your-map-background.jpg";
// Por simplicidad, usaré un placeholder URL o el que ya tenías pero con la aclaración.
import mapBackground from "@/assets/vichama-banner.jpg"; // <--- ADVERTENCIA: Reemplaza esta URL con una imagen de mapa si vichama-banner.jpg NO es un mapa.
// Si tienes una URL de imagen de mapa como: https://example.com/map_image.jpg, úsala aquí.

const HeroSection = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center bg-cover bg-center font-barlow"
      style={{ backgroundImage: `url(${mapBackground})` }}
    >
      {/* Overlay Oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenido Principal */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-20 md:py-0">
        <div className="max-w-xl text-left"> {/* Alineado a la izquierda */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Navigate our map collection.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg"
              className="px-8 py-4 text-lg border-2 border-white text-white bg-transparent uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              EXPLORE MAP LIBRARY
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Botón flotante "TICKETS" */}
      <aside className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
        <Button
          className="bg-gray-300 text-gray-800 text-sm md:text-base py-5 px-2 md:py-6 md:px-3 uppercase rounded-md shadow-lg hover:bg-gray-400 transition-colors duration-300"
          style={{ writingMode: 'vertical-lr' }} // Mantener estilo inline para writing-mode
        >
          TICKETS
        </Button>
      </aside>

      {/* Imagen pequeña en la esquina inferior derecha (opcional, si aún la deseas) */}
      {/* Si tienes una imagen específica para esto, reemplaza el src */}
      {/* <div className="absolute bottom-4 right-4 z-10">
        <img src="URL_DE_TU_IMAGEN_PEQUEÑA" alt="Detalle" className="w-24 h-auto opacity-75" />
      </div> */}
    </section>
  );
};

export default HeroSection;