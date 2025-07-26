import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Km 184 Panamericana Norte", "Valle de Supe, Barranca", "Lima, Perú"]
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+51 1 205-2515", "+51 968 441 245"]
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      details: ["info@caralperu.gob.pe", "turismo@caralperu.gob.pe"]
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lunes a Domingo", "9:00 AM - 4:00 PM", "Cerrado: 25 de Diciembre"]
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
            CONTÁCTANOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestros servicios o quieres planificar tu visita? 
            Estamos aquí para ayudarte
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-caral-ochre/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-caral-ochre" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <div className="space-y-1">
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="mt-8 shadow-card border-0 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-caral-sand to-caral-stone flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-caral-ochre mx-auto mb-4" />
                  <p className="text-muted-foreground">Mapa interactivo</p>
                  <p className="text-sm text-muted-foreground">Valle de Supe, Barranca</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envíanos un mensaje
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo pronto
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre
                    </label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Apellido
                    </label>
                    <Input placeholder="Tu apellido" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Correo Electrónico
                  </label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Teléfono
                  </label>
                  <Input type="tel" placeholder="+51 999 999 999" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Asunto
                  </label>
                  <Input placeholder="¿En qué te podemos ayudar?" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Escribe tu mensaje aquí..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button 
                  size="lg"
                  className="w-full bg-caral-ochre hover:bg-caral-terracotta text-white font-semibold"
                >
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;