import { motion } from "framer-motion";
import bookImage from '@/assets/libro_milton_hershey.jpg'; // Asegúrate de tener esta imagen o cámbiala por la que necesites
import document1 from '@/assets/documento1.jpg'; // Cambia por tus imágenes de documentos
import document2 from '@/assets/documento2.jpg'; // Cambia por tus imágenes de documentos
import document3 from '@/assets/documento3.jpg'; // Cambia por tus imágenes de documentos
import document4 from '@/assets/documento4.jpg'; // Cambia por tus imágenes de documentos

const InnovatorSection = () => {

  const galleryImages = [
    { src: document1, alt: "Documento 1" },
    { src: document2, alt: "Documento 2" },
    { src: bookImage, alt: "Milton S. Hershey Book" },
    { src: document3, alt: "Documento 3" },
    { src: document4, alt: "Documento 4" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      } 
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 lg:py-32 bg-white text-black">
      <div className="container mx-auto px-4">
        
        {/* Header section with text content */}
        <div className="flex flex-col lg:flex-row mb-16 lg:mb-24 gap-8 lg:gap-16">
          <motion.div 
            className="flex-1 lg:max-w-[40%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <p className="text-sm text-gray-500 mb-2">2024</p>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              INNOVATOR, BUSINESS MAN AND THE KING OF CHOCOLATE
            </h2>
            <p className="mt-4 text-gray-600">
              By Bob Boetticher Sr. Chairman, National Museum of Funeral History
            </p>
            <p className="mt-8 text-sm text-gray-500">
              Requested a simple funeral
            </p>
          </motion.div>

          <motion.div 
            className="flex-1 lg:max-w-[60%] text-lg text-gray-700 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <p className="mb-6">
              Have you ever had a craving for chocolate? Or craved your favorite snack, did you buy a candy bar with or without almonds, wrapped in brown paper with a silver print? If so, you owe that spectacular sugar rush to confectioner and brilliant businessman Milton S. Hershey.
            </p>
            <p className="mb-6">
              Milton Sours Hershey was born Sept. 13, 1857, in a Mennonite community. His limited formal education came to an end in 1871 when he left the fourth grade to work for a printer. He eventually left that job to become an apprentice to a confectioner and developed an interest in candy making. Before long, he was selling caramel candies from a cart for a penny each.
            </p>
            <p>
              Hershey’s Lancaster Caramel Company, launched in 1894, was the first to manufacture caramel using fresh milk. He later sold the company for $1 million, bought back his family homestead land and built an experimental chocolate factory that became the Hershey Chocolate Company and created thousands of jobs. The first Hershey’s candy bar was produced in 1900, followed by Hershey’s kisses in 1907.
            </p>
          </motion.div>
        </div>

        {/* Image Gallery section */}
        <motion.div
          className="relative h-[400px] md:h-[500px] overflow-hidden flex justify-center items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {galleryImages.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              className="absolute h-full object-cover shadow-2xl transition-transform duration-500 hover:z-20 hover:scale-105"
              style={{
                transform: `rotate(${-10 + index * 5}deg) translateX(${-150 + index * 80}px)`,
                left: '50%',
                top: '50%',
                transformOrigin: '50% 50%',
                zIndex: galleryImages.length - index,
              }}
              variants={imageVariants}
              custom={index}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default InnovatorSection;