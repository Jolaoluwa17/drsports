import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { LatestVideos } from "@/components/latest-videos"
import { Shows } from "@/components/shows"
import { DebatePoll } from "@/components/debate-poll"
import { Fixtures } from "@/components/fixtures"
import { Voices } from "@/components/voices"
import { Community } from "@/components/community"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <LatestVideos />
        <Shows />
        <DebatePoll />
        <Fixtures />
        <Voices />
        <Community />
      </main>
      <SiteFooter />
    </div>
  )
}
