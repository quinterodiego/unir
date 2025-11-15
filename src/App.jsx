import React from 'react';
import Hero from './components/Hero';
import QueEsUnir from './components/QueEsUnir';
import Productos from './components/Productos';
import ComoFunciona from './components/ComoFunciona';
import Beneficios from './components/Beneficios';
import CasosDeUso from './components/CasosDeUso';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-unirBg">
      <Hero />
      <QueEsUnir />
      <Productos />
      <ComoFunciona />
      <Beneficios />
      <CasosDeUso />
      <CTA />
    </div>
  );
}

export default App;

