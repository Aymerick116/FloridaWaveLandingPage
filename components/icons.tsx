import type { ComponentPropsWithoutRef } from "react";

export type IconName =
  | "wave"
  | "book"
  | "field"
  | "trophy"
  | "bolt"
  | "community"
  | "shield"
  | "growth"
  | "school"
  | "spark"
  | "target"
  | "route"
  | "mail"
  | "map-pin"
  | "arrow-right";

type IconProps = ComponentPropsWithoutRef<"svg"> & {
  name: IconName;
};

const iconStyles = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8
};

export function Icon({ name, className, ...props }: IconProps) {
  switch (name) {
    case "wave":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path {...iconStyles} d="M3 14c2.2 0 2.8-4 5-4s2.8 4 5 4 2.8-4 5-4 2.8 4 5 4" />
          <path {...iconStyles} d="M3 19c2.2 0 2.8-4 5-4s2.8 4 5 4 2.8-4 5-4 2.8 4 5 4" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <path {...iconStyles} d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5z" />
          <path {...iconStyles} d="M5 5.5V21.5" />
          <path {...iconStyles} d="M9 7h6" />
          <path {...iconStyles} d="M9 11h6" />
        </svg>
      );
    case "field":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <rect {...iconStyles} x="3" y="5" width="18" height="14" rx="2" />
          <path {...iconStyles} d="M12 5v14" />
          <circle {...iconStyles} cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <path {...iconStyles} d="M8 4h8v3a4 4 0 0 1-8 0z" />
          <path {...iconStyles} d="M8 5H5a2 2 0 0 0 2 3h1" />
          <path {...iconStyles} d="M16 5h3a2 2 0 0 1-2 3h-1" />
          <path {...iconStyles} d="M12 11v4" />
          <path {...iconStyles} d="M9 19h6" />
          <path {...iconStyles} d="M10 15h4l1 4H9z" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <path {...iconStyles} d="M13 2 5 13h5l-1 9 8-11h-5l1-9z" />
        </svg>
      );
    case "community":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <circle {...iconStyles} cx="8" cy="9" r="2.5" />
          <circle {...iconStyles} cx="16" cy="8" r="2.5" />
          <circle {...iconStyles} cx="13" cy="15" r="2.5" />
          <path {...iconStyles} d="M4.5 18a3.5 3.5 0 0 1 7 0" />
          <path {...iconStyles} d="M12.5 18a3.5 3.5 0 0 1 7 0" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <path {...iconStyles} d="M12 3 5 6v5c0 4.4 2.8 8.3 7 9.7 4.2-1.4 7-5.3 7-9.7V6z" />
          <path {...iconStyles} d="m9.5 11.5 1.7 1.7 3.6-3.9" />
        </svg>
      );
    case "growth":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <path {...iconStyles} d="M5 19V10" />
          <path {...iconStyles} d="M10 19V6" />
          <path {...iconStyles} d="M15 19v-4" />
          <path {...iconStyles} d="M19 5v14" />
          <path {...iconStyles} d="m7 8 4-4 3 3 5-5" />
        </svg>
      );
    case "school":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <path {...iconStyles} d="m3 9 9-5 9 5-9 5z" />
          <path {...iconStyles} d="M7 11v5.5a8 8 0 0 0 10 0V11" />
          <path {...iconStyles} d="M21 10v5" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <path {...iconStyles} d="M12 3v4" />
          <path {...iconStyles} d="M12 17v4" />
          <path {...iconStyles} d="M3 12h4" />
          <path {...iconStyles} d="M17 12h4" />
          <path {...iconStyles} d="m5.6 5.6 2.8 2.8" />
          <path {...iconStyles} d="m15.6 15.6 2.8 2.8" />
          <path {...iconStyles} d="m18.4 5.6-2.8 2.8" />
          <path {...iconStyles} d="m8.4 15.6-2.8 2.8" />
          <circle {...iconStyles} cx="12" cy="12" r="3.5" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <circle {...iconStyles} cx="12" cy="12" r="8" />
          <circle {...iconStyles} cx="12" cy="12" r="4.5" />
          <circle {...iconStyles} cx="12" cy="12" r="1.2" />
        </svg>
      );
    case "route":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <circle {...iconStyles} cx="6" cy="18" r="2" />
          <circle {...iconStyles} cx="18" cy="6" r="2" />
          <path
            {...iconStyles}
            d="M8 18h2a4 4 0 0 0 4-4V10a4 4 0 0 1 4-4h0"
          />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <rect {...iconStyles} x="3" y="5" width="18" height="14" rx="2" />
          <path {...iconStyles} d="m4 7 8 6 8-6" />
        </svg>
      );
    case "map-pin":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <path
            {...iconStyles}
            d="M12 20s6-5.5 6-10.2A6 6 0 1 0 6 9.8C6 14.5 12 20 12 20Z"
          />
          <circle {...iconStyles} cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
          <path {...iconStyles} d="M5 12h14" />
          <path {...iconStyles} d="m13 6 6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}
