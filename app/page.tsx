import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Footer } from "@/components/footer";
import { FeaturedProgramCard } from "@/components/featured-program-card";
import { Icon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { PathwaySection } from "@/components/pathway-section";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { SectionShell } from "@/components/section-shell";
import { ValueCard } from "@/components/value-card";
import {
  aboutHighlights,
  camps,
  coreValues,
  events,
  heroHighlights,
  programs,
  supportPartnerPillars,
  trustBadges
} from "@/lib/fwfa-data";

export default function Home() {
  const featuredProgram = programs.find((program) => program.featured);
  const standardPrograms = programs.filter((program) => !program.featured);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section
          id="home"
          className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pb-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,109,5,0.34),transparent_24%),radial-gradient(circle_at_72%_22%,rgba(247,195,63,0.28),transparent_23%),linear-gradient(135deg,#06133b_8%,#0b1f63_48%,#1c56bf_100%)]" />
          <div className="absolute inset-0 pattern-grid opacity-40" />
          <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-sun-400/[0.24] blur-3xl" />
          <div className="absolute bottom-[-8rem] right-[-5rem] h-80 w-80 rounded-full bg-aqua-400/[0.18] blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <SectionReveal className="max-w-3xl">
              <span className="eyebrow border-white/10 bg-white/10 text-gold-300 before:bg-aqua-400">
                South Florida Youth Soccer Development
              </span>
              <h1 className="mt-7 text-5xl leading-none text-white sm:text-6xl xl:text-7xl">
                <span className="text-balance">
                  Building Players. Developing Leaders. Strengthening Community.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.74] sm:text-xl">
                Florida Wave Football Academy uses soccer as a tool for social
                change, helping youth build character, teamwork, leadership, and
                confidence for success in school, careers, and life.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="#programs" className="button-primary">
                  Explore Programs
                </Link>
                <Link href="#contact" className="button-secondary">
                  Join the Academy
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/[0.14] bg-white/[0.06] px-4 py-2 text-sm text-white/[0.78] backdrop-blur"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={160} className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sun-400/[0.22] via-transparent to-aqua-400/[0.18] blur-3xl" />
              <div className="panel-dark relative overflow-hidden p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(247,195,63,0.16),transparent_26%),radial-gradient(circle_at_center,rgba(46,121,234,0.16),transparent_34%)]" />
                <div className="absolute inset-6 rounded-[1.8rem] border border-white/10" />
                <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-white/10" />
                <div className="absolute bottom-10 left-1/2 top-10 w-px -translate-x-1/2 bg-white/10" />
                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.12]" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-300/80">
                        Florida Wave Football Academy
                      </p>
                      <h2 className="mt-4 text-3xl text-white sm:text-4xl">
                        Development Framework
                      </h2>
                    </div>
                    <div className="hidden items-center gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/70 backdrop-blur sm:flex">
                      <BrandLogo
                        className="h-24 w-auto drop-shadow-[0_14px_28px_rgba(7,19,59,0.42)]"
                        priority
                      />
                      <div>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold-300/80">
                          Club Crest
                        </p>
                        <p className="mt-1 text-sm text-white/75">
                          Premium athletic training environment
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {heroHighlights.map((highlight, index) => (
                      <div
                        key={highlight.title}
                        className={`rounded-[1.6rem] border border-white/10 bg-white/[0.08] p-5 shadow-lg backdrop-blur ${
                          index === 1 ? "sm:translate-y-10" : ""
                        } ${index === 2 ? "animate-float-delayed" : "animate-float"}`}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold-300">
                          <Icon name={highlight.icon} className="h-5 w-5" />
                        </div>
                        <h3 className="mt-5 text-xl text-white">{highlight.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/70">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.08] px-5 py-4 text-sm text-white/[0.72] backdrop-blur">
                      Clear pathway from entry-level participation to advanced
                      opportunities.
                    </div>
                    <div className="rounded-[1.4rem] border border-gold-300/25 bg-sun-400/10 px-5 py-4 text-sm text-gold-300 backdrop-blur">
                      Character, confidence, and community impact built into the
                      academy model.
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        <SectionShell id="about" className="bg-transparent">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SectionReveal>
              <SectionHeading
                eyebrow="Who We Are"
                title="A community-driven academy shaping confident athletes and future leaders."
                description="Florida Wave Football Academy is a community-driven youth soccer organization serving Pompano Beach, Deerfield Beach, and surrounding areas. We are more than a club — we are a development platform focused on shaping well-rounded athletes, strong students, and confident leaders."
              />

              <div className="mt-8 space-y-5 text-base leading-8 text-navy-800/[0.78]">
                <p>
                  FWFA blends premium coaching standards with an approachable,
                  community-first culture so families feel supported from the
                  first session onward.
                </p>
                <p>
                  Every program is designed to help players grow with purpose,
                  whether they are taking their first steps into the game or
                  pushing toward advanced opportunities.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={140}>
              <div className="panel relative overflow-hidden p-8 sm:p-10">
                <div className="absolute inset-0 pattern-grid-light opacity-60" />
                <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-sun-400/[0.16] blur-2xl" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="eyebrow">Academy Snapshot</span>
                    <span className="rounded-full border border-gold-400/20 bg-white/80 px-4 py-2 text-sm font-medium text-sun-500">
                      Built for South Florida families
                    </span>
                  </div>
                  <h3 className="mt-6 max-w-xl text-3xl text-navy-950">
                    Serving youth with structure, mentorship, and a clear sense
                    of belonging.
                  </h3>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {aboutHighlights.map((item, index) => (
                      <div
                        key={item.title}
                        className={`rounded-[1.6rem] border border-navy-900/[0.08] bg-white/[0.84] p-5 shadow-md ${
                          index === 1 ? "sm:-translate-y-4" : ""
                        }`}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sun-500">
                          Focus
                        </p>
                        <h4 className="mt-3 text-xl">{item.title}</h4>
                        <p className="mt-3 text-sm leading-7 text-navy-800/[0.74]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.6rem] bg-[linear-gradient(145deg,#06133b_8%,#0b1f63_48%,#f26d05_130%)] p-6 text-white shadow-hero">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300/80">
                        Academy Identity
                      </p>
                      <p className="mt-4 text-lg leading-8 text-white/[0.78]">
                        Development-first coaching, academic reinforcement, and
                        community connection define the FWFA experience.
                      </p>
                    </div>
                    <div className="rounded-[1.6rem] border border-gold-400/25 bg-gradient-to-br from-gold-300/10 to-white p-6">
                      <div className="flex items-center gap-3 text-sun-500">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                          <Icon name="map-pin" className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sun-500">
                            Based In
                          </p>
                          <p className="mt-1 text-lg font-semibold text-navy-950">
                            Pompano Beach • Deerfield Beach • South Florida
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </SectionShell>

        <SectionShell className="overflow-hidden bg-navy-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,109,5,0.18),transparent_26%),radial-gradient(circle_at_70%_20%,rgba(247,195,63,0.14),transparent_24%),linear-gradient(180deg,rgba(8,27,51,0.08),rgba(8,27,51,0.12))]" />
          <div className="absolute inset-0 pattern-grid opacity-35" />

          <div className="relative">
            <SectionReveal>
              <SectionHeading
                eyebrow="Our Mission"
                title="Soccer as a platform for social change, growth, and life opportunity."
                description="Florida Wave Football Academy uses soccer as a tool for social change, empowering youth to build character, teamwork, and leadership so they can succeed in high school, college, their careers, and beyond. FWFA promotes educational achievement, health and wellness, and personal development through programs both on and off the field, uniting a diverse community around positive growth and shared goals."
                align="center"
                tone="light"
              />
            </SectionReveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "On The Field",
                  description:
                    "Technical learning, team habits, discipline, and competitive confidence."
                },
                {
                  title: "Beyond The Field",
                  description:
                    "Academic support, wellness, leadership development, and mentorship."
                },
                {
                  title: "For The Community",
                  description:
                    "An inclusive environment that connects youth, families, and local partners around positive momentum."
                }
              ].map((item, index) => (
                <SectionReveal key={item.title} delay={index * 120}>
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-7 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
                      Mission Pillar
                    </p>
                    <h3 className="mt-4 text-2xl text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/[0.72]">
                      {item.description}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell className="bg-white/50">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <SectionReveal>
              <div className="panel relative overflow-hidden p-6 sm:p-8">
                <div className="absolute inset-0 pattern-grid-light opacity-60" />
                <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-sun-400/[0.14] blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-navy-900/[0.08] bg-white shadow-soft">
                  <Image
                    src="/high5-consultants-partner.png"
                    alt="High 5 Consultants, LLC partnership logo."
                    width={1296}
                    height={1304}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={120}>
              <SectionHeading
                eyebrow="Support Partnership"
                title="A working partnership that strengthens off-field support for players and families."
                description="FWFA works with High 5 Consultants, LLC to extend holistic support beyond soccer. This partnership helps reinforce mental health support, mentorship, and academic support so player development stays connected to family wellness and long-term growth."
              />

              <div className="mt-8 rounded-[1.8rem] border border-gold-400/20 bg-gradient-to-br from-gold-300/10 via-white to-aqua-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sun-500">
                  Partnership Focus
                </p>
                <p className="mt-4 text-lg leading-8 text-navy-900/80">
                  High 5 Consultants, LLC supports a broader development model
                  centered on wellness, guidance, and educational reinforcement
                  so athletes can feel supported both in sport and in life.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {supportPartnerPillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className={`rounded-[1.6rem] border border-navy-900/[0.08] bg-white/[0.88] p-5 shadow-soft ${
                      index === 1 ? "sm:-translate-y-4" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300/20 to-white text-sun-500 shadow-sm">
                      <Icon name={pillar.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl text-navy-950">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-navy-800/[0.74]">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </SectionShell>

        <SectionShell id="programs">
          <SectionReveal>
            <SectionHeading
              eyebrow="Our Programs"
              title="Structured pathways designed for skill, confidence, and long-term growth."
              description="Each FWFA program supports a different stage of development while keeping coaching standards, mentorship, and community impact at the center."
              align="center"
            />
          </SectionReveal>

          {featuredProgram ? (
            <SectionReveal delay={80} className="mt-14">
              <FeaturedProgramCard {...featuredProgram} />
            </SectionReveal>
          ) : null}

          <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {standardPrograms.map((program, index) => (
              <SectionReveal key={program.title} delay={index * 90}>
                <ProgramCard {...program} />
              </SectionReveal>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="camps" className="bg-white/50">
          <SectionReveal>
            <SectionHeading
              eyebrow="Camps"
              title="Upcoming clinics front and center, with year-round camps behind them."
              description="Our next camp experience is the current focus, while FWFA continues building a broader seasonal camp pathway for players and families."
              align="center"
            />
          </SectionReveal>

          <SectionReveal delay={80} className="mt-14">
            <div className="panel relative overflow-hidden p-4 sm:p-5 lg:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,109,5,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(46,121,234,0.08),transparent_24%)]" />

              <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="overflow-hidden rounded-[2rem] border border-navy-900/[0.08] bg-white shadow-soft">
                  <Image
                    src="/fwfa-upcoming-camp-flyer.png"
                    alt="Florida Wave Training Academy Summer 2026 clinics flyer featuring free community soccer days and development clinics for boys and girls ages 6 to 12."
                    width={2048}
                    height={1250}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                <div className="rounded-[2rem] border border-navy-900/[0.08] bg-white/[0.84] p-7 shadow-soft backdrop-blur">
                  <span className="eyebrow">Upcoming Camp Spotlight</span>
                  <h3 className="mt-6 text-3xl text-navy-950 sm:text-4xl">
                    Summer 2026 Clinics are the current lead event in our camps calendar.
                  </h3>
                  <p className="mt-5 text-base leading-8 text-navy-800/[0.76]">
                    We are featuring this flyer first so families can immediately
                    see the next active opportunity, including dates, age group,
                    locations, and registration details.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-gold-400/20 bg-gradient-to-br from-gold-300/10 to-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sun-500">
                        Free Community Soccer Days
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-navy-950">
                        July 15 to 16
                      </p>
                      <p className="mt-3 text-sm leading-7 text-navy-800/[0.74]">
                        Free entry for boys and girls ages 6 to 12.
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-navy-900/[0.08] bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-aqua-600">
                        Development Clinics
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-navy-950">
                        July 20 to 23
                      </p>
                      <p className="mt-3 text-sm leading-7 text-navy-800/[0.74]">
                        Registration fee: $40 for boys and girls ages 6 to 12.
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 rounded-[1.5rem] bg-[linear-gradient(145deg,#06133b_8%,#0b1f63_48%,#f26d05_130%)] p-5 text-white shadow-hero">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300/[0.86]">
                      Schedule & Locations
                    </p>
                    <p className="mt-3 text-base leading-8 text-white/[0.8]">
                      Monday to Thursday, 9:00 AM to 11:30 AM at Mitchell Moore
                      Park and North Pompano Park.
                    </p>
                  </div>

                  <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="mailto:FloridaWavesINC@gmail.com?subject=FWFA%20Summer%202026%20Clinics"
                      className="button-primary"
                    >
                      Ask About This Camp
                    </a>
                    <Link href="#contact" className="button-secondary-light">
                      Contact FWFA
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <div className="mt-12">
            <SectionReveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sun-500">
                  Year-Round Camp Types
                </p>
                <p className="mt-4 text-lg leading-8 text-navy-800/75">
                  Beyond the current clinic flyer, these are the camp formats we
                  plan to continue building into the academy calendar.
                </p>
              </div>
            </SectionReveal>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {camps.map((camp, index) => (
              <SectionReveal key={camp.title} delay={index * 90} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-navy-900/[0.08] bg-white/[0.9] p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-sun-300/60 hover:shadow-glow">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sun-400 via-gold-400 to-aqua-400" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 text-gold-300 shadow-md transition duration-300 group-hover:from-navy-900 group-hover:via-aqua-600 group-hover:to-sun-500 group-hover:text-white">
                    <Icon name={camp.icon} className="h-6 w-6" />
                  </div>
                  <div className="relative mt-6 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sun-500">
                      Camp
                    </p>
                    <span className="rounded-full border border-gold-400/25 bg-gold-300/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-500">
                      {camp.tag}
                    </span>
                  </div>
                  <h3 className="relative mt-4 text-2xl leading-tight text-navy-950">
                    <span className="text-balance">{camp.title}</span>
                  </h3>
                  <p className="relative mt-4 text-base leading-7 text-navy-800/[0.76]">
                    {camp.description}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="pathway" className="overflow-hidden bg-navy-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(242,109,5,0.18),transparent_24%),radial-gradient(circle_at_center,rgba(46,121,234,0.16),transparent_30%),linear-gradient(135deg,#06133b_0%,#0b1f63_52%,#1c56bf_100%)]" />
          <div className="absolute inset-0 pattern-grid opacity-40" />

          <div className="relative">
            <SectionReveal>
              <SectionHeading
                eyebrow="Player Pathway"
                title="A clear progression from first touch to advanced opportunity."
                description="We create a clear pathway for players to grow from entry-level participation to advanced opportunities on and off the field."
                align="center"
                tone="light"
              />
            </SectionReveal>

            <SectionReveal delay={120}>
              <PathwaySection />
            </SectionReveal>
          </div>
        </SectionShell>

        <SectionShell id="values">
          <SectionReveal>
            <SectionHeading
              eyebrow="Core Values"
              title="The standards that shape our culture and every player experience."
              description="FWFA is built around values that guide how we coach, support families, and invest in young people."
              align="center"
            />
          </SectionReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreValues.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 80}>
                <ValueCard {...value} />
              </SectionReveal>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="events" className="overflow-hidden bg-navy-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,109,5,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(46,121,234,0.16),transparent_28%),linear-gradient(180deg,rgba(8,27,51,0.08),rgba(8,27,51,0.12))]" />
          <div className="absolute inset-0 pattern-grid opacity-35" />

          <div className="relative">
            <SectionReveal>
              <SectionHeading
                eyebrow="Events"
                title="Signature moments that bring players, families, and community together."
                description="FWFA events are designed to celebrate competition, connection, and the culture we are building around the academy."
                align="center"
                tone="light"
              />
            </SectionReveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {events.map((event, index) => (
                <SectionReveal key={event.title} delay={index * 110} className="h-full">
                  <article className="relative flex h-full flex-col overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.08] p-8 backdrop-blur-xl">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sun-500 via-gold-400 to-aqua-400" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold-300 shadow-md">
                        <Icon name={event.icon} className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-gold-300/25 bg-sun-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
                        {event.month}
                      </span>
                    </div>
                    <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
                      Community Event
                    </p>
                    <h3 className="relative mt-4 text-3xl text-white">{event.title}</h3>
                    <p className="relative mt-4 max-w-2xl text-base leading-8 text-white/[0.74]">
                      {event.description}
                    </p>
                  </article>
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell id="vision" className="bg-white/50">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SectionReveal>
              <SectionHeading
                eyebrow="Our Vision"
                title="To be recognized for developing complete student-athletes and stronger communities."
                description="To become a leading soccer academy recognized for developing well-rounded student-athletes, strengthening communities, and creating clear pathways to higher levels of play and life success."
              />
            </SectionReveal>

            <SectionReveal delay={120}>
              <div className="relative overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-navy-950 via-navy-900 to-aqua-600 p-8 text-white shadow-hero sm:p-10">
                <div className="absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full border border-white/[0.12]" />
                <div className="absolute bottom-[-5rem] left-[-3rem] h-52 w-52 rounded-full border border-gold-300/20" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300/[0.84]">
                    Vision In Motion
                  </p>
                  <div className="mt-8 grid gap-4">
                    {[
                      "Well-rounded student-athletes prepared for what comes next.",
                      "A stronger local ecosystem where families, players, and partners grow together.",
                      "A respected pathway that opens doors to higher levels of play and broader life success."
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur ${
                          index === 1 ? "sm:ml-10" : ""
                        } ${index === 2 ? "sm:ml-20" : ""}`}
                      >
                        <p className="text-sm leading-7 text-white/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </SectionShell>

        <section className="relative px-6 py-10 lg:px-8">
          <SectionReveal className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-navy-950 via-navy-900 to-sun-500 px-8 py-10 text-white shadow-hero sm:px-12 sm:py-14">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%,rgba(255,255,255,0.06)_65%,transparent_100%)] bg-[length:200%_100%] animate-shine" />
              <div className="absolute inset-0 pattern-grid opacity-30" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-300/[0.84]">
                    Our Commitment
                  </p>
                  <h2 className="mt-5 text-4xl text-white sm:text-5xl">
                    Creating opportunity, confidence, and the next generation of leaders.
                  </h2>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.78]">
                    Florida Wave Football Academy is committed to creating
                    opportunities, building confidence, and inspiring the next
                    generation — through soccer, education, and community
                    connection.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/[0.12] bg-white/10 px-6 py-5 backdrop-blur-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">
                    Development Promise
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-white/[0.74]">
                    Every player should feel seen, challenged, and supported in
                    an environment that values both performance and personal
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </section>

        <SectionShell id="contact" className="pb-24 pt-14">
          <SectionReveal>
            <div className="panel relative overflow-hidden px-8 py-10 sm:px-12 sm:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,109,5,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(46,121,234,0.10),transparent_28%),radial-gradient(circle_at_55%_0%,rgba(247,195,63,0.12),transparent_24%)]" />
              <div className="absolute inset-0 pattern-grid-light opacity-50" />

              <div className="relative mx-auto max-w-4xl text-center">
                <span className="eyebrow">Final CTA</span>
                <h2 className="mt-6 text-4xl sm:text-5xl">
                  Join the Next Wave of Leaders and Players
                </h2>
                <p className="mt-6 text-lg leading-8 text-navy-800/[0.76]">
                  Be part of an academy that develops more than athletes — we
                  develop character, confidence, and future leaders.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href="mailto:FloridaWavesINC@gmail.com?subject=FWFA%20Registration%20Interest"
                    className="button-primary"
                  >
                    Register Interest
                  </a>
                  <a
                    href="mailto:FloridaWavesINC@gmail.com"
                    className="button-secondary-light"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}
