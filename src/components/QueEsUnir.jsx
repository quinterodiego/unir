import React from 'react';

const QueEsUnir = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-unirBg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-unirTitle mb-6">
            ¿Qué es UNIR?
          </h2>
          <p className="text-lg md:text-xl text-unirText max-w-3xl mx-auto leading-relaxed">
            UNIR es tu billetera digital del futuro. Una plataforma fintech que combina tecnología de vanguardia 
            con diseño premium para ofrecerte tres formas innovadoras de pagar: Band, Card y KeyTag.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-[#0F1A27] p-8 rounded-2xl border border-white/5 hover:border-unirPrimary/30 transition-all duration-300 animate-fade-in-up">
            <div className="w-12 h-12 bg-unirPrimary/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-unirPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-unirWhite mb-4">Tecnología Avanzada</h3>
            <p className="text-unirText">
              Utilizamos la última tecnología en pagos contactless y seguridad para garantizar transacciones rápidas y seguras.
            </p>
          </div>

          <div className="bg-[#0F1A27] p-8 rounded-2xl border border-white/5 hover:border-unirPrimary/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-unirPrimary/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-unirPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-unirWhite mb-4">Seguridad Premium</h3>
            <p className="text-unirText">
              Tus datos y transacciones están protegidos con encriptación de nivel bancario y autenticación biométrica.
            </p>
          </div>

          <div className="bg-[#0F1A27] p-8 rounded-2xl border border-white/5 hover:border-unirPrimary/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-unirPrimary/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-unirPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-unirWhite mb-4">Diseño Elegante</h3>
            <p className="text-unirText">
              Productos diseñados con atención al detalle, combinando funcionalidad y estética premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueEsUnir;

