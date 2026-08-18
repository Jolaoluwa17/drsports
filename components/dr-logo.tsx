import { cn } from "@/lib/utils"

export function DrLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex flex-col items-center leading-none font-display font-bold select-none", className)}
      aria-label="DR Sports"
    >
      <span className="flex items-baseline text-[1.9em] tracking-tighter">
        <span className="text-primary">D</span>
        <span className="text-foreground">R</span>
      </span>
      <span className="mt-[0.05em] h-[0.09em] w-full bg-primary" />
      <span className="text-[0.62em] tracking-[0.18em] text-foreground">SPORTS</span>
    </span>
  )
}
