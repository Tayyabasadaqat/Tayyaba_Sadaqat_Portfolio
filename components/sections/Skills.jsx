"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Development",
    subtitle: "Web · Software · APIs",
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "Python",
      "Java",
      "C++",
      "PHP",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    number: "02",
    title: "AI / Data",
    subtitle: "Machine Learning · Intelligence",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Data Analysis",
      "Model Training",
      "AI Integration",
      "Python",
    ],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Visual · Brand · Interface",
    skills: [
      "Graphic Design",
      "UI/UX",
      "Social Media Design",
      "Brand Content",
      "Video Editing",
      "Web Design",
      "Figma",
      "Photoshop",
      "Illustrator",
      "Canva",
      "Premiere Pro",
    ],
  },
  {
    number: "04",
    title: "Tools",
    subtitle: "Platforms · Databases · Workflow",
    skills: [
      "Git",
      "GitHub",
      "MongoDB",
      "MySQL",
      "Oracle",
      "PostgreSQL",
      "Postman",
      "Azure",
      "WordPress",
      "ClickFunnels",
      "Kartra",
      "Asana",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-16
        sm:px-8
        md:px-12
        lg:px-16
        lg:py-20
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            right-[-180px]
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
            left-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-600/[0.07]
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mb-10
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
            07 — Skills & Tools
          </span>

          <span className="hidden text-white/40 sm:block">
            Development / AI / Design
          </span>
        </motion.div>

        {/* Heading */}
        <div
          className="
            mb-14
            grid
            gap-7
            lg:grid-cols-[1.2fr_0.8fr]
            lg:items-end
          "
        >
          <motion.h2
            id="skills-heading"
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
            Tools I

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
              work with.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="
              max-w-md
              text-sm
              leading-relaxed
              text-white/60
              sm:text-base
              lg:justify-self-end
            "
          >
            My technical and creative toolkit includes web development,
            software engineering, artificial intelligence, machine learning,
            databases, UI/UX design and visual content creation.
          </motion.p>
        </div>

        {/* Skill groups */}
        <div className="border-t border-white/10">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
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
                lg:py-10
              "
            >
              {/* Decorative hover wash */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
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
                  gap-7
                  lg:grid-cols-[70px_0.65fr_1.35fr]
                  lg:items-center
                "
              >
                {/* Number */}
                <span
                  aria-hidden="true"
                  className="
                    text-xs
                    tracking-[0.3em]
                    text-white/40
                    transition-colors
                    duration-300
                    group-hover:text-purple-400
                  "
                >
                  {group.number}
                </span>

                {/* Group title */}
                <div>
                  <p
                    className="
                      mb-3
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-purple-300
                    "
                  >
                    {group.subtitle}
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      text-white/90
                      transition-all
                      duration-300
                      group-hover:translate-x-2
                      group-hover:text-white
                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    {group.title}
                  </h3>
                </div>

                {/* Skills */}
                <div
                  className="flex flex-wrap gap-2 sm:gap-3"
                  aria-label={`${group.title} skills`}
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        cursor-default
                        rounded-full
                        border
                        border-white/15
                        bg-white/[0.025]
                        px-4
                        py-2
                        text-[9px]
                        uppercase
                        tracking-[0.17em]
                        text-white/60
                        transition-colors
                        duration-300
                        hover:border-purple-500/40
                        hover:bg-purple-500/10
                        hover:text-purple-200
                        sm:text-[10px]
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative ghost number */}
              <span
                aria-hidden="true"
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
                {group.number}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}