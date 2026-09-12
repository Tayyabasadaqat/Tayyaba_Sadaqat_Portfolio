"use client";

import { motion } from "framer-motion";

const creativeWork = [
  {
    number: "01",
    title: "Social Media",
    subtitle: "Posts · Campaigns · Content",
    image: "/creative/social-media.jpg",
  },
  {
    number: "02",
    title: "Branding",
    subtitle: "Identity · Visual Systems · Logos",
    image: "/creative/branding.jpg",
  },
  {
    number: "03",
    title: "Video / Reels",
    subtitle: "Motion · Short Form · Editing",
    image: "/creative/video.jpg",
  },
  {
    number: "04",
    title: "E-Commerce",
    subtitle: "Amazon · A+ Content · Listings",
    image: "/creative/ecommerce.jpg",
  },
  {
    number: "05",
    title: "Event Design",
    subtitle: "Posters · Promotions · Campaigns",
    image: "/creative/events.jpg",
  },
  {
    number: "06",
    title: "Web Graphics",
    subtitle: "Landing Pages · Funnels · Digital",
    image: "/creative/web-graphics.jpg",
  },
];

export default function CreativeWork() {
  return (
    <section
      id="creative-work"
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
            right-[-180px]
            top-[10%]
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
            bottom-[-220px]
            left-[-160px]
            h-[480px]
            w-[480px]
            rounded-full
            bg-violet-600/[0.07]
            blur-[180px]
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
            07 — Creative Work
          </span>

          <span className="hidden text-white/20 sm:block">
            Design / Motion / Visuals
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
              Creative Work.
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
              text-white/35
              sm:text-base
              lg:justify-self-end
            "
          >
            Visual work across branding, digital content, marketing,
            e-commerce and motion design.
          </motion.p>
        </div>

        {/* Gallery */}
        <div
          className="
            grid
            gap-4
            md:grid-cols-2
          "
        >
          {creativeWork.map((item, index) => (
            <motion.article
              key={item.title}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative
                min-h-[340px]
                overflow-hidden
                border
                border-white/10
                bg-black
                sm:min-h-[420px]
              "
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    opacity-50
                    grayscale
                    transition-all
                    duration-700
                    group-hover:scale-105
                    group-hover:opacity-70
                    group-hover:grayscale-0
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/30
                    to-black/10
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-purple-900/0
                    transition-colors
                    duration-500
                    group-hover:bg-purple-900/10
                  "
                />
              </div>

              {/* Content */}
              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-[340px]
                  flex-col
                  justify-between
                  p-6
                  sm:min-h-[420px]
                  sm:p-8
                "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-xs
                      tracking-[0.3em]
                      text-white/40
                      transition-colors
                      group-hover:text-purple-300
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      text-xl
                      text-white/50
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:border-purple-400
                      group-hover:bg-purple-500
                      group-hover:text-white
                    "
                  >
                    ↗
                  </div>
                </div>

                <div>
                  <p
                    className="
                      mb-3
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-purple-300/80
                    "
                  >
                    {item.subtitle}
                  </p>

                  <h3
                    className="
                      text-[11vw]
                      font-black
                      uppercase
                      leading-[0.85]
                      tracking-[-0.055em]
                      text-white
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                      sm:text-[6vw]
                      lg:text-[3.8vw]
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}