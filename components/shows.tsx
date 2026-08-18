import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const shows = [
  {
    name: "Best of Enemies",
    day: "Every Friday",
    desc: "Rival fans, one table, zero filter. The most heated debate on the internet lands every Friday.",
    image: "/images/show-studio.png",
  },
  {
    name: "Live Call-In",
    day: "Live Weekly",
    desc: "The phones are open. Your takes, on air, unedited — call in and take on the panel.",
    image: "/images/hero-stadium.png",
  },
  {
    name: "Weekend Round-Up",
    day: "Every Monday",
    desc: "Every goal, every talking point, every meltdown — the weekend served up hot on Monday.",
    image: "/images/pitch-ball.png",
  },
  {
    name: "Weekend Preview",
    day: "Every Thursday",
    desc: "Get ahead of the action. Tactical breakdowns, bold predictions, and the biggest weekend talking points.",
    image: "/images/show-studio.png",
  },
]

export function Shows() {
  return (
    <section id="shows" className="scroll-mt-20 border-y border-border bg-card/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Your weekly lineup" title="The Shows" className="mb-10" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shows.map((show) => (
            <a
              key={show.name}
              href="https://www.youtube.com/@DRSports"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-xl border border-border p-5"
            >
              <img
                src={show.image || "/placeholder.svg"}
                alt=""
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/20" />
              <div className="relative">
                <span className="inline-block rounded bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  {show.day}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight tracking-tight text-foreground">
                  {show.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{show.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Watch now <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
