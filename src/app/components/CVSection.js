"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experience = [
  {
    date: "2025–2026",
    role: "Owner",
    organisation: "Verduijn",
    location: "Aarhus, Denmark",
    details: [
      "Founded and operated a handyman, service, and renovation business.",
      "Managed client communication, projects, employees, scheduling, and daily operations.",
      "Developed ownership, practical problem-solving, and responsibility under real-world constraints.",
    ],
  },
  {
    date: "2019–2021",
    role: "Freelance Web Developer",
    organisation: "Self-employed",
    details: [
      "Developed and designed websites and web interfaces for client projects.",
      "Managed projects independently, from initial requirements and concept through delivery.",
      "Combined development with interface design.",
    ],
    link: { label: "Design portfolio", href: "https://dribbble.com/stroop" },
  },
  {
    date: "2019–2021",
    role: "Events Manager",
    organisation: "Te Te Craft Beer",
    location: "Vietnam",
    details: [
      "Planned and coordinated events in a fast-paced international environment.",
      "Organized logistics, schedules, venues, and external partners.",
      "Handled challenges during live events.",
    ],
  },
  {
    date: "2018–2019",
    role: "Web Developer & Illustrator",
    organisation: "HUNTED Agency",
    details: [
      "Worked across website development and visual design.",
      "Developed and maintained WordPress websites.",
      "Implemented frontend styling.",
      "Created illustrations and visual assets.",
    ],
  },
];

const education = [
  {
    date: "2026–present",
    role: "Software Engineering Trainee",
    organisation: "VIA University College",
  },
  {
    date: "2025–2026",
    role: "Engineering Admission Course",
    organisation: null,
  },
];

const technologyGroups = [
  { label: "Programming languages", items: ["Java", "JavaScript", "TypeScript"] },
  {
    label: "Frontend",
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  { label: "Animation", items: ["GSAP"] },
  { label: "CMS", items: ["WordPress"] },
  { label: "Backend, data & APIs", items: ["Firebase", "REST APIs"] },
  { label: "Computer vision", items: ["OpenCV"] },
  { label: "Hardware / IoT", items: ["ESP32"] },
  {
    label: "Development tools",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
  },
];

const projects = [
  {
    name: "Jigsaw Puzzle Solver",
    meta: "Personal project — in development",
    description:
      "A solution that analyses puzzle-piece images using OpenCV, contour detection, edge and shape analysis, colour comparison, and matching logic.",
  },
  {
    name: "Web & IoT Projects",
    meta: "Personal projects",
    description:
      "Web applications using React, Next.js, JavaScript/TypeScript, and Firebase, including experiments connecting ESP32 sensor data to Firebase and a web interface.",
  },
];

const languages = [
  ["Danish", "Fluent"],
  ["English", "Fluent"],
  ["Dutch", "Fluent"],
  ["Vietnamese", "Fluent"],
];

function TimelineGroup({ entries }) {
  return (
    <div className="timeline-group relative">
      <span className="timeline-line absolute bottom-4 left-3 top-4 w-px origin-top scale-y-0 bg-[#35382e] md:left-[12rem]" />
      {entries.map((entry) => (
        <article
          className="timeline-entry relative grid gap-6 pb-14 pl-10 md:grid-cols-[12rem_1fr] md:gap-0 md:pl-0"
          key={`${entry.date}-${entry.role}`}
        >
          <span className="timeline-node absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-[#10110f] bg-[#d2f85b] md:left-[11.25rem]" />
          <p className="font-mono text-sm tracking-wide text-[#a1a498] md:pr-12 md:text-right">
            {entry.date}
          </p>
          <div className="timeline-content border-l border-[#35382e] pl-6 md:border-l-0 md:pl-12">
            <h3 className="font-heading text-2xl font-semibold text-[#f0f0e8]">
              {entry.role}
            </h3>
            <p className="mt-2 text-[#d2f85b]">
              {entry.organisation}
              {entry.location ? ` — ${entry.location}` : ""}
            </p>
            <ul className="mt-5 space-y-2 text-[#a1a498]">
              {entry.details?.map((detail) => (
                <li className="flex gap-3" key={detail}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d2f85b]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            {entry.link && (
              <a
                className="mt-5 inline-flex font-mono text-sm text-[#d2f85b] underline decoration-[#35382e] underline-offset-4 transition-colors hover:text-[#f0f0e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d2f85b]"
                href={entry.link.href}
                target="_blank"
                rel="noreferrer"
              >
                {entry.link.label} ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function CVSection() {
  const section = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      gsap.utils.toArray(".timeline-group").forEach((group) => {
        const entries = group.querySelectorAll(".timeline-entry");
        const line = group.querySelector(".timeline-line");

        gsap.to(line, {
          scaleY: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            end: "bottom 65%",
            scrub: 0.7,
          },
        });

        entries.forEach((entry, index) => {
          const content = entry.querySelector(".timeline-content");
          const node = entry.querySelector(".timeline-node");

          gsap.fromTo(
            [entry.querySelector("p"), content],
            { autoAlpha: 0, x: index % 2 === 0 ? -18 : 18 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.65,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 82%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            node,
            { scale: 0.5, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.45,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: entry,
                start: "top 82%",
                once: true,
              },
            }
          );
        });
      });
    },
    { scope: section }
  );

  return (
    <section
      ref={section}
      className="bg-[#10110f] px-6 py-24 font-body text-[#f0f0e8] sm:px-10 lg:px-16"
      id="experience"
      aria-label="Curriculum vitae"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(13rem,1fr)_minmax(0,3fr)]">
          <div>
            <p className="font-mono text-sm tracking-widest text-[#a1a498]">
              02 / EXPERIENCE
            </p>
          </div>
          <div>
            <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              The path so far.
            </h2>
            <div className="mt-14">
              <TimelineGroup entries={experience} />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#35382e] pt-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(13rem,1fr)_minmax(0,3fr)]">
            <div>
              <p className="font-mono text-sm tracking-widest text-[#a1a498]">
                EDUCATION
              </p>
            </div>
            <TimelineGroup entries={education} />
          </div>
        </div>

        <div className="mt-10 border-t border-[#35382e] pt-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(13rem,1fr)_minmax(0,3fr)]">
            <div>
              <p className="font-mono text-sm tracking-widest text-[#a1a498]">
                TECHNOLOGY STACK
              </p>
            </div>
            <div>
              <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                What I build with.
              </h2>
              <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {technologyGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="font-mono text-sm text-[#a1a498]">
                      {group.label}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          className="rounded-full border border-[#35382e] bg-[#1a1c17] px-3 py-1.5 text-sm text-[#f0f0e8]"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-2xl text-sm leading-7 text-[#a1a498]">
                ESP32 is part of my experimentation with connected hardware,
                sensor data, and web interfaces. Tailwind CSS and GSAP are also
                part of this current portfolio.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#35382e] pt-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(13rem,1fr)_minmax(0,3fr)]">
            <div>
              <p className="font-mono text-sm tracking-widest text-[#a1a498]">
                PROJECTS
              </p>
            </div>
            <div>
              <div className="grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                  <article
                    className="border border-[#35382e] bg-[#1a1c17] p-6"
                    key={project.name}
                  >
                    <p className="font-mono text-xs text-[#a1a498]">
                      {project.meta}
                    </p>
                    <h3 className="mt-5 font-heading text-2xl font-semibold">
                      {project.name}
                    </h3>
                    <p className="mt-4 leading-7 text-[#a1a498]">
                      {project.description}
                    </p>
                  </article>
                ))}
              </div>
              <a
                className="mt-8 inline-flex font-mono text-sm text-[#d2f85b] underline decoration-[#35382e] underline-offset-4 transition-colors hover:text-[#f0f0e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d2f85b]"
                href="https://github.com/VerduijnPujol98"
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#35382e] pt-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(13rem,1fr)_minmax(0,3fr)]">
            <div>
              <p className="font-mono text-sm tracking-widest text-[#a1a498]">
                LANGUAGES
              </p>
            </div>
            <div className="grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {languages.map(([language, level]) => (
                <div key={language}>
                  <p className="font-heading text-lg">{language}</p>
                  <p className="mt-1 font-mono text-xs text-[#a1a498]">
                    {level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
