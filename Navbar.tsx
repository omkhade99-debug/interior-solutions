const features = [
  {
    icon: '⬡',
    title: 'Residential Design',
    description: 'Homes that reflect who you are and how you live.',
  },
  {
    icon: '◈',
    title: 'Commercial Spaces',
    description: 'Offices, retail, and hospitality that work beautifully.',
  },
  {
    icon: '◇',
    title: 'Renovation',
    description: 'Breathing new life into existing spaces with care.',
  },
  {
    icon: '△',
    title: '3D Visualization',
    description: 'See your space before a single nail is driven.',
  },
];

export function About() {
  return (
    <section
      id="about"
      className="bg-[var(--dark2)] grid md:grid-cols-2 gap-20 items-center px-[4%] py-24"
    >
      {/* About Text */}
      <div>
        <p className="flex items-center gap-4 text-[0.72rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-[var(--border-gold)] after:max-w-[80px]">
          About the Studio
        </p>

        <h2 className="mb-6">
          Design is not
          <br />
          decoration — it is
          <br />
          <em className="italic text-[var(--gold)]">purpose.</em>
        </h2>

        <p className="text-[var(--text-muted)] leading-relaxed mb-4 text-[0.95rem]">
          Interior Solution's is a full-service interior design studio based in
          Maharashtra, India. Founded by Mahendra N. Khade, the studio believes
          that thoughtful design transforms everyday spaces into meaningful
          experiences.
        </p>

        <p className="text-[var(--text-muted)] leading-relaxed mb-10 text-[0.95rem]">
          With offices in Nagpur and Chandrapur, we serve clients across
          Maharashtra — from intimate residential projects to large-scale
          commercial transformations.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-5 border border-[var(--border-gold)] bg-[var(--dark3)]"
            >
              <div className="w-8 h-8 border border-[var(--gold)] flex items-center justify-center mb-3 text-[var(--gold)] text-sm">
                {feature.icon}
              </div>
              <h4 className="text-[0.85rem] font-medium text-[var(--text)] mb-1 tracking-wide">
                {feature.title}
              </h4>
              <p className="text-[0.78rem] text-[var(--text-muted)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="relative p-12 bg-[var(--dark3)] border-l-[3px] border-[var(--gold)]">
        <blockquote
  className="text-2xl italic font-light leading-relaxed text-[var(--text)] mb-6"
  style={{ fontFamily: 'var(--font-serif)' }}
>
  Let <span className="text-[#c2185b]">our</span> Decor Tell Your Story.
</blockquote>
        <p className="text-[0.78rem] tracking-[0.15em] uppercase text-[var(--gold)]">
          — Mahendra N. Khade, Founder
        </p>
      </div>
    </section>
  );
}
