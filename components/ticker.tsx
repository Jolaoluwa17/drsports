const items = [
  "North London Derby heating up",
  "Is Arsenal's title window closing?",
  "Best of Enemies — every Friday",
  "Odegaard injury latest",
  "Weekend Round-Up Monday",
  "Who's your GOAT?",
  "Transfer window madness",
  "Live call-in — your takes on air",
]

export function Ticker() {
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-primary py-3 text-primary-foreground">
      <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
            {item}
            <span className="text-primary-foreground/50">/</span>
          </span>
        ))}
      </div>
      <div
        className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8"
        aria-hidden="true"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
            {item}
            <span className="text-primary-foreground/50">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
