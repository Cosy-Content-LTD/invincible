import { useState, useEffect } from 'react';
import { Zap, Menu, X, Phone } from 'lucide-react';
import { cn } from '../utils/cn';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0a2463]/95 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-[#3e92cc] rounded-lg flex items-center justify-center pulse-glow group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="absolute inset-0 bg-[#3e92cc]/30 rounded-lg blur-md -z-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-white font-bold text-xl tracking-wide"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                INVINCIBLE
              </span>
              <span className="text-[#3e92cc] text-xs font-medium tracking-[0.2em] uppercase">
                Electrical
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#3e92cc] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3e92cc] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+442071234567"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-[#3e92cc]" />
              <span>+44 20 7123 4567</span>
            </a>
            <a
              href="#contact"
              className="bg-[#3e92cc] hover:bg-[#5fb3f0] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#3e92cc]/30 hover:-translate-y-0.5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'md:hidden transition-all duration-500 overflow-hidden',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-[#0a2463]/98 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-white/80 hover:text-[#3e92cc] text-base font-medium py-2 border-b border-white/5 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-2 bg-[#3e92cc] text-white text-center font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#5fb3f0]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get a Quote
          </a>
          <a
            href="tel:+442071234567"
            className="flex items-center justify-center gap-2 text-white/60 text-sm"
          >
            <Phone className="w-4 h-4 text-[#3e92cc]" />
            +44 20 7123 4567
          </a>
        </div>
      </div>
    </nav>
  );
}
