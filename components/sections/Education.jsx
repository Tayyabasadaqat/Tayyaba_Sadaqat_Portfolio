"use client";

import { motion } from "framer-motion";

const education = [
  {
    number: "01",
    type: "Current",
    title: "BS Software Engineering",
    institution: "International Islamic University Islamabad",
    status: "Currently Pursuing",
    description:
      "Building a strong foundation in software engineering, development, databases, artificial intelligence and modern computing technologies.",
  },
  {
    number: "02",
    type: "Completed",
    title: "Graphic Designing & Video Editing",
    institution: "National Skills University",
    status: "Professional Training",
    description:
      "Professional training focused on visual communication, graphic design, creative content and video editing.",
  },
  {
    number: "03",
    type: "Upcoming",
    title: "Advanced AI",
    institution: "Huawei",
    status: "Upcoming",
    description:
      "Upcoming advanced learning focused on artificial intelligence and emerging AI technologies.",
  },
  {
    number: "04",
    type: "Upcoming",
    title: "Advanced AI & Technology",
    institution: "Microsoft",
    status: "Upcoming",
    description:
      "Upcoming professional learning focused on advanced AI concepts and modern technology.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-black
        px-5
        py-20
        sm:px-8
        md:px-12
        lg:px-16
        lg:py-28
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-200px]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-700/10
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mb-12
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
            02 — Education
          </span>

          <span className="hidden text-white/20 sm:block">
            Learning & Growth
          </span>
        </motion.div>

        {/* Heading */}
        <div
          className="
            mb-16
            grid
            gap-8
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-end
          "
        >
          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-[14vw]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.06em]
              sm:text-[9vw]
              lg:text-[5.8vw]
            "
          >
            Education

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
              & Learning.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              max-w-md
              text-sm
              leading-relaxed
              text-white/35
              sm:text-base
              lg:justify-self-end
            "
          >
            My academic foundation, creative training and continuous
            exploration of emerging AI technologies.
          </motion.p>
        </div>

        {/* Education rows */}
        <div className="border-t border-white/10">
          {education.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.institution}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
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
              {/* Hover background */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-purple-900/20
                  via-purple-900/[0.04]
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
                  py-8
                  sm:py-10
                  lg:grid-cols-[70px_1fr_0.7fr]
                  lg:items-center
                  lg:gap-10
                "
              >
                {/* Number */}
                <span
                  className="
                    text-[10px]
                    tracking-[0.3em]
                    text-purple-400/60
                  "
                >
                  {item.number}
                </span>

                {/* Main info */}
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-purple-400
                      "
                    >
                      {item.type}
                    </span>

                    {item.type === "Upcoming" && (
                      <span
                        className="
                          rounded-full
                          border
                          border-purple-500/20
                          bg-purple-500/10
                          px-3
                          py-1
                          text-[7px]
                          uppercase
                          tracking-[0.2em]
                          text-purple-300
                        "
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3
                    className="
                      max-w-3xl
                      text-3xl
                      font-semibold
                      leading-[0.95]
                      tracking-[-0.045em]
                      text-white/90
                      transition-all
                      duration-500
                      group-hover:translate-x-2
                      group-hover:text-white
                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-xs
                      uppercase
                      tracking-[0.16em]
                      text-white/30
                    "
                  >
                    {item.institution}
                  </p>
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
                    {item.description}
                  </p>

                  <p
                    className="
                      mt-4
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-purple-400/60
                    "
                  >
                    {item.status}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}