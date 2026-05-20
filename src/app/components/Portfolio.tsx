import { useState } from 'react';

type ProjectCategory = 'all' | 'residential' | 'commercial' | 'renovation';

interface Project {
  id: number;
  category: ProjectCategory;
  categoryLabel: string;
  name: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    category: 'residential',
    categoryLabel: 'Residential · Living Room',
    name: 'Modern Luxury Apartment — Nagpur',
    featured: true,
  },
  {
    id: 2,
    category: 'commercial',
    categoryLabel: 'Commercial · Office',
    name: 'Corporate Suite — Chandrapur',
  },
  {
    id: 3,
    category: 'residential',
    categoryLabel: 'Residential · Bedroom',
    name: 'Contemporary Master Suite',
  },
  {
    id: 4,
    category: 'renovation',
    categoryLabel: 'Renovation · Kitchen',
    name: 'Heritage Home Revived',
  },
  {
    id: 5,
    category: 'commercial',
    categoryLabel: 'Commercial · Showroom',
    name: 'Retail Experience Design',
  },
];

const filters: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'renovation', label: 'Renovation' },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="bg-[var(--dark)] px-[4%] py-24">
      {/* Header */}
      <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
        <div>
          <p className="flex items-center gap-4 text-[0.72rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-[var(--border-gold)] after:max-w-[80px]">
            Portfolio
          </p>
          <h2>
            Our <em className="italic text-[var(--gold)]">Work</em>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 border text-[0.75rem] tracking-[0.1em] uppercase cursor-pointer transition-all duration-200 ${
                activeFilter === filter.value
                  ? 'border-[var(--gold)] text-[var(--gold)]'
                  : 'border-[var(--border-gold)] text-[var(--text-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`relative overflow-hidden bg-[var(--dark2)] border border-[var(--border-gold)] cursor-pointer transition-colors duration-300 hover:border-[var(--gold)] ${
              project.featured ? 'md:col-span-2' : ''
            }`}
          >
            {/* Project Image Placeholder */}
            <div
              className={`w-full relative overflow-hidden flex items-center justify-center ${
                project.featured ? 'aspect-video' : 'aspect-[4/3]'
              }`}
              style={{
                background:
                  'linear-gradient(135deg, var(--dark2) 0%, var(--dark3) 100%)',
              }}
            >
              <div className="absolute inset-4 border border-dashed border-[var(--border-gold)]" />
              <div className="relative z-10">
                {/* Placeholder X */}
                <div className="relative w-12 h-12 opacity-30">
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[var(--gold)] rotate-45" />
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[var(--gold)] -rotate-45" />
                </div>
              </div>
              <span className="absolute bottom-4 text-[0.75rem] tracking-[0.15em] uppercase text-[rgba(200,24,90,0.5)]">
                Add project photo
              </span>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <p className="text-[0.68rem] tracking-[0.18em] uppercase text-[var(--gold)] mb-2">
                {project.categoryLabel}
              </p>
              <p
                className="text-[1.15rem] font-normal text-[var(--text)]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {project.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
