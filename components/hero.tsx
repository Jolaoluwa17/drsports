import { Play, Radio } from "lucide-react"

const stats = [
  { value: "250K+", label: "Subscribers" },
  { value: "1.2K", label: "Episodes" },
  { value: "48M", label: "Views" },
  { value: "5", label: "Weekly Shows" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-stadium.png"
          alt=""
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-live-dot rounded-full bg-primary" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Live call-in every week
          </div>

          <h1 className="font-display text-5xl font-bold uppercase leading-[0.92] text-balance sm:text-6xl lg:text-7xl">
            Where the fans run the <span className="text-primary">football</span> conversation
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Banter, hot takes and proper debate — your club, my club and everything in between.
            DR Sports is the loudest room in football, and the mic is open.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#latest"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Play className="size-4 fill-current" />
              Watch the latest
            </a>
            <a
              href="#shows"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <Radio className="size-4" />
              See the shows
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-foreground sm:text-4xl">{s.value}</dd>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
