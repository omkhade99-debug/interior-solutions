import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { LogoMark } from "./LogoMark";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  /* Scroll Blur */
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 40) {

        setScrolled(true);

      } else {

        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <motion.header
      initial={{
        opacity: 0,
        y: -80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        fixed
        top-0
        left-0
        w-full
        z-[999]
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border-b border-white/5"
            : "bg-transparent"
        }
      `}
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          md:px-[6%]
          py-5
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{
            scale: 1.03,
          }}
          className="
            flex
            items-center
            gap-4
          "
        >

          <LogoMark />

          <div>

            <h1
              className="
                text-xl
                md:text-2xl
                text-white
                font-light
                leading-none
              "
              style={{
                fontFamily: "var(--font-serif)",
              }}
            >
              Interior
              <span className="italic text-[var(--gold)]">
                {" "}
                Solutions
              </span>
            </h1>

            <p
              className="
                text-white/40
                text-[10px]
                uppercase
                tracking-[0.25em]
                mt-1
              "
            >
              Luxury Interior Studio
            </p>

          </div>

        </motion.a>

        {/* Desktop Nav */}
        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-10
          "
        >

          {navItems.map((item, index) => (

            <motion.a
              key={index}
              href={item.href}
              whileHover={{
                y: -2,
              }}
              className="
                relative
                text-sm
                uppercase
                tracking-[0.25em]
                text-white/70
                hover:text-white
                transition-all
                duration-300
                group
              "
            >

              {item.label}

              {/* Hover Line */}
              <span
                className="
                  absolute
                  left-0
                  -bottom-2
                  w-0
                  h-[1px]
                  bg-[#ff007f]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

            </motion.a>

          ))}

        </nav>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            hidden
            lg:flex
            items-center
            justify-center
            px-7
            py-4
            rounded-full
            bg-[#ff007f]
            hover:bg-[#ff3399]
            text-white
            uppercase
            tracking-[0.25em]
            text-xs
            transition-all
            duration-500
            shadow-[0_0_35px_rgba(255,0,127,0.35)]
          "
        >
          Get Quote
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="
            lg:hidden
            text-white
            z-[1001]
            relative
          "
        >

          {mobileMenu ? (

            <X size={30} />

          ) : (

            <Menu size={30} />

          )}

        </button>

      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenu ? 1 : 0,
          pointerEvents: mobileMenu ? "auto" : "none",
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          fixed
          inset-0
          bg-black/95
          backdrop-blur-2xl
          flex
          flex-col
          items-center
          justify-center
          gap-10
          lg:hidden
        "
      >

        {/* Pink Glow */}
        <div
          className="
            absolute
            w-[500px]
            h-[500px]
            bg-pink-700/10
            blur-[160px]
            rounded-full
          "
        />

        {navItems.map((item, index) => (

          <motion.a
            key={index}
            href={item.href}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: mobileMenu ? 1 : 0,
              y: mobileMenu ? 0 : 40,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            onClick={() => setMobileMenu(false)}
            className="
              relative
              text-3xl
              text-white
              uppercase
              tracking-[0.2em]
              font-light
              hover:text-[#ff007f]
              transition-all
              duration-300
            "
            style={{
              fontFamily: "var(--font-serif)",
            }}
          >
            {item.label}
          </motion.a>

        ))}

        {/* Mobile CTA */}
        <motion.a
          href="#contact"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: mobileMenu ? 1 : 0,
            y: mobileMenu ? 0 : 40,
          }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          onClick={() => setMobileMenu(false)}
          className="
            mt-6
            px-10
            py-5
            rounded-full
            bg-[#ff007f]
            hover:bg-[#ff3399]
            text-white
            uppercase
            tracking-[0.25em]
            text-xs
            transition-all
            duration-500
            shadow-[0_0_40px_rgba(255,0,127,0.35)]
          "
        >
          Get Quote
        </motion.a>

      </motion.div>

    </motion.header>
  );
}