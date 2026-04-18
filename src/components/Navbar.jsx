import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useModal } from "./ModalContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const { open } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm border-b border-blush/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="font-serif text-xl text-forest font-semibold tracking-tight">
          Sunny Horne
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-forest" : "text-charcoal/60 hover:text-charcoal"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={open}
            className="ml-2 bg-forest text-cream text-sm font-medium px-5 py-2 rounded-full hover:bg-caramel transition-colors"
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-charcoal/70 hover:text-charcoal"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-blush/50 bg-cream px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-forest" : "text-charcoal/60"}`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => { setMenuOpen(false); open(); }}
            className="self-start bg-forest text-cream text-sm font-medium px-5 py-2 rounded-full hover:bg-caramel transition-colors"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}
