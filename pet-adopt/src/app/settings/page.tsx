"use client";

import { useState } from "react";
import { 
  Settings, User, Bell, Shield, Palette, Globe, Mail, 
  Heart, Camera, Save, Eye, EyeOff, ChevronRight 
} from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    newPets: true,
    applicationUpdates: true,
    events: false,
    newsletter: true,
  });

  const [preferences, setPreferences] = useState({
    petType: "dogs",
    petSize: "medium",
    ageRange: "any",
  });

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-textPrimary flex items-center gap-3">
          <Settings className="w-8 h-8 text-coral" />
          Settings
        </h1>
        <p className="text-textSec mt-1">Manage your account and preferences</p>
      </div>

      {/* Profile Section */}
      <div className="card p-6">
        <h2 className="text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-coral" />
          Profile Information
        </h2>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-mint flex items-center justify-center text-3xl font-bold text-green-700 ring-4 ring-white shadow-card">
                S
              </div>
              <button className="absolute bottom-0 right-0 p-2 rounded-full bg-coral text-white shadow-btn hover:scale-110 transition-transform">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <span className="text-sm text-textSec">Change Photo</span>
          </div>

          {/* Form */}
          <div className="flex-1 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-textPrimary mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Sarah Johnson"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-textPrimary mb-1">Email</label>
              <input
                type="email"
                defaultValue="sarah@example.com"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-textPrimary mb-1">Phone</label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-textPrimary mb-1">Location</label>
              <input
                type="text"
                defaultValue="San Francisco, CA"
                className="input-field"
              />
            </div>
          </div>
        </div>

        <button className="btn-primary mt-6 flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      {/* Pet Preferences */}
      <div className="card p-6">
        <h2 className="text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-coral" />
          Pet Preferences
        </h2>
        <p className="text-textSec text-sm mb-4">Help us show you the most relevant pets!</p>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-textPrimary mb-2">Preferred Pet Type</label>
            <div className="flex flex-wrap gap-2">
              {["Dogs", "Cats", "Birds", "Rabbits", "Any"].map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    preferences.petType === type.toLowerCase()
                      ? "bg-coral text-white shadow-btn"
                      : "bg-coral/10 text-textSec hover:bg-coral/20"
                  }`}
                  onClick={() => setPreferences({ ...preferences, petType: type.toLowerCase() })}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-textPrimary mb-2">Preferred Size</label>
            <div className="flex flex-wrap gap-2">
              {["Small", "Medium", "Large", "Any"].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    preferences.petSize === size.toLowerCase()
                      ? "bg-lavender text-purple-700"
                      : "bg-lavender/20 text-textSec hover:bg-lavender/40"
                  }`}
                  onClick={() => setPreferences({ ...preferences, petSize: size.toLowerCase() })}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-textPrimary mb-2">Age Range</label>
            <div className="flex flex-wrap gap-2">
              {["Baby", "Young", "Adult", "Senior", "Any"].map((age) => (
                <button
                  key={age}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    preferences.ageRange === age.toLowerCase()
                      ? "bg-mint text-green-700"
                      : "bg-mint/20 text-textSec hover:bg-mint/40"
                  }`}
                  onClick={() => setPreferences({ ...preferences, ageRange: age.toLowerCase() })}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="card p-6">
        <h2 className="text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5 text-coral" />
          Notifications
        </h2>

        <div className="space-y-4">
          {[
            { key: "email", label: "Email Notifications", desc: "Receive updates via email", icon: Mail },
            { key: "push", label: "Push Notifications", desc: "Browser and mobile alerts", icon: Bell },
            { key: "newPets", label: "New Pet Matches", desc: "When pets matching your preferences are added", icon: Heart },
            { key: "applicationUpdates", label: "Application Updates", desc: "Status changes on your applications", icon: Shield },
            { key: "events", label: "Event Reminders", desc: "Upcoming adoption events near you", icon: Globe },
            { key: "newsletter", label: "Weekly Newsletter", desc: "Tips, stories, and featured pets", icon: Mail },
          ].map((item) => {
            const Icon = item.icon;
            const isEnabled = notifications[item.key as keyof typeof notifications];
            return (
              <div
                key={item.key}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-bg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-lavender/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-lavender" />
                  </div>
                  <div>
                    <div className="font-semibold text-textPrimary">{item.label}</div>
                    <div className="text-sm text-textSec">{item.desc}</div>
                  </div>
                </div>
                <button
                  onClick={() => setNotifications({ ...notifications, [item.key]: !isEnabled })}
                  className={`w-12 h-7 rounded-full transition-all flex items-center px-1 ${
                    isEnabled ? "bg-success" : "bg-textMuted"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      isEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Security */}
      <div className="card p-6">
        <h2 className="text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-coral" />
          Security
        </h2>

        <div className="space-y-3">
          {[
            { label: "Change Password", desc: "Update your account password", href: "#" },
            { label: "Two-Factor Authentication", desc: "Add extra security to your account", href: "#" },
            { label: "Login History", desc: "View recent account activity", href: "#" },
            { label: "Delete Account", desc: "Permanently remove your account", href: "#", danger: true },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center justify-between p-4 rounded-2xl transition-colors ${
                item.danger ? "hover:bg-danger/10" : "hover:bg-bg"
              }`}
            >
              <div className="text-left">
                <div className={`font-semibold ${item.danger ? "text-danger" : "text-textPrimary"}`}>
                  {item.label}
                </div>
                <div className="text-sm text-textSec">{item.desc}</div>
              </div>
              <ChevronRight className={`w-5 h-5 ${item.danger ? "text-danger" : "text-textMuted"}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
