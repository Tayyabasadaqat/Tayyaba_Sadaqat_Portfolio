"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MenuOverlay from "@/components/MenuOverlay";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        px-5
        py-6
        sm:px-8
        md:px-12
        lg:px-16
        flex
        flex-col
        justify-between
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, -30, 10, 0],
            y: [0, 20, -10, 0],
            scale: [1, 1.08, 1.03, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-52
            -top-52
            h-[650px]
            w-[650px]
            rounded-full
            bg-purple-700/20
            blur-[180px]
          "
        />

        <motion.div
          animate={{
            x: [0, 35, -10, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-260px]
            left-[-160px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-violet-500/10
            blur-[190px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05),transparent_55%)]
          "
        />
      </div>

      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-20
          flex
          items-center
          justify-between
        "
      >
        <div
          className="
            text-xs
            uppercase
            tracking-[0.28em]
            sm:text-sm
          "
        >
          Tayyaba Sadaqat
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          className="
            group
            flex
            items-center
            gap-3
            text-xs
            uppercase
            tracking-[0.22em]
            sm:text-sm
          "
        >
          Menu

          <span className="relative flex flex-col gap-1">
            <span
              className="
                block
                h-[1px]
                w-7
                bg-white
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

            <span
              className="
                block
                h-[1px]
                w-5
                bg-white
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />
          </span>
        </button>
      </motion.header>

      {/* Main Hero Content */}
      <div
        className="
          relative
          z-10
          flex
          flex-1
          items-center
        "
      >
        <div className="w-full">

          {/* Professional positioning */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mb-5
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/45
                sm:mb-7
                sm:text-xs
                md:text-sm
              "
            >
              Software Engineer · AI & Web Developer · Creative Designer
            </motion.p>
          </div>

          {/* Main SEO H1 */}
          <h1
            className="
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.06em]
              text-[20vw]
              sm:text-[18vw]
              lg:text-[15vw]
            "
          >
            {/* Tayyaba */}
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Tayyaba
              </motion.span>
            </span>

            {/* Sadaqat */}
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  block
                  bg-gradient-to-r
                  from-purple-400
                  via-violet-500
                  to-purple-600
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_35px_rgba(139,92,246,0.18)]
                "
              >
                Sadaqat
              </motion.span>
            </span>
          </h1>

          {/* Search-engine-friendly supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="
              mt-7
              max-w-2xl
              text-sm
              leading-relaxed
              text-white/40
              sm:hidden
            "
          >
            Building AI-powered applications and modern web experiences
            with React, Next.js, Python and FastAPI.
          </motion.p>
        </div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="
          relative
          z-20
          flex
          items-end
          justify-between
        "
      >
        <p
          className="
            hidden
            max-w-[430px]
            text-xs
            leading-relaxed
            text-white/45
            sm:block
            sm:text-sm
          "
        >
          Building AI-powered applications, full-stack web experiences
          and intelligent digital products with React, Next.js, Python
          and FastAPI.
        </p>

        <div
          className="
            hidden
            items-center
            gap-3
            text-xs
            uppercase
            tracking-[0.3em]
            text-white/45
            sm:flex
          "
        >
          Scroll

          <div className="h-12 w-[1px] overflow-hidden bg-white/15">
            <motion.div
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1/2 w-full bg-purple-400"
            />
          </div>
        </div>
      </motion.div>

      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </section>
  );
}