import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    eyebrow: 'Signature Plate #1',
    name: 'Grilled Sea Bass',
    description:
      'Wild-caught sea bass, roasted seasonal vegetables, saffron citrus butter, and fresh garden herbs from our rooftop.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    prices: [
      { label: 'Half Portion', price: '$18' },
      { label: 'Full Portion', price: '$28' },
    ],
  },
  {
    eyebrow: 'Signature Plate #2',
    name: 'Slow-Braised Short Rib',
    description:
      'Twelve-hour braised short rib in red-wine reduction, creamy polenta, glazed shallots, and pickled mustard seeds.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80&sat=-20',
    prices: [
      { label: 'Half Portion', price: '$22' },
      { label: 'Full Portion', price: '$34' },
    ],
  },
  {
    eyebrow: 'Signature Plate #3',
    name: 'Wild Mushroom Risotto',
    description:
      'Slow-stirred arborio rice, foraged wild mushrooms, aged parmesan, truffle oil, and crispy sage leaves.',
    image:
      'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1000&q=80',
    prices: [
      { label: 'Half Portion', price: '$16' },
      { label: 'Full Portion', price: '$24' },
    ],
  },
];

function Dish({ dish, reverse }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: ref.current, start: 'top 80%' };
      gsap.from('.dish-img', {
        x: reverse ? 80 : -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: st,
      });
      gsap.from('.dish-text > *', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: st,
        delay: 0.2,
      });
    }, ref);
    return () => ctx.revert();
  }, [reverse]);

  return (
    <div
      ref={ref}
      className={`grid gap-16 md:grid-cols-2 md:items-center md:gap-20 ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="dish-img relative">
        <div
          className="absolute inset-0 -rotate-[4deg] scale-[1.05] rounded-2xl bg-[#eef1e4]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23c9d1b2' stroke-width='0.8' opacity='0.5'><path d='M20 60 Q35 30 60 40 Q85 50 100 25'/><path d='M15 90 Q40 75 55 90 Q80 105 100 85'/><ellipse cx='30' cy='40' rx='6' ry='3' transform='rotate(-30 30 40)'/><ellipse cx='85' cy='75' rx='6' ry='3' transform='rotate(30 85 75)'/></g></svg>\")",
            backgroundSize: '160px',
          }}
        />
        <img
          src={dish.image}
          alt={dish.name}
          className="relative aspect-square w-full rounded-2xl object-cover shadow-xl"
        />
      </div>

      <div className="dish-text">
        <p className="text-sm uppercase tracking-[0.35em] text-brand">
          {dish.eyebrow}
        </p>

        <h3 className="mt-6 font-display text-4xl font-light uppercase leading-tight text-brand-dark md:text-5xl">
          {dish.name}
        </h3>

        <p className="mt-6 max-w-lg text-lg italic leading-relaxed text-brand-dark/80">
          {dish.description}
        </p>

        <div className="mt-10 space-y-4">
          {dish.prices.map((p) => (
            <div key={p.label} className="flex items-center gap-6">
              <span className="border border-brand px-6 py-2 text-xs uppercase tracking-[0.3em] text-brand-dark">
                {p.label}
              </span>
              <span className="text-2xl font-medium text-brand-dark">
                {p.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Special() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.special-heading', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="special-heading mx-auto max-w-5xl text-center font-display font-light uppercase leading-[1.05] tracking-tight text-brand-dark text-[clamp(2.5rem,5.5vw,5.5rem)]">
          Introducing Chef&rsquo;s Special{' '}
          <span
            className="normal-case tracking-normal text-brand text-[1.4em]"
            style={{ fontFamily: 'Ephesis, cursive' }}
          >
            Dishes
          </span>
        </h2>

        <div className="mt-20 space-y-24 md:space-y-32">
          {dishes.map((dish, i) => (
            <Dish key={dish.name} dish={dish} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
