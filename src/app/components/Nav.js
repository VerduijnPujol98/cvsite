"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "01 / ABOUT ME" },
  { href: "#experience", label: "02 / EXPERIENCE" },
  { href: "#contact", label: "03 / CONTACT" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="relative z-50 border-b border-neutral-700 bg-[#10110f] text-white">
      <nav
        className="mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16"
        aria-label="Main navigation"
      >
        <a
          className="font-heading text-3xl font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
          href="#top"
          onClick={closeMenu}
        >
          asuka
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              className="font-heading text-sm tracking-widest transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-neutral-700 text-lime-300 transition-colors hover:border-lime-300 md:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="font-mono text-xs">{isOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </nav>

      <div
        className={`${isOpen ? "block" : "hidden"} border-t border-neutral-700 bg-[#10110f] md:hidden`}
        id="mobile-navigation"
      >
        <div className="mx-auto flex max-w-6xl flex-col px-6 py-4 sm:px-10">
          {links.map((link) => (
            <a
              className="border-b border-neutral-700 py-4 font-heading text-sm tracking-widest transition-colors last:border-b-0 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
              href={link.href}
              key={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
