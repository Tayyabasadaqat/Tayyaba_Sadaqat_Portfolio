"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutRevealC() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-5 py-24 sm:px-8 md:px-12 lg:px-16">
      <div
        className="
          pointer-events-none
          absolute
          -left-[150px]
          bottom-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-700/10
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-16 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-white/30 sm:text-xs">
          <span>02 — About Me</span>
          <span>Based in ideas, built with code</span>
        </div>

        <div className="grid min-h-[720px] items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-[300px] lg:max-w-[340px]"
          >
            <div
              className="
                absolute
                -left-5
                -top-5
                h-full
                w-full
                border
                border-purple-500/20
              "
            />

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/tayyabaportrait.jpeg"
                alt="Tayyaba Sadaqat"
                fill
                sizes="340px"
                className="object-cover object-top"
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-transparent
                  to-transparent
                "
              />
            </div>

            <div
              className="
                absolute
                -bottom-5
                right-[-30px]
                rotate-90
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-purple-400
              "
            >
              Tayyaba Sadaqat
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-xs uppercase tracking-[0.4em] text-purple-400"
            >
              Who I am
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-4xl
                text-[11vw]
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.06em]
                sm:text-[8vw]
                lg:text-[5.5vw]
              "
            >
              I like building
              <span className="block text-purple-500">
                things that work
              </span>
              and look good.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="
                mt-10
                grid
                gap-6
                text-sm
                leading-relaxed
                text-white/40
                sm:text-base
                md:grid-cols-2
              "
            >
              <p>
                I’m a software engineering student focused on web development,
                artificial intelligence and modern digital products.
              </p>

              <p>
                My creative background helps me think beyond functionality —
                paying attention to how an experience looks, feels and
                communicates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="
                mt-12
                h-px
                w-full
                origin-left
                bg-gradient-to-r
                from-purple-500
                via-purple-500/20
                to-transparent
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}