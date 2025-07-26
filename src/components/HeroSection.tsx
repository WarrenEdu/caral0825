import { Button } from "@/components/ui/button";
import { MapPin, Camera } from "lucide-react";
import caralHero from "@/assets/caral-hero.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-fixed" style={{backgroundImage: `url(${caralHero})`}}>
      {/* Angular Overlays */}
      <div className="absolute inset-0 angular-overlay">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-caral-ochre font-medium text-lg mb-2 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              PATRIMONIO MUNDIAL DE LA HUMANIDAD
            </motion.p>
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              CARAL PERÚ
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-caral-sand font-light mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              LA CIVILIZACIÓN MÁS ANTIGUA DE AMÉRICA
            </motion.p>
          </motion.div>

          <motion.p 
            className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Descubre los secretos de la civilización más antigua del continente americano. 
            Caral, con más de 5000 años de antigüedad, revela los orígenes de la cultura peruana 
            y las bases de la civilización andina.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button 
              size="lg"
              className="bg-caral-ochre hover:bg-caral-terracotta text-white font-semibold px-8 py-4 text-lg shadow-elegant"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Ruta Caral
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
            >
              <Camera className="mr-2 h-5 w-5" />
              Museo Caral
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;