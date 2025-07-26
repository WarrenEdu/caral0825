import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import caralLogo from "@/assets/caral-logo.jpg";

const Footer = () => {
  const quickLinks = [
    "Institución",
    "Museo Caral",
    "Ruta Caral",
    "Conócenos",
    "Comunicaciones",
    "Publicaciones"
  ];

  const services = [
    "Visitas Guiadas",
    "Eventos Corporativos",
    "Turismo Escolar",
    "Investigación",
    "Tienda Caral",
    "Biblioteca Digital"
  ];

  const partners = [
    "UNESCO",
    "Ministerio de Cultura",
    "PROMPERÚ",
    "Universidad Nacional Mayor de San Marcos",
    "CONCYTEC"
  ];

  return (
    <footer className="bg-caral-earth text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={caralLogo} 
                alt="Caral Logo" 
                className="h-12 w-12 object-cover rounded"
              />
              <div>
                <h3 className="text-2xl font-bold">CARAL</h3>
                <p className="text-caral-sand text-sm">PERÚ</p>
              </div>
            </div>
            <p className="text-caral-sand leading-relaxed mb-6">
              La Civilización más antigua de América. Patrimonio Mundial de la Humanidad 
              que preserva 5000 años de historia y cultura peruana.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-caral-sand hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-caral-sand hover:text-white hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-caral-sand hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-caral-sand hover:text-white justify-start"
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-caral-sand hover:text-white justify-start"
                  >
                    {service}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-caral-ochre mt-0.5 flex-shrink-0" />
                <div className="text-caral-sand">
                  <p>Km 184 Panamericana Norte</p>
                  <p>Valle de Supe, Barranca</p>
                  <p>Lima, Perú</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-caral-ochre" />
                <span className="text-caral-sand">+51 1 205-2515</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-caral-ochre" />
                <span className="text-caral-sand">info@caralperu.gob.pe</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-caral-sand/20" />

        {/* Partners */}
        <div className="mb-12">
          <h4 className="text-lg font-semibold mb-6 text-center">Instituciones Colaboradoras</h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner) => (
              <div key={partner} className="text-caral-sand hover:text-white transition-colors cursor-pointer">
                {partner}
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-8 bg-caral-sand/20" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-caral-sand text-sm">
            © 2024 Zona Arqueológica Caral. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <Button variant="ghost" className="p-0 h-auto text-caral-sand hover:text-white">
              Política de Privacidad
            </Button>
            <Button variant="ghost" className="p-0 h-auto text-caral-sand hover:text-white">
              Términos de Uso
            </Button>
            <Button variant="ghost" className="p-0 h-auto text-caral-sand hover:text-white">
              Mapa del Sitio
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;