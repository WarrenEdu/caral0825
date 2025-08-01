import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://nesweip.com/boceto_larco/imagenes/CARAL.jpg',
    category: 'CULTURA',
    title: 'La Civilización Caral',
    description: 'Descubre la ciudad más antigua de América y su legado.',
    link: 'Ver Caral'
  },
  {
    url: 'https://nesweip.com/boceto_larco/imagenes/%C3%81SPERO.jpg',
    category: 'SITIO ARQUEOLÓGICO',
    title: 'Áspero: Pesca Ancestral',
    description: 'Conoce el antiguo puerto pesquero de la civilización Caral.',
    link: 'Explorar Áspero'
  },
  {
    url: 'https://nesweip.com/boceto_larco/imagenes/VICHAMA.jpg',
    category: 'HISTORIA',
    title: 'Vichama: La Memoria Viva',
    description: 'Un sitio con murales que narran la resiliencia de sus habitantes.',
    link: 'Visitar Vichama'
  },
  {
    url: 'https://nesweip.com/boceto_larco/imagenes/PE%C3%91ICO_BANNER.jpg',
    category: 'EXHIBICIÓN',
    title: 'Peñico: Tesoros Ocultos',
    description: 'Explora los hallazgos únicos de este enigmático lugar.',
    link: 'Conocer Peñico'
  },
  {
    url: 'https://nesweip.com/boceto_larco/imagenes/1-Ciudad-Sagrada-de-Caral-Supe.jpg',
    category: 'DESTINO',
    title: 'Ciudad Sagrada de Caral',
    description: 'Un viaje al corazón de la civilización más antigua de América.',
    link: 'Detalles de Caral'
  },
  {
    url: 'https://portal.andina.pe/EDPFotografia3/thumbnail/2023/08/16/000985821M.jpg',
    category: 'ARTE',
    title: 'Legado de Peñico',
    description: 'Un acercamiento personal a la iconografía de Peñico.',
    link: 'Más sobre Peñico'
  }
];

const AgendaSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000, // ¡MODIFICADO! Ahora es 4 segundos (4000 milisegundos)
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        }
      }
    ]
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="relative w-full overflow-hidden py-20 bg-white">
      <style>
        {`
          /* Contenedor general del slider */
          .carousel-container .slick-slider {
            margin: 0 auto;
            padding: 0;
            overflow: hidden !important;
          }

          /* El track que contiene todos los slides */
          .carousel-container .slick-track {
            display: flex !important;
            align-items: center;
          }

          /* Cada slide individual */
          .carousel-container .slick-slide {
            transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
            opacity: 0.7;
            padding: 0 !important;
            box-sizing: border-box;
            position: relative;
            width: calc(33.33% - 60px) !important;
            margin: 0 -30px !important;
          }

          /* Estilo para los slides NO centrados (los laterales) */
          .carousel-container .slick-slide:not(.slick-center) {
            transform: scale(0.85);
            opacity: 0.7;
          }

          /* Overlay marrón para slides no centrados (laterales) */
          .carousel-container .slick-slide:not(.slick-center)::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #a0522d;
            opacity: 0.6;
            z-index: 1;
          }

          /* Estilo para el slide central */
          .carousel-container .slick-slide.slick-center {
            transform: scale(1.1);
            opacity: 1;
            z-index: 10;
            margin: 0 !important;
            width: calc(33.33% + 0px) !important;
          }

          /* El contenedor de la lista de slides (visible al usuario) */
          .carousel-container .slick-list {
            overflow: hidden !important;
            padding: 60px 0 !important;
            margin: 0 !important;
          }

          /* Asegura que el div interno de cada slide ocupe todo el espacio y esté sobre el overlay marrón */
          .carousel-container .slick-slide > div {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            position: relative;
            z-index: 2;
          }

          /* Contenido de la tarjeta del slide (estilos basados en tu código anterior) */
          .slide-content {
            position: relative;
            width: 100%;
            height: 500px;
            border-radius: 0;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: flex-end;
          }

          /* El overlay degradado oscuro en la parte inferior de cada tarjeta */
          .slide-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            padding: 40px 30px 30px;
            color: white;
            z-index: 2;
          }

          /* Estilos para la categoría del slide */
          .slide-category {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #ffffff;
            margin-bottom: 8px;
            opacity: 0.9;
          }

          /* Estilos para el título del slide */
          .slide-title {
            font-size: 36px;
            font-weight: 300;
            line-height: 1.1;
            margin-bottom: 12px;
            color: white;
          }

          /* Estilos para la descripción del slide */
          .slide-description {
            font-size: 14px;
            line-height: 1.5;
            color: rgba(255,255,255,0.9);
            margin-bottom: 20px;
            max-width: 280px;
          }

          /* Estilos para el enlace "Ver más" del slide */
          .slide-link {
            font-size: 14px;
            font-weight: 500;
            color: #ff6b35;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: border-color 0.3s ease;
          }

          .slide-link:hover {
            border-bottom-color: #ff6b35;
          }

          /* Estilos para los botones de navegación personalizados (flechas) */
          .nav-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }

          .nav-arrow:hover {
            background: white;
            transform: translateY(-50%) scale(1.1);
          }

          .nav-arrow.prev {
            left: 30px;
          }

          .nav-arrow.next {
            right: 30px;
          }

          /* Media queries para responsive */
          @media (max-width: 768px) {
            .slide-content {
              height: 400px;
            }
            
            .slide-title {
              font-size: 28px;
            }
            
            .nav-arrow {
              width: 40px;
              height: 40px;
            }
            
            .nav-arrow.prev {
              left: 15px;
            }
            
            .nav-arrow.next {
              right: 15px;
            }
          }
        `}
      </style>

      {/* Título de la sección "Agenda Caral" */}
      <div className="mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Agenda Caral</h2>
      </div>

      <div className="relative w-full carousel-container">
        {/* Botones de navegación personalizados */}
        <button className="nav-arrow prev" onClick={prevSlide}>
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        
        <button className="nav-arrow next" onClick={nextSlide}>
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
        
        {/* Componente Slider de react-slick */}
        <Slider ref={sliderRef} {...settings}>
          {images.map((item, index) => (
            <div key={index}>
              <div 
                className="slide-content"
                style={{
                  backgroundImage: `url(${item.url})`,
                }}
              >
                <div className="slide-overlay">
                  <div className="slide-category">{item.category}</div>
                  <h3 className="slide-title">{item.title}</h3>
                  <p className="slide-description">{item.description}</p>
                  <a href="#" className="slide-link">{item.link}</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AgendaSection;