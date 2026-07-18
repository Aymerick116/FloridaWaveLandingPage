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
      className={`relative inline-block aspect-[2/3] shrink-0 overflow-hidden [clip-path:polygon(9%_4%,50%_0.8%,91%_4%,98%_68%,50%_100%,2%_68%)] ${className}`}
    >
      <Image
        src="/fwfa-club-logo.jpg"
        alt="Florida Wave Football Academy club crest"
        fill
        sizes="(max-width: 768px) 120px, 220px"
        priority={priority}
        className={`object-cover object-center ${imageClassName}`}
      />
    </span>
  );
}
