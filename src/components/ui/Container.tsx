import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow";
}

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const maxWidth = size === "narrow" ? "max-w-3xl" : "max-w-[1200px]";
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 ${maxWidth} ${className}`}>
      {children}
    </div>
  );
}
