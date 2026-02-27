"use client";

import { Heart, Home, Clock, CheckCircle, Star, ChevronRight, Users, Calendar } from "lucide-react";

const fosterablePets = [
  {
    id: 1,
    name: "Daisy",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    breed: "Beagle Mix",
    age: "2 years",
    reason: "Recovering from surgery, needs a quiet home for 4-6 weeks",
    urgency: "high",
  },
  {
    id: 2,
    name: "Whiskers",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    breed: "Tabby Cat",
    age: "8 months",
    reason: "Shelter overflow - needs temporary home",
    urgency: "medium",
  },
  {
    id: 3,
    name: "Rocky",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    breed: "Golden Retriever",
    age: "5 years",
    reason: "Senior dog needing socialization before adoption",
    urgency: "low",
  },
];

const urgencyConfig = {
  high: { label: "Urgent", color: "bg-danger text-white" },
  medium: { label: "Moderate", color: "bg-warning text-amber-800" },
  low: { label: "Flexible", color: "bg-mint text-green-800" },
};

const benefits = [
  {
    icon: Heart,
    title: "Save a Life",
    description: "Fostering frees up shelter space and gives pets a chance to thrive",
  },
  {
    icon: Home,
    title: "We Provide Everything",
    description: "Food, supplies, and medical care are covered by the shelter",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Our team is always available to answer questions and help",
  },
  {
    icon: Star,
    title: "Flexible Commitment",
    description: "Choose foster periods that fit your schedule",
  },
];

const steps = [
  { step: 1, title: "Apply Online", description: "Fill out our simple foster application" },
  { step: 2, title: "Meet & Greet", description: "Visit the shelter to meet available pets" },
  { step: 3, title: "Get Supplies", description: "We provide everything you need" },
  { step: 4, title: "Welcome Home", description: "Give a pet a temporary loving home" },
];

export default function FosterPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="card p-8 bg-card-lavender relative overflow-hidden">
        <div className="absolute top-4 right-4 text-8xl opacity-10">🏠</div>
        
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-200 text-purple-700 font-semibold text-sm mb-4">
            Become a Foster Parent
          </span>
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Open Your Heart & Home 💜
          </h1>
          <p className="text-purple-600 text-lg mb-6">
            Fostering is a temporary commitment with a lifetime of rewards. 
            Help pets transition from shelter life while they wait for their forever families.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Foster Journey
          </button>
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-2xl font-bold text-textPrimary mb-6">Why Foster?</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div key={i} className="card p-6 text-center hover:shadow-float transition-all">
                <div className="w-14 h-14 rounded-full bg-coral/10 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-bold text-textPrimary mb-2">{benefit.title}</h3>
                <p className="text-textSec text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* How It Works */}
      <div className="card p-6 bg-card-mint">
        <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
          <Clock className="w-7 h-7" />
          How Fostering Works
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mb-3">
                {step.step}
              </div>
              <h3 className="font-bold text-green-800 mb-1">{step.title}</h3>
              <p className="text-green-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pets Needing Foster */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-textPrimary">Pets Needing Foster Homes</h2>
          <button className="text-coral font-semibold hover:underline flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {fosterablePets.map((pet) => {
            const urgency = urgencyConfig[pet.urgency as keyof typeof urgencyConfig];
            return (
              <div key={pet.id} className="card overflow-hidden group hover:shadow-float transition-all">
                <div className="relative h-48">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${urgency.color}`}>
                    {urgency.label}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-textPrimary">{pet.name}</h3>
                    <span className="text-sm text-textSec">{pet.age}</span>
                  </div>
                  <p className="text-textSec text-sm mb-3">{pet.breed}</p>
                  <div className="p-3 rounded-xl bg-bg mb-4">
                    <p className="text-sm text-textPrimary">
                      <strong>Foster Reason:</strong> {pet.reason}
                    </p>
                  </div>
                  <button className="w-full btn-primary">
                    Foster {pet.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="card p-6">
        <h2 className="text-2xl font-bold text-textPrimary mb-4">Common Questions</h2>
        <div className="space-y-3">
          {[
            { q: "How long is the typical foster period?", a: "Usually 2-8 weeks, depending on the pet's needs." },
            { q: "Do I need to pay for anything?", a: "No! We cover all food, supplies, and medical costs." },
            { q: "Can I adopt my foster pet?", a: "Absolutely! Many foster parents become 'foster failures' (the best kind!)." },
          ].map((faq, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between p-4 rounded-xl bg-bg cursor-pointer hover:bg-lavender/20 transition-colors">
                <span className="font-semibold text-textPrimary">{faq.q}</span>
                <ChevronRight className="w-5 h-5 text-textMuted group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-textSec">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="card p-8 bg-card-peach text-center">
        <Calendar className="w-12 h-12 text-coral mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-textPrimary mb-2">Ready to Make a Difference?</h2>
        <p className="text-textSec mb-6 max-w-xl mx-auto">
          Join our community of foster heroes. Your temporary home could be the bridge to a pet's forever family.
        </p>
        <button className="btn-primary text-lg px-8 py-4">
          Apply to Foster Today
        </button>
      </div>
    </div>
  );
}
