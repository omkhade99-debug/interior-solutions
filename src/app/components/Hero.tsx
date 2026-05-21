import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,24,90,0.18),transparent_40%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,24,90,0.12),transparent_40%)]" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-[6%] py-24 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Tag */}
          <p className="uppercase tracking-[0.35em] text-[var(--gold)] text-sm mb-8">
            Interior Design Studio
          </p>

          {/* Heading */}
          <h1
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
          </h1>

          {/* Paragraph */}
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
            Interior Solutions crafts premium residential,
            commercial, and luxury interior experiences with
            elegance, innovation, and timeless sophistication.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-12">

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

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-10 mt-24">

            <div>
              <h3 className="text-5xl text-[var(--gold)] mb-2">
                500+
              </h3>

              <p className="uppercase tracking-[0.15em] text-gray-400 text-sm">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-5xl text-[var(--gold)] mb-2">
                20+
              </h3>

              <p className="uppercase tracking-[0.15em] text-gray-400 text-sm">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-5xl text-[var(--gold)] mb-2">
                100+
              </h3>

              <p className="uppercase tracking-[0.15em] text-gray-400 text-sm">
                Interiors
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >

          <div className="relative w-full max-w-[420px] min-h-[560px] border border-[rgba(200,24,90,0.25)] bg-white/5 backdrop-blur-xl p-12 overflow-hidden">

            {/* Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--gold)] opacity-20 blur-[140px] rounded-full" />

            {/* Logo */}
            <div className="flex justify-center">

              <img
                src="/logo.png"
                alt="Interior Solutions Logo"
                className="w-40 object-contain"
              />

            </div>

            {/* Firm Name */}
            <div className="text-center mt-8">

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
            <div className="w-full h-px bg-[rgba(200,24,90,0.2)] my-10" />

            {/* Designer */}
            <div className="text-center">

              <h3
                className="text-3xl mb-2"
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
            <div className="grid grid-cols-2 gap-8 mt-14">

              <div className="text-center">
                <h4 className="text-4xl text-[var(--gold)] mb-2">
                  20+
                </h4>

                <p className="text-xs uppercase tracking-[0.15em] text-gray-400">
                  Years Active
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-4xl text-[var(--gold)] mb-2">
                  500+
                </h4>

                <p className="text-xs uppercase tracking-[0.15em] text-gray-400">
                  Projects Done
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-4xl text-[var(--gold)] mb-2">
                  100%
                </h4>

                <p className="text-xs uppercase tracking-[0.15em] text-gray-400">
                  Client Satisfaction
                </p>
              </div>
              {/* Bottom */}
            <div className="absolute bottom-10 left-0 right-0 text-center">

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