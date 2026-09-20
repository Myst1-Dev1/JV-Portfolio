'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionWrapper from '../ui/SectionWrapper';
import Modal, { ProjectModalData } from '../ui/Modal';
import { GithubIcon, ExternalLinkIcon } from '../ui/Icons';

const projects: ProjectModalData[] = [
  {
    id: 1,
    type: 'Freelance',
    title: 'EletroSystem',
    subtitle: 'Landing Page',
    image: '/images/eletrosystem.webp',
    description: 'Projeto freelancer desenvolvido em Next.js para uma empresa especializada em serviços de assistência técnica.',
    link: 'https://eletrosystemti.com.br/',
    stack: [ 'Nextjs','Typescript', 'Tailwindcss', 'Gsap' ]
  },
  {
    id: 2,
    type: 'Pessoal',
    title: 'Corgi Blog',
    subtitle: 'Blog',
    image: '/images/cblog.webp',
    description: 'Este projeto é um blog sobre corgis desenvolvido com uma arquitetura moderna baseada em TurboRepo, utilizando Next.js no frontend e NestJS no backend. A aplicação conta com uma estrutura de microsserviços integrada ao RabbitMQ para comunicação assíncrona, PostgreSQL como banco de dados e Docker para padronização e gerenciamento do ambiente de desenvolvimento e deploy.',
    link: 'https://c-blog-web.vercel.app/',
    stack: [ 'Nextjs','Typescript', 'Tailwindcss', 'Gsap', 'Nestjs', 'TypeOrm', 'Rabbitmq', 'Docker', 'Microserviços', 'Websocket' ],
    github: 'https://github.com/Myst1-Dev1/CBlog'
  },
  {
    id: 3,
    type: 'Freelance',
    title: 'TG City Game',
    subtitle: 'Jogo Pixelado',
    image: '/images/tgcitygame.webp',
    description: 'Jogo web desenvolvido com GameMaker, criado com o objetivo de apresentar e contar a história de diferentes locais da cidade de Tanguá. O projeto foi realizado como trabalho freelancer por mim e minha equipe.',
    link: 'https://tgcitygame.com/',
    stack: [ 'GameMaker',],
  },
  {
    id: 4,
    type: 'Pessoal',
    title: 'MS Delivery',
    subtitle: 'Sistema de Delivery',
    image: '/images/ms-delivery.webp',
    description: 'Sistema de delivery na qual os restaurantes tem acesso a um painel para gerenciar suas compras e pratos.',
    link: 'https://ms-delivery.vercel.app',
    stack: [ 'Nextjs', 'Tailwind', 'Typescript', 'Nodejs', 'Mongodb', 'Prisma'],
    github: 'https://github.com/Myst1-Dev1/MS-Delivery'
  },
   {
    id: 5,
    type: 'Pessoal',
    title: 'Drago Tech',
    subtitle: 'Loja com Painel de admin',
    image: '/images/drago-tech.webp',
    description: 'Uma Loja de eletrônicos com painel de admin.',
    link: 'https://drago-tech-2-0.vercel.app',
    stack: [ 'Nextjs', 'Tailwind', 'Typescript', 'Nestjs', 'Postgresql', 'Prisma'],
    github: 'https://github.com/Myst1-Dev1/Drago-Tech-2.0'
  },
  {
    id: 6,
    type: 'Pessoal',
    title: 'Kortex',
    subtitle: 'Dashboard de tarefas',
    image: '/images/kortex.png',
    description: 'Um dashboard de gerenciamento de tarefas com chat incluso com chat de voz e compartilhamento de tela.',
    link: 'https://kortex-navy.vercel.app',
    stack: [ 'Nextjs', 'Tailwind', 'Typescript', 'Nestjs', 'Postgresql', 'Typeorm', 'Rabbitmq', 'Redis', 'Websocket'],
    github: 'https://github.com/Myst1-Dev1/Kortex'
  },
]

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div
            key={project.id}
            className="group bg-[#181818] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00FFFF]/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] flex flex-col"
          >
            <div className="relative h-44 w-full bg-[#141414] overflow-hidden border-b border-white/5 flex flex-col">
              <Image className='object-cover object-top' src={project.image} fill alt='foto do projeto' />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 font-serif-title group-hover:text-[#00FFFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-3 font-medium mb-3">
                  {project.description}
                </p>
                
                {/* Tech tags preview */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-[#222222] text-[11px] text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-[#222222] text-[11px] text-gray-400">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="cursor-pointer px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors shadow-sm"
                >
                  Ver detalhes
                </button>

                <div className="flex items-center space-x-3 text-gray-400">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00FFFF] transition-colors p-1"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
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

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </SectionWrapper>
  );
}

