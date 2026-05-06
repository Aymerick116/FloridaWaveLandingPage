import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  divider?: boolean;
  children: ReactNode;
};

export function SectionShell({
  id,
  className = "",
  containerClassName = "",
  divider = true,
  children
}: SectionShellProps) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      {divider ? <div className="section-divider" /> : null}
      <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
