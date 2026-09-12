"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const creativeItems = [
  {
    title: "Social Media",
    category: "Posts · Campaigns · Content",
    image: "/creative/social-media.jpg",
  },
  {
    title: "Branding",
    category: "Identity · Visual Systems · Logos",
    image: "/creative/branding.jpg",
  },
  {
    title: "Video / Reels",
    category: "Motion · Short Form · Editing",
    image: "/creative/video.jpg",
  },
  {
    title: "E-Commerce",
    category: "Amazon · A+ Content · Listings",
    image: "/creative/ecommerce.jpg",
  },
  {
    title: "Event Design",
    category: "Posters · Promotions · Campaigns",
    image: "/creative/events.jpg",
  },
  {
    title: "Web Graphics",
    category: "Landing Pages · Funnels · Digital",
    image: "/creative/web-graphics.jpg",
  },
];

export default function CreativeWork() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeItem =
    activeIndex !== null ? creativeItems[activeIndex] : null;

  const nextItem = () => {
    setActiveIndex((prev) =>
      prev === creativeItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevItem = () => {
    setActiveIndex((prev) =>
      prev === 0 ? creativeItems.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section
        id="creative-work"
        className="
          relative
          overflow-hidden
          bg-[#050505]
          px-5
          py-16
          sm:px-8
          md:px-12
          lg:px-16
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[1600px]">

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
              07 — Creative Work
            </p>

            <p
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/20
                sm:block
              "
            >
              Selected Visuals
            </p>
          </motion.div>

          {/* Heading */}
          <div
            className="
              mb-14
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
                text-[14vw]
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.06em]
                sm:text-[10vw]
                lg:text-[6vw]
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
              A selection of visual work across branding, social media,
              ecommerce, motion and digital design.
            </motion.p>
          </div>

          {/* Gallery */}
          <div className="grid gap-5 md:grid-cols-2">
            {creativeItems.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                  aspect-[4/3]
                  w-full
                  overflow-hidden
                  bg-[#0b0b0b]
                  text-left
                "
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                    group-hover:grayscale-0
                  "
                />

                {/* Dark overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/10
                    to-transparent
                  "
                />

                {/* Purple hover wash */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-purple-800/0
                    transition-colors
                    duration-500
                    group-hover:bg-purple-800/10
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    left-5
                    top-5
                    text-[9px]
                    tracking-[0.28em]
                    text-white/45
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* View */}
                <span
                  className="
                    absolute
                    right-5
                    top-5
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                    text-white/40
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  View ↗
                </span>

                {/* Content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    sm:p-7
                  "
                >
                  <p
                    className="
                      mb-2
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-purple-300
                    "
                  >
                    {item.category}
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      sm:text-4xl
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/95
              px-4
              py-5
              backdrop-blur-xl
              sm:px-8
            "
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-xl
                text-white/60
                transition-all
                hover:border-purple-400/50
                hover:bg-purple-500
                hover:text-white
                sm:right-8
                sm:top-8
              "
            >
              ×
            </button>

            {/* Counter */}
            <div
              className="
                absolute
                left-5
                top-6
                z-20
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/25
                sm:left-8
                sm:top-9
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-2 text-white/10">/</span>
              {String(creativeItems.length).padStart(2, "0")}
            </div>

            {/* Main viewer */}
            <motion.div
              key={activeItem.image}
              initial={{
                opacity: 0,
                scale: 0.97,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                flex
                h-full
                w-full
                max-w-[1400px]
                flex-col
                justify-center
              "
            >
              {/* Image area */}
              <div
                className="
                  relative
                  mx-auto
                  h-[65vh]
                  w-full
                  max-w-[1100px]
                "
              >
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Info */}
              <div
                className="
                  mx-auto
                  mt-5
                  flex
                  w-full
                  max-w-[1100px]
                  items-end
                  justify-between
                  gap-5
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <div>
                  <p
                    className="
                      mb-2
                      text-[8px]
                      uppercase
                      tracking-[0.28em]
                      text-purple-400
                    "
                  >
                    {activeItem.category}
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      tracking-[-0.04em]
                      sm:text-3xl
                    "
                  >
                    {activeItem.title}
                  </h3>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevItem}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-white/40
                      transition-all
                      hover:border-purple-400/50
                      hover:text-purple-400
                    "
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={nextItem}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-white/40
                      transition-all
                      hover:border-purple-400/50
                      hover:text-purple-400
                    "
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}