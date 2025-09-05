"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { EventCard } from "@/components/event-card"
import { EventsFilter } from "@/components/event-filter"
import { Footer } from "@/components/footer"
import { eventsData } from "@/lib/events-data"

export default function EventsPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    const urlSearch = searchParams.get("search")
    const urlCategory = searchParams.get("category")

    if (urlSearch) {
      setSearchQuery(urlSearch)
    }
    if (urlCategory) {
      setActiveCategory(urlCategory)
    }
  }, [searchParams])

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(eventsData.map((event) => event.category)))
  }, [])

  // Filter events based on search and category
  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesSearch =
        searchQuery === "" ||
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = activeCategory === null || event.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="pt-20 md:pt-24 pb-8 md:pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Upcoming <span className="text-primary">Events</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover amazing events happening around you. From conferences to concerts, find your next experience.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto">
          <EventsFilter
            onSearch={setSearchQuery}
            onCategoryFilter={setActiveCategory}
            categories={categories}
            activeCategory={activeCategory}
            initialSearch={searchQuery}
          />
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-4 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          {filteredEvents.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-sm md:text-base text-muted-foreground">
                  Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""}
                  {activeCategory && ` in ${activeCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 md:py-16">
              <div className="glass p-6 md:p-8 rounded-lg max-w-md mx-auto">
                <h3 className="font-heading text-lg md:text-xl font-semibold mb-2">No Events Found</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria to find more events.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory(null)
                  }}
                  className="text-primary hover:underline text-sm md:text-base"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
