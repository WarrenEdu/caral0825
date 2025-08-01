import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Asumo que esta es la URL de tu imagen de mapa.
// SI NO ES UN MAPA, DEBES CAMBIAR ESTA URL A LA DE TU IMAGEN DE MAPA REAL.
import mapBackground from "@/assets/vichama-banner.jpg"; 

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
        <div className="max-w-xl text-left">
          {/* Animación para el título H1 */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }} // Inicia invisible y 50px arriba
            animate={{ opacity: 1, y: 0 }}   // Anima a visible y posición original
            transition={{ duration: 1, ease: "easeOut" }} // Duración de 1 segundo, con un suavizado
          >
            CARAL PERÚ
          </motion.h1>
          
          {/* Animación para el botón */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }} // Inicia invisible y 30px arriba
            animate={{ opacity: 1, y: 0 }}   // Anima a visible y posición original
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Mismo efecto, pero con un pequeño retraso
          >
            <Button 
              size="lg"
              className="px-8 py-4 text-lg border-2 border-white text-white bg-transparent uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              LA CIVILIZACIÓN MÁS ANTIGUA DE AMÉRICA
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Botón flotante "TICKETS" */}
      {/*<aside className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
        <Button
          className="bg-gray-300 text-gray-800 text-sm md:text-base py-5 px-2 md:py-6 md:px-3 uppercase rounded-md shadow-lg hover:bg-gray-400 transition-colors duration-300"
          style={{ writingMode: 'vertical-lr' }}
        >
          TICKETS
        </Button>
      </aside>*/}

      {/* Imagen pequeña en la esquina inferior derecha (opcional, si aún la deseas) */}
      {/* <div className="absolute bottom-4 right-4 z-10">
        <img src="URL_DE_TU_IMAGEN_PEQUEÑA" alt="Detalle" className="w-24 h-auto opacity-75" />
      </div> */}
    </section>
  );
};

export default HeroSection;