import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section
        className="
          px-5
          pb-16
          pt-7
          sm:px-8
          md:px-12
          lg:px-16
          lg:pb-20
        "
      >
        <div className="mx-auto max-w-[1500px]">

          {/* top bar */}
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/35
                transition-colors
                hover:text-purple-400
              "
            >
              ← Back to Projects
            </Link>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/20
              "
            >
              Project {project.number}
            </span>
          </div>

          {/* hero content */}
          <div className="pt-24 sm:pt-32 lg:pt-36">
            <p
              className="
                mb-5
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-purple-400
              "
            >
              {project.category}
            </p>

            <h1
              className="
                text-[16vw]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.065em]
                sm:text-[11vw]
                lg:text-[8vw]
              "
            >
              {project.title}
            </h1>

            <p
              className="
                mt-10
                max-w-4xl
                text-xl
                leading-relaxed
                text-white/60
                sm:text-2xl
                lg:text-3xl
              "
            >
              {project.hero}
            </p>

            {/* metadata */}
            <div
              className="
                mt-12
                grid
                grid-cols-2
                gap-7
                border-t
                border-white/10
                pt-7
                sm:grid-cols-4
              "
            >
              <Meta label="Role" value={project.role} />

              <Meta label="Type" value={project.type} />

              <Meta label="Year" value={project.year} />

              <Meta label="Status" value={project.status} />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT IMAGE */}
      <section
        className="
          px-5
          sm:px-8
          md:px-12
          lg:px-16
        "
      >
        <div
          className="
            relative
            mx-auto
            aspect-[16/9]
            max-w-[1500px]
            overflow-hidden
            bg-[#0c0c0c]
          "
        >
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-[1200ms]
              hover:scale-[1.02]
            "
          />
        </div>
      </section>

      {/* ABOUT */}
      <Section number="01" title="About">
        <p
          className="
            max-w-4xl
            text-base
            leading-[1.8]
            tracking-[-0.01em]
            text-white/55
            sm:text-lg
            md:text-xl
            lg:text-[1.35rem]
            lg:leading-[1.75]
          "
        >
          {project.overview}
        </p>
      </Section>

      {/* CHALLENGE */}
      <Section number="02" title="The Challenge">
        <p
          className="
            max-w-3xl
            text-lg
            leading-relaxed
            text-white/50
            sm:text-xl
          "
        >
          {project.challenge}
        </p>
      </Section>

      {/* SOLUTION */}
      <Section number="03" title="The Solution">
        <p
          className="
            max-w-3xl
            text-lg
            leading-relaxed
            text-white/50
            sm:text-xl
          "
        >
          {project.solution}
        </p>
      </Section>

      {/* FEATURES */}
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
            gap-10
            lg:grid-cols-[0.4fr_1fr]
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-purple-400
              "
            >
              04 — Features
            </p>
          </div>

          <div className="border-t border-white/10">
            {project.features.map((feature, index) => (
              <div
                key={feature}
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
                      text-white/65
                      transition-all
                      duration-300
                      group-hover:translate-x-2
                      group-hover:text-white
                      sm:text-xl
                    "
                  >
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
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
            gap-10
            lg:grid-cols-[0.4fr_1fr]
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-purple-400
              "
            >
              05 — Technology
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-x-5
              gap-y-3
            "
          >
            {project.tech.map((tech, index) => (
              <span
                key={tech}
                className="
                  text-base
                  text-white/45
                "
              >
                {tech}

                {index !== project.tech.length - 1 && (
                  <span className="ml-5 text-white/10">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS */}
      {(project.live || project.github) && (
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
              flex
              max-w-[1500px]
              flex-wrap
              gap-8
            "
          >
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  transition-colors
                  hover:text-purple-400
                  sm:text-4xl
                "
              >
                View Live

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white/40
                  transition-colors
                  hover:text-purple-400
                  sm:text-4xl
                "
              >
                GitHub

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </a>
            )}
          </div>
        </section>
      )}

      {/* NEXT CTA */}
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
            Interested in working together?
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
              transition-colors
              hover:text-purple-400
              sm:text-5xl
              lg:text-6xl
            "
          >
            Start a conversation

            <span
              className="
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

function Meta({ label, value }) {
  return (
    <div>
      <p
        className="
          mb-2
          text-[8px]
          uppercase
          tracking-[0.25em]
          text-white/20
        "
      >
        {label}
      </p>

      <p
        className="
          text-sm
          text-white/60
        "
      >
        {value}
      </p>
    </div>
  );
}

function Section({ number, title, children }) {
  return (
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
          gap-10
          lg:grid-cols-[0.4fr_1fr]
        "
      >
        <div>
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.32em]
              text-purple-400
            "
          >
            {number} — {title}
          </p>
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
}