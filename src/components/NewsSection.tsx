import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
            “This might be my most favorite museum in Chicago. [Griffin MSI has] done a <br className="hidden md:block" />
            lot to take it beyond the ‘80s style exhibits into more, flashy 21st century <br className="hidden md:block" />
            displays.”
          </p>
          <p className="text-sm text-gray-600">
            Rachel Azark, CBS Chicago
          </p>
        </motion.div>

        {/* Grid de noticias/tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col group relative">
                <div className="relative overflow-hidden">
                  {/* Contenedor de la imagen - la imagen no se moverá ni recortará por sí misma */}
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover" /* La imagen se mantiene fija */
                    />
                  </div>
                </div>
                
                {/* Contenido de la tarjeta - Título y Excerpt siempre visibles, con efecto de cubrimiento */}
                <CardContent className="p-6 pt-4 flex-grow flex flex-col justify-end relative z-10">
                  {/* Contenedor para el texto que se subirá y cubrirá la imagen */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 pt-4 bg-white transition-transform duration-300" // Fondo blanco para cubrir la imagen
                    // initial={{ y: 0 }} // Siempre visible
                    // animate={{ y: 0 }} // Siempre visible
                    whileHover={{ y: -60 }} // Ajusta este valor para la cantidad de "recorte" de la imagen
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;