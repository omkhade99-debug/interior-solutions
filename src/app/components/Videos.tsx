import { motion } from "framer-motion";

const videos = [
  {
    title: "Luxury Living Room",
    category: "Residential Interior",

    thumbnail:
      "/portfolio/living-room/living-room.jpeg",

    url: "https://youtu.be/mTySigM71nA",
  },

  {
    title: "Modern Bedroom Design",
    category: "Bedroom Interior",

    thumbnail:
      "/portfolio/bedroom/bedroom.jpeg",

    url: "https://youtu.be/W9vWQoinYOs",
  },

  {
    title: "Premium Office Space",
    category: "Commercial Interior",

    thumbnail:
      "/portfolio/office/office.jpeg",

    url: "https://youtu.be/G0-SRCXhkZA",
  },

  {
    title: "Luxury Interior Walkthrough",
    category: "Interior Showcase",

    thumbnail:
      "/portfolio/living-room/living-room2.jpeg",

    url: "https://youtu.be/1Jo8azRFK50",
  },
];

export function Videos() {
  return (
    <section
      id="videos"
      className="bg-[var(--dark2)] text-white py-24 px-[6%] overflow-hidden"
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
            Videos
          </p>

          <h2
            className="text-5xl md:text-6xl font-light leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {videos.map((video, index) => (
            <motion.a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"

              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -10,
                scale: 1.02,
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="group overflow-hidden bg-black border border-gray-800 hover:border-[var(--gold)] transition-all duration-300 rounded-2xl"
            >

              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video">

                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                    }}
                    className="w-20 h-20 rounded-full border border-white/50 backdrop-blur-md flex items-center justify-center"
                  >

                    <div className="ml-1 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[18px] border-l-white" />

                  </motion.div>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <p className="uppercase tracking-[0.2em] text-[var(--gold)] text-xs mb-3">
                  {video.category}
                </p>

                <h3
                  className="text-2xl leading-snug"
                  style={{
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  {video.title}
                </h3>

              </div>

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}