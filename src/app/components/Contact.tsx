
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-28 px-[6%] overflow-hidden relative"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,127,0.08),transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,127,0.06),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[0.35em] text-[#ff007f] text-sm mb-6">
            Contact
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              leading-[0.95]
              font-semibold
              tracking-tight
              text-white
            "
            style={{
              fontFamily: "var(--font-serif)",
            }}
          >
            Let’s Create
            <span className="italic text-[#ff007f]">
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
              border-[rgba(255,0,127,0.18)]
              rounded-[36px]
              p-12
              premium-glow
            "
          >

            <p className="uppercase tracking-[0.2em] text-[#ff007f] text-sm mb-6">
              Interior Solution's
            </p>

            <h3
              className="text-5xl leading-tight mb-10 text-white"
              style={{
                fontFamily: "var(--font-serif)",
              }}
            >
              Start Your
              <span className="italic text-[#ff007f]">
                {" "}
                Dream Space
              </span>
            </h3>

            <p className="text-neutral-300 leading-relaxed text-lg mb-12">
              From luxurious residential interiors to premium
              commercial spaces, we create timeless experiences
              crafted with elegance and precision.
            </p>

            {/* Contact Info */}
            <div className="space-y-10">

              {/* Email */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[#ff007f] text-xs mb-3">
                  Email
                </p>

                <p className="text-gray-300 text-lg">
                  interiorsolutions1125@gmail.com
                </p>

              </div>

              {/* Phone */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[#ff007f] text-xs mb-3">
                  Phone
                </p>

                <p className="text-gray-300 text-lg">
                  +91 9767094859 , +917620436878
                </p>

              </div>

              {/* Nagpur Office */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[#ff007f] text-xs mb-3">
                  Nagpur Office
                </p>

                <a
                  href="https://maps.app.goo.gl/xycTBAn9pwzHDTDF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    text-lg
                    hover:text-[#ff007f]
                    transition-all
                    duration-500
                  "
                >
                  View on Google Maps ↗
                </a>

              </div>

              {/* Chandrapur Office */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[#ff007f] text-xs mb-3">
                  Chandrapur Office
                </p>

                <a
                  href="https://maps.app.goo.gl/DaoDQsGkMw6bWjud9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    text-lg
                    hover:text-[#ff007f]
                    transition-all
                    duration-500
                  "
                >
                  View on Google Maps ↗
                </a>

              </div>

              {/* Service Areas */}
              <div>

                <p className="uppercase tracking-[0.2em] text-[#ff007f] text-xs mb-3">
                  Service Areas
                </p>

                <p className="text-gray-300 text-lg">
                  Nagpur · Chandrapur · Maharashtra · India
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
              border-[rgba(255,0,127,0.18)]
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

                <label className="block uppercase tracking-[0.2em] text-xs text-[#ff007f] mb-3">
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
                    focus:border-[#ff007f]
                    transition-all
                    duration-500
                  "
                />

              </div>

              {/* Email */}
              <div>

                <label className="block uppercase tracking-[0.2em] text-xs text-[#ff007f] mb-3">
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
                    focus:border-[#ff007f]
                    transition-all
                    duration-500
                  "
                />

              </div>

              {/* Contact Number */}
              <div>

                <label className="block uppercase tracking-[0.2em] text-xs text-[#ff007f] mb-3">
                  Contact Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  placeholder="Enter Your Number"
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
                    focus:border-[#ff007f]
                    transition-all
                    duration-500
                  "
                />

              </div>

              {/* Design Type */}
              <div>

                <label className="block uppercase tracking-[0.2em] text-xs text-[#ff007f] mb-3">
                  Design Type
                </label>

                <select
                  name="designType"
                  required
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
                    focus:border-[#ff007f]
                    transition-all
                    duration-500
                  "
                >

                  <option value="">
                    Select Design Type
                  </option>

                  <option value="Residential Interior">
                    Residential Interior
                  </option>

                  <option value="Commercial Interior">
                    Commercial Interior
                  </option>

                  <option value="Office Interior">
                    Office Interior
                  </option>

                  <option value="Hospital Interior">
                    Hospital Interior
                  </option>

                  <option value="Renovation">
                    Renovation
                  </option>

                </select>

              </div>

              {/* Message */}
              <div>

                <label className="block uppercase tracking-[0.2em] text-xs text-[#ff007f] mb-3">
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
                    focus:border-[#ff007f]
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
                  bg-[#ff007f]
                  text-white
                  uppercase
                  tracking-[0.2em]
                  text-sm
                  rounded-2xl
                  hover:scale-[1.02]
                  transition-all
                  duration-500
                  hover:shadow-[0_0_40px_rgba(255,0,127,0.35)]
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

