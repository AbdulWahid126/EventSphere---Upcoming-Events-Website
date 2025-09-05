"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
      >
        <div className="space-y-4">
          <motion.h1
            whileFocus={itemVariants}
            className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance"
          >
            Discover Upcoming{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-primary"
            >
              Events
            </motion.span>
          </motion.h1>
          <motion.p
            whileFocus={itemVariants}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            Explore amazing events happening around you. From tech conferences to music festivals, find your next
            unforgettable experience with EventSphere.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          whileFocus={itemVariants}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto">
              <Link href="/events">
                Explore Events
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 glass bg-transparent w-full sm:w-auto"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 1.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16"
        >
          {[
            { icon: Calendar, number: "500+", label: "Events Listed" },
            { icon: MapPin, number: "50+", label: "Cities Covered" },
            { icon: Users, number: "10K+", label: "Happy Attendees" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileFocus={statsVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="glass p-4 md:p-6 rounded-lg text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
              >
                <stat.icon className="w-6 md:w-8 h-6 md:h-8 text-primary mx-auto mb-3" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                className="text-xl md:text-2xl font-bold font-heading"
              >
                {stat.number}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                className="text-sm md:text-base text-muted-foreground"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
