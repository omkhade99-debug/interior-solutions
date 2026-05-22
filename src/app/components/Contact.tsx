import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-[6%] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-[var(--gold)] text-sm mb-4">
            Contact Us
          </p>

          <h2
            className="text-5xl md:text-6xl font-light leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              We design elegant residential and
              commercial interiors tailored to your
              lifestyle, vision, and aspirations.
            </p>

            <div className="space-y-8">

              <motion.div
                whileHover={{ x: 10 }}
                className="border-b border-gray-800 pb-4"
              >
                <h3 className="text-xl text-[var(--gold)] mb-2">
                  Address
                </h3>

                <p className="text-gray-400">
                  Chandrapur, Maharashtra, India
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="border-b border-gray-800 pb-4"
              >
                <h3 className="text-xl text-[var(--gold)] mb-2">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +91 98765 43210
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="border-b border-gray-800 pb-4"
              >
                <h3 className="text-xl text-[var(--gold)] mb-2">
                  Email
                </h3>

                <p className="text-gray-400">
                  interiorsolutions1125@email.com
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#111] border border-gray-800 px-6 py-4 outline-none focus:border-[var(--gold)] transition"
            />

            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#111] border border-gray-800 px-6 py-4 outline-none focus:border-[var(--gold)] transition"
            />

            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              placeholder="Project Type"
              className="w-full bg-[#111] border border-gray-800 px-6 py-4 outline-none focus:border-[var(--gold)] transition"
            />

            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              placeholder="Tell us about your project..."
              rows={6}
              className="w-full bg-[#111] border border-gray-800 px-6 py-4 outline-none focus:border-[var(--gold)] transition resize-none"
            />

            <motion.button
              whileHover={{
                scale: 1.03,
                y: -3,
              }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-[var(--gold)] text-black font-medium"
            >
              Send Message
            </motion.button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}