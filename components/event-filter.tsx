"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

interface EventsFilterProps {
  onSearch: (query: string) => void
  onCategoryFilter: (category: string | null) => void
  categories: string[]
  activeCategory: string | null
  initialSearch?: string
}

export function EventsFilter({
  onSearch,
  onCategoryFilter,
  categories,
  activeCategory,
  initialSearch = "",
}: EventsFilterProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearch)

  useEffect(() => {
    setSearchQuery(initialSearch)
  }, [initialSearch])

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    onSearch(value)
  }

  return (
    <div className="glass p-4 md:p-6 rounded-lg space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search events by name, venue, or description..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 glass text-sm md:text-base"
        />
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Filter className="w-4 h-4" />
          <span>Filter by Category</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryFilter(null)}
            className="glass text-xs md:text-sm"
          >
            All Events
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryFilter(category)}
              className="glass text-xs md:text-sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
