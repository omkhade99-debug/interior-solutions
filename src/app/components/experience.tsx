export function Experience() {
  return (
    <section className="bg-[var(--dark)] px-[4%] py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-[0.75rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-4">
            Experience
          </p>

          <h2 className="text-5xl leading-tight">
            20 Years of <em className="text-[#c2185b] italic">Work Done</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-[var(--border-gold)] p-8 bg-[var(--dark2)]">
            <h3 className="text-[#c2185b] text-xl mb-6">Nagpur</h3>

            <ul className="space-y-3 text-[var(--text-muted)]">
              <li>Mr. Devendra Gawande</li>
              <li>Mr. Prakash Nikhade</li>
              <li>Mr. Darshan Raut</li>
              <li>Mr. Bhaskar Dhumne</li>
            </ul>
          </div>

          <div className="border border-[var(--border-gold)] p-8 bg-[var(--dark2)]">
            <h3 className="text-[#c2185b] text-xl mb-6">Chandrapur</h3>

            <ul className="space-y-3 text-[var(--text-muted)]">
              <li>Collector Bungalow</li>
              <li>Dr. Khutemate Hospital</li>
              <li>Dr. Wasade Hospital</li>
              <li>Tadoba Butterfly Garden</li>
            </ul>
          </div>

          <div className="border border-[var(--border-gold)] p-8 bg-[var(--dark2)]">
            <h3 className="text-[#c2185b] text-xl mb-6">Other Cities</h3>

            <ul className="space-y-3 text-[var(--text-muted)]">
              <li>Delhi — Mr. Anil Chopra</li>
              <li>Satna — Dr. Dhiren Pande</li>
              <li>Pune — Mr. Prashant Diwase</li>
              <li>Hyderabad — Mr. Gupta Sir</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}