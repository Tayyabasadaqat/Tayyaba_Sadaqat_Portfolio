"use client";

import { motion } from "framer-motion";

const experience = [
  {
    number: "01",
    role: "Web Developer Intern",
    company: "Corvit Systems",
    period: "Current",
    description:
      "Working on modern web development using Next.js, React and JavaScript, while integrating REST APIs, backend technologies and AI-powered features.",
    tags: ["Next.js", "React", "JavaScript", "REST APIs", "AI"],
  },
  {
    number: "02",
    role: "Freelance Web Developer",
    company: "Independent / Fiverr",
    period: "Freelance",
    description:
      "Building and designing websites for clients with a focus on responsive interfaces, usability and polished digital experiences.",
    tags: ["Web Development", "Frontend", "UI/UX", "Client Work"],
  },
  {
    number: "03",
    role: "Website Designer",
    company: "The Signature Trips",
    period: "Freelance",
    description:
      "Designed the visual experience and developed a WordPress website for a travel brand, focusing on clear structure and user-friendly presentation.",
    tags: ["WordPress", "Web Design", "UI/UX"],
  },
  {
    number: "04",
    role: "Graphic Designer",
    company: "MLSA — IIUI Community",
    period: "Volunteer",
    description:
      "Created visual content and graphic assets for community initiatives, combining branding, communication and audience-focused design.",
    tags: ["Graphic Design", "Branding", "Social Media"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#070707]
        px-5
        py-16
        sm:px-8
        md:px-12
        lg:px-16
        lg:py-20
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[-200px]
            top-[20%]
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
            bottom-[-200px]
            right-[-150px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-500/[0.08]
            blur-[170px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mb-8
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
            05 — Experience
          </span>

          <span className="hidden text-white/20 sm:block">
            Work / Freelance / Community
          </span>
        </motion.div>

        {/* Heading */}
        <div className="mb-12 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-[15vw]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.06em]
              sm:text-[10vw]
              lg:text-[6.5vw]
            "
          >
            Experience
            <span
              className="
                block
                bg-gradient-to-r
                from-purple-300
                via-violet-500
                to-purple-700
                bg-clip-text
                text-transparent
              "
            >
              so far.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="
              max-w-md
              text-sm
              leading-relaxed
              text-white/35
              sm:text-base
              lg:justify-self-end
            "
          >
            A mix of professional development, freelance work and creative
            experience that continues to shape how I approach digital
            products.
          </motion.p>
        </div>

        {/* Experience list */}
        <div className="border-t border-white/10">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative
                overflow-hidden
                border-b
                border-white/10
                py-8
                sm:py-9
              "
            >
              {/* Hover wash */}
              <div
                className="
                  absolute
                  inset-0
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-purple-900/20
                  via-purple-800/[0.05]
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:scale-x-100
                "
              />

              <div
                className="
                  relative
                  z-10
                  grid
                  gap-6
                  lg:grid-cols-[60px_1fr_0.75fr]
                  lg:items-start
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
                  {item.number}
                </span>

                {/* Role */}
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
                    {item.period}
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      text-white/85
                      transition-all
                      duration-300
                      group-hover:translate-x-2
                      group-hover:text-white
                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    {item.role}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      text-white/30
                    "
                  >
                    {item.company}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p
                    className="
                      max-w-lg
                      text-sm
                      leading-relaxed
                      text-white/35
                      transition-colors
                      duration-300
                      group-hover:text-white/55
                    "
                  >
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/10
                          px-3
                          py-1.5
                          text-[8px]
                          uppercase
                          tracking-[0.17em]
                          text-white/30
                          transition-all
                          duration-300
                          group-hover:border-purple-500/30
                          group-hover:text-purple-300
                          sm:text-[9px]
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ghost number */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -bottom-10
                  right-[4%]
                  text-[140px]
                  font-black
                  leading-none
                  text-white/[0.012]
                  transition-colors
                  duration-500
                  group-hover:text-purple-500/[0.035]
                "
              >
                {item.number}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}