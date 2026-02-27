"use client";

import { Calendar, MapPin, Clock, Users, ChevronRight, Heart, Camera, Dog } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Weekend Adoption Fair",
    description: "Meet adorable pets looking for their forever homes. Food, games, and fun for the whole family!",
    date: "March 2, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Nehru Park, New Delhi",
    attendees: 156,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=200&fit=crop",
    type: "adoption",
  },
  {
    id: 2,
    title: "Pet Photography Day",
    description: "Free professional photos with your pets! Perfect for new adopters getting their first family portrait.",
    date: "March 8, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "Friendicoes, Defence Colony, Delhi",
    attendees: 89,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=200&fit=crop",
    type: "special",
  },
  {
    id: 3,
    title: "Dog Training Workshop",
    description: "Learn essential training tips from certified trainers. Great for first-time pet parents!",
    date: "March 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "CUPA, Bengaluru",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=200&fit=crop",
    type: "workshop",
  },
  {
    id: 4,
    title: "Volunteer Orientation",
    description: "Want to help? Join our volunteer team and make a difference in animals' lives.",
    date: "March 20, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Blue Cross of India, Chennai",
    attendees: 28,
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=200&fit=crop",
    type: "volunteer",
  },
];

const typeConfig = {
  adoption: { label: "Adoption Event", color: "bg-coral text-white", icon: Heart },
  special: { label: "Special Event", color: "bg-lavender text-purple-700", icon: Camera },
  workshop: { label: "Workshop", color: "bg-mint text-green-700", icon: Dog },
  volunteer: { label: "Volunteer", color: "bg-warning text-amber-700", icon: Users },
};

export default function EventsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-textPrimary flex items-center gap-3">
            <Calendar className="w-8 h-8 text-coral" />
            Upcoming Events
          </h1>
          <p className="text-textSec mt-1">Join us at these exciting pet adoption events!</p>
        </div>
      </div>

      {/* Featured Event */}
      <div className="card overflow-hidden group hover:shadow-float transition-all">
        <div className="relative h-48">
          <img
            src={upcomingEvents[0].image}
            alt={upcomingEvents[0].title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-coral text-white text-sm font-bold">
              Featured
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-2xl font-bold mb-1">{upcomingEvents[0].title}</h2>
            <p className="text-white/80 text-sm">{upcomingEvents[0].description}</p>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between bg-card-peach">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-textPrimary font-medium">
              <Calendar className="w-4 h-4" />
              {upcomingEvents[0].date}
            </div>
            <div className="flex items-center gap-2 text-textSec">
              <Clock className="w-4 h-4" />
              {upcomingEvents[0].time}
            </div>
            <div className="flex items-center gap-2 text-textSec">
              <MapPin className="w-4 h-4" />
              {upcomingEvents[0].location}
            </div>
          </div>
          <button className="btn-primary">
            Register Now
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {upcomingEvents.slice(1).map((event) => {
          const config = typeConfig[event.type as keyof typeof typeConfig];
          const TypeIcon = config.icon;

          return (
            <div
              key={event.id}
              className="card overflow-hidden group hover:shadow-float transition-all cursor-pointer"
            >
              <div className="relative h-32">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${config.color}`}>
                    <TypeIcon className="w-3 h-3" />
                    {config.label}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-textPrimary text-lg mb-1 group-hover:text-coral transition-colors">
                  {event.title}
                </h3>
                <p className="text-textSec text-sm mb-3 line-clamp-2">{event.description}</p>

                <div className="flex flex-wrap gap-3 text-xs text-textSec mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-coral" />
                    <span className="text-sm text-textSec">
                      <strong className="text-textPrimary">{event.attendees}</strong> attending
                    </span>
                  </div>
                  <button className="text-coral font-semibold text-sm hover:underline flex items-center gap-1">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Calendar CTA */}
      <div className="card p-6 bg-card-lavender text-center">
        <Calendar className="w-12 h-12 text-purple-700 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-purple-800 mb-2">Never Miss an Event!</h3>
        <p className="text-purple-600 mb-4">Subscribe to our calendar and get notified about upcoming adoption events.</p>
        <button className="btn-primary">
          📅 Add to Calendar
        </button>
      </div>
    </div>
  );
}
