"use client";

import { Heart, Gift, Utensils, Home, Stethoscope, Sparkles, CheckCircle } from "lucide-react";

const donationTiers = [
  {
    id: 1,
    amount: 25,
    title: "Kibble Buddy",
    description: "Provides a week of nutritious meals for a shelter pet",
    icon: Utensils,
    color: "bg-mint",
    iconColor: "text-green-700",
  },
  {
    id: 2,
    amount: 50,
    title: "Comfort Provider",
    description: "Supplies warm bedding and toys for anxious animals",
    icon: Home,
    color: "bg-lavender",
    iconColor: "text-purple-700",
    popular: true,
  },
  {
    id: 3,
    amount: 100,
    title: "Health Hero",
    description: "Covers vaccinations and basic medical care",
    icon: Stethoscope,
    color: "bg-warning",
    iconColor: "text-amber-700",
  },
  {
    id: 4,
    amount: 250,
    title: "Rescue Champion",
    description: "Helps rescue and rehabilitate neglected animals",
    icon: Heart,
    color: "bg-coral/20",
    iconColor: "text-coral",
  },
];

const impactStats = [
  { number: "5,000+", label: "Pets Fed Monthly" },
  { number: "1,200+", label: "Adoptions This Year" },
  { number: "98%", label: "Funds to Animals" },
  { number: "50+", label: "Partner Shelters" },
];

export default function DonatePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="card p-8 bg-card-peach text-center relative overflow-hidden">
        <div className="absolute top-4 left-4 text-6xl opacity-20">🐾</div>
        <div className="absolute bottom-4 right-4 text-6xl opacity-20">💕</div>
        
        <Heart className="w-16 h-16 text-coral mx-auto mb-4 animate-bounce-soft" />
        <h1 className="text-4xl font-bold text-textPrimary mb-3">
          Help More Paws Find Homes 💛
        </h1>
        <p className="text-textSec text-lg max-w-2xl mx-auto mb-6">
          Your donation directly supports rescued animals, providing them with food, shelter, 
          medical care, and love while they wait for their forever families.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {impactStats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-coral">{stat.number}</div>
              <div className="text-textSec text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Tiers */}
      <div>
        <h2 className="text-2xl font-bold text-textPrimary mb-6 flex items-center gap-2">
          <Gift className="w-7 h-7 text-coral" />
          Choose Your Impact
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {donationTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.id}
                className={`card p-6 text-center hover:shadow-float transition-all cursor-pointer group relative ${
                  tier.popular ? "ring-2 ring-coral" : ""
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-coral text-white text-xs font-bold rounded-full">
                    Most Popular
                  </span>
                )}

                <div className={`w-16 h-16 rounded-full ${tier.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${tier.iconColor}`} />
                </div>

                <div className="text-3xl font-bold text-textPrimary mb-1">${tier.amount}</div>
                <h3 className="font-bold text-coral mb-2">{tier.title}</h3>
                <p className="text-textSec text-sm mb-4">{tier.description}</p>

                <button className={`w-full py-3 rounded-full font-semibold transition-all ${
                  tier.popular
                    ? "bg-coral text-white shadow-btn hover:scale-105"
                    : "bg-coral/10 text-coral hover:bg-coral hover:text-white"
                }`}>
                  Donate ${tier.amount}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Amount */}
      <div className="card p-6">
        <h3 className="text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-warning" />
          Custom Donation Amount
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-textSec font-bold">$</span>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full pl-10 pr-4 py-4 text-2xl font-bold rounded-2xl border-2 border-coral/20 focus:border-coral focus:outline-none text-textPrimary"
            />
          </div>
          <button className="btn-primary px-8 py-4 text-lg w-full sm:w-auto">
            Donate Now
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {[10, 35, 75, 150, 500].map((amount) => (
            <button
              key={amount}
              className="px-4 py-2 rounded-full border-2 border-coral/20 text-textSec hover:border-coral hover:text-coral transition-colors font-semibold"
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>

      {/* What Your Donation Covers */}
      <div className="card p-6 bg-card-mint">
        <h3 className="text-xl font-bold text-green-800 mb-4">What Your Donation Covers</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Daily meals and fresh water",
            "Vaccinations and medical checkups",
            "Spaying/neutering procedures",
            "Emergency medical care",
            "Comfortable shelter and bedding",
            "Training and socialization",
            "Microchipping for safety",
            "Transportation to adoption events",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-green-700">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Giving */}
      <div className="card p-6 bg-card-lavender text-center">
        <Heart className="w-12 h-12 text-purple-700 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-purple-800 mb-2">Become a Monthly Supporter</h3>
        <p className="text-purple-600 mb-4 max-w-xl mx-auto">
          Join our Pawdopt family with a recurring monthly donation. 
          Consistent support helps us plan better and save more lives!
        </p>
        <button className="btn-primary">
          ❤️ Start Monthly Giving
        </button>
      </div>
    </div>
  );
}
