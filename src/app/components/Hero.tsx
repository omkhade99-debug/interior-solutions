import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,24,90,0.25),transparent_60%)]" />

      {/* Animated Background Blur */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--gold)] opacity-20 blur-[180px] rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-[6%] w-full">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >

          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="uppercase text-[var(--gold)] text-sm tracking-[0.3em] mb-8"
          >
            Interior Design Studio
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-8xl leading-[0.95] font-light mb-10"
            style={{
              fontFamily: "var(--font-serif)",
            }}
          >
            Designing
            <span className="italic text-[var(--gold)]">
              {" "}
              Timeless
            </span>
            <br />
            Luxury Spaces
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Interior Solutions creates premium residential,
            commercial, and luxury interior experiences crafted
            with elegance, detail, and innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap gap-6 mt-12"
          >

            <a
              href="#work"
              className="px-10 py-4 bg-[var(--gold)] text-black font-medium hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-10 py-4 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition duration-300"
            >
              Contact Us
            </a>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="grid grid-cols-3 gap-10 mt-24 max-w-3xl"
          >

            <div>
              <h3 className="text-5xl text-[var(--gold)] mb-2">
                500+
              </h3>

              <p className="uppercase tracking-[0.15em] text-gray-400 text-sm">
                Completed Projects
              </p>
            </div>

            <div>
              <h3 className="text-5xl text-[var(--gold)] mb-2">
                20+
              </h3>

              <p className="uppercase tracking-[0.15em] text-gray-400 text-sm">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-5xl text-[var(--gold)] mb-2">
                100+
              </h3>

              <p className="uppercase tracking-[0.15em] text-gray-400 text-sm">
                Luxury Interiors
              </p>
            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}