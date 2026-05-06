type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark"
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const headingColor = tone === "light" ? "text-white" : "text-navy-950";
  const descriptionColor =
    tone === "light" ? "text-white/[0.74]" : "text-navy-800/75";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <div className={isCentered ? "flex justify-center" : ""}>
          <span className="eyebrow">{eyebrow}</span>
        </div>
      ) : null}
      <h2 className={`mt-5 text-4xl leading-none sm:text-5xl ${headingColor}`}>
        <span className="text-balance">{title}</span>
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-8 ${descriptionColor}`}>
          <span className="text-balance">{description}</span>
        </p>
      ) : null}
    </div>
  );
}
