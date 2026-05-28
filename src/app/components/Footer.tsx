export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--dark)] px-[4%] py-8 border-t border-[var(--border-gold)] flex justify-between items-center flex-wrap gap-4">
      <div
        className="text-[1.1rem] text-[var(--gold)] font-semibold"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Interior Solution's
      </div>
      <p className="text-[0.78rem] text-[var(--text-muted)]">
        © {currentYear} Interior Solution's · Nagpur & Chandrapur, Maharashtra, India
      </p>
      <p className="text-[0.78rem] text-[var(--text-muted)]">
         interiorsolutions1125@gmail.com
      </p>
    </footer>
  );
}
