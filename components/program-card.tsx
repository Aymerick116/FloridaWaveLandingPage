import { Icon, type IconName } from "@/components/icons";

type ProgramCardProps = {
  title: string;
  description: string;
  icon: IconName;
};

export function ProgramCard({ title, description, icon }: ProgramCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-navy-900/[0.08] bg-white/[0.88] p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-sun-300/70 hover:shadow-glow">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sun-400 via-gold-400 to-aqua-400" />
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-950 text-gold-300 shadow-lg transition duration-300 group-hover:bg-gradient-to-br group-hover:from-navy-900 group-hover:via-aqua-600 group-hover:to-sun-500 group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-sun-500">
        Program
      </p>
      <h3 className="mt-3 text-2xl leading-tight text-navy-950">
        <span className="text-balance">{title}</span>
      </h3>
      <p className="mt-4 text-base leading-7 text-navy-800/[0.76]">{description}</p>
    </article>
  );
}
