import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menus' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  {
    name: 'Facebook',
    href: '#',
    path: 'M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z',
  },
  {
    name: 'Instagram',
    href: '#',
    path: 'M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 1.8.3 2.2.4.6.2 1 .5 1.4 1s.8.8 1 1.4c.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.3 1.8-.4 2.2-.2.6-.5 1-1 1.4s-.8.8-1.4 1c-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-1s-.8-.8-1-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c0-1.2.3-1.8.4-2.2.2-.6.5-1 1-1.4s.8-.8 1.4-1c.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6c-.8.3-1.5.7-2.2 1.4C1.3 2.7.9 3.4.6 4.2.3 5 .1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c0 1.3.3 2.1.6 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.6C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3 0 2.1-.3 2.9-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.6-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c0-1.3-.3-2.1-.6-2.9-.3-.8-.7-1.5-1.4-2.2C21.3 1.3 20.6.9 19.8.6 19 .3 18.2.1 16.9.1 15.7 0 15.3 0 12 0zm0 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.3A4.1 4.1 0 1 1 16.1 12 4.1 4.1 0 0 1 12 16.1zm6.4-11.9a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z',
  },
  {
    name: 'Twitter',
    href: '#',
    path: 'M18.9 6.4c.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4.9a3.9 3.9 0 0 0-6.7 3.5A11 11 0 0 1 3.4 4.6a3.9 3.9 0 0 0 1.2 5.2c-.6 0-1.3-.2-1.8-.5v.1a3.9 3.9 0 0 0 3.1 3.8c-.5.2-1.1.2-1.7.1a3.9 3.9 0 0 0 3.7 2.7A7.9 7.9 0 0 1 2 17.6a11 11 0 0 0 6 1.7c7.2 0 11.1-6 11.1-11.1v-.5c.8-.6 1.4-1.3 2-2.1-.7.3-1.5.5-2.2.6z',
  },
  {
    name: 'Pinterest',
    href: '#',
    path: 'M12 0a12 12 0 0 0-4.4 23.2c-.1-.9-.2-2.4 0-3.4.2-.9 1.3-5.7 1.3-5.7s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-1 3.8-.3 1.1.6 2 1.6 2 2 0 3.5-2.1 3.5-5.1 0-2.7-1.9-4.5-4.7-4.5-3.2 0-5 2.4-5 4.9 0 1 .4 2 .9 2.6.1.1.1.2.1.3-.1.4-.3 1.1-.3 1.3 0 .2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.1 0 7.3 2.9 7.3 6.9 0 4.1-2.6 7.4-6.2 7.4-1.2 0-2.4-.7-2.8-1.4l-.7 2.9c-.3 1-1 2.4-1.5 3.2A12 12 0 1 0 12 0z',
  },
  {
    name: 'Yelp',
    href: '#',
    path: 'M14.4 15.5v6.7c0 .8-.6 1.4-1.3 1.4-.1 0-.3 0-.4-.1L9.5 22.5a1.3 1.3 0 0 1-.9-1.7l1.5-2.9a1.3 1.3 0 0 1 2.4.1zM8.7 15l1.7-3.2a1.3 1.3 0 0 0-1-1.9L4.9 8.6c-.7-.2-1.4.3-1.5 1v.3a10.2 10.2 0 0 0 2.5 6.1c.5.5 1.3.5 1.8 0zm5.7-4.9V1.4c0-.7-.6-1.4-1.4-1.3l-.4.1c-2.6.5-4.9 2-6.5 4-.4.6-.4 1.4.1 1.9l6 6a1.3 1.3 0 0 0 2.2-1zm5.9 4.1c-1.5-.4-3-.7-4.6-1a1.3 1.3 0 0 0-1.1 2.2l3.7 3.4c.6.5 1.4.4 1.8-.2a10.1 10.1 0 0 0 1.4-3.1c.2-.7-.3-1.3-1-1.4h-.2zm-.7-6.3a1.3 1.3 0 0 0-1.8-.1L14 10.8a1.3 1.3 0 0 0 1 2.2c1.5-.1 3-.3 4.4-.8.7-.2 1-1 .7-1.6-.4-1.1-1-2-1.7-2.8z',
  },
];

const contact = [
  {
    label: 'Silk St, Barbican, London EC2Y 8DS, UK',
    icon: (
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    ),
  },
  {
    label: '+39-055-123456',
    icon: (
      <path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6a1 1 0 0 0-1 .2l-2.2 2.2a15 15 0 0 1-6.6-6.6l2.2-2.2a1 1 0 0 0 .3-1 11.4 11.4 0 0 1-.7-3.6 1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-.9z" />
    ),
  },
  {
    label: 'booking@elquetzalito.com',
    icon: (
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const overlay = pathname === '/';

  const headerCls = overlay
    ? 'absolute inset-x-0 top-0 z-40 text-white'
    : 'sticky top-0 z-40 border-b border-black/5 bg-white text-brand-dark';

  const buttonCls = overlay
    ? 'border border-white/80 hover:bg-white hover:text-brand-dark'
    : 'border border-brand-dark/60 hover:bg-brand-dark hover:text-white';

  return (
    <header className={headerCls}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 transition hover:opacity-70"
        >
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
        </button>

        <Link to="/" className="flex flex-col items-center leading-none">
          <span
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Ephesis, cursive' }}
          >
            El Quetzalito
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.35em] opacity-90">
            Restaurant Est. 1998
          </span>
        </Link>

        <Link
          to="/reservations"
          className={`${buttonCls} px-5 py-2.5 text-xs uppercase tracking-[0.25em] transition`}
        >
          Find a Table
        </Link>
      </nav>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 flex w-full max-w-md flex-col overflow-y-auto bg-brand-cream text-brand-dark shadow-2xl">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="self-end p-6 text-2xl leading-none transition hover:opacity-70"
            >
              ×
            </button>

            <div className="flex-1 px-8">
              <ul className="space-y-4">
                {links.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `font-display text-3xl font-medium uppercase tracking-wide transition ${
                          isActive ? 'text-brand' : 'hover:text-brand'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Link
                to="/reservations"
                onClick={() => setOpen(false)}
                className="mt-8 inline-block border border-brand px-6 py-3 text-xs uppercase tracking-[0.25em] text-brand transition hover:bg-brand hover:text-white"
              >
                Make a Reservation
              </Link>

              <div className="mt-8 flex items-center gap-5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="transition hover:text-brand"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-brand-dark/10 px-8 py-8">
              <ul className="space-y-5">
                {contact.map((c) => (
                  <li key={c.label} className="flex items-center gap-4 text-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 shrink-0 text-brand"
                      fill="currentColor"
                    >
                      {c.icon}
                    </svg>
                    <span>{c.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
