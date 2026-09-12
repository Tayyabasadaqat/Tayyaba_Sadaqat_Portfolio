"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Nishaan",
    category: "AI · Full Stack · Maps",
    description:
      "An AI-powered landmark-based navigation platform designed to help users locate places where traditional addressing systems are limited.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "AI"],
  },
  {
    number: "02",
    title: "Signature Trips",
    category: "Web Design · Client Work",
    description:
      "A travel website designed and developed to create a polished digital presence with a clear and engaging browsing experience.",
    tech: ["WordPress", "UI/UX", "Web Design"],
  },
  {
    number: "03",
    title: "Luxe by MA",
    category: "Web · Brand Experience",
    description:
      "A modern web experience focused on presenting the brand through a refined, visually driven and responsive interface.",
    tech: ["Web Development", "UI/UX", "Responsive Design"],
  },
  {
    number: "04",
    title: "Cotsle",
    category: "Web · Frontend",
    description:
      "A modern website project focused on responsive interfaces, visual presentation and a polished digital experience.",
    tech: ["Frontend", "UI/UX", "Responsive Design"],
  },
  {
    number: "05",
    title: "Time Bank",
    category: "Full Stack · Platform",
    description:
      "A skill-exchange platform where users can trade their time and expertise through a structured digital system.",
    tech: ["React", "Express.js", "MongoDB", "SQL"],
  },
  {
    number: "06",
    title: "Donation Tracker",
    category: "Blockchain · Python",
    description:
      "A blockchain-based donation tracking system designed around transparency, traceability and data integrity.",
    tech: ["Python", "Blockchain", "Security"],
  },
  {
    number: "07",
    title: "Lost & Found",
    category: "Desktop · Database",
    description:
      "A management system for organizing and tracking lost and found items through a structured database-driven interface.",
    tech: ["Java", "Java Swing", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-12
        sm:px-8
        md:px-12
        lg:px-16
        lg:py-14
      "
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            right-[-180px]
            top-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-700/10
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            bottom-[-220px]
            left-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-600/10
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mb-6
            flex
            items-center
            justify-between
            text-[10px]
            uppercase
            tracking-[0.35em]
            sm:text-xs
          "
        >
          <span className="text-purple-400">
            04 — Selected Work
          </span>

          <span className="hidden text-white/20 sm:block">
            Projects / Experiments / Products
          </span>
        </motion.div>

        {/* COMPACT HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-8
            grid
            gap-5
            border-b
            border-white/10
            pb-8
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
          "
        >
          <h2
            className="
              text-[13vw]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.06em]
              sm:text-[10vw]
              lg:text-[5.8vw]
            "
          >
            Selected{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-300
                via-violet-500
                to-purple-700
                bg-clip-text
                text-transparent
              "
            >
              Projects.
            </span>
          </h2>

          <div className="lg:pb-1">
            <p
              className="
                max-w-md
                text-sm
                leading-relaxed
                text-white/35
              "
            >
              A selection of web, AI and software projects exploring
              functionality, problem solving and digital experience.
            </p>

            <span
              className="
                mt-4
                block
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/20
              "
            >
              07 Selected Projects
            </span>
          </div>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="border-t border-white/10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative
                overflow-hidden
                border-b
                border-white/10
                py-7
                sm:py-8
                lg:py-9
              "
            >
              {/* Hover background */}
              <div
                className="
                  absolute
                  inset-0
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-purple-900/25
                  via-purple-800/[0.08]
                  to-transparent
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:scale-x-100
                "
              />

              <div
                className="
                  relative
                  z-10
                  grid
                  gap-6
                  lg:grid-cols-[60px_1.3fr_0.9fr_60px]
                  lg:items-center
                "
              >
                {/* Number */}
                <span
                  className="
                    text-xs
                    tracking-[0.3em]
                    text-white/20
                    transition-colors
                    duration-300
                    group-hover:text-purple-400
                  "
                >
                  {project.number}
                </span>

                {/* Name */}
                <div>
                  <p
                    className="
                      mb-3
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-purple-400/70
                      sm:text-[10px]
                    "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                      text-[10vw]
                      font-black
                      uppercase
                      leading-[0.88]
                      tracking-[-0.055em]
                      text-white/85
                      transition-all
                      duration-500
                      group-hover:translate-x-3
                      group-hover:text-white
                      sm:text-[7vw]
                      lg:text-[3.7vw]
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <p
                    className="
                      max-w-md
                      text-sm
                      leading-relaxed
                      text-white/35
                      transition-colors
                      duration-300
                      group-hover:text-white/55
                    "
                  >
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-full
                          border
                          border-white/10
                          px-3
                          py-1.5
                          text-[8px]
                          uppercase
                          tracking-[0.18em]
                          text-white/30
                          transition-all
                          duration-300
                          group-hover:border-purple-500/30
                          group-hover:bg-purple-500/[0.04]
                          group-hover:text-purple-300
                          sm:text-[9px]
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-start lg:justify-end">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-xl
                      text-white/30
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:scale-110
                      group-hover:border-purple-400
                      group-hover:bg-purple-500
                      group-hover:text-white
                    "
                  >
                    ↗
                  </div>
                </div>
              </div>

              {/* Background number */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -bottom-10
                  right-[5%]
                  text-[120px]
                  font-black
                  leading-none
                  text-white/[0.012]
                  transition-all
                  duration-700
                  group-hover:text-purple-500/[0.04]
                  sm:text-[160px]
                "
              >
                {project.number}
              </span>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-7
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <p
            className="
              max-w-xl
              text-sm
              leading-relaxed
              text-white/35
              sm:text-base
            "
          >
            From client websites to AI-powered applications and software
            systems, my work explores the intersection of development,
            creativity and practical problem solving.
          </p>

          <span
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-purple-400
            "
          >
            More work coming soon ↗
          </span>
        </motion.div>
      </div>
    </section>
  );
}