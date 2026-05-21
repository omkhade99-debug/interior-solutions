import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ProjectCategory =
  | "all"
  | "residential"
  | "commercial"
  | "renovation";

interface Project {
  id: number;
  category: ProjectCategory;
  categoryLabel: string;
  name: string;
  featured?: boolean;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    category: "residential",
    categoryLabel: "Residential · Living Room",
    name: "Modern Luxury Apartment — Nagpur",
    featured: true,

    images: [
      "/portfolio/living room/living room.jpeg",
      "/portfolio/living room/living room2.jpeg",
      "/portfolio/living room/living room 3.jpeg",
    ],
  },

  {
    id: 2,
    category: "commercial",
    categoryLabel: "Commercial · Office",
    name: "Corporate Suite — Chandrapur",

    images: [
      "/portfolio/office/office.jpeg",
      "/portfolio/office/office2.jpeg",
      "/portfolio/office/office 3.jpeg",
         ],
  },

  {
    id: 3,
    category: "residential",
    categoryLabel: "Residential · Bedroom",
    name: "Contemporary Master Suite",

    images: [
      "/portfolio/bedroom/bedroom.jpeg",
      "/portfolio/bedroom/bedroom2.jpeg",
      "/portfolio/bedroom/bedroom3.jpeg",
      "/portfolio/bedroom/bedroom4.jpeg",
      "/portfolio/bedroom/bedroom5.jpeg",
    ],
  },

  {
    id: 4,
    category: "renovation",
    categoryLabel: "Renovation · Kitchen",
    name: "Modern Kitchen Design",

    images: [
      "/portfolio/kitchen/kitchen.jpeg",
      "/portfolio/kitchen/kitchen2.jpeg",
    ],
  },

  {
    id: 5,
    category: "commercial",
    categoryLabel: "Commercial · Showroom",
    name: "Retail Experience Design",

    images: [
      "/portfolio/office/office.jpeg",
      "/portfolio/office/office2.jpeg",
      "/portfolio/office/office 3.jpeg",
    ],
  },
];

const filters: {
  value: ProjectCategory;
  label: string;
}[] = [
  { value: "all", label: "All" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "renovation", label: "Renovation" },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (p) => p.category === activeFilter
        );

  return (
    <section
      id="work"
      className="bg-[var(--dark)] px-[4%] py-24"
    >
      {/* Header */}
      <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
        <div>
          <p className="flex items-center gap-4 text-[0.72rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl text-white">
            Our{" "}
            <em className="italic text-[var(--gold)]">
              Work
            </em>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() =>
                setActiveFilter(filter.value)
              }
              className={`px-5 py-2 border text-[0.75rem] tracking-[0.1em] uppercase transition-all duration-200 ${
                activeFilter === filter.value
                  ? "border-[var(--gold)] text-[var(--gold)]"
                  : "border-gray-700 text-gray-400 hover:border-[var(--gold)] hover:text-[var(--gold)]"
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
            className={`overflow-hidden border border-gray-700 bg-black transition-all duration-300 hover:border-[var(--gold)] ${
              project.featured
                ? "md:col-span-2"
                : ""
            }`}
          >
            {/* Image Slider */}
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Autoplay,
              ]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop={true}
              className={
                project.featured
                  ? "aspect-video"
                  : "aspect-[4/3]"
              }
            >
              {project.images.map(
                (image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>

            {/* Project Info */}
            <div className="p-6">
              <p className="text-sm uppercase text-[var(--gold)] mb-2">
                {project.categoryLabel}
              </p>

              <h3 className="text-xl text-white">
                {project.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}