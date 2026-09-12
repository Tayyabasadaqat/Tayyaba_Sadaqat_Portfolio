import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-7 pb-20">
        <div className="mx-auto max-w-[1500px]">

          {/* top */}
          <div className="flex items-center justify-between">
            <Link
              href="/#services"
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/35
                transition-colors
                hover:text-purple-400
              "
            >
              ← Back
            </Link>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/20
              "
            >
              Service {service.number}
            </span>
          </div>

          {/* title */}
          <div className="pt-24 sm:pt-32 lg:pt-40">
            <p
              className="
                mb-5
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-purple-400
              "
            >
              {service.shortTitle}
            </p>

            <h1
              className="
                max-w-[1250px]
                text-[14vw]
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.065em]
                sm:text-[10vw]
                lg:text-[7vw]
              "
            >
              {service.title}
            </h1>

            <div
              className="
                mt-12
                grid
                gap-8
                border-t
                border-white/10
                pt-8
                lg:grid-cols-[1.1fr_0.9fr]
              "
            >
              <p
                className="
                  max-w-3xl
                  text-xl
                  leading-relaxed
                  text-white/70
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                {service.subtitle}
              </p>

              <p
                className="
                  max-w-lg
                  text-sm
                  leading-relaxed
                  text-white/35
                  lg:justify-self-end
                "
              >
                {service.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="
          border-t
          border-white/10
          px-5
          py-20
          sm:px-8
          md:px-12
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            gap-12
            lg:grid-cols-[0.45fr_1fr]
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-purple-400
              "
            >
              01 — Capabilities
            </p>
          </div>

          <div className="border-t border-white/10">
            {service.capabilities.map((item, index) => (
              <div
                key={item}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-5
                  sm:py-6
                "
              >
                <div className="flex items-center gap-6">
                  <span
                    className="
                      w-7
                      text-[9px]
                      tracking-[0.2em]
                      text-white/20
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-lg
                      text-white/70
                      transition-all
                      duration-300
                      group-hover:translate-x-2
                      group-hover:text-white
                      sm:text-xl
                    "
                  >
                    {item}
                  </span>
                </div>

                <span
                  className="
                    text-sm
                    text-white/15
                    transition-colors
                    group-hover:text-purple-400
                  "
                >
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="
          border-t
          border-white/10
          px-5
          py-20
          sm:px-8
          md:px-12
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            gap-12
            lg:grid-cols-[0.45fr_1fr]
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-purple-400
              "
            >
              02 — Process
            </p>
          </div>

          <div>
            {service.process.map((step, index) => (
              <div
                key={step.number}
                className="
                  grid
                  gap-3
                  border-b
                  border-white/10
                  py-7
                  sm:grid-cols-[60px_1fr_1fr]
                  sm:items-start
                "
              >
                <span
                  className="
                    text-[9px]
                    tracking-[0.25em]
                    text-white/20
                  "
                >
                  {step.number}
                </span>

                <h3
                  className="
                    text-xl
                    font-medium
                    tracking-[-0.03em]
                    text-white/80
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    max-w-lg
                    text-sm
                    leading-relaxed
                    text-white/30
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section
        className="
          border-t
          border-white/10
          px-5
          py-20
          sm:px-8
          md:px-12
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            gap-12
            lg:grid-cols-[0.45fr_1fr]
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-purple-400
              "
            >
              03 — Toolkit
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-x-6
              gap-y-3
            "
          >
            {service.tools.map((tool, index) => (
              <span
                key={tool}
                className="
                  text-sm
                  text-white/35
                "
              >
                {tool}
                {index !== service.tools.length - 1 && (
                  <span className="ml-6 text-white/10">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="
          border-t
          border-white/10
          px-5
          py-24
          sm:px-8
          md:px-12
          lg:px-16
          lg:py-28
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <p
            className="
              mb-5
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-purple-400
            "
          >
            Have a project in mind?
          </p>

          <Link
            href="/#contact"
            className="
              group
              inline-flex
              items-center
              gap-5
              text-4xl
              font-semibold
              tracking-[-0.05em]
              text-white
              transition-colors
              hover:text-purple-400
              sm:text-5xl
              lg:text-6xl
            "
          >
            Start a conversation

            <span
              className="
                text-3xl
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}