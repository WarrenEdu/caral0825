import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  // Animación para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Animación para los elementos hijos (texto y formulario)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center p-4 md:p-8"
      style={{ backgroundImage: "url('https://nesweip.com/boceto_larco/imagenes/PERSONAL_Ciudad_Sagrada_de_Caral-Supe.jpg')" }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* White content card with animation */}
      <motion.div
        className="relative z-10 w-full max-w-4xl bg-white p-8 md:p-12 shadow-lg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left section: Text content with animation */}
          <motion.div
            className="flex flex-col space-y-4"
            variants={itemVariants}
          >
            <span className="text-sm font-serif text-gray-500">Museo Caral</span>
            <h2 className="text-4xl font-light text-black">
              Cultura <br /> Caral
            </h2>
            <p className="text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo pronto.
            </p>
          </motion.div>
          
          {/* Right section: Form with animation */}
          <motion.div
            className="flex flex-col space-y-6"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <div className="pb-2 border-b border-gray-300">
                <Input 
                  type="email" 
                  placeholder="Correo" 
                  className="h-12 border-none bg-white focus-visible:ring-0 focus-visible:ring-offset-0" 
                />
              </div>
              <div className="pb-2 border-b border-gray-300">
                <Input 
                  type="text" 
                  placeholder="Nombres" 
                  className="h-12 border-none bg-white focus-visible:ring-0 focus-visible:ring-offset-0" 
                />
              </div>
              <div className="pb-2 border-b border-gray-300">
                <Input 
                  type="text" 
                  placeholder="Apellidos" 
                  className="h-12 border-none bg-white focus-visible:ring-0 focus-visible:ring-offset-0" 
                />
              </div>
              <div className="pb-2 border-b border-gray-300">
                <Input 
                  type="text" 
                  placeholder="Mensaje" 
                  className="h-12 border-none bg-white focus-visible:ring-0 focus-visible:ring-offset-0" 
                />
              </div>
            </div>
            <Button 
              className="w-full text-white py-6 px-4 font-normal transition-colors duration-300"
              style={{ backgroundColor: 'rgb(180, 24, 35)' }}
            >
              Contactanos
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;