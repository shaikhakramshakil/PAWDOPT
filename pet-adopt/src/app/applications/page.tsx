"use client";

import { useState } from "react";
import { FileText, Clock, CheckCircle, XCircle, ChevronRight, Eye } from "lucide-react";

const applications = [
  {
    id: 1,
    petName: "Buddy",
    petImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=100&h=100&fit=crop",
    breed: "Golden Retriever",
    submittedDate: "Feb 20, 2026",
    status: "approved",
    shelter: "Happy Paws Shelter",
  },
  {
    id: 2,
    petName: "Luna",
    petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&h=100&fit=crop",
    breed: "Siamese Cat",
    submittedDate: "Feb 22, 2026",
    status: "pending",
    shelter: "City Animal Rescue",
  },
  {
    id: 3,
    petName: "Max",
    petImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100&h=100&fit=crop",
    breed: "German Shepherd",
    submittedDate: "Feb 18, 2026",
    status: "reviewing",
    shelter: "Furry Friends Foundation",
  },
  {
    id: 4,
    petName: "Bella",
    petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&h=100&fit=crop",
    breed: "Labrador Mix",
    submittedDate: "Feb 10, 2026",
    status: "rejected",
    shelter: "Second Chance Pets",
  },
];

const statusConfig = {
  pending: { label: "Pending", color: "bg-warning/20 text-amber-700", icon: Clock },
  reviewing: { label: "Under Review", color: "bg-lavender/30 text-purple-700", icon: Eye },
  approved: { label: "Approved", color: "bg-success/20 text-green-700", icon: CheckCircle },
  rejected: { label: "Not Approved", color: "bg-danger/20 text-red-700", icon: XCircle },
};

export default function ApplicationsPage() {
  const [filter, setFilter] = useState("all");

  const filteredApps = filter === "all" 
    ? applications 
    : applications.filter(app => app.status === filter);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-textPrimary flex items-center gap-3">
            <FileText className="w-8 h-8 text-coral" />
            My Applications
          </h1>
          <p className="text-textSec mt-1">Track and manage your adoption applications</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {["all", "pending", "reviewing", "approved", "rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all capitalize ${
                filter === status
                  ? "bg-coral text-white shadow-btn"
                  : "bg-white text-textSec hover:bg-coral/10 border border-coral/20"
              }`}
            >
              {status === "all" ? "All" : statusConfig[status as keyof typeof statusConfig]?.label || status}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card-pastel bg-card-mint p-4">
          <div className="text-3xl font-bold text-green-700">{applications.filter(a => a.status === "approved").length}</div>
          <div className="text-green-600 font-medium">Approved</div>
        </div>
        <div className="card-pastel bg-card-lavender p-4">
          <div className="text-3xl font-bold text-purple-700">{applications.filter(a => a.status === "reviewing").length}</div>
          <div className="text-purple-600 font-medium">Under Review</div>
        </div>
        <div className="card-pastel bg-warning/20 p-4">
          <div className="text-3xl font-bold text-amber-700">{applications.filter(a => a.status === "pending").length}</div>
          <div className="text-amber-600 font-medium">Pending</div>
        </div>
        <div className="card-pastel bg-card-peach p-4">
          <div className="text-3xl font-bold text-textPrimary">{applications.length}</div>
          <div className="text-textSec font-medium">Total</div>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApps.map((app) => {
          const config = statusConfig[app.status as keyof typeof statusConfig];
          const StatusIcon = config.icon;

          return (
            <div
              key={app.id}
              className="card p-4 flex items-center gap-4 hover:shadow-float transition-all cursor-pointer group"
            >
              {/* Pet Image */}
              <img
                src={app.petImage}
                alt={app.petName}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-coral/20"
              />

              {/* Pet Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-textPrimary text-lg">{app.petName}</h3>
                <p className="text-textSec text-sm">{app.breed}</p>
                <p className="text-textMuted text-xs mt-1">{app.shelter}</p>
              </div>

              {/* Submitted Date */}
              <div className="hidden sm:block text-right">
                <div className="text-textMuted text-xs">Submitted</div>
                <div className="text-textSec font-medium">{app.submittedDate}</div>
              </div>

              {/* Status Badge */}
              <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${config.color}`}>
                <StatusIcon className="w-4 h-4" />
                <span className="font-semibold text-sm">{config.label}</span>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-5 h-5 text-textMuted group-hover:text-coral transition-colors" />
            </div>
          );
        })}

        {filteredApps.length === 0 && (
          <div className="card p-12 text-center">
            <FileText className="w-16 h-16 text-textMuted mx-auto mb-4" />
            <h3 className="text-xl font-bold text-textPrimary mb-2">No applications found</h3>
            <p className="text-textSec">Try changing your filter or browse pets to start a new application.</p>
          </div>
        )}
      </div>
    </div>
  );
}
