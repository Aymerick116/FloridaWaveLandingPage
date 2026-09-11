import Image from "next/image";
import Link from "next/link";
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

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
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
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sun-400/[0.28] via-transparent to-aqua-400/[0.2] blur-3xl" />
              <div className="panel-dark relative overflow-hidden p-4 sm:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(247,195,63,0.18),transparent_26%),radial-gradient(circle_at_center,rgba(46,121,234,0.16),transparent_34%)]" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-950 shadow-hero">
                  <Image
                    src="/girls-academy-signature-program.png"
                    alt="Florida Wave Girls Performance Academy flyer with training formats, development focus, and contact information."
                    width={1024}
                    height={1536}
                    className="h-auto w-full"
                    priority
                  />
                </div>
                <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.08] px-5 py-4 text-sm text-white/[0.76] backdrop-blur">
                    Signature girls player development division for serious
                    athletes.
                  </div>
                  <div className="rounded-[1.4rem] border border-gold-300/25 bg-sun-400/10 px-5 py-4 text-sm text-gold-300 backdrop-blur">
                    Individual, semi-private, small-group, and IDP training.
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
                description="Florida Wave Football Academy is a community-driven youth soccer organization serving Pompano Beach, Deerfield Beach, and surrounding areas. We are more than a club; we are a development platform focused on shaping well-rounded athletes, strong students, and confident leaders."
              />
            </SectionReveal>

            <SectionReveal delay={140}>
              <div className="panel relative overflow-hidden p-8 sm:p-10">
                <div className="absolute inset-0 pattern-grid-light opacity-60" />
                <div className="relative">
                  <span className="eyebrow">Academy Snapshot</span>
                  <h3 className="mt-6 max-w-xl text-3xl text-navy-950">
                    Serving youth with structure, mentorship, and a clear sense
                    of belonging.
                  </h3>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {aboutHighlights.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[1.5rem] border border-navy-900/[0.08] bg-white/[0.84] p-5 shadow-md"
                      >
                        <h4 className="text-xl">{item.title}</h4>
                        <p className="mt-3 text-sm leading-7 text-navy-800/[0.74]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </SectionShell>

        <SectionShell className="overflow-hidden bg-navy-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,109,5,0.18),transparent_26%),radial-gradient(circle_at_70%_20%,rgba(247,195,63,0.14),transparent_24%)]" />
          <div className="absolute inset-0 pattern-grid opacity-35" />
          <div className="relative">
            <SectionReveal>
              <SectionHeading
                eyebrow="Our Mission"
                title="Soccer as a platform for social change, growth, and life opportunity."
                description="Florida Wave Football Academy uses soccer as a tool for social change, empowering youth to build character, teamwork, and leadership while promoting educational achievement, health and wellness, and personal development."
                align="center"
                tone="light"
              />
            </SectionReveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                ["On The Field", "Technical learning, team habits, discipline, and competitive confidence."],
                ["Beyond The Field", "Academic support, wellness, leadership development, and mentorship."],
                ["For The Community", "An inclusive environment that connects youth, families, and local partners."]
              ].map(([title, description]) => (
                <SectionReveal key={title}>
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-7 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
                      Mission Pillar
                    </p>
                    <h3 className="mt-4 text-2xl text-white">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/[0.72]">
                      {description}
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
                description="FWFA works with High 5 Consultants, LLC to reinforce mental health support, mentorship, and academic support so player development stays connected to family wellness and long-term growth."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {supportPartnerPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-[1.6rem] border border-navy-900/[0.08] bg-white/[0.88] p-5 shadow-soft"
                  >
                    <Icon name={pillar.icon} className="h-6 w-6 text-sun-500" />
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
              <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="overflow-hidden rounded-[2rem] border border-navy-900/[0.08] bg-white shadow-soft">
                  <Image
                    src="/fwfa-upcoming-camp-flyer.png"
                    alt="Florida Wave Training Academy Summer 2026 clinics flyer."
                    width={2048}
                    height={1250}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="rounded-[2rem] border border-navy-900/[0.08] bg-white/[0.84] p-7 shadow-soft backdrop-blur">
                  <span className="eyebrow">Upcoming Camp Spotlight</span>
                  <h3 className="mt-6 text-3xl text-navy-950 sm:text-4xl">
                    Summer 2026 Clinics are the current lead event in our camps calendar.
                  </h3>
                  <p className="mt-5 text-base leading-8 text-navy-800/[0.76]">
                    Families can immediately see the next active opportunity,
                    including dates, age group, locations, and registration details.
                  </p>
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

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {camps.map((camp) => (
              <SectionReveal key={camp.title} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-navy-900/[0.08] bg-white/[0.9] p-7 shadow-soft">
                  <Icon name={camp.icon} className="h-6 w-6 text-sun-500" />
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-sun-500">
                    {camp.tag}
                  </p>
                  <h3 className="mt-4 text-2xl leading-tight text-navy-950">
                    {camp.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-navy-800/[0.76]">
                    {camp.description}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="pathway" className="overflow-hidden bg-navy-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(242,109,5,0.18),transparent_24%),linear-gradient(135deg,#06133b_0%,#0b1f63_52%,#1c56bf_100%)]" />
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
            {coreValues.map((value) => (
              <SectionReveal key={value.title}>
                <ValueCard {...value} />
              </SectionReveal>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="events" className="overflow-hidden bg-navy-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,109,5,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(46,121,234,0.16),transparent_28%)]" />
          <div className="absolute inset-0 pattern-grid opacity-35" />
          <div className="relative">
            <SectionReveal>
              <SectionHeading
                eyebrow="Events"
                title="Signature moments that bring players, families, and community together."
                description="FWFA events celebrate competition, connection, and the culture we are building around the academy."
                align="center"
                tone="light"
              />
            </SectionReveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {events.map((event) => (
                <SectionReveal key={event.title} className="h-full">
                  <article className="relative flex h-full flex-col overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.08] p-8 backdrop-blur-xl">
                    <div className="flex items-start justify-between gap-4">
                      <Icon name={event.icon} className="h-7 w-7 text-gold-300" />
                      <span className="rounded-full border border-gold-300/25 bg-sun-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
                        {event.month}
                      </span>
                    </div>
                    <h3 className="mt-6 text-3xl text-white">{event.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-white/[0.74]">
                      {event.description}
                    </p>
                  </article>
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell id="vision" className="bg-white/50">
          <SectionReveal>
            <SectionHeading
              eyebrow="Our Vision"
              title="To be recognized for developing complete student-athletes and stronger communities."
              description="To become a leading soccer academy recognized for developing well-rounded student-athletes, strengthening communities, and creating clear pathways to higher levels of play and life success."
              align="center"
            />
          </SectionReveal>
        </SectionShell>

        <SectionShell id="contact" className="bg-navy-950 text-white">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SectionReveal>
              <SectionHeading
                eyebrow="Contact"
                title="Ready to connect with Florida Wave Football Academy?"
                description="Reach out to ask about programs, camps, events, partnership opportunities, or the Girls Performance Academy."
                tone="light"
              />
            </SectionReveal>
            <SectionReveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:FloridaWavesINC@gmail.com"
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.08] p-6 text-white backdrop-blur"
                >
                  <Icon name="mail" className="h-6 w-6 text-gold-300" />
                  <p className="mt-4 text-sm uppercase tracking-[0.24em] text-gold-300">
                    Email
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    FloridaWavesINC@gmail.com
                  </p>
                </a>
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.08] p-6 text-white backdrop-blur">
                  <Icon name="map-pin" className="h-6 w-6 text-gold-300" />
                  <p className="mt-4 text-sm uppercase tracking-[0.24em] text-gold-300">
                    Serving
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Pompano Beach, Deerfield Beach, and South Florida
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}
