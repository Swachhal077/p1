import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    label: 'Starters',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    offset: 'md:mt-0',
  },
  {
    label: 'Mains',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    offset: 'md:mt-10',
  },
  {
    label: 'Drinks',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80',
    offset: 'md:mt-0',
  },
  {
    label: 'Desserts',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80',
    offset: 'md:mt-10',
  },
];

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: ref.current, start: 'top 75%' };
      gsap.from('.e-heading', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: st,
      });
      gsap.from('.e-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: st,
        delay: 0.2,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#fdfbf7] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="e-heading mx-auto max-w-5xl text-center font-display font-light uppercase leading-[1.05] tracking-tight text-brand-dark text-[clamp(2.5rem,5.5vw,5.5rem)]">
          Come Experience the Taste of{' '}
          <span
            className="normal-case tracking-normal text-brand text-[1.4em]"
            style={{ fontFamily: 'Ephesis, cursive' }}
          >
            Joy
          </span>
        </h2>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {categories.map((c) => (
            <div
              key={c.label}
              className={`e-card flex flex-col items-center ${c.offset}`}
            >
              <div className="aspect-[3/4] w-full overflow-hidden shadow-lg">
                <img
                  src={c.image}
                  alt={c.label}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <span className="mt-8 block h-10 w-px bg-brand" />

              <div className="mt-6 border border-brand px-8 py-3 text-xs uppercase tracking-[0.3em] text-brand-dark">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
