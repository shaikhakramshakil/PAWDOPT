"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, ChevronLeft, User, Home, Heart, FileText } from "lucide-react";

const steps = [
  { id: 1, label: "Personal Info", icon: User },
  { id: 2, label: "Living Situation", icon: Home },
  { id: 3, label: "Pet Care Plan", icon: Heart },
  { id: 4, label: "Agreements", icon: FileText },
];

export default function AdoptionFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dob: "",
    idType: "",
    idNumber: "",
    // Step 2
    housingType: "",
    ownOrRent: "",
    landlordPermission: "",
    hasYard: "",
    fencedYard: "",
    householdMembers: "",
    childrenAges: "",
    currentPets: "",
    // Step 3
    workSchedule: "",
    hoursAlone: "",
    primaryCaregiver: "",
    vetContact: "",
    petExperience: "",
    whyAdopting: "",
    emergencyPlan: "",
    // Step 4
    homeVisitConsent: false,
    termsAgreed: false,
    returnPolicyAgreed: false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const progress = (currentStep / 4) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-textPrimary">🐾 Adoption Application</h1>
        <p className="text-textSec text-sm mt-1">
          Complete the form below to start your adoption journey
        </p>
      </div>

      {/* Progress Steps */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isComplete = currentStep > step.id;
            const isCurrent = currentStep === step.id;
            return (
              <div
                key={step.id}
                className={`flex-1 flex flex-col items-center ${i < steps.length - 1 ? "relative" : ""}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                    isComplete
                      ? "bg-success text-white"
                      : isCurrent
                      ? "bg-coral text-white shadow-btn"
                      : "bg-lavender/30 text-textMuted"
                  }`}
                >
                  {isComplete ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                <span
                  className={`text-xs font-medium ${
                    isCurrent ? "text-coral" : "text-textMuted"
                  }`}
                >
                  {step.label}
                </span>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className={`absolute top-5 left-[60%] w-[80%] h-0.5 ${
                      isComplete ? "bg-success" : "bg-lavender/30"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Form Steps */}
      <div className="card">
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-textPrimary">👤 Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Full Name" value={formData.fullName} onChange={(v) => updateField("fullName", v)} required />
              <InputField label="Email Address" type="email" value={formData.email} onChange={(v) => updateField("email", v)} required />
              <InputField label="Phone Number" type="tel" value={formData.phone} onChange={(v) => updateField("phone", v)} required />
              <InputField label="Date of Birth" type="date" value={formData.dob} onChange={(v) => updateField("dob", v)} required />
            </div>

            <InputField label="Street Address" value={formData.address} onChange={(v) => updateField("address", v)} required />

            <div className="grid grid-cols-3 gap-4">
              <InputField label="City" value={formData.city} onChange={(v) => updateField("city", v)} required />
              <InputField label="State" value={formData.state} onChange={(v) => updateField("state", v)} required />
              <InputField label="ZIP Code" value={formData.zip} onChange={(v) => updateField("zip", v)} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectField
                label="ID Proof Type"
                value={formData.idType}
                onChange={(v) => updateField("idType", v)}
                options={["Driver's License", "Passport", "State ID", "Other"]}
                required
              />
              <InputField label="ID Number" value={formData.idNumber} onChange={(v) => updateField("idNumber", v)} required />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-textPrimary">🏠 Living Situation</h2>

            <RadioGroup
              label="Housing Type"
              value={formData.housingType}
              onChange={(v) => updateField("housingType", v)}
              options={["House", "Apartment", "Condo", "Townhouse", "Other"]}
            />

            <RadioGroup
              label="Do you own or rent?"
              value={formData.ownOrRent}
              onChange={(v) => updateField("ownOrRent", v)}
              options={["Own", "Rent"]}
            />

            {formData.ownOrRent === "Rent" && (
              <RadioGroup
                label="Do you have landlord permission for pets?"
                value={formData.landlordPermission}
                onChange={(v) => updateField("landlordPermission", v)}
                options={["Yes", "No", "Need to Check"]}
              />
            )}

            <RadioGroup
              label="Do you have a yard or outdoor space?"
              value={formData.hasYard}
              onChange={(v) => updateField("hasYard", v)}
              options={["Yes", "No"]}
            />

            {formData.hasYard === "Yes" && (
              <RadioGroup
                label="Is it fenced?"
                value={formData.fencedYard}
                onChange={(v) => updateField("fencedYard", v)}
                options={["Yes", "No", "Partially"]}
              />
            )}

            <InputField
              label="Number of household members"
              type="number"
              value={formData.householdMembers}
              onChange={(v) => updateField("householdMembers", v)}
              required
            />

            <InputField
              label="Ages of children (if any)"
              value={formData.childrenAges}
              onChange={(v) => updateField("childrenAges", v)}
              placeholder="e.g., 5, 8, 12 or N/A"
            />

            <TextareaField
              label="Current pets (species, breed, age)"
              value={formData.currentPets}
              onChange={(v) => updateField("currentPets", v)}
              placeholder="List any current pets or write 'None'"
            />
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-textPrimary">💛 Pet Care Plan</h2>

            <SelectField
              label="Work Schedule"
              value={formData.workSchedule}
              onChange={(v) => updateField("workSchedule", v)}
              options={["Work from home", "Full-time office", "Part-time", "Flexible/Hybrid", "Retired", "Student"]}
              required
            />

            <SelectField
              label="Hours pet will be alone daily"
              value={formData.hoursAlone}
              onChange={(v) => updateField("hoursAlone", v)}
              options={["0-2 hours", "2-4 hours", "4-6 hours", "6-8 hours", "8+ hours"]}
              required
            />

            <InputField
              label="Primary caregiver name"
              value={formData.primaryCaregiver}
              onChange={(v) => updateField("primaryCaregiver", v)}
              required
            />

            <InputField
              label="Veterinarian name & contact (if any)"
              value={formData.vetContact}
              onChange={(v) => updateField("vetContact", v)}
              placeholder="Name, Phone or 'Will find one'"
            />

            <TextareaField
              label="Describe your experience with pets"
              value={formData.petExperience}
              onChange={(v) => updateField("petExperience", v)}
              placeholder="Types of pets you've cared for, how long, etc."
              required
            />

            <TextareaField
              label="Why do you want to adopt this pet?"
              value={formData.whyAdopting}
              onChange={(v) => updateField("whyAdopting", v)}
              required
            />

            <TextareaField
              label="Emergency plan if you can no longer care for the pet"
              value={formData.emergencyPlan}
              onChange={(v) => updateField("emergencyPlan", v)}
              required
            />
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-textPrimary">📝 Review & Agreements</h2>

            <div className="p-4 rounded-2xl bg-lavender/10">
              <p className="text-sm text-textSec mb-4">
                Please review the following agreements carefully before submitting your application.
              </p>

              <CheckboxField
                label="I consent to a home visit by shelter staff before adoption approval"
                checked={formData.homeVisitConsent}
                onChange={(v) => updateField("homeVisitConsent", v)}
              />

              <CheckboxField
                label="I agree to the Terms & Conditions and Privacy Policy"
                checked={formData.termsAgreed}
                onChange={(v) => updateField("termsAgreed", v)}
              />

              <CheckboxField
                label="I understand and agree to the return policy if the adoption doesn't work out"
                checked={formData.returnPolicyAgreed}
                onChange={(v) => updateField("returnPolicyAgreed", v)}
              />
            </div>

            <div className="p-4 rounded-2xl bg-softYellow/30">
              <p className="text-sm text-textSec">
                <strong>📌 What happens next?</strong>
                <br />
                After submitting, our team will review your application within 2-3 business days. 
                You&apos;ll receive an email with next steps including scheduling a home visit.
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-lavender/20">
          {currentStep > 1 ? (
            <button onClick={prevStep} className="btn-secondary">
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <Link href="/pets" className="btn-secondary">
              Cancel
            </Link>
          )}

          {currentStep < 4 ? (
            <button onClick={nextStep} className="btn-primary">
              Continue
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => alert("Application submitted! 🎉")}
              disabled={!formData.homeVisitConsent || !formData.termsAgreed || !formData.returnPolicyAgreed}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Application 🐾
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ——— Reusable Form Components ———

function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-textPrimary">
        {label} {required && <span className="text-coral">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-lavender/30 focus:border-coral outline-none text-sm transition-colors"
        required={required}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-textPrimary">
        {label} {required && <span className="text-coral">*</span>}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-lavender/30 focus:border-coral outline-none text-sm transition-colors cursor-pointer"
        required={required}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-textPrimary">
        {label} {required && <span className="text-coral">*</span>}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="mt-1 w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-lavender/30 focus:border-coral outline-none text-sm transition-colors resize-none"
        required={required}
      />
    </label>
  );
}

function RadioGroup({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <span className="text-sm font-medium text-textPrimary block mb-2">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              value === opt
                ? "bg-coral text-white shadow-btn"
                : "bg-lavender/20 text-textSec hover:bg-lavender/40"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function CheckboxField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3 mb-4 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-5 h-5 rounded-lg border-2 border-lavender/30 text-coral focus:ring-coral cursor-pointer"
      />
      <span className="text-sm text-textSec">{label}</span>
    </label>
  );
}
