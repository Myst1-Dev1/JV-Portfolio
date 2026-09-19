'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121212]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-2xl font-extrabold text-[#00FFFF] tracking-wider hover:opacity-90 transition-opacity font-sans"
        >
          JV
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#00FFFF]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#00FFFF] rounded-full transition-all duration-300 ease-out ${
                    isActive ? 'w-full' : 'w-0'
                  }`} 
                />
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
          >
            Vamos conversar
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none"
          aria-label="Alternar Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-base font-medium py-2 border-b border-white/5 transition-colors ${
                    isActive ? 'text-[#00FFFF] pl-2 font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="mt-4 w-full text-center py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all"
            >
              Vamos conversar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
