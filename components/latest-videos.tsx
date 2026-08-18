import { Play, Eye, Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

type Video = {
  title: string
  show: string
  duration: string
  views: string
  posted: string
  image: string
  featured?: boolean
}

const videos: Video[] = [
  {
    title: "Odegaard INJURED! Spurs Favourites Over Arsenal? North London Derby Preview!",
    show: "Live Call-In",
    duration: "1:42:10",
    views: "312K",
    posted: "2 days ago",
    image: "/images/show-studio.png",
    featured: true,
  },
  {
    title: "Flex Gets COOKED! North London Derby Heating Up!",
    show: "Weekend Round-Up",
    duration: "38:22",
    views: "128K",
    posted: "4 days ago",
    image: "/images/fans-crowd.png",
  },
  {
    title: "Best of Enemies: Title Race Verdict — Who's Actually Winning It?",
    show: "Best of Enemies",
    duration: "52:07",
    views: "204K",
    posted: "6 days ago",
    image: "/images/pitch-ball.png",
  },
  {
    title: "Football Culture Movement: The Sunday Debate Gets HEATED",
    show: "Football Culture Movement",
    duration: "1:11:45",
    views: "97K",
    posted: "1 week ago",
    image: "/images/hero-stadium.png",
  },
]

function VideoCard({ video, featured }: { video: Video; featured?: boolean }) {
  return (
    <a
      href="https://www.youtube.com/@DRSports"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/60"
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-video" : "aspect-video"}`}>
        <img
          src={video.image || "/placeholder.svg"}
          alt=""
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
          {video.show}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded bg-black/75 px-1.5 py-0.5 text-xs font-semibold text-white">
          <Clock className="size-3" />
          {video.duration}
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="size-6 fill-current" />
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3
          className={`font-display font-semibold uppercase leading-tight tracking-tight text-foreground text-pretty ${
            featured ? "text-xl sm:text-2xl" : "text-base"
          }`}
        >
          {video.title}
        </h3>
        <div className="mt-auto flex items-center gap-4 pt-3 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="size-3.5" />
            {video.views} views
          </span>
          <span>{video.posted}</span>
        </div>
      </div>
    </a>
  )
}

export function LatestVideos() {
  const [featured, ...rest] = videos
  return (
    <section id="latest" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Fresh from the channel" title="The Latest" className="mb-10" />
      <div className="grid gap-6 lg:grid-cols-2">
        <VideoCard video={featured} featured />
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((v) => (
            <VideoCard key={v.title} video={v} />
          ))}
        </div>
      </div>
    </section>
  )
}
