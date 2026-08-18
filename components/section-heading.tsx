import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string
  title: string
  className?: string
}) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {eyebrow ? (
        <span className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
      ) : null}
      <div className="flex w-full items-center justify-center gap-4">
        <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-border sm:block" />
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-border sm:block" />
      </div>
    </div>
  )
}
