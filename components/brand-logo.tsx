import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrandLogo({
  className = "",
  imageClassName = "",
  priority = false
}: BrandLogoProps) {
  return (
    <span
      className={`relative inline-block aspect-[242/312] shrink-0 overflow-hidden [clip-path:polygon(11%_7%,50%_1.5%,89%_7%,96%_69%,50%_99%,4%_69%)] ${className}`}
    >
      <Image
        src="/fwfa-club-logo.png"
        alt="Florida Wave Football Academy club crest"
        fill
        sizes="(max-width: 768px) 120px, 220px"
        priority={priority}
        className={`object-cover object-center scale-[1.12] translate-y-[1.5%] ${imageClassName}`}
      />
    </span>
  );
}
