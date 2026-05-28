import { motion } from "framer-motion";


const awards = [
  {
    image: "/awards/awards final 1.jpg",
    title: "Quality Excellence Award",
    subtitle: "Best Interior Designing • ICSTS 2023",
  },
  {
    image: "/awards/awards final 2.jpg",
    title: "International Conference Recognition",
    subtitle: "Honoured for Design Excellence",
  },
  {
    image: "/awards/awards final3.jpg",
    title: "Global Design Achievement",
    subtitle: "Interior Solutions • Chandrapur",
  },
  {
    image: "/awards/awards final4.jpg",
    title: "Award Ceremony Moment",
    subtitle: "Recognition for Creative Contribution",
  },
  {
    image: "/awards/awards final5.jpg",
    title: "Official Excellence Trophy",
    subtitle: "Science & Technology Society 2023",
  },
{
  image: "/awards/awards final6.jpg",
  title: "HALL OF FAME ",
  subtitle: "NIER DELHI 2019",
},


];
export default function Awards() {
  return (
    <section
      id="awards"
      className="w-full bg-black text-white py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">


{/* HEADING */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
  className="mb-20"
>

  <p
    className="
      uppercase
      tracking-[0.4em]
      text-[#ff007f]
      text-sm
      mb-6
    "
  >
    Achievements
  </p>

  <h2
    className="
      text-5xl
      md:text-7xl
      font-semibold
      tracking-tight
      leading-[0.95]
    "
  >
    <span className="text-white">
      Awards &
    </span>

    <span className="italic text-[#ff007f]">
      {" "}Recognition
    </span>
  </h2>

  <div
    className="
      mt-8
      h-[2px]
      w-36
      bg-[#ff007f]
      shadow-[0_0_25px_rgba(255,0,127,0.7)]
    "
  />

</motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mb-20"
        >

          <p
            className="
              uppercase
              tracking-[0.4em]
              text-neutral-400
              text-sm
              mb-5
            "
          >
            Achievements
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-semibold
              tracking-tight
              leading-none
            "
          >
            Awards & Recognition
          </h2>

        </motion.div>

        {/* AWARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {awards.map((award, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: false }}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-[#111]
                border
                border-white/10
                group
                transition-all
                duration-500
                hover:border-[#ff007f]
                hover:shadow-[0_0_40px_rgba(255,0,127,0.18)]
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={award.image}
                  alt={award.title}
                  className="
                    w-full
                    h-[500px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                "
              />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-8">

                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-semibold
                    mb-3
                  "
                >
                  {award.title}
                </h3>

                <p
                  className="
                    text-neutral-300
                    text-sm
                    tracking-wide
                  "
                >
                  {award.subtitle}
                </p>

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}

