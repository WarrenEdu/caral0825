import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car, Camera, Star } from "lucide-react";
import { motion } from "framer-motion";

const RouteSection = () => {
  const routeStops = [
    {
      id: 1,
      name: "Ciudad Sagrada de Caral",
      description: "El centro ceremonial más importante de la civilización Caral",
      duration: "2-3 horas",
      highlights: ["Pirámide Mayor", "Anfiteatro Circular", "Sector Residencial"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Complejo Vichama",
      description: "Sitio arqueológico con impresionantes relieves en barro",
      duration: "1-2 horas",
      highlights: ["Relieves Polícromos", "Plaza Ceremonial", "Frisos de Barro"],
      image: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Áspero",
      description: "Centro pesquero de la Civilización Caral ubicado en la costa",
      duration: "1.5 horas",
      highlights: ["Huaca de los Ídolos", "Huaca de los Sacrificios", "Vista al océano"],
      image: "https://images.unsplash.com/photo-1533554956664-967b8e2d4447?w=600&h=400&fit=crop&crop=center"
    }
  ];

  const routeInfo = [
    { icon: Car, label: "Distancia total", value: "185 km desde Lima" },
    { icon: Clock, label: "Duración", value: "1-2 días completos" },
    { icon: Star, label: "Dificultad", value: "Moderada" },
    { icon: Camera, label: "Mejor época", value: "Abril - Octubre" }
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
            TURISMO ARQUEOLÓGICO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ruta Caral
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Embárcate en un viaje único a través de la civilización más antigua de América. 
            Descubre los sitios arqueológicos que revelan 5000 años de historia
          </p>
        </motion.div>

        {/* Route Info Cards */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {routeInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="text-center shadow-card border-0 hover-scale-smooth">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-caral-ochre/10 rounded-full mb-4">
                    <info.icon className="h-6 w-6 text-caral-ochre" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Route Stops */}
        <div className="space-y-8">
          {routeStops.map((stop, index) => (
            <motion.div
              key={stop.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-card border-0 overflow-hidden hover-scale-smooth">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={stop.image} 
                    alt={stop.name}
                    className="w-full h-64 lg:h-full object-cover hover-scale-smooth"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-caral-ochre text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {stop.id}
                    </div>
                    <span className="text-caral-ochre font-medium text-lg">
                      PARADA {stop.id}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {stop.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {stop.description}
                  </p>
                  
                  <div className="flex items-center text-muted-foreground mb-6">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Duración recomendada: {stop.duration}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Puntos destacados:</h4>
                    <ul className="space-y-2">
                      {stop.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <Star className="h-4 w-4 mr-2 text-caral-ochre" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="w-fit border-caral-ochre text-caral-ochre hover:bg-caral-ochre hover:text-white"
                  >
                    Más información
                  </Button>
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-caral-ochre hover:bg-caral-terracotta text-white font-semibold px-8 py-4"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Planificar mi visita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RouteSection;