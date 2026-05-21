import { motion } from "framer-motion";

export function Videos() {
  return (
    <section
      id="videos"
      className="bg-[var(--dark2)] text-white py-28 px-[6%] overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <div className="flex items-center gap-6 mb-8">

            <p className="uppercase tracking-[0.35em] text-[var(--gold)] text-sm">
              Youtube
            </p>

            <div className="w-20 h-px bg-[var(--gold)] opacity-40" />

          </div>

          <h2
            className="text-5xl md:text-7xl leading-[0.95] font-light mb-8"
            style={{
              fontFamily: "var(--font-serif)",
            }}
          >
            Watch Us
            <span className="italic text-[var(--gold)]">
              {" "}
              Create
            </span>
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            Follow our journey through every project —
            design reveals, walkthroughs, and tips from the studio.
          </p>

        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left Video */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden border border-[rgba(200,24,90,0.25)]"
          >

            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1Jo8azRFK50?si=pEq2GEVDLeaiOAYS"
                title="Interior Solutions Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Quote Card */}
            <div className="border border-[rgba(200,24,90,0.25)] p-10 bg-white/5 backdrop-blur-xl">

              <p
                className="text-3xl italic leading-relaxed text-gray-200"
                style={{
                  fontFamily: "var(--font-serif)",
                }}
              >
                "A well-designed space has the power
                to transform lives."
              </p>

              <p className="mt-8 text-gray-400 leading-relaxed">
                Subscribe to our channel for behind-the-scenes
                content, full project walkthroughs, and interior
                design inspiration straight from our studios in
                Nagpur and Chandrapur.
              </p>

            </div>

            {/* Youtube Button */}
            <a
              href="https://www.youtube.com/@mahendrakhade9127"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-[var(--gold)] px-10 py-5 uppercase tracking-[0.2em] text-sm text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition duration-300 w-full"
            >

              <span className="text-xl">↗</span>

              Visit Our Youtube Channel

            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}