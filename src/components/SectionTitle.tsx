import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
}

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="mt-4 text-3xl md:text-[2.5rem] leading-[1.1] font-medium">
        {title}
      </Tag>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
