import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {
  Zap,
  Home,
  Building2,
  ShieldAlert,
  Lightbulb,
  PlugZap,
  Cable,
  Wrench,
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Home className="w-7 h-7" />,
    title: 'Domestic Electrical',
    description:
      'Complete residential wiring, rewires, consumer unit upgrades and home electrical installations — done right, first time.',
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Commercial Electrical',
    description:
      'Retail, office and commercial fit-outs across Southwark and the City. Minimal disruption, maximum reliability.',
  },
  {
    icon: <ShieldAlert className="w-7 h-7" />,
    title: 'Emergency Call-Out',
    description:
      'Power failures and electrical faults don&apos;t wait. Our 24/7 emergency team covers Old London Bridge and surrounding areas.',
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'LED Lighting Design',
    description:
      'Architectural and ambient lighting solutions that transform spaces — from Borough Market units to Bermondsey residences.',
  },
  {
    icon: <PlugZap className="w-7 h-7" />,
    title: 'EV Charging Points',
    description:
      'Future-proof your property with smart EV charger installation — home and commercial units, fully certified.',
  },
  {
    icon: <Cable className="w-7 h-7" />,
    title: 'Data & Networking',
    description:
      'Structured cabling, data points, CAT6 and fibre installations for modern homes and business premises.',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'Electrical Testing',
    description:
      'EICR inspections, PAT testing and periodic inspections — landlord compliance made simple and swift.',
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: 'Maintenance Contracts',
    description:
      'Planned preventative maintenance keeps your systems performing. Tailored contracts for commercial and residential clients.',
  },
];

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section id="services" className="relative py-28 bg-[#f4f7fc] overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3e92cc]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0a2463]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 reveal ${isVisible ? 'visible' : ''}`}
        >
          <span
            className="inline-block text-[#3e92cc] text-xs font-bold tracking-[0.3em] uppercase mb-4 border border-[#3e92cc]/30 rounded-full px-4 py-1.5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What We Do
          </span>
          <h2
            className="text-4xl lg:text-6xl font-extrabold text-[#0a2463] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Electrical Services
            <br />
            <span className="text-[#3e92cc]">Built to Last</span>
          </h2>
          <p className="text-[#334266]/70 text-lg leading-relaxed">
            From emergency call-outs to full commercial fit-outs, every job we
            take on reflects our commitment to safety, precision, and quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`reveal ${isVisible ? 'visible' : ''} group relative bg-white rounded-2xl p-6 border border-[#d8e2f3] hover:border-[#3e92cc]/50 hover:shadow-xl hover:shadow-[#3e92cc]/10 hover:-translate-y-2 transition-all duration-400 cursor-default overflow-hidden`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Card accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3e92cc] to-[#5fb3f0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-14 h-14 bg-[#3e92cc]/10 group-hover:bg-[#3e92cc] rounded-xl flex items-center justify-center text-[#3e92cc] group-hover:text-white transition-all duration-300 mb-5">
                {service.icon}
              </div>

              <h3
                className="text-[#0a2463] font-bold text-lg mb-2 leading-snug"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {service.title}
              </h3>
              <p className="text-[#334266]/65 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r border-b border-[#3e92cc]/10 group-hover:border-[#3e92cc]/30 transition-colors duration-300 rounded-br-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
