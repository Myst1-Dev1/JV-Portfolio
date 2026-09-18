'use client';

import SectionWrapper from '../ui/SectionWrapper';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  bullets: string[];
  date: string;
  side: 'left' | 'right';
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Internit LTDA',
    role: 'Estágio como Desenvolvedor Frontend',
    bullets: [
      'Desenvolvimento e manutenção de sites com Nextjs e Wordpress;',
      'Otimização de SEO;',
      'Criação de email marketing com html;',
    ],
    date: '2024 - 2025',
    side: 'left',
  },
  {
    id: 2,
    company: 'TG City Game',
    role: 'Freelancer - Prefeitura de Tanguá',
    bullets: [
      'Desenvolvimento de toda a lógica do jogo;',
      'Montagem das fases pixeladas;',
    ],
    date: '2025',
    side: 'right',
  },
  {
    id: 3,
    company: 'EletroSystem',
    role: 'Freelancer - Landing Page',
    bullets: [
      'Criação do design no figma;',
      'Desenvolvimento do site com Nextjs;',
      'Deploy na vercel;',
      'Indexar no google;',
    ],
    date: '2026',
    side: 'left',
  },
  {
    id: 4,
    company: 'Hub Prestadores',
    role: 'Freelancer - Manutenção em site pronto',
    bullets: [
      'Correção de bugs e ajustes de layout;',
      'Implementação de novas funcionalidades conforme demandas do projeto;',
    ],
    date: '2026',
    side: 'right',
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experiencia" className="py-20 md:py-28 max-w-6xl mx-auto px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif-title mb-2">
          Minha Experiência
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-medium">
          Trajetória até o momento
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central Vertical Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-[#00FFFF]/40 shadow-[0_0_8px_rgba(0,255,255,0.4)]" />

        {/* Vertical Line for Mobile */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-[#00FFFF]/40 shadow-[0_0_8px_rgba(0,255,255,0.4)]" />

        {/* Experience Items */}
        <div className="space-y-12 md:space-y-16">
          {experiences.map((item) => {
            const isLeft = item.side === 'left';

            return (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Desktop Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00FFFF] border-2 border-[#121212] shadow-[0_0_12px_#00FFFF] z-20" />

                {/* Mobile Dot */}
                <div className="md:hidden absolute left-4 top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#00FFFF] border-2 border-[#121212] shadow-[0_0_10px_#00FFFF] z-20" />

                {/* Layout positioning for Left vs Right on desktop */}
                <div
                  className={`w-full md:w-1/2 pl-10 md:pl-0 ${
                    isLeft
                      ? 'md:pr-12 md:text-left'
                      : 'md:ml-auto md:pl-12 md:text-left'
                  }`}
                >
                  <div className="bg-[#181818]/90 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl hover:border-[#00FFFF]/40 transition-all duration-300 group">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                      {item.company}
                    </h3>
                    
                    <p className="text-[#00FFFF] text-sm md:text-base font-semibold mb-4">
                      {item.role}
                    </p>

                    <ul className="space-y-2 mb-6 text-gray-300 text-xs md:text-sm leading-relaxed">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#00FFFF] select-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-start">
                      <span className="inline-block px-3 py-1 rounded-md bg-[#222222] text-[#00FFFF] text-xs font-mono font-medium border border-[#00FFFF]/20">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
