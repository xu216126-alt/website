import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  lang: 'en' | 'cn';
  setLang: (lang: 'en' | 'cn') => void;
  labels: any;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, labels }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: labels.nav.about, href: '#about' },
    { name: labels.nav.experience, href: '#experience' },
    { name: labels.nav.research, href: '#research' },
    { name: labels.nav.skills, href: '#skills' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calculate position with offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMenuOpen(false);
    } else if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'cn' : 'en');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-slate-200 py-4 shadow-sm' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="font-mono font-bold text-xl tracking-tighter text-slate-900 cursor-pointer"
          onClick={(e) => handleNavClick(e, '#top')}
        >
          ZHAO<span className="text-geek-500">_</span>WENBO
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-geek-600 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1 text-sm font-mono px-3 py-1.5 border border-slate-200 rounded hover:border-geek-500 hover:text-geek-600 transition-colors"
          >
            <Globe size={14} />
            <span>{lang === 'en' ? 'CN' : 'EN'}</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-sm font-mono px-4 py-2 bg-slate-900 text-white rounded hover:bg-geek-600 transition-colors cursor-pointer"
          >
            {labels.nav.sayHello}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1 text-sm font-mono px-2 py-1 border border-slate-200 rounded hover:border-geek-500 hover:text-geek-600 transition-colors"
          >
            <Globe size={14} />
            <span>{lang === 'en' ? 'CN' : 'EN'}</span>
          </button>
          
          <button 
            className="text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-medium text-slate-700 block"
            >
              {link.name}
            </a>
          ))}
           <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-sm font-mono text-geek-600 font-bold block"
          >
            &gt; {labels.nav.sayHello}
          </a>
        </div>
      )}
    </nav>
  );
};