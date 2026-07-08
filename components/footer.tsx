import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Icon } from "@/components/icons";
import { navLinks } from "@/lib/fwfa-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 pattern-grid opacity-40" />
      <div className="absolute right-[-6rem] top-[-4rem] h-64 w-64 rounded-full bg-sun-500/[0.16] blur-3xl" />
      <div className="absolute bottom-[-8rem] left-[-6rem] h-72 w-72 rounded-full bg-aqua-500/[0.16] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.75fr_0.75fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo className="h-20 w-auto drop-shadow-[0_16px_28px_rgba(7,19,59,0.45)]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-300">
                FWFA
              </p>
              <p className="text-lg font-semibold">Florida Wave Football Academy</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/[0.72]">
            Serving Pompano Beach, Deerfield Beach, and surrounding areas with
            youth development rooted in soccer, education, and community.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">
            Quick Links
          </h3>
          <ul className="mt-6 space-y-3 text-sm text-white/[0.72]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">
            Connect
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Instagram", "Facebook", "LinkedIn"].map((social) => (
              <span
                key={social}
                className="rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-sm text-white/[0.72] transition hover:border-gold-300/60 hover:text-white"
              >
                {social}
              </span>
            ))}
          </div>
          <a
            href="mailto:FloridaWavesINC@gmail.com"
            className="mt-6 inline-flex items-center gap-3 text-sm text-white/[0.72] transition hover:text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-gold-300">
              <Icon name="mail" className="h-4 w-4" />
            </span>
            FloridaWavesINC@gmail.com
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-white/[0.55] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Florida Wave Football Academy. All rights reserved.</p>
          <p>Built for players, families, and community partners.</p>
        </div>
      </div>
    </footer>
  );
}
