import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="
        fixed
        inset-0
        z-[9999]
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-pink-700/20 blur-[140px] rounded-full" />

      <div className="text-center relative z-10">

        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="w-28 mx-auto mb-8"
        />

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="
            text-white
            text-4xl
            md:text-5xl
            tracking-[0.18em]
            uppercase
          "
          style={{
            fontFamily: "var(--font-serif)",
          }}
        >
          Interior Solution's
        </motion.h1>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "220px" }}
          transition={{
            delay: 0.8,
            duration: 1.2,
          }}
          className="
            h-[2px]
            bg-pink-600
            mx-auto
            mt-8
          "
        />

      </div>

    </motion.div>
  );
}