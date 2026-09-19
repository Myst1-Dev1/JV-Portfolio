'use client';

import Image from 'next/image';
import SectionWrapper from '../ui/SectionWrapper';
import { DownloadIcon } from '../ui/Icons';

export default function About() {
  return (
    <SectionWrapper id="sobre" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif-title mb-2">
          Sobre
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-medium">
          Quem eu sou
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="/images/about-image.jpg"
              alt="João Victor - Formatura"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col items-start space-y-8">
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              Apaixonado por tecnologia desde cedo, me transformei minha curiosidade em uma carreira como Desenvolvedor Full Stack.
            </p>
            <p>
              Busco criar soluções inteligentes, performáticas e funcionais para problemas reais, sempre pensando além do código.
            </p>
            <p>
              Meu objetivo é transformar ideias em produtos digitais completos, escaláveis e capazes de gerar impacto.
            </p>
          </div>

          <div className="flex items-center space-x-12 sm:space-x-16 pt-2">
            <div>
              <span className="text-4xl md:text-5xl font-extrabold text-[#00FFFF] tracking-tight">
                3+
              </span>
              <p className="text-xs md:text-sm text-gray-400 font-medium mt-1">
                Anos de experiência
              </p>
            </div>

            <div>
              <span className="text-4xl md:text-5xl font-extrabold text-[#00FFFF] tracking-tight">
                40+
              </span>
              <p className="text-xs md:text-sm text-gray-400 font-medium mt-1">
                Projetos entregues
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="/Curriculo.pdf"
              download="Curriculo.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
            >
              Download CV
              <DownloadIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

