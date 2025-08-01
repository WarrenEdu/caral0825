import React from 'react';

// Única imagen de documento a usar, la de Caral.
const mainDocumentImage = {
  url: 'https://www.zonacaral.gob.pe/caralperu/civilizacion/imagenes/ciudadsagrada2.jpg',
  alt: 'Ciudad Sagrada de Caral'
};

const ArticleSection = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:space-x-16 items-start">
          {/* Columna Izquierda: Título y meta-información */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 pr-8">
            <span className="text-xs text-gray-500 font-light mb-2 block tracking-widest font-sans">2023</span>
            
            {/* Título principal con estilos de "EB Garamond" */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-garamond font-normal uppercase text-gray-700 leading-tight mb-4 tracking-tight"
                style={{ color: 'rgb(82, 82, 82)', overflowWrap: 'break-word' }}>
              INNOVATOR, BUSINESS MAN<br />AND THE KING OF CHOCOLATE
            </h1>
            
            {/* Subtítulo y texto adicional con estilos de "EB Garamond" si aplica, o default */}
            <p className="text-sm md:text-base text-gray-700 font-garamond font-normal mb-2"
               style={{ color: 'rgb(82, 82, 82)', overflowWrap: 'break-word' }}>
              By Bob Boetticher Sr. Chairman, National Museum of Funeral History
            </p>
            <p className="text-xs md:text-sm text-gray-600 italic font-garamond font-normal"
               style={{ color: 'rgb(82, 82, 82)', overflowWrap: 'break-word' }}>
              Requested a simple funeral.
            </p>
          </div>

          {/* Columna Derecha: Contenido del artículo */}
          <div className="lg:w-1/2 text-gray-700 leading-relaxed text-base md:text-lg pl-8">
            <p className="mb-6">
              Have you ever had a craving for chocolate? To satisfy your sweet tooth, did you buy a candy
              bar with or without almonds, wrapped in brown paper with a short print? If so, you owe that
              spectacular sugar rush to confectioner and brilliant businessman Milton S. Hershey.
            </p>
            <p className="mb-6">
              Milton Snavely Hershey was born Sept. 13, 1857, in a Mennonite community. He had limited
              formal education come to an end in 1871 when he left the fourth grade to work for a printer.
              He eventually left his job but became an apprentice to a confectioner and developed an
              interest in candy making. Before long, he was selling caramel candies from a cart to Fairs
              each.
            </p>
            <p>
              Hershey’s Lancaster Caramel Company, launched in 1886, was the first to manufacture
              caramel using fresh milk. He later sold the company for $1 million, bought back his family
            </p>
          </div>
        </div>

        {/* Sección de la ÚNICA imagen de documento en la parte inferior */}
        {/* Altura del contenedor padre ajustada para un rectángulo horizontal */}
        <div className="flex justify-center items-center mt-24 relative h-[300px] sm:h-[350px] md:h-[400px]"> 
          <div
            className="relative transition-all duration-500 ease-out transform group"
            style={{
              width: '600px',    // ¡Ancho del rectángulo AUMENTADO para ser horizontal!
              height: '350px',   // ¡Alto del rectángulo AJUSTADO para ser horizontal!
              boxShadow: '0 25px 50px rgba(0,0,0,0.35)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src={mainDocumentImage.url}
              alt={mainDocumentImage.alt}
              className="w-full h-full object-cover" // object-cover asegura que la imagen llene el contenedor
            />
            {/* Overlay rojizo o oscuro al pasar el mouse - mantenido */}
            <div
              className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300 group-hover:opacity-40"
              // Para oscurecer: bg-black group-hover:opacity-60
            ></div>
            {/* Título o texto opcional al pasar el mouse - mantenido */}
            <div className="absolute inset-0 flex items-center justify-center p-4 text-white text-center font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {mainDocumentImage.alt}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;