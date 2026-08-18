import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutContent } from "@/components/about-content"
import { Voices } from "@/components/voices"

export const metadata: Metadata = {
  title: "About | DR Sports — The Home of Football Banter & Fan Debate",
  description:
    "DR Sports is a fan-run football channel built on banter, hot takes and real debate. Meet the panel, learn our story and find out what makes the loudest room in football tick.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AboutContent />
        <Voices />
      </main>
      <SiteFooter />
    </div>
  )
}
