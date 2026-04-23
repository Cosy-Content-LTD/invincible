import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Invincible rewired our entire Victorian terrace without a single hiccup. Punctual, professional and the finish was immaculate. I wouldn&apos;t hesitate to recommend them.',
    name: 'Sarah Mitchell',
    role: 'Homeowner, Bermondsey',
    initials: 'SM',
    rating: 5,
  },
  {
    quote:
      'We needed emergency electrical work at our Borough Market unit on a Saturday morning. The team arrived within the hour — genuinely invincible service.',
    name: 'James Thornton',
    role: 'Trader, Borough Market',
    initials: 'JT',
    rating: 5,
  },
  {
    quote:
      'Our office fit-out required a complex three-phase installation. The Invincible team handled it all flawlessly. Couldn&apos;t be happier with the result.',
    name: 'Priya Nair',
    role: 'Operations Manager, Southwark',
    initials: 'PN',
    rating: 5,
  },
  {
    quote:
      'From EV charger installation to full LED upgrade across our car park, they handled everything with expertise. Brilliant value and outstanding safety standards.',
    name: 'David Chen',
    role: 'Property Developer, SE1',
    initials: 'DC',
    rating: 5,
  },
  {
    quote:
      'As a landlord with multiple properties, having a reliable electrician is everything. Invincible handles all my EICR certificates and maintenance — completely stress-free.',
    name: 'Fiona Walsh',
    role: 'Landlord, The Borough',
    initials: 'FW',
    rating: 5,
  },
  {
    quote:
      'Exceptional workmanship on our restaurant lighting design. They really listened to what we wanted and the result transformed the atmosphere entirely.',
    name: 'Marco Russo',
    role: 'Restaurant Owner, London Bridge',
    initials: 'MR',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver(0.08);

  return (
    <section id="testimonials" className="relative py-28 bg-[#f4f7fc] overflow-hidden">
      {/* Decorative bg shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[#3e92cc]/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 reveal ${isVisible ? 'visible' : ''}`}
        >
          <span
            className="inline-block text-[#3e92cc] text-xs font-bold tracking-[0.3em] uppercase mb-4 border border-[#3e92cc]/30 rounded-full px-4 py-1.5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Client Stories
          </span>
          <h2
            className="text-4xl lg:text-6xl font-extrabold text-[#0a2463] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Trusted Across
            <br />
            <span className="text-[#3e92cc]">South London</span>
          </h2>
          <p className="text-[#334266]/70 text-lg">
            The proof is in the words of those we&apos;ve served — homeowners,
            landlords and businesses across Southwark.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`reveal ${isVisible ? 'visible' : ''} group relative bg-white rounded-2xl p-7 border border-[#d8e2f3] hover:border-[#3e92cc]/30 hover:shadow-xl hover:shadow-[#3e92cc]/8 hover:-translate-y-1 transition-all duration-400`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3e92cc]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              {/* Quote icon */}
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#3e92cc]/10 rounded-lg flex items-center justify-center">
                  <Quote className="w-5 h-5 text-[#3e92cc] fill-[#3e92cc]/20" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#f0a500] fill-[#f0a500]"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[#334266]/80 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#d8e2f3]">
                <div className="w-10 h-10 bg-gradient-to-br from-[#3e92cc] to-[#0a2463] rounded-full flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-white text-xs font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div
                    className="text-[#0a2463] font-bold text-sm"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {testimonial.name}
                  </div>
                  <div className="text-[#334266]/50 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
