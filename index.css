const services = [
  {
    num: '01',
    title: 'Residential Design',
    description:
      'Complete home interiors — living rooms, bedrooms, kitchens, bathrooms — designed around how you actually live.',
  },
  {
    num: '02',
    title: 'Commercial Interiors',
    description:
      'Offices, showrooms, and hospitality spaces that blend function with a strong brand identity.',
  },
  {
    num: '03',
    title: 'Space Planning',
    description:
      'Smart layouts that maximize flow, natural light, and usability — before construction begins.',
  },
  {
    num: '04',
    title: '3D Design & Visualization',
    description:
      'Photorealistic renders of your space so you can approve every detail before execution.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[var(--dark)] px-[4%] py-24">
      <div>
        <p className="flex items-center gap-4 text-[0.72rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-[var(--border-gold)] after:max-w-[80px]">
          What We Do
        </p>
        <h2>
          Our <em className="italic text-[var(--gold)]">Services</em>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[var(--border-gold)] border border-[var(--border-gold)] mt-12">
        {services.map((service) => (
          <div
            key={service.num}
            className="bg-[var(--dark)] p-10 transition-colors duration-250 hover:bg-[var(--dark2)]"
          >
            <div
              className="text-[2.5rem] font-light text-[rgba(200,24,90,0.3)] leading-none mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {service.num}
            </div>
            <h3 className="text-base font-medium text-[var(--text)] mb-3 tracking-wide">
              {service.title}
            </h3>
            <p className="text-[0.82rem] text-[var(--text-muted)] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
