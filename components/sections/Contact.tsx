'use client';

import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { LinkedinIcon, GithubIcon, MailIcon, WhatsappIcon, SendIcon, CheckCircleIcon } from '../ui/Icons';

const socialLinks = [
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/in/joaovictor' },
  { name: 'Github', icon: GithubIcon, href: 'https://github.com/joaovictor' },
  { name: 'Email', icon: MailIcon, href: 'mailto:joao.victor@exemplo.com' },
  { name: 'Whatsapp', icon: WhatsappIcon, href: 'https://wa.me/5500000000000' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', subject: '', description: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <SectionWrapper id="contato" className="py-20 md:py-28 max-w-4xl mx-auto px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif-title mb-2">
          Vamos construir algo juntos?
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-medium">
          Entre em contato
        </p>
      </div>

      {/* Social Links Pill Row */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#1e1e1e] hover:bg-[#282828] text-white hover:text-[#00FFFF] border border-white/10 hover:border-[#00FFFF]/40 text-sm font-medium flex items-center gap-2 transition-all duration-300 shadow-md group"
            >
              <Icon size={16} className="group-hover:scale-110 transition-transform" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>

      {/* Contact Form Container */}
      <div className="max-w-xl mx-auto">
        {isSubmitted && (
          <div className="mb-6 p-4 rounded-xl bg-[#00FFFF]/10 border border-[#00FFFF]/40 text-[#00FFFF] flex items-center gap-3 text-sm font-medium animate-in fade-in">
            <CheckCircleIcon size={20} />
            <span>Sua mensagem foi enviada com sucesso! Em breve entrarei em contato.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Field: Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200">
              Seu Nome Completo *
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-[#181818] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-all text-sm"
            />
          </div>

          {/* Field: Subject */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200">
              Assunto
            </label>
            <input
              type="text"
              placeholder="Landing Page"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-[#181818] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-all text-sm"
            />
          </div>

          {/* Field: Description */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200">
              Descrição
            </label>
            <textarea
              rows={4}
              placeholder="Um site sobre ...."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-[#181818] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-all text-sm resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] disabled:opacity-50"
          >
            {isLoading ? (
              <span>Enviando...</span>
            ) : (
              <>
                <span>Enviar</span>
                <SendIcon size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}

