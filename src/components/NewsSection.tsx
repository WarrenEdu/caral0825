import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import noticiaTesoroImg from "@/assets/noticia-tesoro.png";
import noticiaFestivalImg from "@/assets/noticia-festival.jpg";
import YouTubeVideo from "@/components/YouTubeVideo";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Nuevos Descubrimientos en la Ciudad Sagrada de Caral",
      excerpt: "Arqueólogos han encontrado evidencias de un complejo sistema de canales de riego que revoluciona nuestra comprensión sobre la organización social de Caral.",
      date: "15 de Julio, 2024",
      image: noticiaTesoroImg,
      category: "Investigación"
    },
    {
      id: 2,
      title: "Festival de la Civilización Caral 2024",
      excerpt: "Se realizará el evento cultural más importante del año, donde se presentarán danzas, música y gastronomía ancestral de la cultura Caral.",
      date: "28 de Julio, 2024",
      image: noticiaFestivalImg,
      category: "Eventos"
    },
    {
      id: 3,
      title: "Caral: Patrimonio Mundial de la Humanidad",
      excerpt: "Conmemoramos 15 años desde que la UNESCO declaró a Caral como Patrimonio Mundial, reconociendo su valor universal excepcional.",
      date: "28 de Junio, 2024",
      image: "",
      category: "Patrimonio",
      isVideo: true,
      videoId: "PlFSHmGoMbY"
    }
  ];

  return (
    <section className="py-20 section-overlay relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-caral-ochre font-medium text-lg mb-4 tracking-wide">
            ÚLTIMAS NOTICIAS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Noticias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantente informado sobre los últimos descubrimientos, eventos y actividades 
            de la Zona Arqueológica Caral
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group card-hover-line shadow-card hover:shadow-elegant transition-all duration-500 border-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  {(article as any).isVideo ? (
                    <div className="h-48">
                      <YouTubeVideo 
                        videoId={(article as any).videoId}
                        title={article.title}
                        className="h-full"
                      />
                    </div>
                  ) : (
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover hover-scale-smooth"
                    />
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-caral-ochre text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
              
              <CardHeader className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-caral-ochre transition-colors">
                  {article.title}
                </h3>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-caral-ochre hover:text-caral-terracotta group/btn"
                >
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
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
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;