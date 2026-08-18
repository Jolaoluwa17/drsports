"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { socials } from "@/components/social-icons"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "The Latest", href: "/#latest" },
  { label: "Shows", href: "/#shows" },
  { label: "Debate", href: "/#debate" },
  { label: "Fixtures", href: "/#fixtures" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/#shop" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2" aria-label="DR Sports home">
          <Image src="/logo.png" alt="DR Sports" width={120} height={40} className="h-10 w-auto" priority />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 md:flex">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex size-8 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
          <a
            href="https://www.youtube.com/@DRSports?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Subscribe
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 lg:hidden",
          open ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@DRSports?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground"
          >
            Subscribe on YouTube
          </a>
        </nav>
      </div>
    </header>
  )
}
