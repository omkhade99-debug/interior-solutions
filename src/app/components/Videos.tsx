import { ExternalLink } from 'lucide-react';

export function Videos() {
  return (
    <section id="videos" className="bg-[var(--dark2)] px-[4%] py-24">
      <div>
        <p className="flex items-center gap-4 text-[0.72rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-[var(--border-gold)] after:max-w-[80px]">
          YouTube
        </p>
        <h2>
          Watch Us <em className="italic text-[var(--gold)]">Create</em>
        </h2>
        <p className="text-[var(--text-muted)] text-[0.95rem] mt-2 max-w-[500px]">
          Follow our journey through every project — design reveals, walkthroughs,
          and tips from the studio.
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Video Embed */}
        <div className="relative pb-[56.25%] bg-[var(--dark3)] border border-[var(--border-gold)] overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/1Jo8azRFK50?si=mYueNdMLBjnfgWuB"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            title="Interior Solution's YouTube Channel"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <div className="bg-[var(--dark3)] border border-[var(--border-gold)] p-8">
            <p
              className="text-[1.3rem] italic text-[var(--text)] leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              "A well-designed space has the power to transform lives."
            </p>
            <p className="text-[0.82rem] text-[var(--text-muted)] leading-relaxed">
              Subscribe to our channel for behind-the-scenes content, full project
              walkthroughs, and interior design inspiration straight from our
              studios in Nagpur and Chandrapur.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@mahendrakhade9127"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-[var(--gold)] no-underline text-[0.82rem] tracking-[0.1em] uppercase px-8 py-4 border border-[var(--gold)] transition-all duration-200 hover:bg-[var(--gold)] hover:text-[var(--dark)]"
          >
            <ExternalLink size={16} />
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}
