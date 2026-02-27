"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const shelters = [
  {
    id: 1,
    name: "Paws & Hearts Rescue",
    address: "12, MG Road, Andheri West, Mumbai, MH 400058",
    phone: "+91 22 2634 5678",
    email: "adopt@pawshearts.org",
    hours: "Mon-Sat 10am-6pm, Sun 12pm-5pm",
  },
  {
    id: 2,
    name: "Happy Tails Shelter",
    address: "45, Connaught Place, New Delhi, DL 110001",
    phone: "+91 11 2345 6789",
    email: "info@happytails.org",
    hours: "Mon-Fri 9am-5pm, Sat 10am-4pm",
  },
  {
    id: 3,
    name: "Furry Friends Foundation",
    address: "78, Indiranagar, 100 Feet Road, Bengaluru, KA 560038",
    phone: "+91 80 4567 8901",
    email: "hello@furryfriends.org",
    hours: "Tue-Sun 11am-7pm",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shelter: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-coral/10 text-coral font-semibold text-sm mb-3">
          Core Feature
        </span>
        <h1 className="text-3xl font-bold text-textPrimary">📬 Contact Shelter</h1>
        <p className="text-textSec mt-2">
          Reach out to our partnered shelters across India — we&apos;re here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="card">
          <h2 className="text-lg font-bold text-textPrimary mb-6">Send a Message</h2>

          {submitted ? (
            <div className="text-center py-12">
              <span className="text-6xl mb-4 block">💌</span>
              <h3 className="text-xl font-bold text-textPrimary mb-2">Message Sent!</h3>
              <p className="text-textSec">
                Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary mt-6"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-textPrimary">
                    Your Name <span className="text-coral">*</span>
                  </span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-lavender/30 focus:border-coral outline-none text-sm transition-colors"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-textPrimary">
                    Email <span className="text-coral">*</span>
                  </span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-lavender/30 focus:border-coral outline-none text-sm transition-colors"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-textPrimary">Select Shelter</span>
                <select
                  value={formData.shelter}
                  onChange={(e) => setFormData({ ...formData, shelter: e.target.value })}
                  className="mt-1 w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-lavender/30 focus:border-coral outline-none text-sm transition-colors cursor-pointer"
                >
                  <option value="">General Inquiry</option>
                  {shelters.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-textPrimary">
                  Subject <span className="text-coral">*</span>
                </span>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g., Question about Buddy (Pet #123)"
                  className="mt-1 w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-lavender/30 focus:border-coral outline-none text-sm transition-colors"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-textPrimary">
                  Message <span className="text-coral">*</span>
                </span>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="mt-1 w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-lavender/30 focus:border-coral outline-none text-sm transition-colors resize-none"
                  required
                />
              </label>

              <button type="submit" className="btn-primary w-full">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Shelter List */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-textPrimary">Our Partner Shelters</h2>

          {shelters.map((shelter) => (
            <div key={shelter.id} className="card hover:shadow-float">
              <h3 className="font-bold text-coral text-lg mb-3">{shelter.name}</h3>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3 text-textSec">
                  <MapPin className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                  <span>{shelter.address}</span>
                </div>

                <div className="flex items-center gap-3 text-textSec">
                  <Phone className="w-4 h-4 text-coral" />
                  <a href={`tel:${shelter.phone}`} className="hover:text-coral transition-colors">
                    {shelter.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-textSec">
                  <Mail className="w-4 h-4 text-coral" />
                  <a href={`mailto:${shelter.email}`} className="hover:text-coral transition-colors">
                    {shelter.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-textSec">
                  <Clock className="w-4 h-4 text-coral" />
                  <span>{shelter.hours}</span>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-4 h-32 rounded-2xl bg-lavender/20 flex items-center justify-center text-textMuted text-sm">
                🗺️ Map View Coming Soon
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="card bg-card-mint text-center">
        <h3 className="text-lg font-bold text-textPrimary mb-2">🚨 Found a Stray or Emergency?</h3>
        <p className="text-textSec text-sm mb-4">
          If you&apos;ve found a stray animal or need immediate assistance, please call our 24/7 hotline.
        </p>
        <a
          href="tel:+911800-111-565"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-coral font-bold shadow-btn hover:scale-105 transition-transform"
        >
          <Phone className="w-5 h-5" />
          1800-111-565 (Animal Helpline)
        </a>
      </div>
    </div>
  );
}
