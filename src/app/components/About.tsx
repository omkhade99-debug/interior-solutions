import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="bg-[var(--dark2)] text-white py-24 px-[6%] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-[var(--gold)] text-sm mb-4">
            About Us
          </p>

          <h2
            className="text-5xl md:text-6xl font-light leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Crafting
            <span className="italic text-[var(--gold)]">
              {" "}
              Elegant
            </span>
            <br />
            Interior Experiences
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src="/portfolio/living room/living room.jpeg"
              alt="Interior Design"
              className="w-full h-[650px] object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Interior Solutions is a premium interior
              and space design studio focused on creating
              timeless luxury environments that blend
              functionality, elegance, and innovation.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              From modern residential interiors to
              sophisticated commercial spaces, we design
              experiences that reflect individuality and
              elevate everyday living.
            </p>

            {/* Features */}
            <div className="space-y-6">

              <motion.div
                whileHover={{ x: 10 }}
                className="border-b border-gray-800 pb-4"
              >
                <h3 className="text-2xl text-[var(--gold)] mb-2">
                  Luxury Interiors
                </h3>

                <p className="text-gray-400">
                  Premium residential and commercial
                  interior solutions crafted with detail.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="border-b border-gray-800 pb-4"
              >
                <h3 className="text-2xl text-[var(--gold)] mb-2">
                  Space Planning
                </h3>

                <p className="text-gray-400">
                  Intelligent layouts balancing comfort,
                  aesthetics, and functionality.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="border-b border-gray-800 pb-4"
              >
                <h3 className="text-2xl text-[var(--gold)] mb-2">
                  Bespoke Design
                </h3>

                <p className="text-gray-400">
                  Personalized design experiences tailored
                  to every client and lifestyle.
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}