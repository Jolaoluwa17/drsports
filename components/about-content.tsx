import Image from "next/image"
import { Mic, Flame, Users, Radio, Trophy, Globe } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const stats = [
  { value: "500K+", label: "Subscribers" },
  { value: "1,200+", label: "Episodes" },
  { value: "80M+", label: "Views" },
  { value: "6", label: "Weekly Shows" },
]

const values = [
  {
    icon: Flame,
    title: "No Filter, No Fence-Sitting",
    body: "Every take is real. We say what fans in the pub actually think — loud, honest and unapologetic.",
  },
  {
    icon: Users,
    title: "Fans At The Centre",
    body: "This isn't pundits talking down to you. It's supporters like you running the conversation, live.",
  },
  {
    icon: Globe,
    title: "Every Club, Every Corner",
    body: "Your club, my club, the leagues abroad and the international stage — all of it gets its moment.",
  },
  {
    icon: Radio,
    title: "Always Live",
    body: "Call-ins, watch-alongs and instant reaction. When the football happens, we're already talking.",
  },
]

const timeline = [
  { year: "2019", title: "The Living Room Days", body: "Two mates, one camera and endless arguments about the weekend's football." },
  { year: "2021", title: "The Panel Grows", body: "New voices, new clubs, new rivalries. The banter got louder and the audience got bigger." },
  { year: "2023", title: "Live Call-Ins Launch", body: "Fans got the mic. Every week the phones light up with hot takes from across the country." },
  { year: "Today", title: "A Fan Movement", body: "Part of the Global Fan Network — one of the loudest football fan communities online." },
]

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/images/show-studio.png"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Mic className="size-3.5" /> About DR Sports
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Where the fans <span className="text-primary">run the football</span> conversation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            DR Sports is the home of football banter, hot takes and real fan debate. No corporate polish, no scripted
            opinions — just supporters going head to head over the game we all love.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-10 text-center">
              <span className="font-display text-4xl font-bold text-primary sm:text-5xl">{s.value}</span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our story</span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance">
              It started with an argument
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                DR Sports began the way most great football debates do — two mates who couldn&apos;t agree on
                anything. Who&apos;s the GOAT, who bottled the title, whose club is really &quot;in crisis.&quot; We hit
                record, and it turned out thousands of you were having the exact same rows.
              </p>
              <p>
                Fast forward and we&apos;re a full-blown fan movement: a rowdy panel of supporters from rival clubs,
                weekly shows, live call-ins and a community that treats every matchday like a cup final. We bring the
                Premier League, the leagues abroad and the international stage into one loud room.
              </p>
              <p className="font-semibold text-foreground">
                Your club, my club — one loud room. That&apos;s the whole idea.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image src="/images/fans-crowd.png" alt="DR Sports fans celebrating in the stands" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-card/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What we stand for" title="The DR Sports Code" className="mb-12" />
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <v.icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="The journey" title="From Sofa To Stadium" className="mb-12" />
        <div className="grid gap-4 md:grid-cols-4">
          {timeline.map((t, i) => (
            <div key={t.year} className="relative rounded-xl border border-border bg-card p-6">
              <span className="font-display text-5xl font-bold text-primary/25">0{i + 1}</span>
              <span className="mt-2 block text-xs font-bold uppercase tracking-widest text-primary">{t.year}</span>
              <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-foreground">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0">
          <Image src="/images/hero-stadium.png" alt="" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/70" />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <Trophy className="size-10 text-primary" />
          <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
            Pull up a chair. Pick a side.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Subscribe, jump into the debates and call in when your club&apos;s on the line. The room&apos;s always loud
            and there&apos;s always a seat for one more voice.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.youtube.com/@DRSports?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Subscribe on YouTube
            </a>
            <a
              href="/#debate"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary"
            >
              Join The Debate
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
