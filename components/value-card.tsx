import { Icon, type IconName } from "@/components/icons";

type ValueCardProps = {
  title: string;
  description: string;
  icon: IconName;
};

export function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <article className="group rounded-[2rem] border border-navy-900/[0.08] bg-white/[0.86] p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-sun-300/60 hover:shadow-glow">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300/30 to-white text-sun-500 shadow-md transition duration-300 group-hover:from-navy-900 group-hover:to-sun-500 group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-2xl text-navy-950">{title}</h3>
      <p className="mt-4 text-base leading-7 text-navy-800/[0.76]">{description}</p>
    </article>
  );
}
