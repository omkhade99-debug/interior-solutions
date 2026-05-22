import { Toaster } from "sonner";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";

import { Hero } from "./components/Hero";

import { About } from "./components/About";

import { Portfolio } from "./components/Portfolio";

import { Experience } from "./components/experience";

import { Videos } from "./components/Videos";

import { Services } from "./components/Services";

import { Contact } from "./components/Contact";

import { Footer } from "./components/Footer";

export default function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

    };

  }, []);

  return (

    <div className="min-h-screen relative overflow-hidden">

      {/* Main Mouse Glow */}
      <motion.div

        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}

        transition={{
          type: "spring",
          stiffness: 35,
          damping: 18,
          mass: 0.8,
        }}

        className="
          pointer-events-none
          fixed
          top-0
          left-0
          z-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-[var(--gold)]/12
          blur-[140px]
        "
      />

      {/* Secondary Soft Blur */}
      <motion.div

        animate={{
          x: mousePosition.x - 120,
          y: mousePosition.y - 120,
        }}

        transition={{
          type: "spring",
          stiffness: 25,
          damping: 20,
          mass: 1,
        }}

        className="
          pointer-events-none
          fixed
          top-0
          left-0
          z-0
          w-[240px]
          h-[240px]
          rounded-full
          bg-white/5
          blur-[80px]
        "
      />

      {/* Background Ambient Glow */}
      <div
        className="
          pointer-events-none
          fixed
          top-[-200px]
          right-[-200px]
          z-0
          w-[700px]
          h-[700px]
          rounded-full
          bg-[var(--gold)]/5
          blur-[180px]
        "
      />

      {/* Main Content */}
      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ duration: 1.2 }}

        className="relative z-10"
      >

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--dark2)",
              color: "var(--text)",
              border:
                "1px solid var(--border-gold)",
            },
          }}
        />

        <Navbar />

        <main>

          <Hero />

          <About />

          <Portfolio />

          <Experience />

          <Videos />

          <Services />

          <Contact />

        </main>

        <Footer />

      </motion.div>

    </div>
  );
}