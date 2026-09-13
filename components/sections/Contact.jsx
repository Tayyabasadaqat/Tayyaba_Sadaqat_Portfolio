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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  const handleEmail = (e) => {
    e.preventDefault();

    const subject =
      formData.subject || `Portfolio inquiry from ${formData.name}`;

    const body = buildMessage();

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent("arishtayb818@gmail.com")}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const handleWhatsApp = () => {
    const body = buildMessage();

    const phoneNumber = "923195679214";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      body
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
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
      <div className="pointer-events-none absolute inset-0">
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

          <span className="hidden text-white/20 sm:block">
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
              text-white/35
              sm:text-base
              lg:justify-self-end
            "
          >
            Have a website, software project, AI idea, design requirement or
            collaboration in mind? Send me a message and choose how you would
            like to reach me.
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
                text-white/35
              "
            >
              Fill in the form and send it through Gmail or WhatsApp.
            </p>

            {/* Quick links */}
            <div className="mt-10 border-t border-white/10">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arishtayb818%40gmail.com"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-5
                "
              >
                <div>
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-white/25
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-2
                      break-all
                      text-sm
                      text-white/55
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    arishtayb818@gmail.com
                  </p>
                </div>

                <span
                  className="
                    text-xl
                    text-white/25
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
                rel="noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-5
                "
              >
                <div>
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-white/25
                    "
                  >
                    Behance
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-white/55
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    View Creative Work
                  </p>
                </div>

                <span
                  className="
                    text-xl
                    text-white/25
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
                    text-white/35
                  "
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="
                    w-full
                    border-b
                    border-white/15
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    text-white
                    outline-none
                    transition-colors
                    placeholder:text-white/15
                    focus:border-purple-500
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
                    text-white/35
                  "
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className="
                    w-full
                    border-b
                    border-white/15
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    text-white
                    outline-none
                    transition-colors
                    placeholder:text-white/15
                    focus:border-purple-500
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
                  text-white/35
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
                  border-white/15
                  bg-transparent
                  px-0
                  py-3
                  text-sm
                  text-white
                  outline-none
                  transition-colors
                  placeholder:text-white/15
                  focus:border-purple-500
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
                  text-white/35
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
                  border-white/15
                  bg-transparent
                  px-0
                  py-3
                  text-sm
                  leading-relaxed
                  text-white
                  outline-none
                  transition-colors
                  placeholder:text-white/15
                  focus:border-purple-500
                "
              />
            </div>

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
                className="
                  group
                  flex
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
                  transition-all
                  duration-300
                  hover:bg-purple-500
                "
              >
                Open Gmail

                <span
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
                  flex-1
                  items-center
                  justify-between
                  border
                  border-white/15
                  bg-white/[0.02]
                  px-5
                  py-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/70
                  transition-all
                  duration-300
                  hover:border-purple-500/50
                  hover:bg-purple-500/10
                  hover:text-white
                "
              >
                WhatsApp

                <span
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
                text-[8px]
                uppercase
                tracking-[0.17em]
                text-white/20
              "
            >
              Fill in the form, then choose Gmail or WhatsApp.
            </p>
          </motion.form>
        </div>

        {/* Footer */}
        <div
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
            text-white/20
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© 2026 Tayyaba Sadaqat</p>

          <p>
            Developer · AI · Designer
          </p>
        </div>
      </div>
    </section>
  );
}