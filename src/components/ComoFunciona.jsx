import React from 'react';

const ComoFunciona = () => {
  const pasos = [
    {
      numero: '01',
      titulo: 'Elegí tu producto',
      descripcion: 'Seleccioná entre Band, Card o KeyTag según tus preferencias y estilo de vida.'
    },
    {
      numero: '02',
      titulo: 'Configurá tu cuenta',
      descripcion: 'Descargá la app, creá tu cuenta y vinculá tu producto en minutos.'
    },
    {
      numero: '03',
      titulo: 'Empezá a pagar',
      descripcion: 'Acercá tu dispositivo al terminal y pagá de forma instantánea y segura.'
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-unirBg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-unirTitle mb-6">
            Cómo funciona
          </h2>
          <p className="text-lg md:text-xl text-unirText max-w-3xl mx-auto">
            En tres simples pasos, comenzá a disfrutar de la forma más fácil de pagar.
          </p>
        </div>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {pasos.map((paso, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-[#0F1A27] p-8 rounded-2xl border border-white/5 h-full">
                <div className="text-6xl font-bold text-unirPrimary/30 mb-4">
                  {paso.numero}
                </div>
                <h3 className="text-2xl font-bold text-unirWhite mb-4">
                  {paso.titulo}
                </h3>
                <p className="text-unirText leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
              {index < pasos.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-unirPrimary/30 transform -translate-y-1/2">
                  <div className="absolute top-1/2 right-0 w-2 h-2 bg-unirPrimary/30 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;

