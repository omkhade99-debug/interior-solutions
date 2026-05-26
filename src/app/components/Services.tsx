import { motion } from "framer-motion";

const services = [
  {
    title: "Luxury Interiors",
    description:
      "Elegant residential and commercial interiors crafted with premium materials and timeless aesthetics.",
  },

  {
    title: "Space Planning",
    description:
      "Functional layouts designed to maximize comfort, circulation, and visual harmony.",
  },

  {
    title: "Furniture Design",
    description:
      "Custom furniture concepts tailored to match the personality and identity of each space.",
  },

  {
    title: "Lighting Design",
    description:
      "Sophisticated lighting solutions that enhance ambience, depth, and architectural beauty.",
  },

  {
    title: "Renovation",
    description:
      "Transforming existing spaces into modern luxury environments with refined detailing.",
  },

  {
    title: "3D Visualization",
    description:
      "Realistic 3D renders and visual presentations to help clients experience the design before execution.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-24 px-[6%] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-[var(--gold)] text-sm mb-4">
            Services
          </p>

          <h2
            className="text-5xl md:text-6xl font-light leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What We
            <span className="italic text-[var(--gold)]">
              {" "}
              Create
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-[var(--dark2)] border border-gray-800 p-10 transition-all duration-300 hover:border-[var(--gold)]"
            >

              {/* Number */}
              <p className="text-[var(--gold)] text-4xl font-light mb-8">
                0{index + 1}
              </p>

              {/* Title */}
              <h3
                className="text-2xl mb-4"
                style={{
                  fontFamily: "var(--font-serif)",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}