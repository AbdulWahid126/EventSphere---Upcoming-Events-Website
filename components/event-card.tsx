"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Event } from "@/lib/events-data"

interface EventCardProps {
  event: Event
  index?: number
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="glass overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative h-40 md:h-48 overflow-hidden">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="absolute top-3 md:top-4 left-3 md:left-4"
            >
              <Badge variant="secondary" className="glass-strong text-xs">
                {event.category}
              </Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="absolute top-3 md:top-4 right-3 md:right-4"
            >
              <Badge variant="outline" className="glass-strong bg-background/90 text-xs">
                {event.price}
              </Badge>
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4 flex-grow">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="font-heading text-lg md:text-xl font-bold text-balance mb-2 group-hover:text-primary transition-colors line-clamp-2"
            >
              {event.name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="text-muted-foreground text-sm text-pretty line-clamp-2"
            >
              {event.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            className="space-y-2"
          >
            {[
              { icon: Calendar, text: event.date },
              { icon: Clock, text: event.time },
              { icon: MapPin, text: event.venue },
            ].map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + itemIndex * 0.05 }}
                className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <item.icon className="w-3 md:w-4 h-3 md:h-4 text-primary flex-shrink-0" />
                </motion.div>
                <span className={itemIndex === 2 ? "text-pretty line-clamp-1" : "truncate"}>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>

        <CardFooter className="p-4 md:p-6 pt-0 mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            className="w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button asChild className="w-full text-sm md:text-base">
              <Link href={`/events/${event.id}`}>Learn More</Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
