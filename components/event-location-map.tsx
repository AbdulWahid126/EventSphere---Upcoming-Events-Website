"use client"

interface EventLocationMapProps {
  address: string
  coordinates: { lat: number; lng: number }
  eventName: string
}

export function EventLocationMap({ address, coordinates, eventName }: EventLocationMapProps) {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgaN2KKlqZg&q=${encodeURIComponent(address)}&zoom=15`

  return (
    <div className="glass p-6 rounded-lg">
      <h3 className="font-heading text-xl font-semibold mb-4">Event Location</h3>

      <div className="space-y-4">
        <div>
          <p className="font-medium">{eventName}</p>
          <p className="text-muted-foreground text-sm">{address}</p>
        </div>

        <div className="relative h-64 rounded-lg overflow-hidden">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>

        <div className="flex gap-2">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            Get Directions
          </a>
          <span className="text-muted-foreground text-sm">•</span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}
