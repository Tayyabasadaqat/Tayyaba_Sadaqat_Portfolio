"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VisualReveal() {
  return (
    <section className="relative min-h-[120vh] bg-black overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-[20%] left-1/2
            -translate-x-1/2
            w-[700px] h-[700px]
            rounded-full
            bg-purple-700/10
            blur-[190px]
          "
        />

        <div
          className="
            absolute bottom-[-250px] right-[-180px]
            w-[550px] h-[550px]
            bg-violet-600/10
            rounded-full
            blur-[180px]
          "
        />
      </div>

      <div
        className="
          relative z-10
          min-h-[120vh]
          px-5 sm:px-8 md:px-12 lg:px-16
          py-24
          flex flex-col
          justify-center
        "
      >
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            flex items-center justify-between
            mb-10
            text-[10px] sm:text-xs
            tracking-[0.35em]
            uppercase
            text-white/30
          "
        >
          <span>03 — Perspective</span>
          <span>Scroll to discover</span>
        </motion.div>

        {/* MAIN VISUAL AREA */}
        <div className="relative">
          {/* Top giant text */}
          <div className="relative z-20 overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.06em]
                text-[17vw]
                sm:text-[14vw]
                lg:text-[11vw]
                whitespace-nowrap
              "
            >
              Designing
            </motion.h2>
          </div>

          {/* Middle */}
          <div
            className="
              relative
              mt-4 sm:mt-8
              grid
              lg:grid-cols-[1fr_0.9fr_1fr]
              items-center
              gap-6
              lg:gap-10
            "
          >
            {/* Left word */}
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                hidden
                lg:flex
                justify-end
                items-center
              "
            >
              <span
                className="
                  text-4xl
                  xl:text-6xl
                  uppercase
                  font-light
                  tracking-[-0.04em]
                  text-white/35
                "
              >
                Building
              </span>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-[420px]
              "
            >
              {/* Glow behind portrait */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.45, 0.7, 0.45],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-[-30px]
                  rounded-[40%]
                  bg-purple-600/25
                  blur-[80px]
                "
              />

              {/* Extra glow */}
              <div
                className="
                  absolute
                  -inset-10
                  bg-violet-500/10
                  blur-[110px]
                  rounded-full
                "
              />

              {/* Portrait box */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  aspect-[4/5]
                  border
                  border-white/10
                  bg-[#0c0c0c]
                "
              >
                <Image
                  src="/images/tayyabaportrait.jpeg"
                  alt="Tayyaba Sadaqat"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-[1.035]
                  "
                />

                {/* Purple photo tint */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-purple-900/10
                    mix-blend-color
                    pointer-events-none
                  "
                />

                {/* Bottom cinematic shadow */}
                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    bg-gradient-to-t
                    from-black/65
                    via-transparent
                    to-black/5
                  "
                />

                {/* Purple light from bottom */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[40%]
                    pointer-events-none
                    bg-gradient-to-t
                    from-purple-900/30
                    to-transparent
                  "
                />

                {/* Corner detail */}
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    w-8
                    h-8
                    border-t
                    border-r
                    border-purple-400/50
                    pointer-events-none
                  "
                />

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    w-8
                    h-8
                    border-b
                    border-l
                    border-purple-400/50
                    pointer-events-none
                  "
                />
              </div>

              {/* Number */}
              <div
                className="
                  absolute
                  -bottom-5
                  -right-5
                  sm:-right-8
                  text-[70px]
                  sm:text-[100px]
                  font-black
                  text-white/[0.04]
                  leading-none
                  select-none
                "
              >
                03
              </div>
            </motion.div>

            {/* Right word */}
            <motion.div
              initial={{
                opacity: 0,
                x: 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                hidden
                lg:flex
                items-center
              "
            >
              <span
                className="
                  text-4xl
                  xl:text-6xl
                  uppercase
                  font-light
                  tracking-[-0.04em]
                  text-purple-400
                "
              >
                Thinking
              </span>
            </motion.div>
          </div>

          {/* Mobile side words */}
          <div className="lg:hidden flex justify-between mt-6">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                uppercase
                tracking-[0.15em]
                text-white/35
                text-sm
              "
            >
              Building
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                uppercase
                tracking-[0.15em]
                text-purple-400
                text-sm
              "
            >
              Thinking
            </motion.span>
          </div>

          {/* Bottom giant text */}
          <div className="relative z-20 overflow-hidden mt-6">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.06em]
                text-[17vw]
                sm:text-[14vw]
                lg:text-[11vw]
                text-right
                bg-gradient-to-r
                from-white
                via-purple-300
                to-purple-500
                bg-clip-text
                text-transparent
                whitespace-nowrap
              "
            >
              Different
            </motion.h2>
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-16
            ml-auto
            max-w-lg
            border-l
            border-purple-500/40
            pl-6
          "
        >
          <p
            className="
              text-white/50
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            I approach technology as both an engineering problem and a
            creative medium — turning ideas into experiences that are
            functional, intelligent and visually distinctive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}