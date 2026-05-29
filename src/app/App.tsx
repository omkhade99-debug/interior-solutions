import Lenis from "lenis";
import { Toaster } from "sonner";
import { useEffect, useRef, useState } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Awards from "./components/Awards";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/experience";
import { Videos } from "./components/Videos";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Loader } from "./components/loader";

export default function App() {

  const [loading, setLoading] = useState(true);

  /* ONLY CONTROLS BACKGROUND MUSIC */
  const [musicOn, setMusicOn] = useState(true);
  /* LENIS SMOOTH SCROLL */
useEffect(() => {
  const lenis = new Lenis({
    duration: 2,
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);


  /* AUDIO REFS */
  const ambientRef = useRef<HTMLAudioElement | null>(null);

  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);

  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  /* ---------------- INITIALIZE UI SOUNDS ---------------- */

  useEffect(() => {

    hoverSoundRef.current = new Audio("/audio/ui hover.mp3");

    clickSoundRef.current = new Audio("/audio/soft click.mp3");

    /* LOUDER UI SOUNDS */
    if (hoverSoundRef.current) {
      hoverSoundRef.current.volume = 0.28;
    }

    if (clickSoundRef.current) {
      clickSoundRef.current.volume = 0.45;
    }

  }, []);

  /* ---------------- PLAY HOVER ---------------- */

  const playHover = () => {

    if (!hoverSoundRef.current) return;

    hoverSoundRef.current.currentTime = 0;

    hoverSoundRef.current.play().catch(() => {});
  };

  /* ---------------- PLAY CLICK ---------------- */

  const playClick = () => {

    if (!clickSoundRef.current) return;

    clickSoundRef.current.currentTime = 0;

    clickSoundRef.current.play().catch(() => {});
  };

  /* ---------------- GLOBAL SITE HOVER ---------------- */

  useEffect(() => {

    const handleHover = (e: MouseEvent) => {

      const target = e.target as HTMLElement;

      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.closest(".cursor-pointer")
      ) {

        playHover();
      }
    };

    const handleClick = () => {

      playClick();
    };

    document.addEventListener("mouseover", handleHover);

    document.addEventListener("click", handleClick);

    return () => {

      document.removeEventListener("mouseover", handleHover);

      document.removeEventListener("click", handleClick);

    };

  }, []);

  /* ---------------- AMBIENT MUSIC ---------------- */

  useEffect(() => {

    if (!ambientRef.current) return;

    /* LOUDER AMBIENT */
    ambientRef.current.volume = 0.22;

    if (musicOn) {

      ambientRef.current.play().catch(() => {});

    } else {

      ambientRef.current.pause();
    }

  }, [musicOn]);

  /* ---------------- LOADER ---------------- */

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  /* ---------------- TOGGLE MUSIC ---------------- */

  const toggleMusic = () => {

    setMusicOn(!musicOn);
  };

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Ambient Music */}
      <audio
        ref={ambientRef}
        loop
        src="/audio/ambient.mp3"
      />

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

          {/* Navbar */}
          <Navbar />

          {/* Main */}
          <main className="relative z-10">

            <Hero />

            <About />

            <Awards />

            <Portfolio />

            <Experience />

            <Videos />

            <Services />

            <Contact />

          </main>

          {/* Footer */}
          <Footer />

        </>

      )}

      {/* SOUND BUTTON */}
      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-8
          left-8
          z-50
          bg-black/90
          backdrop-blur-xl
          border
          border-white/10
          hover:border-[#ff007f]
          text-white
          px-7
          py-4
          rounded-full
          tracking-[0.25em]
          uppercase
          text-xs
          transition-all
          duration-500
          hover:scale-105
          hover:bg-[#111]
        "
      >
        {musicOn ? "SOUND ON" : "SOUND OFF"}
      </button>

      {/* PREMIUM WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919767094859?text=Hello%20Interior%20Solutions,%20I%20want%20to%20know%20more%20about%20your%20interior%20design%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >

        <div
          className="
            w-16
            h-16
            rounded-full
            bg-black/90
            border
            border-[#ff007f]
            flex
            items-center
            justify-center
            shadow-[0_0_35px_rgba(255,0,127,0.35)]
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:bg-[#ff007f]
            backdrop-blur-xl
          "
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M20.52 3.48A11.78 11.78 0 0012.04 0C5.5 0 .19 5.3.19 11.84c0 2.09.55 4.13 1.59 5.92L0 24l6.42-1.68a11.8 11.8 0 005.62 1.43h.01c6.54 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43zm-8.48 18.2h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.81 1 1.02-3.71-.23-.38a9.86 9.86 0 01-1.52-5.27c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 012.9 7.01c0 5.48-4.45 9.93-9.91 9.93zm5.44-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.66-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.1 3.2 5.1 4.48.7.3 1.25.48 1.67.61.7.22 1.33.19 1.83.12.56-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35z"/>
          </svg>

        </div>

      </a>

    </div>
  );
}
