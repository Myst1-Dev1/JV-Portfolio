'use client';

import { ExternalLinkIcon, GithubIcon } from './Icons';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProjectModalData {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  github?: string;
  link?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectModalData | null;
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3, type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#1a1a1a] border border-[#00FFFF]/30 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)] overflow-hidden z-10 my-8"
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-bold text-white font-serif-title">
                {project.title}
              </h3>
              <p className="text-sm text-[#00FFFF] font-medium">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full w-10 h-10 aspect-square text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <span className="text-xl leading-none">&times;</span>
            </button>
          </div>

          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 bg-[#121212]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="600px"
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white">Sobre o Projeto</h4>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white">Tecnologias Utilizadas</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#00FFFF]/10 border border-[#00FFFF]/30 text-[#00FFFF] text-xs font-mono font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#141414]">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 text-sm font-medium transition-colors"
            >
              Fechar
            </button>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#222222] hover:bg-[#2e2e2e] text-white text-sm font-medium border border-white/10 flex items-center gap-2 transition-colors"
                >
                  <GithubIcon size={16} />
                  Repositório
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  <ExternalLinkIcon size={16} />
                  Ver Projeto
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}