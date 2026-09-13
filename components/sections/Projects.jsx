"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const aiProjects = [
  {
    number: "01",
    title: "Nishaan",
    slug: "nishaan",
    category: "AI Navigation",
    description:
      "An AI-powered landmark-based navigation platform designed for places where traditional addressing systems are limited.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "AI"],
  },
  {
    number: "02",
    title: "Cotsle",
    slug: "cotsle",
    category: "AI Web Experience",
    description:
      "A modern web experience enhanced with AI-powered functionality and smarter interactions.",
    tech: ["Frontend", "AI Integration", "Responsive"],
  },
  {
    number: "03",
    title: "Luxe by MA",
    slug: "luxe-by-ma",
    category: "AI-Enhanced Experience",
    description:
      "A polished digital experience combining modern interface design with AI-powered functionality.",
    tech: ["Web Development", "AI Integration", "UI/UX"],
  },
  {
    number: "04",
    title: "Corvit Course Advisor",
    slug: "corvit-course-advisor",
    category: "AI Course Advisor",
    description:
      "A personalized AI chatbot developed for Corvit to help users explore suitable courses through conversational guidance.",
    tech: ["JavaScript", "AI Integration", "Chatbot"],
  },
  {
    number: "05",
    title: "Birds Classification Model",
    slug: "birds-classification-model",
    category: "AI Image Classification",
    description:
      "A CNN-based deep learning model designed to classify bird species from image input.",
    tech: ["Python", "CNN", "Deep Learning", "Computer Vision"],
  },
  {
    number: "06",
    title: "Protein Secondary Structure",
    slug: "protein-secondary-structure",
    category: "AI Prediction Dashboard",
    description:
      "A Streamlit-based machine learning dashboard for predicting protein secondary structure.",
    tech: ["Python", "Streamlit", "Machine Learning"],
  },
  {
    number: "07",
    title: "Project Doctor",
    slug: "project-doctor",
    category: "AI Project Analyzer",
    description:
      "A Streamlit-based AI project analyzer designed to evaluate and analyze software projects.",
    tech: ["Python", "Streamlit", "AI Integration"],
  },
];

const nonAiProjects = [
  {
    number: "08",
    title: "Signature Trips",
    slug: "signature-trips",
    category: "Travel Website",
    description:
      "A responsive travel website created with a polished visual experience and clear content structure.",
    tech: ["WordPress", "UI/UX", "Web Design"],
  },
  {
    number: "09",
    title: "Time Bank",
    slug: "time-bank",
    category: "Skill Exchange Platform",
    description:
      "A platform where users can exchange skills and services using time-based credits.",
    tech: ["React", "Express.js", "MongoDB", "SQL"],
  },
  {
    number: "10",
    title: "Donation Tracker",
    slug: "donation-tracker",
    category: "Blockchain System",
    description:
      "A blockchain-based donation tracking system focused on transparency and immutability.",
    tech: ["Python", "Blockchain", "Security"],
  },
];

function ProjectRow({ project, ai = false, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        border-b
        border-white/10
      "
    >
      {/* Hover sweep */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          origin-left
          scale-x-0
          transition-transform
          duration-700
          ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:scale-x-100
          ${
            ai
              ? "bg-gradient-to-r from-purple-900/25 via-purple-900/[0.05] to-transparent"
              : "bg-gradient-to-r from-white/[0.035] via-white/[0.01] to-transparent"
          }
        `}
      />

      {/* Whole project row is clickable */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project`}
        className="
          relative
          z-10
          grid
          gap-5
          py-8
          sm:py-9
          lg:grid-cols-[70px_1.05fr_0.8fr_40px]
          lg:items-center
          lg:gap-8
        "
      >
        {/* Number */}
        <span
          className={`
            text-[10px]
            tracking-[0.3em]
            transition-colors
            duration-300
            ${
              ai
                ? "text-purple-400/70 group-hover:text-purple-300"
                : "text-white/20 group-hover:text-white/40"
            }
          `}
        >
          {project.number}
        </span>

        {/* Title */}
        <div>
          <p
            className={`
              mb-2
              text-[8px]
              uppercase
              tracking-[0.3em]
              ${
                ai
                  ? "text-purple-400"
                  : "text-white/30"
              }
            `}
          >
            {project.category}
          </p>

          <h3
            className="
              text-[11vw]
              font-black
              uppercase
              leading-[0.85]
              tracking-[-0.055em]
              text-white/90
              transition-all
              duration-500
              group-hover:translate-x-2
              group-hover:text-white
              sm:text-[7vw]
              lg:text-[3.5vw]
            "
          >
            {project.title}
          </h3>
        </div>

        {/* Details */}
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

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-white/20
                  transition-colors
                  duration-300
                  group-hover:text-purple-300/70
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Mobile view details */}
          <span
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-purple-400/70
              lg:hidden
            "
          >
            View Project
            <span>↗</span>
          </span>
        </div>

        {/* Arrow */}
        <div
          className="
            hidden
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-lg
            text-white/25
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:rotate-45
            group-hover:border-purple-400/50
            group-hover:bg-purple-500
            group-hover:text-white
            lg:flex
          "
        >
          ↗
        </div>
      </Link>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 35, -15, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-200px]
            top-[18%]
            h-[580px]
            w-[580px]
            rounded-full
            bg-purple-700/10
            blur-[190px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            04 — Projects
          </span>

          <span className="hidden text-white/20 sm:block">
            Selected Work
          </span>
        </motion.div>

        {/* Heading */}
        <div
          className="
            mb-16
            grid
            gap-6
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-end
          "
        >
          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-[15vw]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.06em]
              sm:text-[10vw]
              lg:text-[6.2vw]
            "
          >
            Selected

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
              Projects.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="
              max-w-md
              text-sm
              leading-relaxed
              text-white/35
              sm:text-base
              lg:justify-self-end
            "
          >
            A mix of AI-enhanced products, websites and software systems —
            separated by how intelligence is used in each experience.
          </motion.p>
        </div>

        {/* AI PROJECTS */}
        <div>
          <div
            className="
              mb-2
              flex
              items-end
              justify-between
              border-b
              border-purple-500/20
              pb-5
            "
          >
            <div>
              <p
                className="
                  mb-2
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-purple-400
                "
              >
                Collection 01
              </p>

              <h3
                className="
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-4xl
                "
              >
                AI-Powered
              </h3>
            </div>

            <span
              className="
                text-5xl
                font-black
                text-purple-500/10
              "
            >
              {String(aiProjects.length).padStart(2, "0")}
            </span>
          </div>

          {aiProjects.map((project, index) => (
            <ProjectRow
              key={project.slug}
              project={project}
              ai
              index={index}
            />
          ))}
        </div>

        {/* Divider */}
        <div
          className="
            my-14
            flex
            items-center
            gap-5
          "
        >
          <div className="h-[1px] flex-1 bg-white/10" />

          <motion.span
            animate={{ rotate: [0, 180, 360] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              text-xs
              tracking-[0.4em]
              text-purple-400/60
            "
          >
            ✦
          </motion.span>

          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        {/* NON-AI PROJECTS */}
        <div>
          <div
            className="
              mb-2
              flex
              items-end
              justify-between
              border-b
              border-white/10
              pb-5
            "
          >
            <div>
              <p
                className="
                  mb-2
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                "
              >
                Collection 02
              </p>

              <h3
                className="
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-4xl
                "
              >
                Non-AI
              </h3>
            </div>

            <span
              className="
                text-5xl
                font-black
                text-white/[0.04]
              "
            >
              {String(nonAiProjects.length).padStart(2, "0")}
            </span>
          </div>

          {nonAiProjects.map((project, index) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}