"use client";

import { Heart, Quote, ChevronRight, Calendar, MapPin, Star } from "lucide-react";

const successStories = [
  {
    id: 1,
    petName: "Charlie",
    petImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    petBreed: "Labrador Mix",
    adopterName: "The Martinez Family",
    adopterImage: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=100&h=100&fit=crop",
    location: "Austin, TX",
    adoptedDate: "January 2026",
    story: "Charlie was found abandoned and scared. After 6 months at the shelter, he finally found his forever home with us. Now he's the happiest pup, running around our backyard and cuddling with the kids every night. Adopting Charlie was the best decision we ever made!",
    featured: true,
  },
  {
    id: 2,
    petName: "Mittens",
    petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
    petBreed: "Domestic Shorthair",
    adopterName: "Jessica K.",
    adopterImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    location: "Seattle, WA",
    adoptedDate: "December 2025",
    story: "I was looking for a quiet companion and Mittens stole my heart instantly. She was shy at first but now she follows me everywhere. My apartment finally feels like home!",
    featured: false,
  },
  {
    id: 3,
    petName: "Duke",
    petImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop",
    petBreed: "German Shepherd",
    adopterName: "Robert & David",
    adopterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    location: "Denver, CO",
    adoptedDate: "November 2025",
    story: "Duke had been at the shelter for over a year because people were intimidated by his size. But he's the gentlest giant! He loves hiking with us and has become our adventure buddy.",
    featured: false,
  },
  {
    id: 4,
    petName: "Bella",
    petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=400&fit=crop",
    petBreed: "Poodle Mix",
    adopterName: "Grandma Rose",
    adopterImage: "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?w=100&h=100&fit=crop",
    location: "Miami, FL",
    adoptedDate: "February 2026",
    story: "At my age, I thought I was too old for a dog. But Bella has given me a new purpose. We take slow walks together and she keeps me company. She's my best friend.",
    featured: false,
  },
];

const stats = [
  { number: "2,500+", label: "Happy Adoptions" },
  { number: "50+", label: "Partner Shelters" },
  { number: "98%", label: "Success Rate" },
  { number: "4.9", label: "Avg. Rating", icon: Star },
];

export default function SuccessStoriesPage() {
  const featuredStory = successStories.find((s) => s.featured);
  const otherStories = successStories.filter((s) => !s.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-coral/10 text-coral font-semibold text-sm mb-4">
          Happy Tails
        </span>
        <h1 className="text-4xl font-bold text-textPrimary mb-4 flex items-center justify-center gap-3">
          <Heart className="w-10 h-10 text-coral" />
          Success Stories
        </h1>
        <p className="text-textSec text-lg">
          Every adoption creates a beautiful story. Here are some of our favorites from the Pawdopt family.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="card p-6 text-center">
            <div className="text-3xl font-bold text-coral flex items-center justify-center gap-1">
              {stat.number}
              {stat.icon && <Star className="w-6 h-6 text-warning fill-warning" />}
            </div>
            <div className="text-textSec font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Featured Story */}
      {featuredStory && (
        <div className="card overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src={featuredStory.petImage}
                alt={featuredStory.petName}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 px-4 py-1 rounded-full bg-coral text-white font-bold text-sm">
                Featured Story
              </span>
            </div>
            <div className="p-8 bg-card-lavender">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={featuredStory.adopterImage}
                  alt={featuredStory.adopterName}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-white"
                />
                <div>
                  <h3 className="font-bold text-purple-800">{featuredStory.adopterName}</h3>
                  <div className="flex items-center gap-2 text-sm text-purple-600">
                    <MapPin className="w-4 h-4" />
                    {featuredStory.location}
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-purple-800 mb-2">
                {featuredStory.petName} Found His Forever Home
              </h2>
              <p className="text-purple-600 text-sm mb-4">
                {featuredStory.petBreed} • Adopted {featuredStory.adoptedDate}
              </p>

              <Quote className="w-8 h-8 text-purple-300 mb-2" />
              <p className="text-purple-700 text-lg leading-relaxed mb-4">
                {featuredStory.story}
              </p>

              <div className="flex items-center gap-1 text-warning">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Stories Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {otherStories.map((story) => (
          <div key={story.id} className="card overflow-hidden group hover:shadow-float transition-all">
            <div className="relative h-48">
              <img
                src={story.petImage}
                alt={story.petName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={story.adopterImage}
                  alt={story.adopterName}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-coral/20"
                />
                <div>
                  <h4 className="font-bold text-textPrimary text-sm">{story.adopterName}</h4>
                  <span className="text-xs text-textMuted">{story.location}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-textPrimary mb-1">
                {story.petName}'s Story
              </h3>
              <p className="text-sm text-textSec mb-3">
                {story.petBreed} • {story.adoptedDate}
              </p>

              <p className="text-textSec text-sm line-clamp-3 mb-4">
                "{story.story}"
              </p>

              <button className="text-coral font-semibold text-sm hover:underline flex items-center gap-1">
                Read Full Story <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Share Your Story CTA */}
      <div className="card p-8 bg-card-peach text-center">
        <div className="text-5xl mb-4">📸</div>
        <h2 className="text-2xl font-bold text-textPrimary mb-2">Share Your Story!</h2>
        <p className="text-textSec mb-6 max-w-xl mx-auto">
          Did you adopt through Pawdopt? We'd love to hear how your furry friend is doing! 
          Share your story and inspire others to adopt.
        </p>
        <button className="btn-primary">
          Submit Your Story
        </button>
      </div>

      {/* Testimonials Carousel */}
      <div className="card p-6 bg-card-mint">
        <h2 className="text-xl font-bold text-green-800 mb-6 text-center">What Adopters Say</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { text: "The process was so smooth and the staff was incredibly helpful!", author: "Mike T." },
            { text: "I found my soulmate in a furry body. Thank you Pawdopt!", author: "Anna L." },
            { text: "Best decision ever. Our rescue dog completed our family.", author: "The Chen Family" },
          ].map((testimonial, i) => (
            <div key={i} className="bg-white/60 p-4 rounded-2xl">
              <Quote className="w-6 h-6 text-success mb-2" />
              <p className="text-green-700 mb-3">"{testimonial.text}"</p>
              <p className="text-green-600 font-semibold text-sm">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
