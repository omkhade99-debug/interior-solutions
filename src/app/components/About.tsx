import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="
        bg-black
        text-white
        py-24
        px-[6%]
        overflow-hidden
        relative
      "
    >

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="
          absolute
          top-[10%]
          left-[10%]
          w-[400px]
          h-[400px]
          bg-pink-700/10
          blur-[120px]
          rounded-full
        " />

        <div className="
          absolute
          bottom-[10%]
          right-[10%]
          w-[350px]
          h-[350px]
          bg-pink-600/10
          blur-[120px]
          rounded-full
        " />

      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <p className="
            uppercase
            tracking-[0.3em]
            text-[var(--gold)]
            text-sm
            mb-4
          ">
            About Us
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-light
              leading-tight
              text-white
            "
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

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            bg-black/50
            backdrop-blur-xl
            border
            border-white/10
            rounded-[36px]
            p-12
            shadow-[0_0_80px_rgba(212,20,90,0.06)]
          "
        >

          <p className="
            text-white/70
            text-lg
            leading-relaxed
            mb-8
          ">
            Interior Solutions is a premium interior
            and space design studio focused on creating
            timeless luxury environments that blend
            functionality, elegance, and innovation.
          </p>

          <p className="
            text-white/70
            text-lg
            leading-relaxed
            mb-12
          ">
            From modern residential interiors to
            sophisticated commercial spaces, we design
            experiences that reflect individuality and
            elevate everyday living.
          </p>

          {/* Features */}
          <div className="space-y-8">

            {/* Feature 1 */}
            <motion.div
              whileHover={{ x: 10 }}
              className="
                border-b
                border-white/10
                pb-5
                transition-all
                duration-500
              "
            >

              <h3 className="
                text-2xl
                text-[var(--gold)]
                mb-2
              ">
                Luxury Interiors
              </h3>

              <p className="text-white/65">
                Premium residential and commercial
                interior solutions crafted with detail.
              </p>

            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ x: 10 }}
              className="
                border-b
                border-white/10
                pb-5
                transition-all
                duration-500
              "
            >

              <h3 className="
                text-2xl
                text-[var(--gold)]
                mb-2
              ">
                Space Planning
              </h3>

              <p className="text-white/65">
                Intelligent layouts balancing comfort,
                aesthetics, and functionality.
              </p>

            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ x: 10 }}
              className="
                border-b
                border-white/10
                pb-5
                transition-all
                duration-500
              "
            >

              <h3 className="
                text-2xl
                text-[var(--gold)]
                mb-2
              ">
                Bespoke Design
              </h3>

              <p className="text-white/65">
                Personalized design experiences tailored
                to every client and lifestyle.
              </p>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}