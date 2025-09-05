"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ name: "", email: "", message: "" })
        }, 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Card className="glass max-w-md mx-auto">
                    <CardContent className="p-6 md:p-8 text-center">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            <CheckCircle className="w-12 md:w-16 h-12 md:h-16 text-primary mx-auto mb-4" />
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="font-heading text-lg md:text-xl font-semibold mb-2"
                        >
                            Message Sent!
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="text-sm md:text-base text-muted-foreground"
                        >
                            Thank you for contacting us. We all get back to you soon.
                        </motion.p>
                    </CardContent>
                </Card>
            </motion.div>
        )
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
            {/* Contact Form */}
            <motion.div whileFocus={itemVariants}>
                <Card className="glass">
                    <CardHeader>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <CardTitle className="font-heading text-xl md:text-2xl">Send us a Message</CardTitle>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Have questions about our events? We had love to hear from you. Send us a message and we all respond as soon
                                as possible.
                            </p>
                        </motion.div>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {[
                                { name: "name", type: "text", placeholder: "Your full name", label: "Name *" },
                                { name: "email", type: "email", placeholder: "your.email@example.com", label: "Email *" },
                            ].map((field, index) => (
                                <motion.div
                                    key={field.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                >
                                    <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                                        {field.label}
                                    </label>
                                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            type={field.type}
                                            required
                                            value={formData[field.name as keyof typeof formData]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            className="glass"
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message *
                                </label>
                                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your inquiry..."
                                        rows={5}
                                        className="glass resize-none"
                                    />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                    <AnimatePresence mode="wait">
                                        {isSubmitting ? (
                                            <motion.div
                                                key="loading"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center"
                                            >
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                                                />
                                                Sending...
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="send"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center"
                                            >
                                                <Send className="w-4 h-4 mr-2" />
                                                Send Message
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </motion.div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div whileFocus={itemVariants} className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ y: -5 }}
                >
                    <Card className="glass">
                        <CardHeader>
                            <CardTitle className="font-heading text-xl md:text-2xl">Get in Touch</CardTitle>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Reach out to us through any of these channels. We are here to help make your event experience amazing.
                            </p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                { icon: Mail, title: "Email", details: ["hello@eventsphere.com", "support@eventsphere.com"] },
                                { icon: Phone, title: "Phone", details: ["+1 (555) 123-4567", "Mon-Fri, 9AM-6PM PST"] },
                                { icon: MapPin, title: "Office", details: ["123 Event Street", "San Francisco, CA 94102"] },
                            ].map((contact, index) => (
                                <motion.div
                                    key={contact.title}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-3"
                                >
                                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                                        <contact.icon className="w-4 md:w-5 h-4 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                                    </motion.div>
                                    <div>
                                        <div className="font-medium text-sm md:text-base">{contact.title}</div>
                                        {contact.details.map((detail, detailIndex) => (
                                            <div
                                                key={detailIndex}
                                                className={`text-muted-foreground ${detailIndex === contact.details.length - 1 && contact.title === "Phone" ? "text-xs" : "text-sm"}`}
                                            >
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ y: -5 }}
                >
                    <Card className="glass">
                        <CardHeader>
                            <CardTitle className="font-heading text-lg md:text-xl">Frequently Asked</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                {
                                    q: "How do I register for an event?",
                                    a: 'Click on any event to view details, then use the "Register Now" button to secure your spot.',
                                },
                                {
                                    q: "Can I get a refund?",
                                    a: "Refunds are available up to 48 hours before the event start time, subject to our terms.",
                                },
                                {
                                    q: "Do you offer group discounts?",
                                    a: "Yes! Contact us for groups of 10 or more for special pricing options.",
                                },
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="font-medium text-sm mb-1">{faq.q}</div>
                                    <div className="text-muted-foreground text-xs md:text-sm">{faq.a}</div>
                                </motion.div>
                            ))}
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
