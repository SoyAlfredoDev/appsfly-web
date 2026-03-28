import { LucideIcon } from "lucide-react";
import clsx from "clsx";

type IconProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  tone?: "default" | "primary" | "accent" | "muted" | "white";
  className?: string;
};

export function Icon({
  icon: IconComponent,
  size = "md",
  tone = "default",
  className,
}: IconProps) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const tones = {
    default: "text-text-primary",
    primary: "text-primary",
    accent: "text-accent",
    muted: "text-text-muted",
    white: "text-text-on-dark",
  };

  return (
    <IconComponent
      aria-hidden="true"
      className={clsx(sizes[size], tones[tone], className)}
    />
  );
}
