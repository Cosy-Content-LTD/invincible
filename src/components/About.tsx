import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Zap, MapPin, Users, ThumbsUp } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '15+', label: 'Years in London' },
  { value: '2,400+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Emergency Cover' },
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState<boolean>(false);
  const [rightVisible, setRightVisible] = useState<boolean>(false);

  useEffect(() => {
    const createObserver = (
      element: HTMLDivElement | null,
      setter: (v: boolean) => void
    ) => {
      if (!element) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setter(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(element);
      return observer;
    };

    const obs1 = createObserver(leftRef.current, setLeftVisible);
    const obs2 = createObserver(rightRef.current, setRightVisible);

    return () => {
      obs1?.disconnect();
      obs2?.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0a2463 0%, #061540 50%, #0d1b3e 100%)',
      }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(62,146,204,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(62,146,204,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#3e92cc]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3e92cc]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Visual */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftVisible ? 'visible' : ''} relative`}
          >
            {/* Main visual block */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background shape */}
              <div className="absolute inset-8 bg-[#3e92cc]/10 rounded-3xl border border-[#3e92cc]/20" />

              {/* Spinning ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-64 h-64 rounded-full border-2 border-dashed border-[#3e92cc]/20 spin-slow"
                />
              </div>

              {/* Inner ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-44 rounded-full border border-[#3e92cc]/30 bg-[#0a2463]/50" />
              </div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#3e92cc] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#3e92cc]/50 pulse-glow rotate-12">
                  <Zap className="w-16 h-16 text-white fill-white" />
                </div>
              </div>

              {/* Decorative corner shapes */}
              <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[#3e92cc]/40 rounded-tl-xl" />
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[#3e92cc]/40 rounded-br-xl" />

              {/* Location badge */}
              <div className="absolute -bottom-4 left-4 glass-card rounded-xl px-4 py-3 flex items-center gap-2 border border-[#3e92cc]/20">
                <MapPin className="w-4 h-4 text-[#3e92cc] flex-shrink-0" />
                <span className="text-white/80 text-sm font-medium">
                  Southwark, London
                </span>
              </div>

              {/* Floating stat badge */}
              <div className="absolute -top-4 -right-4 bg-[#f0a500] text-white rounded-xl px-4 py-3 shadow-xl floating">
                <div
                  className="text-2xl font-extrabold leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  NICEIC
                </div>
                <div className="text-xs font-medium opacity-80">Approved</div>
              </div>

              {/* Icon cluster top-left */}
              <div className="absolute -left-4 top-1/3 bg-[#0a2463] border border-[#3e92cc]/30 rounded-xl p-3 shadow-xl">
                <Users className="w-6 h-6 text-[#3e92cc]" />
              </div>
              <div className="absolute -right-4 top-1/4 bg-[#0a2463] border border-[#3e92cc]/30 rounded-xl p-3 shadow-xl">
                <ThumbsUp className="w-6 h-6 text-[#3e92cc]" />
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div
            ref={rightRef}
            className={`reveal-right ${rightVisible ? 'visible' : ''}`}
          >
            <span
              className="inline-block text-[#3e92cc] text-xs font-bold tracking-[0.3em] uppercase mb-4 border border-[#3e92cc]/30 rounded-full px-4 py-1.5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              About Invincible
            </span>

            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Wired for
              <br />
              <span className="text-[#3e92cc]">Excellence</span> in
              <br />South London
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-4">
              Invincible Electrical has been the trusted name in electrical
              contracting across Southwark&apos;s vibrant neighbourhoods for over
              fifteen years. From the cobbled lanes of Borough Market to the
              contemporary developments rising along the Thames, our team brings
              uncompromising technical skill to every installation.
            </p>

            <p className="text-white/60 text-base leading-relaxed mb-10">
              We&apos;re NICEIC approved contractors — meaning every project
              meets the highest safety standards set by the industry&apos;s
              foremost governing body. Whether you&apos;re a landlord, business
              owner or homeowner, we treat your property with the same care and
              precision we&apos;d apply to our own.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-5 border border-white/10 hover:border-[#3e92cc]/30 transition-colors duration-300"
                >
                  <div
                    className="text-3xl font-extrabold text-[#3e92cc] mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#3e92cc] hover:bg-[#5fb3f0] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#3e92cc]/30 hover:-translate-y-0.5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Work With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
