import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const AgendaSection = () => {
  const events = [
    {
      id: 1,
      title: "Visita Guiada Especializada",
      description: "Recorrido arqueológico con especialistas en la Civilización Caral",
      date: "Sábado 15 Agosto",
      time: "09:00 - 12:00",
      location: "Ciudad Sagrada de Caral",
      capacity: "25 personas",
      type: "Educativo"
    },
    {
      id: 2,
      title: "Taller de Arqueología para Niños",
      description: "Actividad educativa donde los niños aprenderán técnicas básicas de arqueología",
      date: "Domingo 16 Agosto",
      time: "14:00 - 17:00",
      location: "Museo de Sitio",
      capacity: "15 niños",
      type: "Familiar"
    },
    {
      id: 3,
      title: "Conferencia: Nuevos Hallazgos en Caral",
      description: "Presentación de los últimos descubrimientos arqueológicos en el sitio",
      date: "Viernes 21 Agosto",
      time: "18:00 - 20:00",
      location: "Auditorio Caral",
      capacity: "100 personas",
      type: "Académico"
    },
    {
      id: 4,
      title: "Festival de Música Ancestral",
      description: "Concierto con instrumentos musicales prehispánicos encontrados en Caral",
      date: "Sábado 29 Agosto",
      time: "19:00 - 21:00",
      location: "Anfiteatro Ceremonial",
      capacity: "200 personas",
      type: "Cultural"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Educativo": "bg-blue-100 text-blue-800",
      "Familiar": "bg-green-100 text-green-800",
      "Académico": "bg-purple-100 text-purple-800",
      "Cultural": "bg-caral-ochre/20 text-caral-earth"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

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
            PRÓXIMOS EVENTOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Agenda Caral
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre las actividades programadas en la Zona Arqueológica Caral. 
            Participa en nuestros eventos educativos y culturales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover-line shadow-card hover:shadow-elegant transition-all duration-500 border-0 hover-scale-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-caral-ochre" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-caral-ochre" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-caral-ochre" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-caral-ochre" />
                    <span className="text-sm">{event.capacity}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-caral-ochre hover:bg-caral-terracotta text-white"
                >
                  Reservar Lugar
                </Button>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-caral-ochre text-caral-ochre hover:bg-caral-ochre hover:text-white"
          >
            Ver calendario completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;