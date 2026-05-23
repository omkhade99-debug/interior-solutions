import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-28 px-[6%] overflow-hidden relative"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,20,90,0.08),transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,20,90,0.06),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[0.35em] text-[var(--gold)] text-sm mb-6">
            Contact
          </p>

          <h2
            className="text-6xl md:text-7xl leading-[0.95] font-light text-white"
            style={{
              fontFamily: "var(--font-serif)",
            }}
          >
            Let's Build
            <span className="italic text-[var(--gold)]">
              {" "}
              Something
            </span>
            <br />
            Extraordinary
          </h2>

        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="
              bg-[#0b0b0b]
              border
              border-[rgba(212,20,90,0.18)]
              rounded-[36px]
              p-12
              premium-glow
            "
          >

            <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-sm mb-6">
              Interior Solution's
            </p>

            <h3
              className="text-5xl leading-tight mb-10 text-white"
              style={{
                fontFamily: "var(--font-serif)",
              }}
            >
              Start Your
              <span className="italic text-[var(--gold)]">
                {" "}
                Dream Space
              </span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg mb-12">
              From luxurious residential interiors to premium
              commercial spaces, we create timeless experiences
              crafted with elegance and precision.
            </p>

            {/* Contact Info */}
            <div className="space-y-10">

              {/* Email */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-3">
                  Email
                </p>

                <p className="text-gray-300 text-lg">
                  interiorsolutions@gmail.com
                </p>

              </div>

              {/* Phone */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-3">
                  Phone
                </p>

                <p className="text-gray-300 text-lg">
                  +91 98765 43210
                </p>

              </div>

              {/* Nagpur Office */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-3">
                  Nagpur Office
                </p>

                <a
                  href="https://maps.app.goo.gl/xycTBAn9pwzHDTDF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    text-lg
                    hover:text-[var(--gold)]
                    transition-all
                    duration-500
                  "
                >
                  View on Google Maps ↗
                </a>

              </div>

              {/* Chandrapur Office */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-3">
                  Chandrapur Office
                </p>

                <a
                  href="https://maps.app.goo.gl/txVCXxEKspnZUTs9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    text-lg
                    hover:text-[var(--gold)]
                    transition-all
                    duration-500
                  "
                >
                  View on Google Maps ↗
                </a>

              </div>

              {/* Service Areas */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-3">
                  Service Areas
                </p>

                <p className="text-gray-300 text-lg">
                  Nagpur · Chandrapur · Maharashtra
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="
              bg-[#0b0b0b]
              border
              border-[rgba(212,20,90,0.18)]
              rounded-[36px]
              p-12
              premium-glow
            "
          >

            <form
              action="https://formspree.io/f/mnjrjwyk"
              method="POST"
              className="space-y-8"
            >

              {/* Name */}
              <div>

                <label className="block uppercase tracking-[0.2em] text-xs text-[var(--gold)] mb-3">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="
                    w-full
                    bg-black
                    border
                    border-[rgba(255,255,255,0.08)]
                    px-6
                    py-5
                    rounded-2xl
                    outline-none
                    text-white
                    focus:border-[var(--gold)]
                    transition-all
                    duration-500
                  "
                />

              </div>

              {/* Email */}
              <div>

                <label className="block uppercase tracking-[0.2em] text-xs text-[var(--gold)] mb-3">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="
                    w-full
                    bg-black
                    border
                    border-[rgba(255,255,255,0.08)]
                    px-6
                    py-5
                    rounded-2xl
                    outline-none
                    text-white
                    focus:border-[var(--gold)]
                    transition-all
                    duration-500
                  "
                />

              </div>

              {/* Message */}
              <div>

                <label className="block uppercase tracking-[0.2em] text-xs text-[var(--gold)] mb-3">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your dream project..."
                  className="
                    w-full
                    bg-black
                    border
                    border-[rgba(255,255,255,0.08)]
                    px-6
                    py-5
                    rounded-2xl
                    outline-none
                    text-white
                    resize-none
                    focus:border-[var(--gold)]
                    transition-all
                    duration-500
                  "
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  py-5
                  bg-[var(--gold)]
                  text-white
                  uppercase
                  tracking-[0.2em]
                  text-sm
                  rounded-2xl
                  hover:scale-[1.02]
                  transition-all
                  duration-500
                "
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}