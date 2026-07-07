import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Welcome() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: ref.current, start: 'top 75%' };

      gsap.from('.w-text > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: st,
      });

      gsap.from('.w-img-1', {
        x: 80,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: st,
      });

      gsap.from('.w-img-2', {
        x: 80,
        opacity: 0,
        duration: 1.1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: st,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="w-text px-6 py-20 md:py-32 md:pl-16 lg:pl-24">
          <p className="text-base uppercase tracking-[0.35em] text-brand">
            Welcome to El Quetzalito
          </p>

          <h2 className="mt-8 font-display font-light uppercase leading-[0.95] tracking-tight text-brand-dark text-[clamp(3rem,6.5vw,7rem)]">
            Come &amp; Meet us
            <br />
            At El Quetzalito
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-brand-dark/80 md:text-xl">
            Introducing El Quetzalito, a warm and elegant restaurant serving
            traditional recipes reimagined with modern craft. From our open
            kitchen to your table, every plate is prepared with local
            ingredients and served in a room built for lingering evenings.
          </p>

          <Link
            to="/about"
            className="mt-10 inline-block border-b border-brand-dark pb-1 text-base uppercase tracking-[0.35em] text-brand-dark transition hover:text-brand hover:border-brand"
          >
            Discover Our Concept
          </Link>
        </div>

        <div className="relative h-[600px] py-20 md:h-full md:min-h-[750px] md:py-32">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant table setting"
            className="w-img-1 absolute bottom-20 left-[-8%] h-[55%] w-[55%] object-cover shadow-2xl md:bottom-32"
          />
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80"
            alt="Chef plating dishes"
            className="w-img-2 absolute right-[10%] top-20 h-[60%] w-[65%] object-cover shadow-2xl md:top-32"
          />
        </div>
      </div>
    </section>
  );
}
