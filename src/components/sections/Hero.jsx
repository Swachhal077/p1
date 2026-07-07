import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const slides = [
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80',
];

const INTERVAL = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-title', { y: 60, opacity: 0, duration: 1.1 })
        .from('.hero-btn', { y: 20, opacity: 0, stagger: 0.15, duration: 0.7 }, '-=0.5')
        .from('.hero-badge', { scale: 0.6, opacity: 0, duration: 0.8 }, '-=0.4');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 px-6 text-center">
        <h1 className="hero-title font-display text-5xl font-light uppercase leading-[1.1] tracking-[0.02em] md:text-7xl lg:text-8xl">
          Fresh from the sea
          <br />
          to your table
        </h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/menu"
            className="hero-btn border border-white/80 px-8 py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-white hover:text-brand-dark"
          >
            View Menus
          </a>
          <a
            href="/reservations"
            className="hero-btn border border-white/80 px-8 py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-white hover:text-brand-dark"
          >
            Find a Table
          </a>
        </div>

      </div>

      <a
        href="/reservations"
        aria-label="Reserve your table"
        className="hero-badge group absolute bottom-8 right-8 z-20 h-32 w-32 md:bottom-12 md:right-12 md:h-40 md:w-40"
      >
        <svg
          viewBox="0 0 200 200"
          className="spin-slow h-full w-full transition group-hover:opacity-90"
        >
          <defs>
            <path
              id="reserve-circle"
              d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
            />
          </defs>
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="rgba(0,0,0,0.35)"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <text
            fill="white"
            fontSize="14"
            letterSpacing="6"
            style={{ fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}
          >
            <textPath href="#reserve-circle" startOffset="0">
              Reserve Your Table · Reserve Your Table ·
            </textPath>
          </text>
        </svg>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand" fill="currentColor">
            <path d="M12 2 L22 12 L12 22 L2 12 Z M12 6 L18 12 L12 18 L6 12 Z" />
          </svg>
        </div>
      </a>
    </section>
  );
}
