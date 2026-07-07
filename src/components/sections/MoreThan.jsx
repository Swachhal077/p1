import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    name: 'Grilled Salmon',
    price: '$22',
    description: 'Fresh Atlantic salmon with citrus-herb glaze.',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Avocado Toast',
    price: '$14',
    description: 'Sourdough, ripe avocado, chili oil, sea salt.',
    image:
      'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Lamb Tacos',
    price: '$18',
    description: 'Slow-braised lamb, pickled onions, cilantro.',
    image:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Tiramisu',
    price: '$10',
    description: 'Classic layered dessert with espresso mascarpone.',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80',
  },
];

function Dish({ dish }) {
  return (
    <div className="mt-card text-center">
      <div className="mx-auto aspect-square w-40 overflow-hidden rounded-full shadow-lg md:w-52 lg:w-60">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-6 font-display text-xl uppercase tracking-wide text-brand-dark">
        {dish.name}
      </h3>
      <p className="mt-2 text-lg font-medium text-brand-dark">{dish.price}</p>
      <p className="mx-auto mt-3 max-w-[220px] text-sm italic text-brand-dark/70">
        {dish.description}
      </p>
    </div>
  );
}

export default function MoreThan() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: ref.current, start: 'top 75%' };
      gsap.from('.mt-heading, .mt-desc', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: st,
      });
      gsap.from('.mt-card', {
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: st,
        delay: 0.3,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-brand-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-heading font-display font-light uppercase leading-[1.05] tracking-tight text-brand-dark text-[clamp(2.5rem,5.5vw,5.5rem)]">
            More Than Just{' '}
            <span
              className="normal-case tracking-normal text-brand text-[1.4em]"
              style={{ fontFamily: 'Ephesis, cursive' }}
            >
              Dining
            </span>
          </h2>

          <p className="mt-desc mx-auto mt-8 max-w-md text-base leading-relaxed text-brand-dark/80 md:text-lg">
            Simple and balanced. Our chef brings together traditional flavors
            and modern craft to create dishes full of surprising artistry.
          </p>
        </div>

        <div className="mt-4 hidden md:grid md:grid-cols-4 md:gap-8">
          <div className="pt-0">
            <Dish dish={dishes[0]} />
          </div>
          <div className="pt-24">
            <Dish dish={dishes[2]} />
          </div>
          <div className="pt-24">
            <Dish dish={dishes[3]} />
          </div>
          <div className="pt-0">
            <Dish dish={dishes[1]} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-10 md:hidden">
          {dishes.map((d) => (
            <Dish key={d.name} dish={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
