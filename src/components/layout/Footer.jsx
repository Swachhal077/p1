import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-brand-dark bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=60')",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
        <Link to="/" className="inline-block">
          <span
            className="text-5xl text-white md:text-6xl"
            style={{ fontFamily: 'Ephesis, cursive' }}
          >
            El Quetzalito
          </span>
        </Link>

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/80">
          <span>123 Main Street, City</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 md:inline-block" />
          <span>+1 (555) 123-4567</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 md:inline-block" />
          <span>hello@elquetzalito.com</span>
        </div>

        <div className="mx-auto mt-12 h-px w-full max-w-3xl bg-white/15" />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <Link to="/privacy" className="transition hover:text-brand">
            Privacy Policy
          </Link>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <Link to="/terms" className="transition hover:text-brand">
            Terms &amp; Conditions
          </Link>
        </div>

        <p className="mt-6 text-xs text-white/50">
          © {new Date().getFullYear()} El Quetzalito · All rights reserved.
        </p>
      </div>
    </footer>
  );
}
