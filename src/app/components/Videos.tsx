import { motion } from "framer-motion";

export function Videos() {
  return (
    <section
      id="videos"
      className="py-28 px-[6%] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[0.35em] text-[var(--gold)] text-sm mb-6">
            Videos
          </p>

          <h2
            className="text-6xl md:text-7xl leading-[0.95] font-light"
            style={{
              fontFamily: "var(--font-serif)",
            }}
          >
            Design
            <span className="italic text-[var(--gold)]">
              {" "}
              Stories
            </span>
            <br />
            In Motion
          </h2>

        </motion.div>

        {/* Videos Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Video 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="glass hover-lift premium-glow rounded-[30px] overflow-hidden"
          >

            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/mTySigM71nA?si=Obz2jhBGiH_BRyww"
                title="Luxury Living Room"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

            <div className="p-8">

              <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-4">
                Residential Interior
              </p>

              <h3
                className="text-3xl"
                style={{
                  fontFamily: "var(--font-serif)",
                }}
              >
                Luxury Living Room
              </h3>

            </div>

          </motion.div>

          {/* Video 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass hover-lift premium-glow rounded-[30px] overflow-hidden"
          >

            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/oRBrZfuo2JI?si=_hdw0EDVBLyzmSjF"
                title="Beyond Clinical Design"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

            <div className="p-8">

              <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-4">
                Bedroom Interior
              </p>

              <h3
                className="text-3xl"
                style={{
                  fontFamily: "var(--font-serif)",
                }}
              >
                Beyond Clinical Design
              </h3>

            </div>

          </motion.div>

          {/* Video 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass hover-lift premium-glow rounded-[30px] overflow-hidden"
          >

            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1Jo8azRFK50?si=P6eUZXj7229onxMI"
                title="Premium Office Space"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

            <div className="p-8">

              <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-4">
                Commercial Interior
              </p>

              <h3
                className="text-3xl"
                style={{
                  fontFamily: "var(--font-serif)",
                }}
              >
                Premium Office Space
              </h3>

            </div>

          </motion.div>

          {/* Video 4 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass hover-lift premium-glow rounded-[30px] overflow-hidden"
          >

            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VXzRQTUEI8I?si=Om336Uh1L4hxsNJ2" 
                title="Luxury Interior Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

            <div className="p-8">

              <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-4">
                Interior Showcase
              </p>

              <h3
                className="text-3xl"
                style={{
                  fontFamily: "var(--font-serif)",
                }}
              >
                Luxury Interior Walkthrough
              </h3>

            </div>

          </motion.div>

        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >

          <a
            href="https://www.youtube.com/@mahendrakhade9127"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-[var(--gold)] px-12 py-5 uppercase tracking-[0.2em] text-sm text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition duration-500 rounded-full"
          >

            <span className="text-xl">↗</span>

            Visit Our Youtube Channel

          </a>

        </motion.div>

      </div>
    </section>
  );
}