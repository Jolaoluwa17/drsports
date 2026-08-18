"use client"

import { useMemo, useState } from "react"
import { Flame, Check, MessageSquareText } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

type Option = {
  id: string
  label: string
  base: number
}

const options: Option[] = [
  { id: "arsenal", label: "Arsenal", base: 4120 },
  { id: "spurs", label: "Spurs", base: 3890 },
  { id: "draw", label: "Honestly? A draw", base: 1740 },
]

const hotTakes = [
  { user: "@GoonerGav", take: "Odegaard out and we STILL win it. Squad's deeper than people think." },
  { user: "@COYS_Danny", take: "Spurs have been waiting all season for this one. North London is ours." },
  { user: "@NeutralNaomi", take: "Both defences are shaky — this ends 3-3 and we all lose our minds." },
]

export function DebatePoll() {
  const [voted, setVoted] = useState<string | null>(null)

  const totals = useMemo(() => {
    const withVote = options.map((o) => ({
      ...o,
      count: o.base + (voted === o.id ? 1 : 0),
    }))
    const sum = withVote.reduce((acc, o) => acc + o.count, 0)
    return withVote.map((o) => ({ ...o, pct: Math.round((o.count / sum) * 100) }))
  }, [voted])

  return (
    <section id="debate" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Have your say" title="Debate of the Week" className="mb-10" />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Flame className="size-4" />
              North London Derby
            </div>
            <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-foreground text-balance sm:text-3xl">
              Who's winning the North London Derby this weekend?
            </h3>

            <div className="mt-6 space-y-3">
              {totals.map((o) => {
                const isChoice = voted === o.id
                return (
                  <button
                    key={o.id}
                    type="button"
                    disabled={voted !== null}
                    onClick={() => setVoted(o.id)}
                    className={`relative w-full overflow-hidden rounded-lg border text-left transition-colors ${
                      isChoice ? "border-primary" : "border-border"
                    } ${voted === null ? "hover:border-primary/60 cursor-pointer" : "cursor-default"}`}
                  >
                    {voted !== null ? (
                      <span
                        className={`absolute inset-y-0 left-0 ${isChoice ? "bg-primary/25" : "bg-muted"}`}
                        style={{ width: `${o.pct}%` }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="relative flex items-center justify-between px-4 py-3.5">
                      <span className="flex items-center gap-2 font-semibold text-foreground">
                        {isChoice ? <Check className="size-4 text-primary" /> : null}
                        {o.label}
                      </span>
                      {voted !== null ? (
                        <span className="font-display text-lg font-bold text-foreground">{o.pct}%</span>
                      ) : null}
                    </span>
                  </button>
                )
              })}
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              {voted !== null ? (
                <>Thanks for voting — {totals.reduce((a, o) => a + o.count, 0).toLocaleString()} fans have had their say.</>
              ) : (
                <>Tap your pick to vote. Results are live.</>
              )}
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
              <MessageSquareText className="size-4" />
              Fan Hot Takes
            </div>
            <ul className="space-y-4">
              {hotTakes.map((t) => (
                <li key={t.user} className="border-l-2 border-primary/60 pl-4">
                  <p className="text-sm leading-relaxed text-foreground text-pretty">&ldquo;{t.take}&rdquo;</p>
                  <span className="mt-1 block text-xs font-semibold text-primary">{t.user}</span>
                </li>
              ))}
            </ul>
            <a
              href="#community"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 pt-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Add your take
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
