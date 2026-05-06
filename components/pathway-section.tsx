import { pathwaySteps } from "@/lib/fwfa-data";

export function PathwaySection() {
  return (
    <div className="relative mt-14">
      <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-gold-400 via-white/60 to-transparent md:hidden" />
      <div className="absolute left-8 right-8 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-gold-400/20 via-aqua-300/90 to-gold-400/20 md:block" />

      <div className="grid gap-7 md:grid-cols-5">
        {pathwaySteps.map((step, index) => (
          <article
            key={step.title}
            className="group relative pl-10 md:pl-0"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="absolute left-0 top-8 flex h-4 w-4 items-center justify-center rounded-full bg-gold-400 shadow-[0_0_0_10px_rgba(247,195,63,0.14)] md:left-1/2 md:-translate-x-1/2" />
            <div className="relative h-full rounded-[2rem] border border-white/[0.12] bg-white/10 p-6 backdrop-blur-xl transition duration-300 group-hover:-translate-y-1.5 group-hover:border-gold-300/60 group-hover:bg-white/[0.14]">
              <div className="inline-flex rounded-full border border-white/[0.14] bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
                Step {index + 1}
              </div>
              <h3 className="mt-5 text-2xl text-white">
                <span className="text-balance">{step.title}</span>
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/[0.72]">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
