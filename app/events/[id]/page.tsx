import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { EventDetailHero } from "@/components/event-detail-hero"
import { EventLocationMap } from "@/components/event-location-map"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { eventsData, extendedEventsData } from "@/lib/events-data"
import { Calendar, Users, Star, CheckCircle } from "lucide-react"

interface EventDetailPageProps {
  params: {
    id: string
  }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = eventsData.find((e) => e.id === params.id)
  const extendedData = extendedEventsData[params.id]

  if (!event || !extendedData) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <EventDetailHero event={event} registered={extendedData.registered} capacity={extendedData.capacity} />

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section className="glass p-6 rounded-lg">
            <h2 className="font-heading text-2xl font-semibold mb-4">About This Event</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">{extendedData.fullDescription}</p>
          </section>

          {/* Highlights */}
          <section className="glass p-6 rounded-lg">
            <h2 className="font-heading text-2xl font-semibold mb-4">Event Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {extendedData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Schedule */}
          <section className="glass p-6 rounded-lg">
            <h2 className="font-heading text-2xl font-semibold mb-4">Event Schedule</h2>
            <div className="space-y-4">
              {extendedData.schedule.map((item, index) => (
                <div key={index} className="flex gap-4 pb-4 border-b border-border/20 last:border-0 last:pb-0">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="glass">
                      {item.time}
                    </Badge>
                  </div>
                  <div>
                    <p className="font-medium">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Speakers (if available) */}
          {extendedData.speakers && (
            <section className="glass p-6 rounded-lg">
              <h2 className="font-heading text-2xl font-semibold mb-4">Featured Speakers</h2>
              <div className="space-y-3">
                {extendedData.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{speaker}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Registration Card */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="font-heading">Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-primary">{event.price}</div>
                <div className="text-sm text-muted-foreground">per person</div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Registered:</span>
                  <span>{extendedData.registered}</span>
                </div>
                <div className="flex justify-between">
                  <span>Capacity:</span>
                  <span>{extendedData.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Available:</span>
                  <span className="text-primary">{extendedData.capacity - extendedData.registered}</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Register Now
              </Button>

              <p className="text-xs text-muted-foreground text-center">Secure registration • Instant confirmation</p>
            </CardContent>
          </Card>

          {/* Event Details */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="font-heading">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{event.date}</div>
                    <div className="text-muted-foreground">{event.time}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Organizer</div>
                    <div className="text-muted-foreground">{extendedData.organizer.name}</div>
                    <div className="text-muted-foreground">{extendedData.organizer.contact}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Map */}
          <EventLocationMap
            address={extendedData.location.address}
            coordinates={extendedData.location.coordinates}
            eventName={event.name}
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }))
}
