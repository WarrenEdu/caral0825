import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Importamos ArrowLeft también
import { motion } from "framer-motion";
// import noticiaTesoroImg from "@/assets/noticia-tesoro.png"; // Ya no importamos desde assets
// import noticiaFestivalImg from "@/assets/noticia-festival.jpg"; // Ya no importamos desde assets
// import YouTubeVideo from "@/components/YouTubeVideo"; // Esto podría no ser necesario si no hay videos en este diseño

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Events",
      excerpt: "Join us on special dates with even more happening at the Museum.",
      image: "https://nesweip.com/boceto_larco/imagenes/03_NOTICIA_TESORO.png", // Nueva URL de imagen
    },
    {
      id: 2,
      title: "Accessibility",
      excerpt: "Learn about accessibility features available for your visit.",
      image: "https://nesweip.com/boceto_larco/imagenes/02_NOTICIA_PE%C3%91ICO.jpg", // Nueva URL de imagen
    },
    {
      id: 3,
      title: "Groups + Field Trips",
      excerpt: "Bringing a group of 15 or more? Here's where to start planning.",
      image: "https://nesweip.com/boceto_larco/imagenes/01_NOTICIA_PE%C3%91ICO.jpg", // Nueva URL de imagen
    }
    // Si necesitas más noticias, puedes añadirlas aquí, el grid se adaptará
  ];

  return (
    <section className="py-20 bg-[rgb(21,55,108)] text-white"> {/* Fondo azul oscuro */}
      <div className="container mx-auto px-4 max-w-5xl"> {/* Contenedor más estrecho para el contenido superior */}
        
        {/* Encabezado con cita y flechas de navegación */}
        <motion.div
          className="text-center mb-24 relative" // Añadimos relative para posicionar las flechas
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Flechas de navegación (visuales, sin funcionalidad) */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between items-center z-10 pointer-events-none">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full w-10 h-10 pointer-events-auto">
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full w-10 h-10 pointer-events-auto">
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>

          <p className="italic text-xl md:text-2xl mb-6">
            “This might be my most favorite museum in Chicago. [Griffin MSI has] done a <br className="hidden md:block" /> {/* Salto de línea para desktop */}
            lot to take it beyond the ‘80s style exhibits into more, flashy 21st century <br className="hidden md:block" /> {/* Salto de línea para desktop */}
            displays.”
          </p>
          <p className="text-sm text-gray-300">
            Rachel Azark, CBS Chicago
          </p>
        </motion.div>

        {/* Grid de noticias/tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Grid de 3 columnas para desktop */}
          {news.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col group"> {/* Fondo blanco para las tarjetas */}
                <div className="relative overflow-hidden">
                  {/* Contenedor de la imagen para el efecto de escala */}
                  <div className="h-48"> {/* Altura fija para el contenedor de la imagen */}
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[0.98] group-hover:h-[95%] transform origin-bottom" /* Efecto de reducción de altura y zoom sutil */
                    />
                  </div>
                </div>
                
                <CardContent className="p-6 flex-grow flex flex-col justify-end"> {/* Flex-grow para ocupar espacio restante, justify-end para anclar abajo */}
                  {/* Contenedor para el texto que se sube */}
                  <motion.div
                    className="transition-transform duration-300 group-hover:-translate-y-2" // Efecto de subida al hover
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

        {/* El botón "Ver todas las noticias" parece no estar en este diseño específico, lo comentamos o quitamos */}
        {/* <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline"
            size="lg"
            className="border-caral-ochre text-caral-ochre hover:bg-caral-ochre hover:text-white"
          >
            Ver todas las noticias
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default NewsSection;