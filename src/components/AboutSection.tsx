import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Importa solo la imagen central con la URL proporcionada
const museumMainImage = "https://nesweip.com/boceto_larco/imagenes/PERSONAL_Lima.jpg"; 

const AboutSection = () => {
  return (
    <section className="py-20 bg-white text-gray-800 font-serif">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Subtítulo superior */}
        <motion.p 
          className="text-gray-500 text-center text-sm mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
           SOBRE NOSOTROS
        </motion.p>

        {/* Título principal con líneas decorativas */}
        <motion.div
          className="flex items-center justify-center mb-12 gap-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex-grow border-t border-gray-300 max-w-[100px]"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight tracking-wider uppercase whitespace-nowrap">
            La Zona Arqueológica Caral
          </h2>
          <div className="flex-grow border-t border-gray-300 max-w-[100px]"></div>
        </motion.div>

        {/* Contenido principal: texto + imagen + texto */}
        {/* *** CAMBIO CLAVE AQUÍ: lg:items-center *** */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          
          {/* Left Text Block */}
          <motion.div
            className="lg:w-1/3 mb-8 lg:mb-0 text-gray-600 text-sm leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-4">
              La Zona Arqueológica Caral es responsable de las actividades de investigación, conservación y difusión de los valores sociales y culturales de Caral, la Civilización más antigua de América.
            </p>
            
            {/* Texto de logos/premios (ya no se renderizan las imágenes) */}
            <div className="mt-6 space-y-4">
              <p className="text-xs font-semibold text-gray-500">Caral</p> 
              <div className="flex items-center space-x-4">
                <p className="text-xs text-gray-500 italic">Aquí irían los logos de premios</p>
              </div>
            </div>
          </motion.div>

          {/* Central Image Block */}
          <motion.div
            className="lg:w-1/3 flex flex-col items-center justify-center mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white p-4 shadow-lg border border-gray-200">
              <h3 className="text-center text-lg font-semibold mb-2 text-gray-700">CULTURA CARAL</h3>
              <img 
                src={museumMainImage} 
                alt="Presidential Funerals Exhibit" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
          </motion.div>

          {/* Right Text Block */}
          <motion.div
            className="lg:w-1/3 text-gray-600 text-sm leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
               Desarrollamos actividades de investigación científica, conservación del patrimonio cultural, gestión sostenible del territorio y promoción del desarrollo social y económico de las comunidades locales, contribuyendo al fortalecimiento de la identidad cultural nacional.
            </p>
          </motion.div>

        </div>

        {/* Botón "Tickets to the Museum" - Alineado a la derecha, debajo de todo */}
        <motion.div
          className="flex justify-end mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button
            size="lg"
            className="bg-stone-200 hover:bg-stone-300 text-gray-700 font-semibold px-8 py-4 rounded-none uppercase tracking-wide text-sm"
          >
            MAS INFORMACION
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;