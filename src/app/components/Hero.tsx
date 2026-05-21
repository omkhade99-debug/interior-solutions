import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-black text-white flex items-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-black opacity-90" />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-900/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-[6%] w-full">

        <div className="max-w-4xl">

          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-[var(--gold)] text-sm mb-6"
          >
            Interior & Space Design Studio
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl leading-tight font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Designing
            <span className="text-[var(--gold)] italic">
              {" "}
              Timeless
            </span>
            <br />
            Luxury Spaces
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 text-gray-400 text-lg max-w-2xl leading-relaxed"
          >
            Interior Solutions creates premium residential,
            commercial, and luxury interior experiences
            crafted with elegance, detail, and innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button className="px-8 py-4 bg-[var(--gold)] text-black font-medium hover:scale-105 transition duration-300">
              View Projects
            </button>

            <button className="px-8 py-4 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition duration-300">
              Contact Us
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            className="flex gap-12 mt-20 flex-wrap"
          >

            {/* Stat 1 */}
            <div>
              <h3 className="text-4xl text-[var(--gold)] font-semibold">
                500+
              </h3>

              <p className="text-gray-400 uppercase text-sm tracking-widest mt-2">
                Completed Projects
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h3 className="text-4xl text-[var(--gold)] font-semibold">
                20+
              </h3>

              <p className="text-gray-400 uppercase text-sm tracking-widest mt-2">
                Years Experience
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <h3 className="text-4xl text-[var(--gold)] font-semibold">
                100+
              </h3>

              <p className="text-gray-400 uppercase text-sm tracking-widest mt-2">
                Luxury Interiors
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}