import { Icon, type IconName } from "@/components/icons";

type ProgramCardProps = {
  title: string;
  description: string;
  icon: IconName;
  badge?: string;
  subtitle?: string;
};

export function ProgramCard({
  title,
  description,
  icon,
  badge,
  subtitle
}: ProgramCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-navy-900/[0.08] bg-white/[0.88] p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-sun-300/70 hover:shadow-glow">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sun-400 via-gold-400 to-aqua-400" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-950 text-gold-300 shadow-lg transition duration-300 group-hover:bg-gradient-to-br group-hover:from-navy-900 group-hover:via-aqua-600 group-hover:to-sun-500 group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <div className="relative mt-6 flex flex-wrap items-center gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sun-500">
          Program
        </p>
        {badge ? (
          <span className="rounded-full border border-gold-400/35 bg-gold-300/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-500">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="relative mt-3 text-2xl leading-tight text-navy-950">
        <span className="text-balance">{title}</span>
      </h3>
      {subtitle ? (
        <p className="relative mt-3 text-lg font-semibold leading-7 text-navy-900">
          <span className="text-balance">{subtitle}</span>
        </p>
      ) : null}
      <p className="relative mt-4 text-base leading-7 text-navy-800/[0.76]">
        {description}
      </p>
    </article>
  );
}
