import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#videos', label: 'Videos' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-[4%] py-5 flex justify-between items-center bg-[rgba(17,16,16,0.92)] backdrop-blur-xl border-b border-[var(--border-gold)]">
      <a
        href="#hero"
        className="text-xl font-semibold tracking-wide text-[var(--gold)] no-underline"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Interior <span className="text-[var(--text)]">Solution's</span>
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="no-underline text-[0.82rem] tracking-[0.12em] uppercase text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--gold)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden md:inline-block px-6 py-2 border border-[var(--gold)] text-[var(--gold)] text-[0.78rem] tracking-[0.1em] uppercase no-underline transition-all duration-250 hover:bg-[var(--gold)] hover:text-[var(--dark)]"
      >
        Get a Quote
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-[var(--gold)] bg-transparent border-none text-2xl cursor-pointer p-2"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--dark2)] md:hidden flex flex-col gap-6 p-8 border-b border-[var(--border-gold)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="no-underline text-[0.82rem] tracking-[0.12em] uppercase text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--gold)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block px-6 py-2 border border-[var(--gold)] text-[var(--gold)] text-[0.78rem] tracking-[0.1em] uppercase no-underline text-center transition-all duration-250 hover:bg-[var(--gold)] hover:text-[var(--dark)]"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
