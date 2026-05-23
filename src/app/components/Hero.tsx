import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center py-32">

      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,20,90,0.12),transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,20,90,0.08),transparent_35%)]" />

      {/* Floating Blur */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-200px]
          right-[-150px]
          w-[700px]
          h-[700px]
          rounded-full
          bg-[var(--gold)]/10
          blur-[180px]
        "
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-[6%] grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >

          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="uppercase text-[var(--gold)] text-sm tracking-[0.35em] mb-8"
          >
            Interior Design Studio
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="text-6xl md:text-8xl leading-[0.92] font-light mb-10"
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
            transition={{ delay: 0.8, duration: 1.2 }}
            className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl"
          >
            Interior Solutions crafts premium residential,
            commercial, and luxury interior experiences
            with elegance, innovation, and timeless sophistication.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="flex flex-wrap gap-6 mt-14"
          >

            <a
              href="#work"
              className="
                px-10
                py-5
                bg-[var(--gold)]
                text-white
                uppercase
                tracking-[0.2em]
                text-sm
                hover:scale-[1.03]
                transition-all
                duration-500
                soft-shadow
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-10
                py-5
                border
                border-[var(--gold)]
                text-[var(--gold)]
                uppercase
                tracking-[0.2em]
                text-sm
                hover:bg-[var(--gold)]
                hover:text-white
                hover:scale-[1.03]
                transition-all
                duration-500
              "
            >
              Contact Us
            </a>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            className="grid grid-cols-3 gap-12 mt-24"
          >

            <div>
              <h3 className="text-5xl text-[var(--gold)] mb-3">
                500+
              </h3>

              <p className="uppercase tracking-[0.15em] text-gray-400 text-sm">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-5xl text-[var(--gold)] mb-3">
                20+
              </h3>

              <p className="uppercase tracking-[0.15em] text-gray-400 text-sm">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-5xl text-[var(--gold)] mb-3">
                100+
              </h3>

              <p className="uppercase tracking-[0.15em] text-gray-400 text-sm">
                Interiors
              </p>
            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT PREMIUM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex justify-center"
        >

          <div
            className="
              relative
              w-full
              max-w-[430px]
              min-h-[580px]
              glass
              premium-glow
              float-slow
              rounded-[36px]
              p-12
              overflow-hidden
              border-glow
            "
          >

            {/* Ambient Glow */}
            <div
              className="
                absolute
                -top-24
                -right-24
                w-72
                h-72
                rounded-full
                bg-[var(--gold)]/10
                blur-[140px]
              "
            />

            {/* Logo */}
            <div className="flex justify-center">

              <img
                src="/logo.png"
                alt="Interior Solutions Logo"
                className="
                  w-44
                  object-contain
                  drop-shadow-[0_0_20px_rgba(212,20,90,0.25)]
                "
              />

            </div>

            {/* Firm Name */}
            <div className="text-center mt-10">

              <h2
                className="text-4xl mb-3"
                style={{
                  fontFamily: "var(--font-serif)",
                }}
              >
                Interior Solution's
              </h2>

              <p className="uppercase tracking-[0.25em] text-[var(--gold)] text-sm">
                Luxury Interior Studio
              </p>

            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[rgba(212,20,90,0.2)] my-12" />

            {/* Designer */}
            <div className="text-center">

              <h3
                className="text-3xl mb-3"
                style={{
                  fontFamily: "var(--font-serif)",
                }}
              >
                Mahendra N. Khade
              </h3>

              <p className="uppercase tracking-[0.2em] text-gray-400 text-sm">
                Founder & Interior Designer
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-12 mt-16">

              <div className="text-center">
                <h4 className="text-4xl text-[var(--gold)] mb-3">
                  20+
                </h4>

                <p className="text-xs uppercase tracking-[0.15em] text-gray-400">
                  Years Active
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-4xl text-[var(--gold)] mb-3">
                  500+
                </h4>

                <p className="text-xs uppercase tracking-[0.15em] text-gray-400">
                  Projects Done
                </p>
              </div>

              <div className="text-center col-span-2">
                <h4 className="text-4xl text-[var(--gold)] mb-3">
                  100%
                </h4>

                <p className="text-xs uppercase tracking-[0.15em] text-gray-400">
                  Client Satisfaction
                </p>
              </div>

            </div>

            {/* Bottom Location */}
            <div className="absolute bottom-8 left-0 right-0 text-center">

              <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
                Nagpur · Chandrapur · Maharashtra
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}