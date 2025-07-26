import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Calendar, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Calendar, value: "5000+", label: "Años de antigüedad" },
    { icon: MapPin, value: "626", label: "Hectáreas" },
    { icon: Users, value: "18", label: "Sitios arqueológicos" },
    { icon: Award, value: "2009", label: "Patrimonio Mundial" }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <p className="text-caral-ochre font-medium text-lg mb-4 tracking-wide">
                SOBRE NOSOTROS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                La Zona Arqueológica Caral
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                La Zona Arqueológica Caral es responsable de las actividades de investigación, 
                conservación y difusión de los valores sociales y culturales de Caral, 
                la Civilización más antigua de América.
              </p>
              
              <p>
                Somos los encargados de preservar el importante patrimonio arqueológico de la 
                Civilización Caral para beneficio de las poblaciones actuales y del futuro.
              </p>
              
              <p>
                Desarrollamos actividades de investigación científica, conservación del patrimonio 
                cultural, gestión sostenible del territorio y promoción del desarrollo social y 
                económico de las comunidades locales, contribuyendo al fortalecimiento de la 
                identidad cultural nacional.
              </p>
            </div>

            <Button 
              size="lg"
              className="mt-8 bg-primary hover:bg-caral-earth text-primary-foreground font-semibold px-8 py-4"
            >
              Más Información
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-caral-ochre/10 rounded-full mb-4">
                    <stat.icon className="h-6 w-6 text-caral-ochre" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;