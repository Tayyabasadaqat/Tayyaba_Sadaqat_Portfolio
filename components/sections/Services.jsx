"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites built with clean interfaces, strong performance and scalable structure.",
  },
  {
    title: "AI Integration",
    description:
      "AI-powered features such as assistants, smart workflows and API-driven experiences integrated into web products.",
  },
  {
    title: "Frontend Development",
    description:
      "Interactive interfaces using modern frameworks with a focus on responsiveness, usability and polished motion.",
  },
  {
    title: "Creative Design",
    description:
      "Visual design for digital platforms, including social media creatives, branded content and interface concepts.",
  },
];

export default function Services() {
  return (
    <section className="relative min-h-screen bg-[#070707] overflow-hidden px-5 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24">

      {/* Purple atmosphere */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[520px] h-[520px]
            rounded-full
            bg-purple-700/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute top-0 right-0
            w-[350px] h-[350px]
            rounded-full
            bg-violet-500/10
            blur-[140px]
          "
        />

      </div>

      <div className="relative z-10 min-h-[80vh] flex flex-col justify-center">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="
            flex
            items-center
            justify-between
            mb-10
          "
        >
          <p
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.35em]
              text-purple-400
            "
          >
            03 — Services
          </p>

          <p
            className="
              hidden
              sm:block
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            What I can do
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-28">

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[12vw]
                sm:text-[9vw]
                lg:text-[6vw]
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.05em]
              "
            >
              I create
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[12vw]
                sm:text-[9vw]
                lg:text-[6vw]
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.05em]
                bg-gradient-to-r
                from-purple-400
                via-violet-500
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              digital solutions.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                mt-8
                max-w-lg
                text-white/45
                leading-relaxed
                text-sm
                sm:text-base
              "
            >
              I work across development, AI and creative design to build
              digital products that are functional, responsive and visually
              distinctive.
            </motion.p>

            {/* Small detail */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="
                mt-10
                h-px
                w-[140px]
                origin-left
                bg-gradient-to-r
                from-purple-500
                to-transparent
              "
            />

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">

            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group
                  border-t
                  border-white/10
                  py-7
                  sm:py-8
                  cursor-default
                "
              >

                <div className="flex items-start justify-between gap-6">

                  <div className="flex-1">

                    <div className="flex items-center gap-4">

                      <span
                        className="
                          text-[10px]
                          tracking-[0.25em]
                          text-white/20
                          transition-colors
                          duration-300
                          group-hover:text-purple-400
                        "
                      >
                        0{index + 1}
                      </span>

                      <h3
                        className="
                          text-xl
                          sm:text-2xl
                          md:text-3xl
                          font-medium
                          tracking-[-0.03em]
                          text-white/80
                          transition-all
                          duration-300
                          group-hover:text-purple-400
                          group-hover:translate-x-2
                        "
                      >
                        {service.title}
                      </h3>

                    </div>

                    <p
                      className="
                        mt-4
                        ml-[42px]
                        max-w-xl
                        text-sm
                        sm:text-base
                        leading-relaxed
                        text-white/35
                        transition-colors
                        duration-300
                        group-hover:text-white/50
                      "
                    >
                      {service.description}
                    </p>

                  </div>

                  {/* Arrow */}
                  <motion.span
                    className="
                      text-2xl
                      text-white/20
                      transition-colors
                      duration-300
                      group-hover:text-purple-400
                    "
                    whileHover={{
                      x: 5,
                      y: -5,
                    }}
                  >
                    ↗
                  </motion.span>

                </div>

              </motion.div>
            ))}

            <div className="border-t border-white/10" />

          </div>

        </div>
      </div>
    </section>
  );
}