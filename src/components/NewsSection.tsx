import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // Solo necesitamos motion

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Nuevos Descubrimientos en la Ciudad Sagrada de Caral",
      excerpt: "Arqueólogos han encontrado evidencias de un complejo sistema de canales de riego que revoluciona nuestra comprensión sobre la organización social de Caral.",
      image: "https://nesweip.com/boceto_larco/imagenes/03_NOTICIA_TESORO.png",
    },
    {
      id: 2,
      title: "Festival de la Civilización Caral 2024",
      excerpt: "Se realizará el evento cultural más importante del año, donde se presentarán danzas, música y gastronomía ancestral de la cultura Caral.",
      image: "https://nesweip.com/boceto_larco/imagenes/02_NOTICIA_PE%C3%91ICO.jpg",
    },
    {
      id: 3,
      title: "Caral: Patrimonio Mundial de la Humanidad",
      excerpt: "Conmemoramos 15 años desde que la UNESCO declaró a Caral como Patrimonio Mundial, reconociendo su valor universal excepcional.",
      image: "https://nesweip.com/boceto_larco/imagenes/01_NOTICIA_PE%C3%91ICO.jpg",
    },
  ];

  return (
    <section className="py-20 bg-stone-200 text-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Encabezado con cita y flechas de navegación */}
        <motion.div
          className="text-center mb-24 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Flechas de navegación (visuales, sin funcionalidad) */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between items-center z-10 pointer-events-none">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-600/20 rounded-full w-10 h-10 pointer-events-auto">
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-600/20 rounded-full w-10 h-10 pointer-events-auto">
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>

          <p className="italic text-xl md:text-2xl mb-6 text-gray-800">
            “Mantente informado sobre los últimos descubrimientos, <br className="hidden md:block" />
            eventos y actividades de la Zona <br className="hidden md:block" />
            Arqueológica Caral.”
          </p>
          <p className="text-sm text-gray-600">
            NOTICIAS
          </p>
        </motion.div>

        {/* Grid de noticias/tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente individual para cada tarjeta de noticias
const NewsCard = ({ article, index }) => {
  // Definimos las variantes para la animación de los hijos
  const cardVariants = {
    initial: { }, // Estado inicial de la tarjeta, no se mueve
    hover: { },   // Estado de hover de la tarjeta, no se mueve
  };

  const imageVariants = {
    initial: { y: 0 }, // Imagen en su posición inicial
    hover: { y: -10, transition: { duration: 0.3, ease: "easeOut" } }, // Imagen se sube 10px
  };

  const textVariants = {
    initial: { y: 0 }, // Texto en su posición inicial (debajo de la imagen)
    hover: { y: -60, transition: { duration: 0.3, ease: "easeOut" } }, // Texto se sube 60px (ajusta este valor)
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* La Card principal es un motion.div que detecta el hover y tiene altura fija */}
      <motion.div
        className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-[400px]" // Altura fija para la tarjeta
        variants={cardVariants} // No hay animación de la tarjeta en sí
        initial="initial"
        whileHover="hover" // Detecta el hover en toda la tarjeta
      >
        {/* Contenedor de la imagen - es un motion.div y usa las variantes de imagen */}
        <motion.div 
          className="h-48 relative overflow-hidden"
          variants={imageVariants} // Aplica las variantes de la imagen
        >
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover" 
          />
        </motion.div>
        
        {/* Contenedor del texto - es un motion.div y usa las variantes de texto */}
        <motion.div
          className="p-6 pt-4 bg-white flex-grow flex flex-col justify-end relative z-10" // z-10 para asegurar que el texto esté encima
          variants={textVariants} // Aplica las variantes del texto
        >
          <h3 className="text-xl font-semibold mb-2">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {article.excerpt}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NewsSection;