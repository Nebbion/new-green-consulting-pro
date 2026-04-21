import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}

export const Reveal = ({ children, className, delay = 0, as: Tag = "div" }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const style: CSSProperties = {
    transitionDelay: visible ? `${delay}ms` : "0ms",
  };
  return (
    <Tag
      ref={ref as never}
      style={style}
      className={cn(
        "transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      {children}
    </Tag>
  );
};
