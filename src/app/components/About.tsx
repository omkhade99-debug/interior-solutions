import { motion } from "framer-motion";

export function About() {

  return (

    <section
      id="about"
      className="
        bg-black
        text-white
        py-24
        px-5
        md:px-[6%]
        overflow-hidden
        relative
      "
    >

      {/* Premium Pink Glow */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        bg-pink-700/10
        blur-[180px]
        rounded-full
      " />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
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
          className="mb-20"
        >

          <p className="
            uppercase
            tracking-[0.35em]
            text-[var(--gold)]
            text-sm
            mb-5
          ">
            About Us
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
            Crafting
            <span className="italic text-[var(--gold)]">
              {" "}
              Elegant
            </span>
            <br />
            Interior Experiences
          </h2>

        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Text */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
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

          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="space-y-6"
          >

            {/* Feature 1 */}
            <motion.div
              whileHover={{
                x: 12,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                bg-black/60
                border
                border-[rgba(255,255,255,0.06)]
                rounded-[28px]
                p-8
                backdrop-blur-xl
                shadow-[0_0_40px_rgba(255,0,127,0.06)]
              "
            >

              <h3 className="
                text-3xl
                text-[var(--gold)]
                mb-4
                font-light
              ">
                Luxury Interiors
              </h3>

              <p className="
                text-white/60
                leading-relaxed
              ">
                Premium residential and commercial
                interior solutions crafted with
                refined detailing and modern luxury.
              </p>

            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{
                x: 12,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                bg-black/60
                border
                border-[rgba(255,255,255,0.06)]
                rounded-[28px]
                p-8
                backdrop-blur-xl
                shadow-[0_0_40px_rgba(255,0,127,0.06)]
              "
            >

              <h3 className="
                text-3xl
                text-[var(--gold)]
                mb-4
                font-light
              ">
                Space Planning
              </h3>

              <p className="
                text-white/60
                leading-relaxed
              ">
                Intelligent layouts balancing
                comfort, aesthetics, functionality,
                and seamless spatial experiences.
              </p>

            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{
                x: 12,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                bg-black/60
                border
                border-[rgba(255,255,255,0.06)]
                rounded-[28px]
                p-8
                backdrop-blur-xl
                shadow-[0_0_40px_rgba(255,0,127,0.06)]
              "
            >

              <h3 className="
                text-3xl
                text-[var(--gold)]
                mb-4
                font-light
              ">
                Bespoke Design
              </h3>

              <p className="
                text-white/60
                leading-relaxed
              ">
                Personalized design experiences
                tailored to every client, lifestyle,
                and architectural vision.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}