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
    <section className="py-20 bg-[rgb(21,55,108)] text-white">
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
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full w-10 h-10 pointer-events-auto">
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full w-10 h-10 pointer-events-auto">
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>

          <p className="italic text-xl md:text-2xl mb-6">
            “This might be my most favorite museum in Chicago. [Griffin MSI has] done a <br className="hidden md:block" />
            lot to take it beyond the ‘80s style exhibits into more, flashy 21st century <br className="hidden md:block" />
            displays.”
          </p>
          <p className="text-sm text-gray-300">
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
                  {/* Contenedor de la imagen para el efecto de recorte y subida */}
                  {/* *** CAMBIO CLAVE AQUÍ: h-48 y group-hover:h-[calc(48*0.8px)] para un 80% de la altura inicial *** */}
                  <div className="h-48 group-hover:h-[calc(48*0.8px)] transition-[height] duration-300 relative overflow-hidden"> {/* Ojo: Tailind no soporta calc() directamente en h-x, ajustamos a px para el ejemplo */}
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:-translate-y-[10%]" /* Subida de la imagen */
                    />
                  </div>
                </div>
                
                {/* Contenido de la tarjeta - Título visible siempre, excerpt aparece al hover */}
                <CardContent className="p-6 pt-4 flex-grow flex flex-col justify-end relative z-10">
                  {/* Título siempre visible */}
                  <h3 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h3>

                  {/* Excerpt que aparece al hover */}
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 text-sm text-gray-600 leading-relaxed overflow-hidden"
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{ opacity: 0, height: 0, y: 10 }}
                    whileInView={{ opacity: 0, height: 0, y: 10 }}
                    whileHover={{ opacity: 1, height: "auto", y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p>{article.excerpt}</p>
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