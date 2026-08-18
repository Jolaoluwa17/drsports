import Image from "next/image"
import { socials } from "@/components/social-icons"

const columns = [
  {
    title: "Watch",
    links: [
      { label: "The Latest", href: "/#latest" },
      { label: "The Shows", href: "/#shows" },
      { label: "This Weekend", href: "/#fixtures" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Debate of the Week", href: "/#debate" },
      { label: "The Voices", href: "/#voices" },
      { label: "Community", href: "/#community" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "About", href: "/about" },
      { label: "Shop", href: "/#shop" },
      { label: "GFN Code of Conduct", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image src="/logo.png" alt="DR Sports" width={120} height={40} className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The home of football banter, hot takes and real fan debate. Your club, my club — one loud room.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DR Sports by RLTV Media Limited — Part of{" "}
            <span className="font-semibold text-foreground">Global Fan Network</span>
          </p>
          <div className="flex items-center gap-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-primary">Cookies</a>
            <a href="#" className="hover:text-primary">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
