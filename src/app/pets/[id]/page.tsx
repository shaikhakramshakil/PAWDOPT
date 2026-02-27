import Link from "next/link";
import { Heart, Share2, MapPin, Calendar, Ruler, Check, Phone, Mail } from "lucide-react";

// Mock data — in real app, fetch by ID
const pet = {
  id: 1,
  name: "Buddy",
  breed: "Golden Retriever",
  age: "2 years",
  gender: "Male",
  size: "Large",
  weight: "65 lbs",
  color: "Golden",
  location: "San Francisco, CA",
  listedDate: "Jan 15, 2026",
  adoptionFee: 5000,
  status: "Available",
  images: [
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&h=600&fit=crop",
  ],
  traits: ["Playful", "Friendly", "Energetic", "Loyal"],
  health: {
    vaccinated: true,
    spayedNeutered: true,
    microchipped: true,
    specialNeeds: false,
  },
  compatibility: {
    kids: true,
    dogs: true,
    cats: false,
    apartment: false,
  },
  story: `Buddy is a lovable Golden Retriever who was found wandering the streets of San Francisco. Despite his rough start, he has the sweetest temperament and loves everyone he meets!

He's fully housetrained, knows basic commands (sit, stay, come), and walks great on a leash. Buddy loves playing fetch, going on hikes, and cuddling on the couch.

He would do best in a home with a yard where he can run and play. He gets along wonderfully with other dogs but tends to chase cats.`,
  shelter: {
    name: "Paws & Hearts Rescue",
    address: "123 Pet Lane, San Francisco, CA 94102",
    phone: "(415) 555-0123",
    email: "adopt@pawshearts.org",
    hours: "Mon-Sat 10am-6pm, Sun 12pm-5pm",
  },
};

export default function PetDetailPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-textSec">
        <Link href="/pets" className="hover:text-coral">Browse Pets</Link>
        <span>/</span>
        <span className="text-textPrimary font-medium">{pet.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Images & Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Image Gallery */}
          <div className="card p-0 overflow-hidden">
            <img
              src={pet.images[0]}
              alt={pet.name}
              className="w-full h-[400px] object-cover"
            />
            <div className="flex gap-2 p-4">
              {pet.images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${pet.name} ${i + 2}`}
                  className="w-24 h-24 rounded-xl object-cover cursor-pointer hover:ring-2 ring-coral transition-all"
                />
              ))}
            </div>
          </div>

          {/* Story */}
          <div className="card">
            <h2 className="text-lg font-bold text-textPrimary mb-4">
              📖 {pet.name}&apos;s Story
            </h2>
            <p className="text-textSec whitespace-pre-line leading-relaxed">
              {pet.story}
            </p>
          </div>

          {/* Health & Compatibility */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Health */}
            <div className="card bg-card-mint">
              <h3 className="font-bold text-textPrimary mb-4">🏥 Health Info</h3>
              <ul className="space-y-2">
                {Object.entries(pet.health).map(([key, value]) => (
                  <li key={key} className="flex items-center gap-2 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center ${value ? "bg-success text-white" : "bg-gray-200 text-textMuted"}`}>
                      {value ? <Check className="w-3 h-3" /> : "✕"}
                    </span>
                    <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compatibility */}
            <div className="card bg-card-lavender">
              <h3 className="font-bold text-textPrimary mb-4">✨ Good With</h3>
              <ul className="space-y-2">
                {Object.entries(pet.compatibility).map(([key, value]) => (
                  <li key={key} className="flex items-center gap-2 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center ${value ? "bg-success text-white" : "bg-danger/30 text-danger"}`}>
                      {value ? <Check className="w-3 h-3" /> : "✕"}
                    </span>
                    <span className="capitalize">{key}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Sidebar */}
        <div className="space-y-6">
          {/* Quick Info Card */}
          <div className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-textPrimary">{pet.name}</h1>
                <p className="text-textSec">{pet.breed}</p>
              </div>
              <span className="badge badge-mint">{pet.status}</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-textSec">
                <Calendar className="w-4 h-4 text-coral" />
                <span>{pet.age} • {pet.gender}</span>
              </div>
              <div className="flex items-center gap-3 text-textSec">
                <Ruler className="w-4 h-4 text-coral" />
                <span>{pet.size} • {pet.weight}</span>
              </div>
              <div className="flex items-center gap-3 text-textSec">
                <MapPin className="w-4 h-4 text-coral" />
                <span>{pet.location}</span>
              </div>
            </div>

            {/* Traits */}
            <div className="flex flex-wrap gap-2 mt-4">
              {pet.traits.map((trait) => (
                <span key={trait} className="badge badge-lavender text-xs">
                  {trait}
                </span>
              ))}
            </div>

            {/* Fee */}
            <div className="mt-6 p-4 rounded-2xl bg-softYellow/50 text-center">
              <p className="text-xs text-textSec mb-1">Adoption Fee</p>
              <p className="text-2xl font-bold text-textPrimary">₹{pet.adoptionFee.toLocaleString('en-IN')}</p>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-3">
              <Link href={`/adopt/${pet.id}`} className="btn-primary w-full">
                🐾 Start Adoption
              </Link>
              <div className="flex gap-3">
                <button className="btn-secondary flex-1">
                  <Heart className="w-4 h-4" /> Save
                </button>
                <button className="btn-secondary flex-1">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>
          </div>

          {/* Shelter Card */}
          <div className="card">
            <h3 className="font-bold text-textPrimary mb-4">🏠 Shelter Info</h3>
            <p className="font-semibold text-coral">{pet.shelter.name}</p>
            <p className="text-sm text-textSec mt-1">{pet.shelter.address}</p>
            <p className="text-xs text-textMuted mt-2">{pet.shelter.hours}</p>

            <div className="mt-4 space-y-2">
              <a
                href={`tel:${pet.shelter.phone}`}
                className="flex items-center gap-2 text-sm text-textSec hover:text-coral transition-colors"
              >
                <Phone className="w-4 h-4" />
                {pet.shelter.phone}
              </a>
              <a
                href={`mailto:${pet.shelter.email}`}
                className="flex items-center gap-2 text-sm text-textSec hover:text-coral transition-colors"
              >
                <Mail className="w-4 h-4" />
                {pet.shelter.email}
              </a>
            </div>

            <Link
              href={`/contact?shelter=${pet.shelter.name}`}
              className="btn-secondary w-full mt-4 text-sm"
            >
              Contact Shelter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
