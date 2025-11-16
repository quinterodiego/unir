import React from 'react';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen bg-unirBg flex items-center justify-center px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Contenido de texto */}
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-unirWhite mb-6 leading-tight">
              Tu billetera digital
              <span className="block text-unirPrimary">del futuro</span>
            </h1>
            <p className="text-xl md:text-2xl text-unirText mb-8 max-w-2xl mx-auto md:mx-0">
              Band, Card y KeyTag. Tres formas de pagar con la tecnología más avanzada y la seguridad que necesitás.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-unirPrimary text-unirWhite font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300">
                Comenzar ahora
              </button>
              <button className="px-8 py-4 border border-unirTitle text-unirTitle font-semibold rounded-lg hover:bg-unirTitle hover:text-unirBg transition-all duration-300">
                Ver más
              </button>
            </div>
          </div>

          {/* Imagen del hero */}
          <div className="flex-1 flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-lg">
              <div className="aspect-square bg-gradient-to-br from-unirPrimary/20 to-unirBg rounded-3xl p-8 flex items-center justify-center border border-white/5">
                <div className="w-full h-full bg-unirPrimary/10 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src={heroImage} alt="UNIR Hero" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

