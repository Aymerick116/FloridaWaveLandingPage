"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { navLinks } from "@/lib/fwfa-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);

    window.addEventListener("hashchange", closeMenu);

    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  const shellClassName =
    scrolled || menuOpen
      ? "border-white/[0.12] bg-navy-950/[0.86] shadow-soft backdrop-blur-xl"
      : "border-transparent bg-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-[2rem] border transition-all duration-300 ${shellClassName}`}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4">
            <Link href="#home" className="flex items-center gap-4 text-white">
              <BrandLogo
                className="h-16 w-auto drop-shadow-[0_16px_28px_rgba(7,19,59,0.45)] sm:h-[4.7rem]"
                priority
              />
              <span className="hidden text-left sm:block">
                <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-gold-300/[0.92]">
                  FWFA
                </span>
                <span className="block text-base font-semibold tracking-wide text-white">
                  Florida Wave Football Academy
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-5 xl:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/[0.74] transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              <Link href="#contact" className="button-primary">
                Join the Academy
              </Link>
            </div>

            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.05] text-white transition hover:bg-white/10 xl:hidden"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          {menuOpen ? (
            <div className="border-t border-white/10 px-5 pb-5 pt-3 xl:hidden">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="#contact" className="button-primary mt-2">
                  Join the Academy
                </Link>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
