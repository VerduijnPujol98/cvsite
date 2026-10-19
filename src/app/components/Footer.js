"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const currentYear = new Date().getFullYear();

export default function Footer() {
  const footer = useRef(null);

  useGSAP(
    () => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      gsap.fromTo(
        footer.current.querySelector(".contact-content"),
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer.current.querySelector(".contact-area"),
            start: "top 80%",
            once: true,
          },
        }
      );
    },
    { scope: footer }
  );

  function scrollToTop() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <footer ref={footer} className="font-body text-[#f0f0e8]">
      <section id="contact" className="contact-area bg-[#d2f85b] px-6 py-20 text-[#10110f] sm:px-10 sm:py-28 lg:px-16">
        <div className="contact-content mx-auto max-w-6xl">
          <p className="font-mono text-sm tracking-widest">LET&apos;S CONNECT</p>
          <h2 className="mt-8 max-w-4xl font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Good things start with a{" "}
            <em className="font-editorial font-normal">hello.</em>
          </h2>
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-lg leading-8">
              I&apos;m looking for a software engineering trainee opportunity.
              Have a role or a project in mind? Let&apos;s talk.
            </p>
            <div className="flex flex-col items-start gap-4">
              <a
                className="max-w-full break-words font-heading text-xl font-semibold underline decoration-[#10110f]/30 underline-offset-8 transition-colors hover:text-[#35382e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10110f] sm:text-2xl"
                href="mailto:asukaleenverduijn@gmail.com"
              >
                asukaleenverduijn@gmail.com
              </a>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
                <a
                  className="underline underline-offset-4 transition-colors hover:text-[#35382e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10110f]"
                  href="https://github.com/VerduijnPujol98"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <a
                  className="underline underline-offset-4 transition-colors hover:text-[#35382e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10110f]"
                  href="https://dribbble.com/stroop"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dribbble ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#35382e] bg-[#10110f] px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[#a1a498] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="font-heading text-base text-[#f0f0e8]">
            Asuka Verduijn
          </p>
          <p>Aarhus, Denmark</p>
          <p>© {currentYear} Asuka Verduijn</p>
          <button
            className="inline-flex min-h-11 items-center self-start border border-[#35382e] px-4 font-mono text-xs text-[#f0f0e8] transition-colors hover:border-[#d2f85b] hover:text-[#d2f85b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d2f85b] sm:self-auto"
            type="button"
            onClick={scrollToTop}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
