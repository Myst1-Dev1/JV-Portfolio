'use client';

import { useActionState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { LinkedinIcon, GithubIcon, MailIcon, WhatsappIcon, SendIcon, CheckCircleIcon } from '../ui/Icons';
import { sendMail } from '@/action/sendMailAction';

const socialLinks = [
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/in/myst1-dev/' },
  { name: 'Github', icon: GithubIcon, href: 'https://github.com/Myst1-Dev1' },
  { name: 'Email', icon: MailIcon, href: 'mailto:jvsoftdev15@gmail.com' },
  { name: 'Whatsapp', icon: WhatsappIcon, href: 'https://wa.me/5521964757806' },
];

export default function Contact() {
  const [state, formAction, pending] = useActionState(sendMail, { success: false, message: '' });

  return (
    <SectionWrapper id="contato" className="py-20 md:py-28 max-w-4xl mx-auto px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif-title mb-2">
          Vamos construir algo juntos?
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-medium">
          Entre em contato
        </p>
      </div>

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

      <div className="max-w-xl mx-auto">
        {/* Feedback de sucesso */}
        {state?.success && (
          <div className="mb-6 p-4 rounded-xl bg-[#00FFFF]/10 border border-[#00FFFF]/40 text-[#00FFFF] flex items-center gap-3 text-sm font-medium animate-in fade-in">
            <CheckCircleIcon size={20} />
            <span>{state.message || 'Sua mensagem foi enviada com sucesso! Em breve entrarei em contato.'}</span>
          </div>
        )}

        {/* Feedback de erro */}
        {state?.success === false && state?.error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-400 flex items-center gap-3 text-sm font-medium animate-in fade-in">
            <span>{state.error}</span>
          </div>
        )}

        {/* 2. Adicionado o action={formAction} aqui */}
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200">
              Seu Nome Completo *
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              name="fullName"
              className="w-full px-4 py-3.5 rounded-xl bg-[#181818] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-all text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200">
              Assunto
            </label>
            <input
              type="text"
              placeholder="Landing Page"
              name="subject"
              className="w-full px-4 py-3.5 rounded-xl bg-[#181818] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-all text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200">
              Descrição *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Um site sobre ...."
              name="description"
              className="w-full px-4 py-3.5 rounded-xl bg-[#181818] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-all text-sm resize-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={pending} // 3. Usando o 'pending' nativo do hook
            className="cursor-pointer w-full py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] disabled:opacity-50"
          >
            {pending ? (
              <div role="status" className="grid place-items-center m-auto">
                <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-[#00FFFF] fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
            </div>
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