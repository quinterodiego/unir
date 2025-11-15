import React from 'react';

const CasosDeUso = () => {
  const casos = [
    {
      titulo: 'Transporte público',
      descripcion: 'Pagá tu boleto de subte, tren o colectivo con un simple toque.',
      icono: (
        <svg className="w-8 h-8 text-unirPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      titulo: 'Compras diarias',
      descripcion: 'Supermercados, farmacias y comercios. Pagá rápido y sin complicaciones.',
      icono: (
        <svg className="w-8 h-8 text-unirPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      titulo: 'Restaurantes y cafés',
      descripcion: 'Disfrutá de tu comida sin esperar. Pagá al instante al terminar.',
      icono: (
        <svg className="w-8 h-8 text-unirPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      titulo: 'Gimnasios y entretenimiento',
      descripcion: 'Accedé a servicios y eventos pagando con tu dispositivo UNIR.',
      icono: (
        <svg className="w-8 h-8 text-unirPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-unirBg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-unirTitle mb-6">
            Casos de uso
          </h2>
          <p className="text-lg md:text-xl text-unirText max-w-3xl mx-auto">
            UNIR se adapta a todos los momentos de tu día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {casos.map((caso, index) => (
            <div
              key={index}
              className="bg-[#0F1A27] p-8 rounded-2xl border border-white/5 hover:border-unirPrimary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-unirPrimary/20 rounded-xl flex items-center justify-center">
                  {caso.icono}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-unirWhite mb-3">
                    {caso.titulo}
                  </h3>
                  <p className="text-unirText leading-relaxed">
                    {caso.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasosDeUso;

