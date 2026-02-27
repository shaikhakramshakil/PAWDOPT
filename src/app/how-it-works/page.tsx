import Link from "next/link";
import { FileText, Home, Heart, Shield, HelpCircle, Download } from "lucide-react";

const sections = [
  {
    id: "how-it-works",
    icon: FileText,
    title: "How Adoption Works",
    content: [
      { step: "1. Browse Pets", desc: "Search our database of adorable pets looking for homes. Use filters to find your perfect match." },
      { step: "2. Submit Application", desc: "Complete our adoption form with your personal info, living situation, and pet care plans." },
      { step: "3. Application Review", desc: "Our team reviews your application within 2-3 business days." },
      { step: "4. Home Visit", desc: "A shelter representative will schedule a home visit to ensure a safe environment." },
      { step: "5. Meet & Greet", desc: "Visit the shelter to meet your potential new family member!" },
      { step: "6. Finalize Adoption", desc: "Sign the adoption contract, pay the adoption fee, and welcome your new pet home!" },
    ],
  },
  {
    id: "eligibility",
    icon: Shield,
    title: "Eligibility Requirements",
    bullets: [
      "Must be at least 21 years of age",
      "Valid government-issued ID required",
      "Proof of stable housing (rent or own)",
      "Landlord approval letter if renting",
      "All current pets must be spayed/neutered and up-to-date on vaccinations",
      "Ability to provide food, shelter, medical care, and love",
      "Agreement to home visit before adoption",
    ],
  },
  {
    id: "fees",
    icon: Heart,
    title: "Adoption Fees",
    table: [
      { type: "Dogs (Adult)", fee: "₹3,000 - ₹7,000" },
      { type: "Dogs (Puppy)", fee: "₹5,000 - ₹10,000" },
      { type: "Cats (Adult)", fee: "₹1,500 - ₹3,000" },
      { type: "Cats (Kitten)", fee: "₹2,500 - ₹4,000" },
      { type: "Small Animals", fee: "₹500 - ₹1,500" },
    ],
    note: "Fees include spay/neuter surgery, vaccinations, microchip, and a complimentary vet checkup.",
  },
  {
    id: "preparation",
    icon: Home,
    title: "Preparing Your Home",
    checklist: [
      "Pet-proof your home (secure loose wires, remove toxic plants)",
      "Purchase food and water bowls",
      "Get a comfortable bed or crate",
      "Buy appropriate food (ask shelter for brand recommendations)",
      "Stock up on treats and toys",
      "Find a local veterinarian",
      "Set up a designated pet area",
      "Install baby gates if needed",
      "Remove hazardous chemicals from reach",
    ],
  },
];

const faqs = [
  {
    q: "How long does the adoption process take?",
    a: "Typically 1-2 weeks from application to bringing your pet home, depending on scheduling and approval.",
  },
  {
    q: "Can I adopt if I rent my home?",
    a: "Yes! You'll need written permission from your landlord confirming pets are allowed.",
  },
  {
    q: "What if the adoption doesn't work out?",
    a: "We have a 30-day return policy. If for any reason you can't keep your pet, please return them to us rather than rehoming independently.",
  },
  {
    q: "Are the pets spayed/neutered?",
    a: "Yes, all pets are spayed or neutered before adoption. Puppies and kittens under age will be scheduled for surgery.",
  },
  {
    q: "Can I meet the pet before applying?",
    a: "You can visit during shelter hours, but we recommend submitting an application first to reserve your spot.",
  },
  {
    q: "Do you offer post-adoption support?",
    a: "Absolutely! We provide resources, training tips, and our team is always available for questions.",
  },
];

export default function GuidelinesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-coral/10 text-coral font-semibold text-sm mb-3">
          Core Feature
        </span>
        <h1 className="text-3xl font-bold text-textPrimary">📚 Adoption Guidelines</h1>
        <p className="text-textSec mt-2">
          Everything you need to know about adopting your new best friend
        </p>
      </div>

      {/* Quick Nav */}
      <div className="card flex flex-wrap gap-3 justify-center">
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="badge badge-lavender hover:bg-lavender transition-colors cursor-pointer"
          >
            {sec.title}
          </a>
        ))}
        <a href="#faqs" className="badge badge-lavender hover:bg-lavender transition-colors cursor-pointer">
          FAQs
        </a>
      </div>

      {/* Sections */}
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <section key={section.id} id={section.id} className="card scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-coral" />
              </div>
              <h2 className="text-xl font-bold text-textPrimary">{section.title}</h2>
            </div>

            {/* Steps */}
            {section.content && (
              <div className="space-y-4">
                {section.content.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-mint/30 flex items-center justify-center text-sm font-bold text-green-700 flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary">{item.step}</h4>
                      <p className="text-sm text-textSec">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bullets */}
            {section.bullets && (
              <ul className="space-y-2">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-textSec">
                    <span className="text-coral mt-1">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {/* Table */}
            {section.table && (
              <>
                <div className="rounded-2xl overflow-hidden border border-lavender/20">
                  <table className="w-full">
                    <thead className="bg-lavender/10">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-textPrimary">Pet Type</th>
                        <th className="text-right px-4 py-3 text-sm font-semibold text-textPrimary">Adoption Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.map((row, i) => (
                        <tr key={i} className="border-t border-lavender/10">
                          <td className="px-4 py-3 text-sm text-textSec">{row.type}</td>
                          <td className="px-4 py-3 text-sm text-textPrimary font-semibold text-right">{row.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {section.note && (
                  <p className="text-xs text-textMuted mt-3 italic">{section.note}</p>
                )}
              </>
            )}

            {/* Checklist */}
            {section.checklist && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {section.checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-textSec">
                    <span className="w-5 h-5 rounded bg-mint/30 flex items-center justify-center text-green-700 flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}

      {/* FAQs */}
      <section id="faqs" className="card scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-coral" />
          </div>
          <h2 className="text-xl font-bold text-textPrimary">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-4 rounded-2xl bg-lavender/10">
              <h4 className="font-semibold text-textPrimary mb-1">{faq.q}</h4>
              <p className="text-sm text-textSec">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Checklist CTA */}
      <div className="card bg-card-peach text-white text-center">
        <Download className="w-10 h-10 mx-auto mb-4 opacity-80" />
        <h3 className="text-lg font-bold mb-2">Download Preparation Checklist</h3>
        <p className="text-sm opacity-90 mb-4">
          Get a printable PDF with everything you need to prepare for your new pet
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-coral font-semibold shadow-btn hover:scale-105 transition-transform">
          Download PDF
        </button>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/pets" className="btn-primary text-lg px-8 py-4">
          🐾 Start Browsing Pets
        </Link>
      </div>
    </div>
  );
}
