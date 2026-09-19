"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const creativeItems = [
  {
    title: "Social Media",
    category: "Posts · Campaigns · Content",
    image: "/creative/social-media.jpg",
    alt: "Social media design work by Tayyaba Sadaqat featuring digital posts, campaign visuals and branded content",
  },
  {
    title: "Branding",
    category: "Identity · Visual Systems · Logos",
    image: "/creative/Branding.jpg",
    alt: "Branding and visual identity design work by Tayyaba Sadaqat",
  },
  {
    title: "E-Commerce",
    category: "Amazon · A+ Content · Listings",
    image: "/creative/ecommerce.jpg",
    alt: "E-commerce design work by Tayyaba Sadaqat including Amazon A+ content and product listing visuals",
  },
  {
    title: "Web Graphics",
    category: "Landing Pages · Funnels · Digital",
    image: "/creative/web-graphics.png",
    alt: "Web graphic design work by Tayyaba Sadaqat including landing pages, funnels and digital visuals",
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
        aria-labelledby="creative-work-heading"
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
              08 — Creative Work
            </p>

            <p
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/40
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
              id="creative-work-heading"
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
                text-white/60
                sm:text-base
                lg:justify-self-end
              "
            >
              A selection of graphic design and visual work across branding,
              social media content, e-commerce, web graphics and digital
              design.
            </motion.p>
          </div>

          {/* Gallery */}
          <div className="grid gap-5 md:grid-cols-2">
            {creativeItems.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${item.title} design work`}
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
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-purple-400
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-black
                "
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="
                    (max-width: 767px) 100vw,
                    50vw
                  "
                  className="
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                    group-hover:grayscale-0
                    group-focus-visible:scale-[1.035]
                    group-focus-visible:grayscale-0
                  "
                />

                {/* Dark overlay */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
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
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-purple-800/0
                    transition-colors
                    duration-500
                    group-hover:bg-purple-800/10
                    group-focus-visible:bg-purple-800/10
                  "
                />

                {/* Number */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-5
                    top-5
                    text-[9px]
                    tracking-[0.28em]
                    text-white/60
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* View indicator */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    right-5
                    top-5
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                    text-white/70
                    opacity-100
                    transition-all
                    duration-300
                    sm:opacity-0
                    sm:group-hover:opacity-100
                    sm:group-focus-visible:opacity-100
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
                      group-focus-visible:translate-x-1
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
            role="dialog"
            aria-modal="true"
            aria-labelledby="creative-lightbox-title"
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
              aria-label="Close creative work viewer"
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-xl
                text-white/70
                outline-none
                transition-all
                hover:border-purple-400/50
                hover:bg-purple-500
                hover:text-white
                focus-visible:ring-2
                focus-visible:ring-purple-400
                sm:right-8
                sm:top-8
              "
            >
              <span aria-hidden="true">×</span>
            </button>

            {/* Counter */}
            <div
              aria-live="polite"
              className="
                absolute
                left-5
                top-6
                z-20
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/50
                sm:left-8
                sm:top-9
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}

              <span className="mx-2 text-white/30">/</span>

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
                  alt={activeItem.alt}
                  fill
                  sizes="(max-width: 1200px) 90vw, 1100px"
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
                    id="creative-lightbox-title"
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
                    aria-label="View previous creative project"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      text-white/70
                      outline-none
                      transition-all
                      hover:border-purple-400/50
                      hover:text-purple-400
                      focus-visible:ring-2
                      focus-visible:ring-purple-400
                    "
                  >
                    <span aria-hidden="true">←</span>
                  </button>

                  <button
                    type="button"
                    onClick={nextItem}
                    aria-label="View next creative project"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      text-white/70
                      outline-none
                      transition-all
                      hover:border-purple-400/50
                      hover:text-purple-400
                      focus-visible:ring-2
                      focus-visible:ring-purple-400
                    "
                  >
                    <span aria-hidden="true">→</span>
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