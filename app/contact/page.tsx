import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-balance">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Have questions about our events or need assistance? We are here to help. Reach out to us and we all get back
            to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
