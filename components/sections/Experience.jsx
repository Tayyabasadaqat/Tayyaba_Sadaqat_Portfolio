"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  {
    id: "developer",
    number: "01",
    eyebrow: "Software · Web · AI",
    title: "Developer",
    accent: "AI / Web",
    description:
      "Building modern web experiences, software systems and AI-powered products.",
  },
  {
    id: "design",
    number: "02",
    eyebrow: "Design · Video · Branding",
    title: "Graphic",
    accent: "Designer",
    description:
      "Creating visual identities, marketing content and digital experiences for brands.",
  },
];

const developerExperience = [
  {
    period: "Current",
    role: "Web Developer Intern",
    company: "Corvit Systems",
    description:
      "Working with modern frontend and backend technologies while developing web applications and integrating APIs and AI-powered functionality.",
    tags: ["Next.js", "React", "JavaScript", "REST APIs", "AI"],
  },
  {
    period: "Freelance",
    role: "Web Developer",
    company: "Independent / Fiverr",
    description:
      "Developing responsive websites and digital experiences for clients with a focus on functionality, usability and polished interfaces.",
    tags: ["Web Development", "Frontend", "UI/UX", "Client Work"],
  },
  {
    period: "Freelance",
    role: "Website Designer",
    company: "The Signature Trips",
    description:
      "Designed the user experience and developed a WordPress website for a travel brand with a clear, responsive and visually engaging structure.",
    tags: ["WordPress", "Web Design", "UI/UX"],
  },
];

const designExperience = [
  {
    period: "Oct 2025 — Present",
    role: "Graphic Designer & Video Editor",
    company: "Stratelix",
    description:
      "Creating marketing visuals, brand content, reels and video assets while supporting social media management and e-commerce content.",
    tags: [
      "Graphic Design",
      "Video Editing",
      "Social Media",
      "Amazon",
      "A+ Content",
    ],
  },
  {
    period: "Mar 2025 — Sep 2025",
    role: "Graphic Designer & Social Media Ambassador",
    company: "Pak Drive Ltd",
    description:
      "Designed social media posts and brand content, produced video assets and supported management of social media accounts.",
    tags: ["Social Media", "Brand Content", "Video", "Design"],
  },
  {
    period: "Sep 2023 — Apr 2025",
    role: "Graphic Designer",
    company: "MLSA — IIUI Community",
    description:
      "Collaborated with the creative and media team on official event graphics, promotional material and digital marketing campaigns.",
    tags: ["Event Design", "Branding", "Campaigns", "Social Media"],
  },
  {
    period: "Feb 2023 — Mar 2023",
    role: "Graphic Designer",
    company: "MA Creative Agency",
    description:
      "Created social posts, flyers and short-form video edits for client campaigns while maintaining visual consistency across deliverables.",
    tags: ["Posts", "Flyers", "Video Editing", "Brand Identity"],
  },
  {
    period: "Feb 2022 — Sep 2022",
    role: "Virtual Assistant / Creative",
    company: "Innovation With Pixels",
    description:
      "Designed sales funnels and landing pages using ClickFunnels and Kartra while creating web graphics and marketing content.",
    tags: ["ClickFunnels", "Kartra", "Web Graphics", "Marketing"],
  },
];

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (id) => {
    setActiveCategory((current) => (current === id ? null : id));
  };

  const activeExperience =
    activeCategory === "developer"
      ? developerExperience
      : activeCategory === "design"
      ? designExperience
      : [];

  const activeTitle =
    activeCategory === "developer"
      ? "Developer / AI / Web"
      : "Graphic Design";

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
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-[180px]
            top-[15%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-purple-700/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            right-[-150px]
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
            05 — Experience
          </span>

          <span className="hidden text-white/20 sm:block">
            Development / Creative
          </span>
        </motion.div>

        {/* Heading */}
        <div
          className="
            mb-12
            grid
            gap-7
            lg:grid-cols-[1.2fr_0.8fr]
            lg:items-end
          "
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-[14vw]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.06em]
              sm:text-[10vw]
              lg:text-[6.2vw]
            "
          >
            Two sides.
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
              One mind.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:justify-self-end"
          >
            <p
              className="
                max-w-md
                text-sm
                leading-relaxed
                text-white/35
                sm:text-base
              "
            >
              My experience lives across two disciplines — building digital
              products through technology and communicating ideas through
              visual design.
            </p>

            <p
              className="
                mt-5
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-purple-400
                sm:text-[10px]
              "
            >
              Choose a discipline ↓
            </p>
          </motion.div>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid gap-4 lg:grid-cols-2">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => toggleCategory(category.id)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`
                  group
                  relative
                  min-h-[330px]
                  overflow-hidden
                  border
                  p-7
                  text-left
                  transition-all
                  duration-500
                  sm:p-9
                  lg:min-h-[390px]
                  ${
                    isActive
                      ? "border-purple-500/50 bg-purple-950/20"
                      : "border-white/10 bg-white/[0.015] hover:border-purple-500/30"
                  }
                `}
              >
                {/* Hover wash */}
                <div
                  className={`
                    absolute
                    inset-0
                    origin-bottom
                    bg-gradient-to-t
                    from-purple-900/30
                    via-purple-900/[0.05]
                    to-transparent
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${
                      isActive
                        ? "scale-y-100"
                        : "scale-y-0 group-hover:scale-y-100"
                    }
                  `}
                />

                {/* Ghost word */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    -bottom-8
                    right-[-10px]
                    text-[110px]
                    font-black
                    uppercase
                    leading-none
                    tracking-[-0.08em]
                    text-white/[0.018]
                    transition-all
                    duration-700
                    group-hover:text-purple-400/[0.04]
                    sm:text-[150px]
                  "
                >
                  {category.id === "developer" ? "DEV" : "ART"}
                </span>

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    min-h-[275px]
                    flex-col
                    justify-between
                    lg:min-h-[325px]
                  "
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="
                        text-xs
                        tracking-[0.3em]
                        text-white/25
                        transition-colors
                        duration-300
                        group-hover:text-purple-400
                      "
                    >
                      {category.number}
                    </span>

                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-xl
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "rotate-45 border-purple-400 bg-purple-500 text-white"
                            : "border-white/10 text-white/30 group-hover:rotate-45 group-hover:border-purple-400 group-hover:bg-purple-500 group-hover:text-white"
                        }
                      `}
                    >
                      ↗
                    </div>
                  </div>

                  <div>
                    <p
                      className="
                        mb-4
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-purple-400
                        sm:text-[10px]
                      "
                    >
                      {category.eyebrow}
                    </p>

                    <h3
                      className="
                        text-[12vw]
                        font-black
                        uppercase
                        leading-[0.82]
                        tracking-[-0.06em]
                        text-white/90
                        sm:text-[8vw]
                        lg:text-[4.5vw]
                      "
                    >
                      {category.title}

                      <span
                        className="
                          block
                          text-purple-500
                          transition-colors
                          duration-300
                          group-hover:text-purple-400
                        "
                      >
                        {category.accent}
                      </span>
                    </h3>

                    <p
                      className="
                        mt-6
                        max-w-md
                        text-sm
                        leading-relaxed
                        text-white/35
                      "
                    >
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* EXPANDED EXPERIENCE */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory}
              initial={{
                opacity: 0,
                height: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: 20,
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <div className="pt-16">
                {/* Expanded header */}
                <div
                  className="
                    mb-8
                    flex
                    items-end
                    justify-between
                    border-b
                    border-white/10
                    pb-6
                  "
                >
                  <div>
                    <p
                      className="
                        mb-3
                        text-[9px]
                        uppercase
                        tracking-[0.35em]
                        text-purple-400
                      "
                    >
                      Selected Experience
                    </p>

                    <h3
                      className="
                        text-3xl
                        font-semibold
                        tracking-[-0.04em]
                        sm:text-4xl
                      "
                    >
                      {activeTitle}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveCategory(null)}
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/30
                      transition-colors
                      hover:text-purple-400
                    "
                  >
                    Close ×
                  </button>
                </div>

                {/* Entries */}
                <div>
                  {activeExperience.map((item, index) => (
                    <motion.article
                      key={`${item.company}-${item.role}`}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.07,
                      }}
                      className="
                        group
                        grid
                        gap-5
                        border-b
                        border-white/10
                        py-7
                        md:grid-cols-[150px_1fr_0.9fr]
                        md:gap-8
                      "
                    >
                      {/* Date */}
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-purple-400/70
                        "
                      >
                        {item.period}
                      </p>

                      {/* Position */}
                      <div>
                        <h4
                          className="
                            text-xl
                            font-medium
                            tracking-[-0.03em]
                            text-white/80
                            transition-all
                            duration-300
                            group-hover:translate-x-2
                            group-hover:text-white
                            sm:text-2xl
                          "
                        >
                          {item.role}
                        </h4>

                        <p
                          className="
                            mt-2
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-white/30
                          "
                        >
                          {item.company}
                        </p>
                      </div>

                      {/* Details */}
                      <div>
                        <p
                          className="
                            max-w-lg
                            text-sm
                            leading-relaxed
                            text-white/35
                            transition-colors
                            group-hover:text-white/50
                          "
                        >
                          {item.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
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
                                tracking-[0.16em]
                                text-white/30
                                transition-all
                                group-hover:border-purple-500/30
                                group-hover:text-purple-300
                              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}