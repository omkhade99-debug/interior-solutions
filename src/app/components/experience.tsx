import { motion } from "framer-motion";

export function Experience() {
  return (
    <section
      id="experience"
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
          left-[15%]
          w-[350px]
          h-[350px]
          bg-pink-700/10
          blur-[120px]
          rounded-full
        " />

        <div className="
          absolute
          bottom-[10%]
          right-[10%]
          w-[300px]
          h-[300px]
          bg-pink-600/10
          blur-[120px]
          rounded-full
        " />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
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
            Experience
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
            Years of
            <span className="italic text-[var(--gold)]">
              {" "}
              Design
            </span>
            <br />
            Excellence
          </h2>

        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className="
              bg-black/60
              backdrop-blur-xl
              border
              border-white/10
              rounded-[28px]
              p-10
              text-center
              transition-all
              duration-500
              shadow-[0_0_50px_rgba(212,20,90,0.06)]
            "
          >

            <h3 className="
              text-6xl
              text-[var(--gold)]
              font-light
              mb-4
            ">
              500+
            </h3>

            <p className="
              uppercase
              tracking-[0.2em]
              text-white/60
              text-sm
            ">
              Luxury Projects
            </p>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className="
              bg-black/60
              backdrop-blur-xl
              border
              border-white/10
              rounded-[28px]
              p-10
              text-center
              transition-all
              duration-500
              shadow-[0_0_50px_rgba(212,20,90,0.06)]
            "
          >

            <h3 className="
              text-6xl
              text-[var(--gold)]
              font-light
              mb-4
            ">
              20+
            </h3>

            <p className="
              uppercase
              tracking-[0.2em]
              text-white/60
              text-sm
            ">
              Years Experience
            </p>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className="
              bg-black/60
              backdrop-blur-xl
              border
              border-white/10
              rounded-[28px]
              p-10
              text-center
              transition-all
              duration-500
              shadow-[0_0_50px_rgba(212,20,90,0.06)]
            "
          >

            <h3 className="
              text-6xl
              text-[var(--gold)]
              font-light
              mb-4
            ">
              25+
            </h3>

            <p className="
              uppercase
              tracking-[0.2em]
              text-white/60
              text-sm
            ">
              Design Awards
            </p>

          </motion.div>

        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className="
            mt-20
            text-center
            max-w-3xl
            mx-auto
          "
        >

          <p className="
            text-white/65
            text-lg
            leading-relaxed
          ">
            We believe exceptional interiors are more
            than aesthetics — they are experiences that
            inspire, comfort, and elevate everyday life.
          </p>

        </motion.div>

      </div>
    </section>
  );
}