"use client"

import { useState } from "react"
import { Bell, ShoppingBag, Send } from "lucide-react"
import { YouTubeIcon } from "@/components/social-icons"

export function Community() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  return (
    <>
      <section id="community" className="scroll-mt-20 border-t border-border">
        <div className="relative overflow-hidden">
          <img src="/images/fans-crowd.png" alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground text-balance sm:text-5xl">
                  Join the loudest room in <span className="text-primary">football</span>
                </h2>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
                  Never miss a debate. Get the drop on new episodes, live call-ins and matchday specials
                  straight to your inbox — plus a shout-out on the show.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (email.trim()) setDone(true)
                  }}
                  className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    aria-label="Your email"
                    className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
                  >
                    {done ? "You're in!" : "Sign up"}
                    <Send className="size-4" />
                  </button>
                </form>
                {done ? (
                  <p className="mt-3 text-sm font-semibold text-primary">
                    Welcome to the family — check your inbox.
                  </p>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="https://www.youtube.com/@DRSports?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
                >
                  <YouTubeIcon className="size-8 text-primary" />
                  <div className="mt-8">
                    <p className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
                      Subscribe
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">Hit the bell for every upload & live show.</p>
                  </div>
                </a>
                <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6">
                  <Bell className="size-8 text-primary" />
                  <div className="mt-8">
                    <p className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
                      Call In Live
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">Get your take on air during the live shows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="scroll-mt-20 border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <ShoppingBag className="size-10 text-primary" />
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
            DR Sports Shop
          </h2>
          <p className="max-w-md text-muted-foreground">
            Reppin' the movement — tees, hoodies and matchday merch. Dropping soon. Be first to know.
          </p>
          <span className="rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-primary">
            Coming Soon
          </span>
        </div>
      </section>
    </>
  )
}
