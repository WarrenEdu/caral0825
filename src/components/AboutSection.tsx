import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// No necesitamos Card, CardContent, MapPin, Users, Calendar, Award para este diseño específico
// import { Card, CardContent } from "@/components/ui/card";
// import { MapPin, Users, Calendar, Award } from "lucide-react";
// import { useInView } from "framer-motion"; // useInView no es necesario si solo usamos whileInView en el padre

// Asume que tienes una imagen en tus assets para esta sección, por ejemplo:
import museumImage from "@/assets/presidential-funerals.png"; // Reemplaza con la ruta real de tu imagen

const AboutSection = () => {
  // Las estadísticas ya no son necesarias para este diseño, las eliminamos o comentamos
  /*
  const stats = [
    { icon: Calendar, value: "5000+", label: "Años de antigüedad" },
    { icon: MapPin, value: "626", label: "Hectáreas" },
    { icon: Users, value: "18", label: "Sitios arqueológicos" },
    { icon: Award, value: "2009", label: "Patrimonio Mundial" }
  ];
  */

  return (
    <section className="py-20 bg-background text-foreground relative z-10"> {/* Ajusta el fondo y color de texto si es necesario */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start"> {/* Cambiado a flex-col y lg:flex-row */}
          
          {/* Content (Left Side - like the text on the left in image_e5fd83.png) */}
          <motion.div
            className="lg:w-1/2" // Ocupa la mitad del ancho en pantallas grandes
            initial={{ opacity: 0, x: -50 }} // Animación desde la izquierda
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }} // Ajusta amount para cuándo se activa la animación
          >
            <motion.p 
              className="text-muted-foreground text-sm uppercase tracking-widest mb-2" // Pequeño texto superior
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The National Museum of Funeral History
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" // Título principal
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              WELCOME TO OUR MUSEUM
            </motion.h2>

            <motion.div 
              className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-sm md:text-base"> {/* Ajustado el tamaño de texto a sm/base para parecerse a la imagen */}
                The National Museum of Funeral History is an educational experience like no other and offers something for everyone. Discover America's largest collection of authentic, historical funeral service items.
              </p>
              <p className="text-sm md:text-base"> {/* Segundo párrafo para el texto de la derecha */}
                Learn about caskets and coffins, hearses through history, plus the funerals of Presidents, Popes, celebrities and more while you witness the cultural heritage of the funeral service industry and its time-honored tradition of compassion.
              </p>
            </motion.div>

            {/* Este div contendría los logos/premios si los necesitas, similar a image_e5fd83.png */}
            <motion.div
                className="flex items-center space-x-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                {/* Aquí irían tus imágenes de premios/logos si los tienes */}
                {/* Ejemplo: <img src={award1} alt="Award 1" className="h-16" /> */}
                {/* Ejemplo: <img src={award2} alt="Award 2" className="h-16" /> */}
                 <p className="text-xs text-gray-500 italic">Premios y Reconocimientos (Placeholder)</p> {/* Placeholder */}
            </motion.div>

          </motion.div>

          {/* Image/Gallery (Right Side - like the image in image_e5fd83.png) */}
          <motion.div
            className="lg:w-1/2 flex justify-center items-center" // Ocupa la mitad del ancho y centra el contenido
            initial={{ opacity: 0, x: 50 }} // Animación desde la derecha
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img 
              src={museumImage} // Usa la imagen importada
              alt="Presidential Funerals Exhibit" 
              className="w-full h-auto max-w-lg shadow-lg rounded-lg object-cover" // Ajusta el tamaño y estilo de la imagen
            />
          </motion.div>

        </div>
        
        {/* Botón "Tickets to the Museum" debajo de la sección de imagen en la imagen de referencia */}
        <motion.div
          className="flex justify-center mt-12 lg:mt-0 lg:justify-end lg:pr-[calc(50%+8rem)]" // Ajusta la posición del botón
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-caral-ochre hover:bg-caral-ochre/90 text-white font-semibold px-8 py-4" // Color del botón similar al de la imagen
          >
            Tickets to the Museum
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;