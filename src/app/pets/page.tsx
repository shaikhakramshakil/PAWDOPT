"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Grid, List, Heart } from "lucide-react";
import Link from "next/link";

const petTypes = ["All", "Dogs", "Cats", "Birds", "Rabbits", "Other"];
const ages = ["Any Age", "Puppy/Kitten", "Young", "Adult", "Senior"];
const sizes = ["Any Size", "Small", "Medium", "Large", "X-Large"];
const genders = ["Any", "Male", "Female"];

const allPets = [
  { id: 1, name: "Buddy", breed: "Golden Retriever", type: "Dogs", age: "2 years", size: "Large", gender: "Male", location: "Mumbai, MH", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop", tags: ["Friendly", "Vaccinated"], status: "Available" },
  { id: 2, name: "Luna", breed: "Siamese Cat", type: "Cats", age: "1 year", size: "Small", gender: "Female", location: "New Delhi, DL", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop", tags: ["Playful", "Spayed"], status: "Available" },
  { id: 3, name: "Max", breed: "German Shepherd", type: "Dogs", age: "3 years", size: "Large", gender: "Male", location: "Bengaluru, KA", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop", tags: ["Trained", "Microchipped"], status: "Pending" },
  { id: 4, name: "Whiskers", breed: "Persian Cat", type: "Cats", age: "4 years", size: "Medium", gender: "Male", location: "Pune, MH", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=400&fit=crop", tags: ["Calm", "Indoor"], status: "Available" },
  { id: 5, name: "Bella", breed: "Labrador", type: "Dogs", age: "1 year", size: "Large", gender: "Female", location: "Hyderabad, TG", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop", tags: ["Energetic", "Good with kids"], status: "Available" },
  { id: 6, name: "Tweety", breed: "Canary", type: "Birds", age: "6 months", size: "Small", gender: "Male", location: "Chennai, TN", image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=400&h=400&fit=crop", tags: ["Singing", "Friendly"], status: "Available" },
];

export default function PetsPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedAge, setSelectedAge] = useState("Any Age");
  const [selectedSize, setSelectedSize] = useState("Any Size");
  const [selectedGender, setSelectedGender] = useState("Any");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);

  const filteredPets = allPets.filter((pet) => {
    if (search && !pet.name.toLowerCase().includes(search.toLowerCase()) && !pet.breed.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedType !== "All" && pet.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-textPrimary">🐾 Browse Pets</h1>
          <p className="text-textSec text-sm">Find your perfect companion</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textMuted" />
            <input
              type="text"
              placeholder="Search pets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-full bg-white border-2 border-lavender/30 focus:border-coral outline-none text-sm w-64 transition-colors"
            />
          </div>

          {/* Toggle filters */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2.5 rounded-full transition-colors ${showFilters ? "bg-coral text-white" : "bg-white border-2 border-lavender/30 text-textSec"}`}
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* View toggle */}
          <div className="flex bg-white rounded-full border-2 border-lavender/30 p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-full transition-colors ${viewMode === "grid" ? "bg-lavender/30 text-textPrimary" : "text-textMuted"}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-full transition-colors ${viewMode === "list" ? "bg-lavender/30 text-textPrimary" : "text-textMuted"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="card flex flex-wrap gap-4 items-center">
          {/* Pet Type */}
          <div className="flex gap-2">
            {petTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type
                    ? "bg-coral text-white shadow-btn"
                    : "bg-lavender/20 text-textSec hover:bg-lavender/40"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Age */}
          <div className="relative">
            <select
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 rounded-full bg-white border-2 border-coral/20 text-sm font-medium text-textPrimary outline-none cursor-pointer hover:border-coral/40 focus:border-coral focus:ring-2 focus:ring-coral/15 transition-all shadow-sm"
            >
              {ages.map((age) => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-coral">▾</span>
          </div>

          {/* Size */}
          <div className="relative">
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 rounded-full bg-white border-2 border-coral/20 text-sm font-medium text-textPrimary outline-none cursor-pointer hover:border-coral/40 focus:border-coral focus:ring-2 focus:ring-coral/15 transition-all shadow-sm"
            >
              {sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-coral">▾</span>
          </div>

          {/* Gender */}
          <div className="relative">
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 rounded-full bg-white border-2 border-coral/20 text-sm font-medium text-textPrimary outline-none cursor-pointer hover:border-coral/40 focus:border-coral focus:ring-2 focus:ring-coral/15 transition-all shadow-sm"
            >
              {genders.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-coral">▾</span>
          </div>

          {/* Active filters */}
          {(selectedType !== "All" || selectedAge !== "Any Age" || selectedSize !== "Any Size" || selectedGender !== "Any") && (
            <button
              onClick={() => {
                setSelectedType("All");
                setSelectedAge("Any Age");
                setSelectedSize("Any Size");
                setSelectedGender("Any");
              }}
              className="text-sm text-coral hover:underline"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Results count */}
      <p className="text-sm text-textSec">
        Showing <span className="font-semibold text-textPrimary">{filteredPets.length}</span> pets
      </p>

      {/* Pet Grid / List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredPets.map((pet) => (
            <PetRow key={pet.id} pet={pet} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {filteredPets.length === 0 && (
        <div className="card text-center py-12">
          <span className="text-6xl mb-4 block">🐾</span>
          <h3 className="text-lg font-semibold text-textPrimary">No pets found</h3>
          <p className="text-textSec text-sm">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}

function PetCard({ pet }: { pet: typeof allPets[0] }) {
  return (
    <div className="card group">
      <div className="relative mb-4">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-48 object-cover rounded-2xl"
        />
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-sm hover:bg-coral hover:text-white transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <span
          className={`absolute top-3 left-3 badge ${
            pet.status === "Available"
              ? "badge-mint"
              : pet.status === "Pending"
              ? "badge-warning"
              : "badge-muted"
          }`}
        >
          {pet.status}
        </span>
      </div>

      <h4 className="text-lg font-bold text-textPrimary">{pet.name}</h4>
      <p className="text-sm text-textSec">{pet.breed}</p>

      <div className="flex items-center gap-4 mt-2 text-xs text-textMuted">
        <span>🎂 {pet.age}</span>
        <span>📍 {pet.location}</span>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {pet.tags.map((tag) => (
          <span key={tag} className="badge badge-lavender text-[10px]">
            {tag}
          </span>
        ))}
      </div>

      <Link href={`/pets/${pet.id}`} className="btn-secondary w-full mt-4 text-sm">
        View Profile
      </Link>
    </div>
  );
}

function PetRow({ pet }: { pet: typeof allPets[0] }) {
  return (
    <div className="card flex items-center gap-6 p-4">
      <img
        src={pet.image}
        alt={pet.name}
        className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <h4 className="font-bold text-textPrimary">{pet.name}</h4>
          <span
            className={`badge text-[10px] ${
              pet.status === "Available"
                ? "badge-mint"
                : pet.status === "Pending"
                ? "badge-warning"
                : "badge-muted"
            }`}
          >
            {pet.status}
          </span>
        </div>
        <p className="text-sm text-textSec">{pet.breed}</p>
        <div className="flex items-center gap-4 mt-1 text-xs text-textMuted">
          <span>🎂 {pet.age}</span>
          <span>📏 {pet.size}</span>
          <span>📍 {pet.location}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-coral/10 transition-colors">
          <Heart className="w-5 h-5 text-coral" />
        </button>
        <Link href={`/pets/${pet.id}`} className="btn-primary text-sm">
          View
        </Link>
      </div>
    </div>
  );
}
