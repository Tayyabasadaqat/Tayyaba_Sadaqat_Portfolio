"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    description:
      "Modern, responsive websites and web applications built with clean interfaces, strong performance and scalable development practices.",
  },
  {
    title: "AI Integration",
    slug: "ai-integration",
    description:
      "AI-powered assistants, intelligent workflows and API-driven features integrated into modern web applications.",
  },
  {
    title: "Frontend Development",
    slug: "frontend-development",
    description:
      "Responsive and interactive user interfaces built with modern frontend technologies, with a focus on usability, performance and polished interactions.",
  },
  {
    title: "Creative Design",
    slug: "creative-design",
    description:
      "Visual design for digital platforms, including social media creatives, branded content, UI concepts and engaging digital experiences.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#070707]
        px-5
        py-20
        sm:px-8
        sm:py-24
        md:px-12
        lg:px-16
      "
    >
      {/* Purple atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-700/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-violet-500/10
            blur-[140px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          flex
          min-h-[80vh]
          flex-col
          justify-center
        "
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="
            mb-10
            flex
            items-center
            justify-between
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-purple-400
              sm:text-xs
            "
          >
            04 — Services
          </p>

          <p
            className="
              hidden
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/40
              sm:block
              sm:text-xs
            "
          >
            What I can do
          </p>
        </motion.div>

        <div
          className="
            grid
            items-start
            gap-16
            lg:grid-cols-2
            lg:gap-24
          "
        >
          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-28">
            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[12vw]
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.05em]
                sm:text-[9vw]
                lg:text-[6vw]
              "
            >
              I create
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-purple-400
                  via-violet-500
                  to-purple-600
                  bg-clip-text
                  text-transparent
                "
              >
                digital solutions.
              </span>
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
                text-sm
                leading-relaxed
                text-white/60
                sm:text-base
              "
            >
              I build responsive websites, frontend experiences and
              AI-integrated digital products while combining software
              development with thoughtful visual design.
            </motion.p>

            <motion.div
              aria-hidden="true"
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
              >
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`View ${service.title} service`}
                  className="
                    group
                    relative
                    block
                    overflow-hidden
                    border-t
                    border-white/10
                    py-7
                    outline-none
                    transition-colors
                    focus-visible:border-purple-400
                    focus-visible:ring-1
                    focus-visible:ring-purple-400/60
                    sm:py-8
                  "
                >
                  {/* Hover background */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      origin-left
                      scale-x-0
                      bg-gradient-to-r
                      from-purple-900/20
                      via-purple-800/[0.04]
                      to-transparent
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:scale-x-100
                      group-focus-visible:scale-x-100
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-start
                      justify-between
                      gap-6
                    "
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        {/* Number */}
                        <span
                          aria-hidden="true"
                          className="
                            text-[10px]
                            tracking-[0.25em]
                            text-white/40
                            transition-colors
                            duration-300
                            group-hover:text-purple-400
                          "
                        >
                          0{index + 1}
                        </span>

                        {/* Title */}
                        <h3
                          className="
                            text-xl
                            font-medium
                            tracking-[-0.03em]
                            text-white/90
                            transition-all
                            duration-300
                            group-hover:translate-x-2
                            group-hover:text-purple-400
                            group-focus-visible:translate-x-2
                            group-focus-visible:text-purple-400
                            sm:text-2xl
                            md:text-3xl
                          "
                        >
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p
                        className="
                          ml-[42px]
                          mt-4
                          max-w-xl
                          text-sm
                          leading-relaxed
                          text-white/55
                          transition-colors
                          duration-300
                          group-hover:text-white/70
                          sm:text-base
                        "
                      >
                        {service.description}
                      </p>

                      {/* View details */}
                      <div
                        className="
                          ml-[42px]
                          mt-5
                          flex
                          items-center
                          gap-3
                          overflow-hidden
                        "
                      >
                        <span
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.25em]
                            text-purple-400/80
                            transition-all
                            duration-300
                            sm:translate-y-5
                            sm:opacity-0
                            sm:group-hover:translate-y-0
                            sm:group-hover:opacity-100
                            sm:group-focus-visible:translate-y-0
                            sm:group-focus-visible:opacity-100
                          "
                        >
                          View Service
                        </span>

                        <span
                          aria-hidden="true"
                          className="
                            h-[1px]
                            w-6
                            bg-purple-400/60
                            transition-all
                            duration-500
                            sm:w-0
                            sm:group-hover:w-10
                            sm:group-focus-visible:w-10
                          "
                        />
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      aria-hidden="true"
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        text-xl
                        text-white/50
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:rotate-45
                        group-hover:border-purple-400
                        group-hover:bg-purple-500
                        group-hover:text-white
                        group-focus-visible:border-purple-400
                        group-focus-visible:bg-purple-500
                        group-focus-visible:text-white
                      "
                    >
                      ↗
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            <div
              aria-hidden="true"
              className="border-t border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}