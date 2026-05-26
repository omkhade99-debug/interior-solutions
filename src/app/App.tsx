import { Toaster } from "sonner";

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

import { Loader } from "./components/loader";
import { SoundToggle } from "./components/SoundToggle";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Toast */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--dark2)",
            color: "var(--text)",
            border: "1px solid var(--border-gold)",
          },
        }}
      />

      {/* Loader */}
      {loading ? (

        <Loader />

      ) : (

        <>

          {/* Ambient Sound Toggle */}
          <SoundToggle />

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main>

            <Hero />

            <About />

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

    </div>
  );
}