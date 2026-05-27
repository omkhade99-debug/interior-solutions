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
{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919767094859"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50"
>
  <div className="bg-green-500 hover:bg-green-400 transition-all duration-300 rounded-full p-4 shadow-2xl hover:scale-110 animate-bounce">
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M20.52 3.48A11.78 11.78 0 0012.05 0C5.54 0 .25 5.29.25 11.8c0 2.08.54 4.11 1.57 5.91L0 24l6.49-1.7a11.75 11.75 0 005.56 1.41h.01c6.51 0 11.8-5.29 11.8-11.8 0-3.15-1.23-6.1-3.34-8.43zM12.06 21.3a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.85 1.01 1.03-3.75-.22-.38a9.42 9.42 0 01-1.45-5.01c0-5.2 4.23-9.43 9.43-9.43a9.35 9.35 0 016.68 2.77 9.35 9.35 0 012.75 6.66c0 5.2-4.23 9.44-9.44 9.44zm5.17-7.05c-.28-.14-1.64-.81-1.9-.91-.25-.09-.43-.14-.61.14-.19.28-.71.91-.88 1.1-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.45-.61-.46h-.52c-.19 0-.49.07-.74.35-.25.28-.97.95-.97 2.31 0 1.36.99 2.67 1.13 2.85.14.19 1.95 2.98 4.73 4.18.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.19-.53-.33z"/>
    </svg>

  </div>
</a>
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