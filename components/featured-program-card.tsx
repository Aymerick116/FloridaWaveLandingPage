import { Icon, type IconName } from "@/components/icons";

type FeaturedProgramCardProps = {
  title: string;
  description: string;
  icon: IconName;
  badge?: string;
  subtitle?: string;
  highlights?: string[];
};

export function FeaturedProgramCard({
  title,
  description,
  icon,
  badge,
  subtitle,
  highlights = []
}: FeaturedProgramCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2.4rem] border border-gold-400/35 bg-white/[0.92] p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-10">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sun-500 via-gold-400 via-[55%] to-aqua-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,109,5,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(46,121,234,0.10),transparent_26%)]" />

      <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-950 text-gold-300 shadow-lg transition duration-300 group-hover:bg-gradient-to-br group-hover:from-navy-900 group-hover:via-aqua-600 group-hover:to-sun-500 group-hover:text-white">
            <Icon name={icon} className="h-7 w-7" />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sun-500">
              Program Spotlight
            </p>
            {badge ? (
              <span className="rounded-full border border-gold-400/35 bg-gold-300/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-500">
                {badge}
              </span>
            ) : null}
          </div>

          <h3 className="mt-4 text-3xl leading-tight text-navy-950 sm:text-[2.15rem]">
            <span className="text-balance">{title}</span>
          </h3>

          {subtitle ? (
            <p className="mt-4 max-w-2xl text-xl font-semibold leading-8 text-navy-900">
              <span className="text-balance">{subtitle}</span>
            </p>
          ) : null}

          <p className="mt-5 max-w-2xl text-base leading-8 text-navy-800/[0.76]">
            {description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-[1.2rem] border border-navy-900/[0.08] bg-white/80 px-4 py-4 text-sm leading-6 text-navy-900/80"
            >
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
