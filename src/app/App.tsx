import { Toaster } from "sonner";
import { useEffect, useRef, useState } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/experience";
import { Videos } from "./components/Videos";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Loader } from "./components/loader";

export default function App() {

  const [loading, setLoading] = useState(true);

  const [soundOn, setSoundOn] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* Loader */
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  /* Background Sound */
  useEffect(() => {

    if (!audioRef.current) return;

    if (soundOn) {

      audioRef.current.volume = 0.25;

      audioRef.current.play();

    } else {

      audioRef.current.pause();

    }

  }, [soundOn]);

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* SEO */}
      <title>
        Interior Solution's | Luxury Interior Designers in Nagpur & Chandrapur
      </title>

      <meta
        name="description"
        content="
        Interior Solution's is a premium interior and space design studio
        specializing in luxury residential and commercial interiors in
        Nagpur and Chandrapur.
      "
      />

      <meta
        name="keywords"
        content="
        interior designers nagpur,
        interior designers chandrapur,
        luxury interiors nagpur,
        home interiors chandrapur,
        commercial interiors nagpur,
        Interior Solution's
      "
      />

      {/* Premium Background Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            top-[-10%]
            left-[-10%]
            w-[500px]
            h-[500px]
            bg-pink-700/10
            blur-[140px]
            rounded-full
            animate-pulse
          "
        />

        <div
          className="
            absolute
            bottom-[-10%]
            right-[-10%]
            w-[450px]
            h-[450px]
            bg-pink-600/10
            blur-[140px]
            rounded-full
            animate-pulse
          "
        />

      </div>

      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        src="/sound/ambient.mp3"
      />

      {/* Sound Toggle */}
      <button
        onClick={() => setSoundOn(!soundOn)}
        className="
          fixed
          bottom-8
          left-8
          z-[999]
          bg-black/70
          backdrop-blur-xl
          border
          border-white/10
          text-white
          px-6
          py-3
          rounded-full
          tracking-[0.2em]
          uppercase
          text-xs
          hover:border-[var(--gold)]
          transition-all
          duration-500
        "
      >
        {soundOn ? "Sound On" : "Sound Off"}
      </button>

      {/* Toast */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      />

      {/* Loader */}
      {loading ? (

        <Loader />

      ) : (

        <>
          <Navbar />

          <main className="relative z-10">

            <Hero />

            <About />

            <Portfolio />

            <Experience />

            <Videos />

            <Services />

            <Contact />

          </main>

          <Footer />
        </>

      )}

    </div>
  );
}