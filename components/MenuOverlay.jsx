"use client";

import { AnimatePresence, motion } from "framer-motion";

const links = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Services", href: "#services" },
  { number: "03", label: "Projects", href: "#projects" },
  { number: "04", label: "Experience", href: "#experience" },
  { number: "05", label: "Skills", href: "#skills" },
  { number: "06", label: "Creative Work", href: "#creative-work" },
  { number: "07", label: "Contact", href: "#contact" },
];

export default function MenuOverlay({ open, onClose }) {
  const handleNavigation = (href) => {
    onClose();

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            fixed
            inset-0
            z-[999]
            overflow-y-auto
            bg-[#070707]
            px-5
            py-6
            text-white
            sm:px-8
            md:px-12
            lg:px-16
          "
        >
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="
                absolute
                -right-[200px]
                -top-[100px]
                h-[600px]
                w-[600px]
                rounded-full
                bg-purple-700/20
                blur-[190px]
              "
            />

            <div
              className="
                absolute
                -bottom-[250px]
                -left-[150px]
                h-[500px]
                w-[500px]
                rounded-full
                bg-violet-500/10
                blur-[180px]
              "
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[1600px]">
            {/* header */}
            <div className="flex items-center justify-between">
              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.28em]
                  text-white/70
                "
              >
                Tayyaba Sadaqat
              </span>

              <button
                onClick={onClose}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/60
                  transition-colors
                  hover:text-white
                "
              >
                Close

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-lg
                    transition-all
                    duration-300
                    group-hover:rotate-90
                    group-hover:border-purple-400
                    group-hover:bg-purple-500
                  "
                >
                  ×
                </div>
              </button>
            </div>

            {/* content */}
            <div
              className="
                grid
                min-h-[calc(100vh-120px)]
                gap-12
                pt-14
                lg:grid-cols-[1.3fr_0.7fr]
                lg:items-end
                lg:pb-10
              "
            >
              {/* links */}
              <nav>
                {links.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{
                      opacity: 0,
                      x: -40,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.25 + index * 0.06,
                    }}
                    onClick={() => handleNavigation(link.href)}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      gap-5
                      border-b
                      border-white/10
                      py-3
                      text-left
                      sm:py-4
                    "
                  >
                    <span
                      className="
                        w-8
                        text-[8px]
                        tracking-[0.25em]
                        text-purple-400/60
                      "
                    >
                      {link.number}
                    </span>

                    <span
                      className="
                        text-[11vw]
                        font-black
                        uppercase
                        leading-[0.85]
                        tracking-[-0.055em]
                        text-white/75
                        transition-all
                        duration-300
                        group-hover:translate-x-3
                        group-hover:text-purple-400
                        sm:text-[8vw]
                        lg:text-[4.3vw]
                      "
                    >
                      {link.label}
                    </span>

                    <span
                      className="
                        ml-auto
                        text-xl
                        text-white/15
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-purple-400
                      "
                    >
                      ↗
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* right information */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.65,
                  duration: 0.7,
                }}
                className="
                  border-t
                  border-white/10
                  pt-6
                  lg:border-t-0
                  lg:pt-0
                "
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-purple-400
                  "
                >
                  Software · AI · Design
                </p>

                <p
                  className="
                    mt-5
                    max-w-sm
                    text-sm
                    leading-relaxed
                    text-white/35
                  "
                >
                  Building digital products through software engineering,
                  artificial intelligence and visual creativity.
                </p>

                <div className="mt-10 flex gap-5">
                  <a
                    href="https://www.linkedin.com/in/tayyaba-sadaqat-6a6419226"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      text-white/35
                      transition-colors
                      hover:text-purple-400
                    "
                  >
                    LinkedIn ↗
                  </a>

                  <a
                    href="https://www.behance.net/taybs"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      text-white/35
                      transition-colors
                      hover:text-purple-400
                    "
                  >
                    Behance ↗
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}