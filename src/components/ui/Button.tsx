import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariants =
  | "primary"
  | "outline"
  | "light"
  | "outlineLight";

interface ButtonStyleProps {
  variant?: ButtonVariants;
  size?: "md" | "lg";
  className?: string;
}

interface CommonProps extends ButtonStyleProps {
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

const variants = {
  primary: "bg-primary-700 text-white hover:bg-primary-800",
  outline:
    "border border-primary-700 text-primary-800 hover:bg-primary-700 hover:text-white",
  light: "bg-white text-primary-800 hover:bg-cream",
  outlineLight:
    "border border-white/70 text-white hover:bg-white/10",
};

function classes({ variant = "primary", size = "md", className = "" }: ButtonStyleProps) {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`;
}

type ButtonAsLinkProps = CommonProps & { href: string };

export function ButtonLink({
  href,
  children,
  ...rest
}: ButtonAsLinkProps) {
  return (
    <Link href={href} className={classes(rest)}>
      {children}
    </Link>
  );
}

interface ButtonProps extends CommonProps {
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={classes(rest)}>
      {children}
    </button>
  );
}
