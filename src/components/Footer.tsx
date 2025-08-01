import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import zacLogo from "@/assets/zac-logo.png"; // Asegúrate de que esta ruta sea correcta

const Footer = () => {
  // Contenido de tu código original
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

  // Datos para la sección "Horario" (basado en la imagen de referencia)
  const hoursInfo = {
    title: "Horario",
    days: "Abierto: Miércoles - Lunes",
    time: "10am - 5pm",
    exceptions: ["Cerrado los Martes", "Días Feriados: Día de Acción de Gracias, Navidad,", "Víspera de Año Nuevo, y Año Nuevo"],
  };

  // Animation variants for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Columna 1: Información del Museo (equivalente a "The Mütter Museum" en la imagen) */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-start mb-6">
              <img
                src={zacLogo}
                alt="ZAC Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-caral-sand leading-relaxed mb-6 text-sm">
              La Civilización más antigua de América. Patrimonio Mundial de la Humanidad
              que preserva 5000 años de historia y cultura peruana.
            </p>

            {/* Información de Contacto */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-caral-ochre mt-1 flex-shrink-0" />
                <div className="text-caral-sand text-sm">
                  {contactInfo.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-caral-ochre flex-shrink-0" />
                <span className="text-caral-sand text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-caral-ochre flex-shrink-0" />
                <span className="text-caral-sand text-sm">{contactInfo.email}</span>
              </div>
            </div>

            {/* Redes Sociales */}
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

          {/* Columna 2: Visita (basado en la sección "Visit" de la imagen) */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Visita</h4>
            <ul className="space-y-3">
              {visitLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-caral-sand hover:text-white justify-start text-sm"
                    asChild
                  >
                    <a href={link.href}>{link.name}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Horario y Comprar Entradas (basado en la sección "Hours" de la imagen) */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">{hoursInfo.title}</h4>
            <div className="text-caral-sand space-y-2 mb-8 text-sm">
              <p>{hoursInfo.days}</p>
              <p>{hoursInfo.time}</p>
              {hoursInfo.exceptions.map((exc, i) => (
                <p key={i} className="text-xs italic opacity-80">{exc}</p>
              ))}
            </div>

            <Button className="bg-caral-ochre hover:bg-caral-ochre/80 text-caral-earth font-bold py-3 px-6 rounded-lg shadow-md flex items-center space-x-2">
              <span>Comprar Entradas</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Columna 4: Institución/Acerca de (basado en la sección "About" de la imagen) */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Institución</h4>
            <ul className="space-y-3">
              {institutionLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-caral-sand hover:text-white justify-start text-sm"
                    asChild
                  >
                    <a href={link.href}>{link.name}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <Separator className="my-12 bg-caral-sand/20" />

        {/* Instituciones Colaboradoras */}
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
              <div key={partner} className="text-caral-sand hover:text-white transition-colors cursor-pointer text-sm">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>

        <Separator className="mb-8 bg-caral-sand/20" />

        {/* Sección Inferior del Footer (Copyright y Enlaces Legales) */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-caral-sand">
            © 2024 Zona Arqueológica Caral. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm">
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