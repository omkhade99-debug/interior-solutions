import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Project = {
  id: number;
  category: string;
  categoryLabel: string;
  name: string;
  featured?: boolean;
  images: string[];
};

const projects: Project[] = [
  {
    id: 1,
    category: "residential",
    categoryLabel: "Residential · Living Room",
    name: "Modern Luxury Apartment — Nagpur",
    featured: true,

    images: [
      "/portfolio/living room/living room final1.jpg",
      "/portfolio/living room/living room final2.jpg",
      "/portfolio/living room/living room final3.jpg",
      "/portfolio/living room/livingroom final4.jpeg",
      "/portfolio/living room/livingroom final5.jpeg",
      "/portfolio/living room/livingroom final6.jpeg",
      "/portfolio/living room/livingroom final7.jpeg",
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
      "/portfolio/office/office3.jpeg",
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
      "/portfolio/bedroom/bedroom6.jpeg",
    ],
  },

  {
    id: 4,
    category: "renovation",
    categoryLabel: "Renovation · Kitchen",
    name: "Modern Kitchen Design",

    images: [
      "/portfolio/kitchen/kitchen2.jpeg",
    ],
  },

  {
    id: 5,
    category: "commercial",
    categoryLabel: "Commercial · Hospital",
    name: "Spaces That Heal",

    images: [
      "/portfolio/office/office.jpeg",
      "/portfolio/office/office2.jpeg",
      "/portfolio/office/office3.jpeg",
    ],
  },
];

export function Portfolio() {
  return (
    <section
      id="work"
      className="py-28 px-[6%] bg-black overflow-hidden relative"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,20,90,0.08),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[0.35em] text-[var(--gold)] text-sm mb-6">
            Portfolio
          </p>

          <h2
            className="text-6xl md:text-7xl leading-[0.95] font-light text-white"
            style={{
              fontFamily: "var(--font-serif)",
            }}
          >
            Crafted
            <span className="italic text-[var(--gold)]">
              {" "}
              Luxury
            </span>
            <br />
            Spaces
          </h2>

        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                bg-[#0b0b0b]
                border
                border-[rgba(255,255,255,0.06)]
                rounded-[32px]
                overflow-hidden
                premium-glow
                hover-lift
              "
            >

              {/* Slideshow */}
              <div className="relative">

                <Swiper
                  modules={[
                    Autoplay,
                    Pagination,
                    Navigation,
                  ]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  speed={1400}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className="portfolio-swiper"
                >

                  {project.images.map((image, i) => (

                    <SwiperSlide key={i}>

                      <div className="aspect-[4/3] overflow-hidden">

                        <img
                          src={image}
                          alt={project.name}
                          className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-[7000ms]
                            hover:scale-110
                          "
                        />

                      </div>

                    </SwiperSlide>

                  ))}

                </Swiper>

              </div>

              {/* Content */}
              <div className="p-8">

                <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-4">
                  {project.categoryLabel}
                </p>

                <h3
                  className="text-3xl text-white leading-tight"
                  style={{
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  {project.name}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}