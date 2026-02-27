import Link from "next/link";
import { Heart } from "lucide-react";

const pets = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    tags: ["Friendly", "Vaccinated", "Good with kids"],
  },
  {
    id: 2,
    name: "Luna",
    breed: "Siamese Cat",
    age: "1 year",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    tags: ["Playful", "Spayed", "Indoor"],
  },
  {
    id: 3,
    name: "Max",
    breed: "German Shepherd",
    age: "3 years",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop",
    tags: ["Trained", "Microchipped", "Active"],
  },
];

export default function FeaturedPets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <div
          key={pet.id}
          className="card group cursor-pointer"
        >
          {/* Image */}
          <div className="relative mb-4">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-48 object-cover rounded-2xl"
            />
            {/* Heart button */}
            <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-sm hover:bg-coral hover:text-white transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Info */}
          <h4 className="text-lg font-bold text-textPrimary">{pet.name}</h4>
          <p className="text-sm text-textSec">{pet.breed}</p>

          <div className="flex items-center gap-4 mt-2 text-xs text-textMuted">
            <span>🎂 {pet.age}</span>
            <span>📍 {pet.location}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {pet.tags.map((tag) => (
              <span key={tag} className="badge badge-mint text-[10px]">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/pets/${pet.id}`}
            className="btn-secondary w-full mt-4 text-sm"
          >
            View Profile
          </Link>
        </div>
      ))}
    </div>
  );
}
