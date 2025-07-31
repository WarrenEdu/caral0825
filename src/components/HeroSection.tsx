import { Button } from "@/components/ui/button";
import { MapPin, Camera, ChevronDown } from "lucide-react";
import vichamaBanner from "@/assets/vichama-banner.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{backgroundImage: `url(${vichamaBanner})`}}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      {/* Atmospheric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          
          {/* Date Badge */}
          <motion.div 
            className="inline-block mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-caral-ochre/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide">
              Patrimonio Mundial UNESCO • 5000 años de historia
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
          >
            CIVILIZACIÓN CARAL
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-2xl md:text-3xl text-caral-sand font-light mb-8 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            LA CIUDAD MÁS ANTIGUA DE AMÉRICA
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Descubre los misterios de la primera civilización de América. Un viaje extraordinario 
            a través de 5000 años de historia, donde la arqueología revela los secretos 
            de nuestros antepasados más antiguos.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button 
              size="lg"
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-[rgb(180,24,35)] hover:border-[rgb(180,24,35)] font-semibold px-8 py-4 text-lg shadow-2xl transition-all duration-300 min-w-[200px]"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Explora la Ruta
            </Button>
            <Button 
              size="lg"
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-[rgb(180,24,35)] hover:border-[rgb(180,24,35)] font-semibold px-8 py-4 text-lg shadow-2xl transition-all duration-300 min-w-[200px]"
            >
              <Camera className="mr-2 h-5 w-5" />
              Visita el Museo
            </Button>
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-medium"
            >
              Descubre Más
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-sm mb-2 tracking-wider">SCROLL</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;