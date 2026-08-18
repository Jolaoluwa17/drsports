import { SectionHeading } from "@/components/section-heading"
import Image from "next/image"

const shows = [
  {
    title: "Weekend Preview and Weekend Round Up Shows",
    panelists: [
      { name: "Abbi Summers", role: "The Spurs Voice", club: "Tottenham", image: "/images/Abbi.jpg" },
      { name: "Robbie", role: "Host & Chief Agitator", club: "Arsenal", image: "/images/Robbie.jpg" },
      { name: "Flex", role: "Resident Wind-Up Merchant", club: "Man United", image: "/images/Flex.jpg" },
      { name: "MAH", role: "Tactics & Cold Takes", club: "Chelsea", image: "/images/Matisse.jpg" },
      { name: "AGT", role: "Call-In Ringmaster", club: "Liverpool", image: "/images/AGT.jpg" },
    ]
  },
  {
    title: "Best of Enemies",
    panelists: [
      { name: "KG", role: "The United Voice", club: "Man United", image: "/images/KG.jpg" },
      { name: "Robbie", role: "Host & Chief Agitator", club: "Arsenal", image: "/images/Robbie.jpg" },
      { name: "Expressions", role: "Spurs Fanatic", club: "Tottenham", image: "/images/Expressions.jpg" },
    ]
  },
  {
    title: "FCM",
    panelists: [
      { name: "Panelist 1", role: "Host", club: "", image: "" },
      { name: "Panelist 2", role: "Guest", club: "", image: "" },
      { name: "Panelist 3", role: "Guest", club: "", image: "" },
    ]
  }
]

export function Voices() {
  return (
    <section id="voices" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="The panel" title="The Voices" className="mb-10" />
      
      <div className="space-y-16">
        {shows.map((show) => (
          <div key={show.title}>
            <h3 className="mb-6 text-center font-display text-2xl font-bold uppercase tracking-tight text-foreground border-b border-border pb-2">
              {show.title}
            </h3>
            {show.panelists.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4">
                {show.panelists.map((v) => (
                  <div
                    key={v.name}
                    className="group flex w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.8rem)] flex-col items-center rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/60"
                  >
                    <div className="relative size-20 overflow-hidden rounded-full border-2 border-primary/20 bg-muted transition-transform group-hover:scale-105 group-hover:border-primary flex items-center justify-center">
                      {v.image ? (
                        <Image src={v.image} alt={v.name} fill className="object-cover" />
                      ) : (
                        <span className="font-display font-bold text-muted-foreground">?</span>
                      )}
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold uppercase tracking-tight text-foreground">
                      {v.name}
                    </h3>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground text-pretty">{v.role}</p>
                    {v.club && (
                      <span className="mt-2 rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                        {v.club}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No panelists added yet.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
