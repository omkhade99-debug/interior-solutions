import { motion } from "framer-motion";

export function Contact() {

  return (

    <section
      id="contact"
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
          className="mb-20 text-center"
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
            Contact
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
            Let’s Create
            <span className="italic text-[var(--gold)]">
              {" "}
              Something
            </span>
            <br />
            Extraordinary
          </h2>

        </motion.div>

        {/* Contact Box */}
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
          className="
            bg-black/60
            border
            border-[rgba(255,255,255,0.06)]
            rounded-[36px]
            p-8
            md:p-14
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(255,0,127,0.08)]
          "
        >

          <form
            action="https://formspree.io/f/mnjrjwyk"
            method="POST"
            className="grid gap-8"
          >

            {/* Name */}
            <div>

              <label
                className="
                  text-white/70
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  mb-4
                  block
                "
              >
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-5
                  text-white
                  placeholder:text-white/30
                  outline-none
                  transition-all
                  duration-500
                  focus:border-[#ff007f]
                  focus:bg-black
                "
              />

            </div>

            {/* Phone */}
            <div>

              <label
                className="
                  text-white/70
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  mb-4
                  block
                "
              >
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                required
                inputMode="numeric"
                placeholder="Enter your phone number"
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-5
                  text-white
                  placeholder:text-white/30
                  outline-none
                  transition-all
                  duration-500
                  focus:border-[#ff007f]
                  focus:bg-black
                "
              />

            </div>

            {/* Service Dropdown */}
            <div>

              <label
                className="
                  text-white/70
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  mb-4
                  block
                "
              >
                Service Required
              </label>

              <select
                name="service"
                required
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-5
                  text-white
                  outline-none
                  transition-all
                  duration-500
                  focus:border-[#ff007f]
                  focus:bg-black
                "
              >

                <option value="">Select Service</option>

                <option>Luxury Interior Design</option>

                <option>Residential Interiors</option>

                <option>Commercial Interiors</option>

                <option>Space Planning</option>

                <option>Custom Furniture Design</option>

              </select>

            </div>

            {/* Message */}
            <div>

              <label
                className="
                  text-white/70
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  mb-4
                  block
                "
              >
                Project Details
              </label>

              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell us about your dream project..."
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-5
                  text-white
                  placeholder:text-white/30
                  outline-none
                  resize-none
                  transition-all
                  duration-500
                  focus:border-[#ff007f]
                  focus:bg-black
                "
              />

            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              type="submit"
              className="
                w-full
                bg-[#ff007f]
                hover:bg-[#ff3399]
                text-white
                rounded-2xl
                py-5
                uppercase
                tracking-[0.3em]
                text-sm
                transition-all
                duration-500
                shadow-[0_0_40px_rgba(255,0,127,0.35)]
              "
            >
              Send Inquiry
            </motion.button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}