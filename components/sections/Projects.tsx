'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionWrapper from '../ui/SectionWrapper';
import Modal, { ProjectModalData } from '../ui/Modal';
import { GithubIcon, ExternalLinkIcon } from '../ui/Icons';

const projectItems: ProjectModalData[] = [
  {
    title: 'Corgi Blog',
    subtitle: 'Blog & CMS de Conteúdo',
    description: 'Um blog sobre corgis',
    longDescription:
      'Plataforma completa de blog sobre corgis desenvolvida para amantes da raça. Conta com renderização ultra-rápida via Next.js Server Components, suporte a MDX para artigos, sistema de tags, comentários interativos e otimização SEO para alcance orgânico.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'CMS'],
    image: '/images/about-image.jpg',
    githubUrl: 'https://github.com/joaovictor/corgi-blog',
    liveUrl: 'https://corgi-blog.vercel.app',
  },
  {
    title: 'EletroSystem Landing Page',
    subtitle: 'Landing Page Corporativa',
    description: 'Design no Figma & Desenvolvimento Next.js',
    longDescription:
      'Landing page institucional para a EletroSystem com foco em conversão e experiência de usuário. Desenvolvida sob medida a partir de mockups do Figma com animações de entrada, SEO avançado, carregamento instantâneo e indexação automatizada no Google.',
    tags: ['Next.js', 'Figma', 'SEO', 'Tailwind CSS', 'Vercel'],
    image: '/images/about-image.jpg',
    githubUrl: 'https://github.com/joaovictor/eletrosystem',
    liveUrl: 'https://eletrosystem.vercel.app',
  },
  {
    title: 'TG City Game',
    subtitle: 'Jogo Pixel Art Interativo',
    description: 'Desenvolvimento de jogo para Prefeitura de Tanguá',
    longDescription:
      'Jogo educativo web em pixel art desenvolvido para a Prefeitura de Tanguá. Engloba toda a lógica interativa de fases, colisão e pontuação, permitindo aos cidadãos explorarem a história da cidade de forma gamificada e divertida.',
    tags: ['JavaScript', 'Canvas HTML5', 'Pixel Art', 'Game Logic', 'CSS3'],
    image: '/images/about-image.jpg',
    githubUrl: 'https://github.com/joaovictor/tg-city-game',
    liveUrl: 'https://tangua.rj.gov.br/tg-city-game',
  },
  {
    title: 'Hub Prestadores',
    subtitle: 'Plataforma de Serviços',
    description: 'Manutenção, refatoração e otimização de layout',
    longDescription:
      'Manutenção contínua e evolução da plataforma Hub Prestadores. Implementação de novas funcionalidades de agendamento, refatoração do layout responsivo, correção de gargalos de desempenho e integração de APIs REST.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: '/images/about-image.jpg',
    githubUrl: 'https://github.com/joaovictor/hub-prestadores',
    liveUrl: 'https://hubprestadores.com.br',
  },
  {
    title: 'Portfólio Interativo',
    subtitle: 'Website Pessoal & Carrossel Orbital',
    description: 'Arquitetura modular em Next.js com Tailwind CSS',
    longDescription:
      'Portfólio moderno de desenvolvedor Fullstack com estética dark modo vibrante ciano. Possui animação orbital contínua de tecnologias a 60 FPS, linha do tempo interativa e animações de scroll fluidas com Framer Motion.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    image: '/images/about-image.jpg',
    githubUrl: 'https://github.com/joaovictor/jv-portfolio',
    liveUrl: 'https://jv-portfolio.vercel.app',
  },
  {
    title: 'Analytics Dashboard',
    subtitle: 'Painel de Métricas & Tráfego',
    description: 'Monitoramento de dados e métricas em tempo real',
    longDescription:
      'Dashboard analítico de alta performance para monitoramento de acessos, engajamento e métricas digitais. Possui visualizações gráficas interativas, relatórios exportáveis e autenticação segura de usuários.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
    image: '/images/about-image.jpg',
    githubUrl: 'https://github.com/joaovictor/analytics-dashboard',
    liveUrl: 'https://analytics.jvdev.com',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: ProjectModalData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <SectionWrapper id="projetos" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif-title mb-2">
          Projetos em Destaque
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-medium">
          Conheça meu trabalho na prática
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectItems.map((project, index) => (
          <div
            key={index}
            className="group bg-[#181818] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00FFFF]/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] flex flex-col"
          >
            {/* Project Preview Header Banner */}
            <div className="relative h-44 w-full bg-[#141414] overflow-hidden border-b border-white/5 flex flex-col">
              {/* Fake browser top bar */}
              <div className="h-7 bg-[#202020] px-3 flex items-center gap-1.5 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[10px] text-gray-500 font-mono truncate">
                  https://{project.title.toLowerCase().replace(/\s+/g, '')}.app
                </span>
              </div>

              {/* Banner content */}
              <div className="relative flex-1 p-4 flex flex-col justify-center bg-gradient-to-br from-[#1c1c1c] to-[#111111] group-hover:scale-105 transition-transform duration-500">
                <span className="text-[10px] uppercase font-bold text-[#00FFFF] tracking-wider mb-1">
                  {project.subtitle}
                </span>
                <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                  Alimentação saudável com foco em bem-estar real
                </h4>
                <div className="mt-2 flex gap-2">
                  <span className="h-1.5 w-12 bg-[#00FFFF]/40 rounded-full" />
                  <span className="h-1.5 w-6 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 font-serif-title group-hover:text-[#00FFFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium mb-3">
                  {project.description}
                </p>
                
                {/* Tech tags preview */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-[#222222] text-[11px] text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-[#222222] text-[11px] text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors shadow-sm"
                >
                  Ver detalhes
                </button>

                <div className="flex items-center space-x-3 text-gray-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00FFFF] transition-colors p-1"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00FFFF] transition-colors p-1"
                      aria-label="External Link"
                    >
                      <ExternalLinkIcon size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </SectionWrapper>
  );
}

