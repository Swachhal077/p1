import Container from '../components/ui/Container.jsx';
import { menu } from '../data/menu.js';

export default function Menu() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-center text-5xl">Our Menu</h1>
        <div className="mt-12 space-y-12">
          {menu.map(section => (
            <div key={section.category}>
              <h2 className="mb-6 text-3xl text-brand">{section.category}</h2>
              <ul className="space-y-4">
                {section.items.map(item => (
                  <li key={item.name} className="flex justify-between border-b border-black/10 pb-3">
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-sm opacity-70">{item.description}</p>
                    </div>
                    <span className="text-brand">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
