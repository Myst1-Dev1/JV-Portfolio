'use client';

import SectionWrapper from '../ui/SectionWrapper';
import SkillOrbit from './SkillOrbit';
import { ArrowRightIcon } from '../ui/Icons';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <SectionWrapper id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col items-start z-10">
          <span className="text-gray-200 text-lg sm:text-xl font-normal mb-1 tracking-wide">
            Olá, eu sou
          </span>
          
          <h1 className="text-[#00FFFF] font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            João Victor
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-sans">
            Desenvolvedor Fullstack especializado em arquitetura web de alta performance,
            microsserviços e interfaces de usuário impecáveis. Criando soluções digitais
            que geram impacto real de negócio para startups e grandes corporações.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#projetos"
              onClick={(e) => handleScrollTo(e, 'projetos')}
              className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs lg:text-sm hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]"
            >
              Ver projetos
              <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contato"
              onClick={(e) => handleScrollTo(e, 'contato')}
              className="px-7 py-3.5 rounded-full bg-[#1a1a1a] text-white font-medium text-xs lg:text-sm border border-gray-700 hover:border-[#00FFFF] hover:text-[#00FFFF] transition-all duration-300 shadow-md"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center z-10">
          <SkillOrbit />
        </div>
      </div>
    </SectionWrapper>
  );
}

