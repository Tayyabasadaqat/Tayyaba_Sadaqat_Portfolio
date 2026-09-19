"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const buildMessage = () => {
    return `
Hi Tayyaba,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();
  };

  const handleEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Unable to send your message."
        );
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. I’ll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("CONTACT ERROR:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me through WhatsApp.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleWhatsApp = () => {
    const body = buildMessage();
    const phoneNumber = "923195679214";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      body
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-20
        sm:px-8
        md:px-12
        lg:px-16
        lg:py-24
      "
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-700/10
            blur-[190px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-120px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-600/[0.08]
            blur-[170px]
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
            09 — Contact
          </span>

          <span className="hidden text-white/40 sm:block">
            Have something in mind?
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
            id="contact-heading"
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
              lg:text-[6.4vw]
            "
          >
            Let&apos;s make

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
              something.
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
            Looking for web development, AI integration, frontend development,
            graphic design or a creative collaboration? Tell me about your
            project and I&apos;ll get back to you.
          </motion.p>
        </div>

        {/* Contact body */}
        <div
          className="
            grid
            gap-10
            border-t
            border-white/10
            pt-10
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-16
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-purple-400
              "
            >
              Start a conversation
            </p>

            <h3
              className="
                mt-5
                max-w-md
                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.04em]
                text-white/90
                sm:text-4xl
              "
            >
              Tell me what you&apos;re building.
            </h3>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-relaxed
                text-white/55
              "
            >
              Send your project details directly through the form or contact
              me on WhatsApp.
            </p>

            {/* Quick links */}
            <div className="mt-10 border-t border-white/10">
              <a
                href="mailto:arishtayb818@gmail.com"
                aria-label="Email Tayyaba Sadaqat"
                className="
                  group
                  flex
                  min-h-[72px]
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-5
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-purple-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-black
                "
              >
                <div>
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-white/45
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-2
                      break-all
                      text-sm
                      text-white/65
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    arishtayb818@gmail.com
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    text-xl
                    text-white/40
                    transition-all
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-purple-400
                  "
                >
                  ↗
                </span>
              </a>

              <a
                href="https://www.behance.net/taybs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Tayyaba Sadaqat's creative work on Behance"
                className="
                  group
                  flex
                  min-h-[72px]
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-5
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-purple-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-black
                "
              >
                <div>
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-white/45
                    "
                  >
                    Behance
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-white/65
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    View Creative Work
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    text-xl
                    text-white/40
                    transition-all
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-purple-400
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            onSubmit={handleEmail}
            aria-busy={isSending}
            className="
              border
              border-white/10
              bg-white/[0.015]
              p-6
              sm:p-8
              lg:p-10
            "
          >
            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-3
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white/55
                  "
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="
                    w-full
                    border-b
                    border-white/25
                    bg-transparent
                    px-0
                    py-3
                    text-base
                    text-white
                    outline-none
                    transition-colors
                    placeholder:text-white/30
                    focus:border-purple-400
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-3
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white/55
                  "
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className="
                    w-full
                    border-b
                    border-white/25
                    bg-transparent
                    px-0
                    py-3
                    text-base
                    text-white
                    outline-none
                    transition-colors
                    placeholder:text-white/30
                    focus:border-purple-400
                  "
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-7">
              <label
                htmlFor="subject"
                className="
                  mb-3
                  block
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/55
                "
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Website / AI / Design / Collaboration"
                className="
                  w-full
                  border-b
                  border-white/25
                  bg-transparent
                  px-0
                  py-3
                  text-base
                  text-white
                  outline-none
                  transition-colors
                  placeholder:text-white/30
                  focus:border-purple-400
                "
              />
            </div>

            {/* Message */}
            <div className="mt-7">
              <label
                htmlFor="message"
                className="
                  mb-3
                  block
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/55
                "
              >
                Tell me about your project
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what you're working on..."
                className="
                  w-full
                  resize-none
                  border-b
                  border-white/25
                  bg-transparent
                  px-0
                  py-3
                  text-base
                  leading-relaxed
                  text-white
                  outline-none
                  transition-colors
                  placeholder:text-white/30
                  focus:border-purple-400
                "
              />
            </div>

            {/* Status */}
            {status.message && (
              <div
                role={status.type === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`
                  mt-6
                  border
                  px-4
                  py-3
                  text-sm
                  leading-relaxed
                  ${
                    status.type === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                      : "border-red-500/30 bg-red-500/10 text-red-300"
                  }
                `}
              >
                {status.message}
              </div>
            )}

            {/* Buttons */}
            <div
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <button
                type="submit"
                disabled={isSending}
                className="
                  group
                  flex
                  min-h-[52px]
                  flex-1
                  items-center
                  justify-between
                  bg-purple-600
                  px-5
                  py-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  hover:bg-purple-500
                  focus-visible:ring-2
                  focus-visible:ring-purple-300
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-black
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {isSending ? "Sending..." : "Send Message"}

                <span
                  aria-hidden="true"
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="
                  group
                  flex
                  min-h-[52px]
                  flex-1
                  items-center
                  justify-between
                  border
                  border-white/20
                  bg-white/[0.02]
                  px-5
                  py-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/80
                  outline-none
                  transition-all
                  duration-300
                  hover:border-purple-500/50
                  hover:bg-purple-500/10
                  hover:text-white
                  focus-visible:ring-2
                  focus-visible:ring-purple-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-black
                "
              >
                WhatsApp

                <span
                  aria-hidden="true"
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </button>
            </div>

            <p
              className="
                mt-5
                text-[9px]
                uppercase
                tracking-[0.17em]
                text-white/40
              "
            >
              Your message will be sent directly to my inbox.
            </p>
          </motion.form>
        </div>

        {/* Footer */}
        <footer
          className="
            mt-20
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/40
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© 2026 Tayyaba Sadaqat</p>

          <p>
            Software Developer · AI Developer · Graphic Designer
          </p>
        </footer>
      </div>
    </section>
  );
}