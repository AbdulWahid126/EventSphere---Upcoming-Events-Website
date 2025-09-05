export interface Event {
  id: string
  name: string
  date: string
  time: string
  venue: string
  description: string
  image: string
  category: string
  price: string
}

export const eventsData: Event[] = [
  {
    id: "techfest-2025",
    name: "TechFest 2025",
    date: "September 15, 2025",
    time: "9:00 AM - 6:00 PM",
    venue: "San Francisco Convention Center",
    description:
      "Annual technology festival featuring startups, AI talks, and networking opportunities with industry leaders.",
    image: "/assets/technology-conference-with-modern-stage-and-screen.jpg",
    category: "Technology",
    price: "$299",
  },
  {
    id: "music-vibes-night",
    name: "Music Vibes Night",
    date: "September 25, 2025",
    time: "7:00 PM - 12:00 AM",
    venue: "Madison Square Garden, New York",
    description: "A live concert night with global artists and DJs bringing you the best music experience of the year.",
    image: "/assets/colorful-concert-stage.jpg",
    category: "Music",
    price: "$150",
  },
  {
    id: "startup-summit",
    name: "Startup Summit 2025",
    date: "October 5, 2025",
    time: "10:00 AM - 5:00 PM",
    venue: "Austin Convention Center, Texas",
    description: "Connect with entrepreneurs, investors, and innovators shaping the future of business and technology.",
    image: "/assets/business-conference-with-entrepreneurs-presenting.jpg",
    category: "Business",
    price: "$199",
  },
  {
    id: "art-gallery-opening",
    name: "Contemporary Art Gallery Opening",
    date: "October 12, 2025",
    time: "6:00 PM - 10:00 PM",
    venue: "Museum of Modern Art, Los Angeles",
    description:
      "Exclusive opening of contemporary art exhibition featuring works from emerging and established artists.",
    image: "/assets/modern-art-gallery.jpg",
    category: "Art",
    price: "Free",
  },
  {
    id: "food-festival",
    name: "International Food Festival",
    date: "October 20, 2025",
    time: "11:00 AM - 9:00 PM",
    venue: "Central Park, New York",
    description:
      "Taste cuisines from around the world with renowned chefs and local food vendors in a vibrant outdoor setting.",
    image: "/assets/outdoor-food-festival-with-colorful-food-stalls.jpg",
    category: "Food",
    price: "$45",
  },
  {
    id: "wellness-retreat",
    name: "Mindfulness & Wellness Retreat",
    date: "November 2, 2025",
    time: "8:00 AM - 6:00 PM",
    venue: "Napa Valley Resort, California",
    description:
      "A day of meditation, yoga, and wellness workshops designed to rejuvenate your mind, body, and spirit.",
    image: "/assets/peaceful-yoga-retreat-in-nature-with-mountains.jpg",
    category: "Wellness",
    price: "$125",
  },
]

export const extendedEventsData: Record<
  string,
  {
    fullDescription: string
    highlights: string[]
    schedule: { time: string; activity: string }[]
    speakers?: string[]
    location: {
      address: string
      coordinates: { lat: number; lng: number }
    }
    organizer: {
      name: string
      contact: string
    }
    capacity: number
    registered: number
  }
> = {
  "techfest-2025": {
    fullDescription:
      "TechFest 2025 is the premier technology conference bringing together innovators, entrepreneurs, and tech enthusiasts from around the globe. This year's event focuses on artificial intelligence, blockchain technology, and sustainable tech solutions. Join us for inspiring keynotes, hands-on workshops, and unparalleled networking opportunities with industry leaders and emerging startups.",
    highlights: [
      "50+ Expert Speakers",
      "Interactive AI Workshops",
      "Startup Pitch Competition",
      "Networking Reception",
      "Tech Exhibition Hall",
    ],
    schedule: [
      { time: "9:00 AM", activity: "Registration & Welcome Coffee" },
      { time: "10:00 AM", activity: "Opening Keynote: The Future of AI" },
      { time: "11:30 AM", activity: "Panel: Sustainable Tech Solutions" },
      { time: "1:00 PM", activity: "Networking Lunch" },
      { time: "2:30 PM", activity: "Startup Pitch Competition" },
      { time: "4:00 PM", activity: "Workshops & Breakout Sessions" },
      { time: "5:30 PM", activity: "Closing Reception" },
    ],
    speakers: [
      "Dr. Sarah Chen - AI Research Lead",
      "Marcus Rodriguez - Blockchain Expert",
      "Lisa Park - Sustainability Advocate",
    ],
    location: {
      address: "747 Howard St, San Francisco, CA 94103",
      coordinates: { lat: 37.7849, lng: -122.4094 },
    },
    organizer: {
      name: "TechFest Organization",
      contact: "info@techfest2025.com",
    },
    capacity: 2000,
    registered: 1847,
  },
  "music-vibes-night": {
    fullDescription:
      "Experience an unforgettable night of music at Madison Square Garden featuring world-renowned artists and DJs. Music Vibes Night brings together diverse musical genres from electronic dance music to indie rock, creating an atmosphere of pure musical euphoria. This exclusive event promises spectacular light shows, premium sound quality, and performances that will leave you wanting more.",
    highlights: [
      "5 International Artists",
      "State-of-the-art Sound System",
      "Interactive Light Shows",
      "VIP Lounge Access",
      "Meet & Greet Opportunities",
    ],
    schedule: [
      { time: "7:00 PM", activity: "Doors Open & Opening DJ Set" },
      { time: "8:00 PM", activity: "Opening Act: Rising Stars" },
      { time: "9:00 PM", activity: "Main Performance Block 1" },
      { time: "10:30 PM", activity: "Intermission & DJ Set" },
      { time: "11:00 PM", activity: "Headliner Performance" },
      { time: "12:00 AM", activity: "Closing DJ Set" },
    ],
    location: {
      address: "4 Pennsylvania Plaza, New York, NY 10001",
      coordinates: { lat: 40.7505, lng: -73.9934 },
    },
    organizer: {
      name: "Music Vibes Productions",
      contact: "tickets@musicvibes.com",
    },
    capacity: 20000,
    registered: 18500,
  },
  "startup-summit": {
    fullDescription:
      "The Startup Summit 2025 is where innovation meets opportunity. Connect with successful entrepreneurs, venture capitalists, and industry disruptors who are shaping the future of business. This intensive one-day event features inspiring success stories, practical workshops on scaling businesses, and exclusive networking sessions with potential investors and partners.",
    highlights: [
      "Investor Pitch Sessions",
      "Mentorship Roundtables",
      "Success Story Presentations",
      "Funding Workshops",
      "Exclusive Networking",
    ],
    schedule: [
      { time: "10:00 AM", activity: "Registration & Networking Breakfast" },
      { time: "11:00 AM", activity: "Keynote: Building Unicorn Startups" },
      { time: "12:30 PM", activity: "Investor Panel Discussion" },
      { time: "2:00 PM", activity: "Lunch & Mentorship Sessions" },
      { time: "3:30 PM", activity: "Startup Pitch Competition" },
      { time: "5:00 PM", activity: "Closing & Networking Reception" },
    ],
    location: {
      address: "500 E Cesar Chavez St, Austin, TX 78701",
      coordinates: { lat: 30.2672, lng: -97.7431 },
    },
    organizer: {
      name: "Austin Startup Alliance",
      contact: "summit@austinstartups.org",
    },
    capacity: 800,
    registered: 756,
  },
  "art-gallery-opening": {
    fullDescription:
      "Join us for an exclusive opening of our contemporary art exhibition featuring groundbreaking works from both emerging and established artists. This curated collection explores themes of modern society, technology's impact on human connection, and the evolution of artistic expression in the digital age. Enjoy wine, conversation, and the opportunity to meet the artists behind these compelling works.",
    highlights: [
      "30+ Contemporary Artworks",
      "Meet the Artists",
      "Wine & Cheese Reception",
      "Guided Gallery Tours",
      "Art Purchase Opportunities",
    ],
    schedule: [
      { time: "6:00 PM", activity: "Gallery Doors Open" },
      { time: "6:30 PM", activity: "Welcome Reception & Wine Service" },
      { time: "7:00 PM", activity: "Artist Presentations" },
      { time: "8:00 PM", activity: "Guided Gallery Tours" },
      { time: "9:00 PM", activity: "Open Viewing & Networking" },
      { time: "10:00 PM", activity: "Event Conclusion" },
    ],
    location: {
      address: "630 W 6th St, Los Angeles, CA 90017",
      coordinates: { lat: 34.0522, lng: -118.2437 },
    },
    organizer: {
      name: "MOMA Los Angeles",
      contact: "events@moma-la.org",
    },
    capacity: 300,
    registered: 287,
  },
  "food-festival": {
    fullDescription:
      "Embark on a culinary journey around the world at the International Food Festival in Central Park. This vibrant outdoor celebration brings together renowned chefs, local food artisans, and diverse cuisines from over 25 countries. Experience authentic flavors, learn cooking techniques through live demonstrations, and enjoy family-friendly activities in the heart of New York City.",
    highlights: [
      "25+ International Cuisines",
      "Live Cooking Demonstrations",
      "Chef Meet & Greets",
      "Family Activities Zone",
      "Local Artisan Vendors",
    ],
    schedule: [
      { time: "11:00 AM", activity: "Festival Gates Open" },
      { time: "12:00 PM", activity: "Opening Ceremony & First Demos" },
      { time: "2:00 PM", activity: "International Chef Showcase" },
      { time: "4:00 PM", activity: "Family Cooking Workshop" },
      { time: "6:00 PM", activity: "Evening Food & Music" },
      { time: "9:00 PM", activity: "Festival Conclusion" },
    ],
    location: {
      address: "Central Park, New York, NY 10024",
      coordinates: { lat: 40.7829, lng: -73.9654 },
    },
    organizer: {
      name: "NYC Food Festival Committee",
      contact: "info@nycfoodfest.com",
    },
    capacity: 5000,
    registered: 4200,
  },
  "wellness-retreat": {
    fullDescription:
      "Escape the hustle and bustle of daily life at our Mindfulness & Wellness Retreat in the serene Napa Valley. This transformative day-long experience combines meditation, yoga, wellness workshops, and mindful eating practices. Led by certified wellness experts, this retreat is designed to help you reconnect with yourself, reduce stress, and develop sustainable wellness practices for everyday life.",
    highlights: [
      "Guided Meditation Sessions",
      "Yoga in Nature",
      "Wellness Workshops",
      "Healthy Gourmet Meals",
      "Mindfulness Practices",
    ],
    schedule: [
      { time: "8:00 AM", activity: "Arrival & Welcome Tea" },
      { time: "8:30 AM", activity: "Morning Meditation" },
      { time: "10:00 AM", activity: "Yoga Session in Nature" },
      { time: "12:00 PM", activity: "Mindful Lunch Experience" },
      { time: "2:00 PM", activity: "Wellness Workshop" },
      { time: "4:00 PM", activity: "Afternoon Meditation" },
      { time: "5:30 PM", activity: "Closing Circle & Reflection" },
    ],
    location: {
      address: "1314 McKinstry St, Napa, CA 94559",
      coordinates: { lat: 38.2975, lng: -122.2869 },
    },
    organizer: {
      name: "Napa Wellness Center",
      contact: "retreat@napawellness.com",
    },
    capacity: 150,
    registered: 142,
  },
}
