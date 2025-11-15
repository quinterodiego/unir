import React from 'react';

const Productos = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Band',
      descripcion: 'Pulsera inteligente con tecnología NFC para pagos rápidos y sin contacto. Perfecta para el día a día.',
      icono: (
        <svg className="w-16 h-16 text-unirPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      nombre: 'Card',
      descripcion: 'Tarjeta física con chip y NFC integrado. Diseño minimalista y elegante para tus pagos cotidianos.',
      icono: (
        <svg className="w-16 h-16 text-unirPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 3,
      nombre: 'KeyTag',
      descripcion: 'Llavero inteligente compacto. Llevá tu billetera digital siempre con vos, sin ocupar espacio.',
      icono: (
        <svg className="w-16 h-16 text-unirPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-unirBg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-unirTitle mb-6">
            Nuestros Productos
          </h2>
          <p className="text-lg md:text-xl text-unirText max-w-3xl mx-auto">
            Tres formas innovadoras de pagar, diseñadas para adaptarse a tu estilo de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <div
              key={producto.id}
              className="bg-[#0F1A27] p-8 rounded-2xl border border-white/5 hover:border-unirPrimary/30 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                {producto.icono}
              </div>
              <h3 className="text-2xl font-bold text-unirWhite mb-4">
                {producto.nombre}
              </h3>
              <p className="text-unirText leading-relaxed">
                {producto.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;

