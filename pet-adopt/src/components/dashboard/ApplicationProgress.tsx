import { Check, Clock, FileCheck } from "lucide-react";

export default function ApplicationProgress() {
  const steps = [
    { label: "Application Submitted", done: true },
    { label: "Under Review", done: true },
    { label: "Home Visit Scheduled", done: false },
    { label: "Approval", done: false },
  ];

  const progress = (steps.filter((s) => s.done).length / steps.length) * 100;

  return (
    <div className="card border-2 border-coral/20">
      <h3 className="text-lg font-bold text-textPrimary mb-4 flex items-center gap-2">
        <FileCheck className="w-5 h-5 text-coral" />
        Application Progress
      </h3>

      {/* Progress bar */}
      <div className="progress-bar mb-6">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Checklist */}
      <ul className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex items-center gap-3">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                step.done
                  ? "bg-success text-white"
                  : "bg-gray-200 text-textMuted"
              }`}
            >
              {step.done ? <Check className="w-4 h-4" /> : i + 1}
            </span>
            <span className={step.done ? "text-textPrimary" : "text-textMuted"}>
              {step.label}
            </span>
          </li>
        ))}
      </ul>

      {/* Shelter response */}
      <div className="mt-6 p-3 rounded-2xl bg-lavender/20 flex items-center gap-2 text-sm text-textSec">
        <Clock className="w-4 h-4 text-lavender" />
        Shelter typically responds within 2 days
      </div>
    </div>
  );
}
