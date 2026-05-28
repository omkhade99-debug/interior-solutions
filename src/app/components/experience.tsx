import { motion } from "framer-motion";

export function Experience() {

  return (

    <section
      id="experience"
      className="
        py-28
        px-5
        md:px-[6%]
        bg-black
        relative
        overflow-hidden
      "
    >

      {/* Premium Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          bg-pink-700/10
          blur-[180px]
          rounded-full
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="mb-24 text-center"
        >

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-[var(--gold)]
              text-sm
              mb-6
            "
          >
            Experience
          </p>

          <h2
            className="
              text-4xl
              md:text-7xl
              leading-[0.95]
              font-light
              text-white
            "
            style={{
              fontFamily: "var(--font-serif)",
            }}
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
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {/* Card 1 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="
              bg-black/60
              border
              border-[rgba(255,255,255,0.06)]
              rounded-[32px]
              p-12
              text-center
              backdrop-blur-xl
              shadow-[0_0_50px_rgba(255,0,127,0.06)]
              transition-all
              duration-500
            "
          >

            <h3
              className="
                text-6xl
                md:text-7xl
                text-[var(--gold)]
                font-light
                mb-6
              "
            >
              500+
            </h3>

            <p
              className="
                uppercase
                tracking-[0.2em]
                text-white/60
                text-sm
              "
            >
              Luxury Projects
            </p>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="
              bg-black/60
              border
              border-[rgba(255,255,255,0.06)]
              rounded-[32px]
              p-12
              text-center
              backdrop-blur-xl
              shadow-[0_0_50px_rgba(255,0,127,0.06)]
              transition-all
              duration-500
            "
          >

            <h3
              className="
                text-6xl
                md:text-7xl
                text-[var(--gold)]
                font-light
                mb-6
              "
            >
              20+
            </h3>

            <p
              className="
                uppercase
                tracking-[0.2em]
                text-white/60
                text-sm
              "
            >
              Years Experience
            </p>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="
              bg-black/60
              border
              border-[rgba(255,255,255,0.06)]
              rounded-[32px]
              p-12
              text-center
              backdrop-blur-xl
              shadow-[0_0_50px_rgba(255,0,127,0.06)]
              transition-all
              duration-500
            "
          >

            <h3
              className="
                text-6xl
                md:text-7xl
                text-[var(--gold)]
                font-light
                mb-6
              "
            >
              25+
            </h3>

            <p
              className="
                uppercase
                tracking-[0.2em]
                text-white/60
                text-sm
              "
            >
              Design Awards
            </p>

          </motion.div>

        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="
            mt-24
            text-center
            max-w-4xl
            mx-auto
          "
        >

          <p
            className="
              text-white/65
              text-lg
              md:text-xl
              leading-relaxed
            "
          >
            We believe exceptional interiors are more
            than aesthetics — they are experiences
            designed to inspire, comfort, and elevate
            everyday living through timeless luxury and
            intelligent spatial design.
          </p>

        </motion.div>

      </div>

    </section>
  );
}