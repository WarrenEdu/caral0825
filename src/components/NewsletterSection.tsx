import React from 'react';

const NewsletterSection = () => {
  return (
    <section 
      className="relative w-full h-[600px] flex items-center justify-center overflow-hidden" 
      style={{
        backgroundImage: 'url(https://nesweip.com/boceto_larco/imagenes/1-Ciudad-Sagrada-de-Caral-Supe.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', 
      }}
    >
      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenedor principal del formulario, centrado */}
      <div className="relative z-10 bg-white p-8 md:p-12 shadow-2xl rounded-none max-w-4xl w-full mx-4 md:mx-auto">
        <div className="flex flex-col md:flex-row items-start">
          {/* Columna izquierda: Título y descripción */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            {/* Mantengo sans-serif para la categoría por si es un detalle visual diferente */}
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-medium font-sans">
              MUSEO CARAL
            </p>
            {/* Título principal con "EB Garamond" */}
            <h3 
              className="text-4xl md:text-5xl font-garamond font-normal uppercase leading-tight mb-6 text-gray-900"
              style={{ color: 'rgb(82, 82, 82)', overflowWrap: 'break-word' }}
            >
              ÚNETE A LA CULTURA<br />
              CARAL
            </h3>
            {/* Descripción con "EB Garamond" */}
            <p className="text-gray-600 text-base leading-relaxed font-garamond font-normal"
               style={{ color: 'rgb(82, 82, 82)', overflowWrap: 'break-word' }}>
              Mantente al día con nuestras últimas noticias, nuevas exhibiciones
              y eventos suscribiéndote a nuestro boletín.
            </p>
          </div>

          {/* Columna derecha: Formulario de campos */}
          <div className="w-full md:w-1/2 pl-0 md:pl-8">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Correo Electrónico" 
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-600 placeholder-gray-400 text-gray-900 font-garamond font-normal" // Tipografía para input
                  style={{ color: 'rgb(82, 82, 82)', overflowWrap: 'break-word' }}
                />
              </div>
              <div>
                <label htmlFor="firstName" className="sr-only">Nombre</label>
                <input 
                  type="text" 
                  id="firstName" 
                  placeholder="Nombre" 
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-600 placeholder-gray-400 text-gray-900 font-garamond font-normal" // Tipografía para input
                  style={{ color: 'rgb(82, 82, 82)', overflowWrap: 'break-word' }}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Apellido</label>
                <input 
                  type="text" 
                  id="lastName" 
                  placeholder="Apellido" 
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-600 placeholder-gray-400 text-gray-900 font-garamond font-normal" // Tipografía para input
                  style={{ color: 'rgb(82, 82, 82)', overflowWrap: 'break-word' }}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="zipCode" className="sr-only">Código Postal</label>
                <input 
                  type="text" 
                  id="zipCode" 
                  placeholder="Código Postal" 
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-600 placeholder-gray-400 text-gray-900 font-garamond font-normal" // Tipografía para input
                  style={{ color: 'rgb(82, 82, 82)', overflowWrap: 'break-word' }}
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gray-900 text-white py-4 px-8 rounded-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 transition-colors duration-200 font-medium tracking-wide uppercase text-sm"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;