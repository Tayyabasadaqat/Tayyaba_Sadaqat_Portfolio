"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Go to top"
          title="Go to top"
          initial={{
            opacity: 0,
            y: 15,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 15,
            scale: 0.9,
          }}
          whileHover={{
            y: -3,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            group
            fixed
            bottom-5
            right-5
            z-[900]
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/70
            text-white/50
            shadow-[0_0_30px_rgba(124,58,237,0.08)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-purple-400/40
            hover:bg-purple-500
            hover:text-white
            hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]
            sm:bottom-7
            sm:right-7
          "
        >
          <span
            className="
              text-lg
              transition-transform
              duration-300
              group-hover:-translate-y-[2px]
            "
          >
            ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}