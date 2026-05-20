import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/experience';
import { Videos } from './components/Videos';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--dark2)',
            color: 'var(--text)',
            border: '1px solid var(--border-gold)',
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
    </div>
  );
}