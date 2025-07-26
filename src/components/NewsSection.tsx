import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Nuevos Descubrimientos en la Ciudad Sagrada de Caral",
      excerpt: "Arqueólogos han encontrado evidencias de un complejo sistema de canales de riego que revoluciona nuestra comprensión sobre la organización social de Caral.",
      date: "15 de Julio, 2024",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center",
      category: "Investigación"
    },
    {
      id: 2,
      title: "Festival de la Civilización Caral 2024",
      excerpt: "Se realizará el evento cultural más importante del año, donde se presentarán danzas, música y gastronomía ancestral de la cultura Caral.",
      date: "28 de Julio, 2024",
      image: "https://images.unsplash.com/photo-1533554956664-967b8e2d4447?w=600&h=400&fit=crop&crop=center",
      category: "Eventos"
    },
    {
      id: 3,
      title: "Caral: Patrimonio Mundial de la Humanidad",
      excerpt: "Conmemoramos 15 años desde que la UNESCO declaró a Caral como Patrimonio Mundial, reconociendo su valor universal excepcional.",
      date: "28 de Junio, 2024",
      image: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=600&h=400&fit=crop&crop=center",
      category: "Patrimonio"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Card key={article.id} className="group shadow-card hover:shadow-elegant transition-all duration-300 border-0 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-caral-ochre text-caral-ochre hover:bg-caral-ochre hover:text-white"
          >
            Ver todas las noticias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;