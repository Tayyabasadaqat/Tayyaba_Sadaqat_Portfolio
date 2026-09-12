"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MenuOverlay from "@/components/MenuOverlay";

export default function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between px-5 sm:px-8 md:px-12 lg:px-16 py-6">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

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
            absolute -top-52 -right-52
            w-[650px] h-[650px]
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
            absolute bottom-[-260px] left-[-160px]
            w-[600px] h-[600px]
            rounded-full
            bg-violet-500/10
            blur-[190px]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05),transparent_55%)]
          "
        />
      </div>

      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex items-center justify-between"
      >
        <div className="text-xs sm:text-sm tracking-[0.28em] uppercase">
          Tayyaba Sadaqat
        </div>

        <button
  onClick={() => setMenuOpen(true)}
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

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">

        <div className="w-full">

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
                text-[10px] sm:text-xs md:text-sm
                tracking-[0.35em]
                uppercase
                text-white/45
                mb-5 sm:mb-7
              "
            >
              Software Engineer · Developer · Creative
            </motion.p>
          </div>

          {/* Tayyaba */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
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
              Tayyaba
            </motion.h1>
          </div>

          {/* Sadaqat */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.06em]
                text-[20vw]
                sm:text-[18vw]
                lg:text-[15vw]
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
            </motion.h1>
          </div>

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
        className="relative z-20 flex justify-between items-end"
      >

        <p className="text-xs sm:text-sm leading-relaxed max-w-[300px] text-white/45">
          Building thoughtful digital experiences through software,
          artificial intelligence and visual creativity.
        </p>

        <div className="hidden sm:flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/45">

          Scroll

          <div className="h-12 w-[1px] bg-white/15 overflow-hidden">
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