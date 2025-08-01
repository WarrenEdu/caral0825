import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Asume que tienes estas imágenes en tus assets. Reemplaza las rutas.
import museumMainImage from "@/assets/presidential-funerals.png"; // La imagen principal del centro
import awardLogo1 from "@/assets/award-30th.png"; // Primer logo de premio
import awardLogo2 from "@/assets/award-best-houston-2021.png"; // Segundo logo de premio
import awardLogo3 from "@/assets/award-best-houston-winner.png"; // Tercer logo de premio


const AboutSection = () => {
  return (
    <section className="py-20 bg-white text-gray-800 font-serif"> {/* Fondo blanco y fuente serif para parecerse a la imagen */}
      <div className="container mx-auto px-4 max-w-7xl"> {/* Contenedor más amplio */}
        
        {/* Subtítulo superior */}
        <motion.p 
          className="text-gray-500 text-center text-sm mb-2" // Color y tamaño de fuente
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          The National Museum of Funeral History
        </motion.p>

        {/* Título principal con líneas decorativas */}
        <motion.div
          className="flex items-center justify-center mb-12 gap-x-4" // Centrar el título y las líneas
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex-grow border-t border-gray-300 max-w-[100px]"></div> {/* Línea izquierda */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight tracking-wider uppercase whitespace-nowrap">
            WELCOME TO OUR MUSEUM
          </h2>
          <div className="flex-grow border-t border-gray-300 max-w-[100px]"></div> {/* Línea derecha */}
        </motion.div>

        {/* Contenido principal: texto + imagen + texto */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          
          {/* Left Text Block */}
          <motion.div
            className="lg:w-1/3 mb-8 lg:mb-0 text-gray-600 text-sm leading-relaxed" // Ancho y estilo de texto
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-4">
              The National Museum of Funeral History is an educational experience like no other and offers something for everyone. Discover America's largest collection of authentic, historical funeral service items.
            </p>
            
            {/* Logos/Premios */}
            <div className="mt-6 space-y-4">
              <p className="text-xs font-semibold text-gray-500">NATIONAL MUSEUM OF FUNERAL HISTORY</p> {/* Texto superior de logos */}
              <div className="flex items-center space-x-4">
                <img src={awardLogo1} alt="30th Anniversary Award" className="h-20 w-auto object-contain" /> {/* Ajusta h-auto y w-auto para mantener proporción */}
                <img src={awardLogo2} alt="Best Houston 2021 Award" className="h-20 w-auto object-contain" />
                <img src={awardLogo3} alt="Best Houston Winner Award" className="h-20 w-auto object-contain" />
              </div>
            </div>
          </motion.div>

          {/* Central Image Block */}
          <motion.div
            className="lg:w-1/3 flex flex-col items-center justify-center mb-8 lg:mb-0" // Centrar la imagen en su columna
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white p-4 shadow-lg border border-gray-200"> {/* Contenedor para el "frame" blanco alrededor de la imagen */}
              <h3 className="text-center text-lg font-semibold mb-2 text-gray-700">PRESIDENTIAL FUNERALS</h3>
              <img 
                src={museumMainImage} 
                alt="Presidential Funerals Exhibit" 
                className="w-full h-auto object-cover max-h-[400px]" // Ajusta el tamaño de la imagen
              />
            </div>
          </motion.div>

          {/* Right Text Block */}
          <motion.div
            className="lg:w-1/3 text-gray-600 text-sm leading-relaxed" // Ancho y estilo de texto
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              Learn about caskets and coffins, hearses through history, plus the funerals of Presidents, Popes, celebrities and more while you witness the cultural heritage of the funeral service industry and its time-honored tradition of compassion.
            </p>
            {/* El botón se mueve fuera de esta columna para alinearse al final */}
          </motion.div>

        </div>

        {/* Botón "Tickets to the Museum" - Alineado a la derecha, debajo de todo */}
        <motion.div
          className="flex justify-end mt-12" // Alineación a la derecha y margen superior
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button
            size="lg"
            className="bg-stone-200 hover:bg-stone-300 text-gray-700 font-semibold px-8 py-4 rounded-none uppercase tracking-wide text-sm" // Estilo del botón similar a la imagen
          >
            Tickets to the Museum
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;