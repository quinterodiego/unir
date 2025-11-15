import React from 'react';

const Beneficios = () => {
  const beneficios = [
    {
      titulo: 'Pagos instantáneos',
      descripcion: 'Transacciones en menos de un segundo con tecnología NFC de última generación.'
    },
    {
      titulo: 'Sin contacto',
      descripcion: 'Pagá de forma segura sin necesidad de tocar terminales o manejar efectivo.'
    },
    {
      titulo: 'Control total',
      descripcion: 'Gestioná tus gastos, límites y notificaciones desde la app móvil.'
    },
    {
      titulo: 'Seguridad avanzada',
      descripcion: 'Encriptación de nivel bancario y autenticación biométrica en cada transacción.'
    },
    {
      titulo: 'Sin comisiones ocultas',
      descripcion: 'Transparencia total. Conocé todos los costos desde el primer día.'
    },
    {
      titulo: 'Soporte 24/7',
      descripcion: 'Nuestro equipo está disponible para ayudarte cuando lo necesites.'
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-unirBg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-unirTitle mb-6">
            Beneficios
          </h2>
          <p className="text-lg md:text-xl text-unirText max-w-3xl mx-auto">
            Todo lo que necesitás para una experiencia de pago superior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="bg-[#0F1A27] p-6 rounded-xl border border-white/5 hover:border-unirPrimary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-unirPrimary/20 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-unirPrimary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-unirWhite mb-2">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-unirText">
                    {beneficio.descripcion}
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

export default Beneficios;

