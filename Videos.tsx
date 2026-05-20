import { LogoMark } from './LogoMark';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid md:grid-cols-2 items-center px-[4%] pt-32 pb-16 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 80% at 70% 50%, rgba(200,24,90,0.07) 0%, transparent 70%),
            repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(200,24,90,0.04) 80px),
            repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(200,24,90,0.04) 80px)
          `,
        }}
      />

      {/* Hero Text */}
      <div className="relative">
        <p className="flex items-center gap-4 text-[0.75rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-6 before:content-[''] before:block before:w-10 before:h-[1px] before:bg-[var(--gold)]">
          Interior Designer · Maharashtra
        </p>

        <h1 className="mb-8">
          Where spaces
          <br />
          find their
          <br />
          <em className="italic text-[var(--gold)]">true soul.</em>
        </h1>

        <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-[420px] mb-10">
          We believe a well-designed space has the power to transform lives. From
          residential sanctuaries to commercial statements — Interior Solution's
          crafts environments that inspire.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#work"
            className="px-9 py-4 bg-[var(--gold)] text-[var(--dark)] text-[0.82rem] tracking-[0.1em] uppercase no-underline font-medium transition-colors duration-200 hover:bg-[var(--gold-light)]"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="px-9 py-4 border border-[rgba(240,237,230,0.2)] text-[var(--text)] text-[0.82rem] tracking-[0.1em] uppercase no-underline transition-colors duration-200 hover:border-[var(--text)]"
          >
            Get a Consultation
          </a>
        </div>
      </div>

      {/* Hero Visual Card */}
      <div className="relative flex items-center justify-center mt-12 md:mt-0">
        <div className="bg-[var(--dark2)] border border-[var(--border-gold)] p-12 max-w-[360px] w-full relative before:content-[''] before:absolute before:top-[-1px] before:left-8 before:right-8 before:h-[2px] before:bg-[var(--gold)]">
          <LogoMark />

          <p
            className="text-[1.6rem] font-semibold text-[var(--text)] mb-1"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Mahendra N. Khade
          </p>
          <p className="text-[0.78rem] tracking-[0.18em] uppercase text-[var(--gold)] mb-8">
            Interior Designer
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8 pt-6 border-t border-[var(--border-gold)]">
            <div>
              <div
                className="text-[2.4rem] font-semibold text-[var(--gold)] leading-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                10+
              </div>
              <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[var(--text-muted)] mt-1">
                Years Active
              </div>
            </div>
            <div>
              <div
                className="text-[2.4rem] font-semibold text-[var(--gold)] leading-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                2
              </div>
              <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[var(--text-muted)] mt-1">
                Office Locations
              </div>
            </div>
            <div>
              <div
                className="text-[2.4rem] font-semibold text-[var(--gold)] leading-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                200+
              </div>
              <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[var(--text-muted)] mt-1">
                Projects Done
              </div>
            </div>
            <div>
              <div
                className="text-[2.4rem] font-semibold text-[var(--gold)] leading-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                100%
              </div>
              <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[var(--text-muted)] mt-1">
                Client Satisfaction
              </div>
            </div>
          </div>

          {/* Offices */}
          <div className="text-[0.78rem] text-[var(--text-muted)] leading-relaxed pt-6 border-t border-[var(--border-gold)]">
            <strong className="text-[var(--gold)] font-normal tracking-wider">
              Nagpur
            </strong>{' '}
            · Somalwada, 441108
            <br />
            <strong className="text-[var(--gold)] font-normal tracking-wider">
              Chandrapur
            </strong>{' '}
            · Behind Sai Temple, Civil Lines
          </div>
        </div>
      </div>
    </section>
  );
}
