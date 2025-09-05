import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Share2 } from "lucide-react"
import type { Event } from "@/lib/events-data"

interface EventDetailHeroProps {
  event: Event
  registered: number
  capacity: number
}

export function EventDetailHero({ event, registered, capacity }: EventDetailHeroProps) {
  const availabilityPercentage = (registered / capacity) * 100

  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[300px] md:min-h-[400px] overflow-hidden">
        <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto text-white">
            <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
              <Badge variant="secondary" className="glass-strong text-xs">
                {event.category}
              </Badge>
              <Badge variant="outline" className="glass-strong bg-white/10 text-white border-white/20 text-xs">
                {event.price}
              </Badge>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-3 md:mb-4">
              {event.name}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
                <span className="truncate">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
                <span className="truncate">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
                <span className="text-pretty truncate">{event.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
                <span className="truncate">
                  {registered}/{capacity} registered
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="glass-strong border-t border-border/20 p-3 md:p-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="text-xs md:text-sm text-muted-foreground">
              <span className="font-medium">{Math.round(availabilityPercentage)}% full</span>
              <span className="mx-2">•</span>
              <span>{capacity - registered} spots remaining</span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="glass bg-transparent flex-1 sm:flex-none">
              <Share2 className="w-3 md:w-4 h-3 md:h-4 mr-2" />
              Share
            </Button>
            <Button size="lg" className="px-6 md:px-8 flex-1 sm:flex-none">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
