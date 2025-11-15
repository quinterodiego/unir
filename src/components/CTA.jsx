import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-unirBg">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-unirPrimary/10 to-unirBg rounded-3xl p-12 md:p-16 border border-unirPrimary/20 text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-unirWhite mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl md:text-2xl text-unirText mb-10 max-w-2xl mx-auto">
            Unite a miles de usuarios que ya están disfrutando de la forma más fácil y segura de pagar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-unirPrimary text-unirWhite font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity duration-300">
              Crear cuenta gratis
            </button>
            <button className="px-10 py-5 border-2 border-unirTitle text-unirTitle font-semibold text-lg rounded-lg hover:bg-unirTitle hover:text-unirBg transition-all duration-300">
              Ver planes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

