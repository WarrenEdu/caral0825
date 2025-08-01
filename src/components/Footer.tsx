import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // Import motion
import zacLogo from "@/assets/zac-logo.png"; // Assuming this path is correct for your logo

const Footer = () => {
  const institutionLinks = [
    { name: "Institución", href: "#" },
    { name: "Museo Caral", href: "#" },
    { name: "Ruta Caral", href: "#" },
    { name: "Conócenos", href: "#" },
    { name: "Comunicaciones", href: "#" },
    { name: "Publicaciones", href: "#" },
  ];

  const visitLinks = [
    { name: "Visitas Guiadas", href: "#" },
    { name: "Eventos Corporativos", href: "#" },
    { name: "Turismo Escolar", href: "#" },
    { name: "Investigación", href: "#" },
    { name: "Tienda Caral", href: "#" },
    { name: "Biblioteca Digital", href: "#" },
  ];

  const contactInfo = {
    address: ["Km 184 Panamericana Norte", "Valle de Supe, Barranca", "Lima, Perú"],
    phone: "+51 1 205-2515",
    email: "info@caralperu.gob.pe",
  };

  const partners = [
    "UNESCO",
    "Ministerio de Cultura",
    "PROMPERÚ",
    "Universidad Nacional Mayor de San Marcos",
    "CONCYTEC",
  ];

  // Animation variants for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children by 0.1 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-caral-earth text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate when 20% of element is in view
        >
          {/* Brand & Description */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-start mb-6">
              <img 
                src={zacLogo} 
                alt="ZAC Logo" 
                className="h-16 w-auto object-contain"
              />
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
          </motion.div>

          {/* Institution Links (Formerly Quick Links) */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Institución</h4>
            <ul className="space-y-3">
              {institutionLinks.map((link) => (
                <li key={link.name}>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-caral-sand hover:text-white justify-start"
                    asChild // Render as an anchor tag for navigation
                  >
                    <a href={link.href}>{link.name}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visit Links (Formerly Services) */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Visita</h4>
            <ul className="space-y-3">
              {visitLinks.map((service) => (
                <li key={service.name}>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-caral-sand hover:text-white justify-start"
                    asChild
                  >
                    <a href={service.href}>{service.name}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info & Call to Action (Tickets) */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-caral-ochre mt-0.5 flex-shrink-0" />
                <div className="text-caral-sand">
                  {contactInfo.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-caral-ochre" />
                <span className="text-caral-sand">{contactInfo.phone}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-caral-ochre" />
                <span className="text-caral-sand">{contactInfo.email}</span>
              </div>
            </div>

            {/* Call to Action: Buy Tickets / Explore */}
            <h4 className="text-lg font-semibold mb-4">Experiencia Caral</h4>
            <Button className="bg-caral-ochre hover:bg-caral-ochre/80 text-caral-earth font-bold py-3 px-6 rounded-lg shadow-md flex items-center space-x-2">
              <span>Comprar Entradas</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <Separator className="my-12 bg-caral-sand/20" />

        {/* Partners */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-6 text-center">Instituciones Colaboradoras</h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner) => (
              <div key={partner} className="text-caral-sand hover:text-white transition-colors cursor-pointer">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>

        <Separator className="mb-8 bg-caral-sand/20" />

        {/* Bottom */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
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
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;