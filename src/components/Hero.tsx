import { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, Award, Zap } from 'lucide-react';

interface TrustBadge {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const trustBadges: TrustBadge[] = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#3e92cc]" />,
    label: 'NICEIC Approved',
    value: 'Certified',
  },
  {
    icon: <Clock className="w-5 h-5 text-[#3e92cc]" />,
    label: 'Emergency Response',
    value: '24 / 7',
  },
  {
    icon: <Award className="w-5 h-5 text-[#3e92cc]" />,
    label: 'London Experience',
    value: '15+ Years',
  },
  {
    icon: <Zap className="w-5 h-5 text-[#3e92cc]" />,
    label: 'Projects Completed',
    value: '2,400+',
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #061540 0%, #0a2463 45%, #0d1b3e 70%, #061028 100%)',
      }}
    >
      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(62,146,204,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(62,146,204,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3e92cc]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#0a2463]/60 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3e92cc]/5 rounded-full blur-3xl" />

      {/* Decorative circuit lines SVG */}
      <svg
        className="absolute right-0 top-0 w-1/2 h-full opacity-10"
        viewBox="0 0 600 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M600 0 L400 200 L500 200 L300 400 L400 400 L100 700 L200 700 L0 900" stroke="#3e92cc" strokeWidth="1.5" />
        <path d="M600 100 L350 350 L450 350 L200 600 L300 600 L50 850" stroke="#5fb3f0" strokeWidth="1" />
        <circle cx="400" cy="200" r="6" fill="#3e92cc" />
        <circle cx="300" cy="400" r="6" fill="#3e92cc" />
        <circle cx="200" cy="600" r="6" fill="#5fb3f0" />
        <circle cx="500" cy="200" r="4" fill="#f0a500" />
        <circle cx="450" cy="350" r="4" fill="#f0a500" />
        <path d="M550 50 L550 150 L650 150" stroke="#3e92cc" strokeWidth="1" />
        <path d="M480 300 L580 300 L580 400" stroke="#5fb3f0" strokeWidth="1" />
        <rect x="540" y="130" width="20" height="20" stroke="#3e92cc" strokeWidth="1" fill="none" />
        <rect x="570" y="380" width="20" height="20" stroke="#5fb3f0" strokeWidth="1" fill="none" />
      </svg>

      {/* Large decorative Zap */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-5 floating">
        <Zap className="w-96 h-96 text-[#3e92cc] fill-[#3e92cc]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 bg-[#3e92cc]/15 border border-[#3e92cc]/30 rounded-full px-4 py-2 mb-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            }}
          >
            <span className="w-2 h-2 bg-[#3e92cc] rounded-full electric-flicker" />
            <span className="text-[#3e92cc] text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              London&apos;s Premier Electrical Specialists
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
            }}
          >
            <span className="block text-6xl lg:text-8xl font-extrabold text-white leading-none tracking-tight">
              POWER.
            </span>
            <span className="block text-6xl lg:text-8xl font-extrabold leading-none tracking-tight shimmer-text">
              PRECISION.
            </span>
            <span className="block text-6xl lg:text-8xl font-extrabold text-white leading-none tracking-tight">
              PERFECTION.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
            }}
          >
            Invincible Electrical delivers elite electrical solutions across
            London&apos;s Southwark — from Old London Bridge to Borough Market.
            Trusted craftsmanship. Relentless standards.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-16"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.55s',
            }}
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-[#3e92cc] hover:bg-[#5fb3f0] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#3e92cc]/40 hover:-translate-y-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 border border-white/20 hover:border-[#3e92cc]/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Services
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
            }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="glass-card rounded-xl p-4 flex flex-col gap-1 hover:border-[#3e92cc]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  {badge.icon}
                  <span className="text-white/50 text-xs tracking-wide">{badge.label}</span>
                </div>
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {badge.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4f7fc] to-transparent" />
    </section>
  );
}
