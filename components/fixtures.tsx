import { CalendarDays } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

type Fixture = {
  home: string
  away: string
  comp: string
  day: string
  time: string
  hot: boolean
}

export async function Fixtures() {
  let fixtures: Fixture[] = []

  try {
    const bootstrapRes = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/', { next: { revalidate: 3600 } })
    if (bootstrapRes.ok) {
      const bootstrapData = await bootstrapRes.json()
      
      const currentEvent = bootstrapData.events.find((e: any) => e.is_current) || bootstrapData.events.find((e: any) => e.is_next)
      
      if (currentEvent) {
        const fixturesRes = await fetch(`https://fantasy.premierleague.com/api/fixtures/?event=${currentEvent.id}`, { next: { revalidate: 3600 } })
        if (fixturesRes.ok) {
          const fixturesData = await fixturesRes.json()
          const teamsMap = new Map(bootstrapData.teams.map((t: any) => [t.id, t]))
          const big6 = ['ARS', 'CHE', 'LIV', 'MCI', 'MUN', 'TOT']

          fixtures = fixturesData.map((f: any) => {
            const homeTeam = teamsMap.get(f.team_h)
            const awayTeam = teamsMap.get(f.team_a)
            
            const date = new Date(f.kickoff_time)
            const day = date.toLocaleDateString('en-GB', { weekday: 'short' })
            const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
            
            const isHot = big6.includes(homeTeam.short_name) || big6.includes(awayTeam.short_name)

            return {
              home: homeTeam.name,
              away: awayTeam.name,
              comp: "Premier League",
              day,
              time,
              hot: isHot
            }
          })
        }
      }
    }
  } catch (error) {
    console.error("Error fetching fixtures:", error)
  }

  // Fallback if API fails or no games
  if (fixtures.length === 0) {
    fixtures = [
      { home: "Arsenal", away: "Tottenham", comp: "Premier League", day: "Sun", time: "16:30", hot: true },
      { home: "Man City", away: "Liverpool", comp: "Premier League", day: "Sun", time: "14:00", hot: true },
      { home: "Man United", away: "Chelsea", comp: "Premier League", day: "Sat", time: "17:30", hot: true },
    ]
  }

  return (
    <section id="fixtures" className="scroll-mt-20 border-y border-border bg-card/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="On the radar" title="This Weekend's Big Games" className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fixtures.map((f, i) => (
            <div
              key={`${f.home}-${f.away}-${i}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {f.comp}
                </span>
                {f.hot ? (
                  <span className="rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    Must Watch
                  </span>
                ) : null}
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="flex-1 font-display text-lg font-bold uppercase tracking-tight text-foreground">
                  {f.home}
                </span>
                <span className="rounded-md border border-border px-2.5 py-1 text-xs font-bold uppercase text-muted-foreground">
                  VS
                </span>
                <span className="flex-1 text-right font-display text-lg font-bold uppercase tracking-tight text-foreground">
                  {f.away}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2 border-t border-border pt-3 text-xs font-semibold text-muted-foreground">
                <CalendarDays className="size-3.5 text-primary" />
                {f.day} · {f.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
