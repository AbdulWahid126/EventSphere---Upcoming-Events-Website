import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass-strong border-t border-border/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-heading text-xl md:text-2xl font-bold text-primary">
              EventSphere
            </Link>
            <p className="text-muted-foreground text-sm text-pretty">
              Discover amazing events happening around you. From conferences to concerts, find your next unforgettable
              experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 md:w-5 h-4 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-base md:text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-heading text-base md:text-lg font-semibold">Event Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/events?category=Technology"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/events?category=Music"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href="/events?category=Business"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/events?category=Art"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Art
                </Link>
              </li>
              <li>
                <Link
                  href="/events?category=Food"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Food
                </Link>
              </li>
              <li>
                <Link
                  href="/events?category=Wellness"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-base md:text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-3 md:w-4 h-3 md:h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@eventsphere.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 md:w-4 h-3 md:h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2025 EventSphere. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
