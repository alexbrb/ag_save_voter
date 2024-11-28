import React from "react";
import { Check, Clock, X } from "lucide-react";
import { cn } from "../../lib/utils";

export type RequestStatus = "sent" | "viewed" | "accepted" | "rejected";

interface RequestStatusProps {
  status: RequestStatus;
}

export function RequestStatus({ status }: RequestStatusProps) {
  const steps = [
    {
      label: "Demande envoyée",
      completed: ["sent", "viewed", "accepted", "rejected"].includes(status),
      icon: <Clock className="w-5 h-5" />,
    },
    {
      label: "Demande vue",
      completed: ["viewed", "accepted", "rejected"].includes(status),
      icon: <Check className="w-5 h-5" />,
    },
    {
      label: status === "rejected" ? "Demande refusée" : "Demande acceptée",
      completed: ["accepted", "rejected"].includes(status),
      icon: status === "rejected" ? <X className="w-5 h-5" /> : <Check className="w-5 h-5" />,
    },
  ];

  return (
    <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full",
                step.completed
                  ? status === "rejected" && index === 2
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                  : "bg-slate-100 text-slate-400"
              )}
            >
              {step.icon}
            </div>
            <div className="ml-4 flex-1">
              <p
                className={cn(
                  "text-sm font-medium",
                  step.completed
                    ? status === "rejected" && index === 2
                      ? "text-red-600"
                      : "text-green-600"
                    : "text-slate-500"
                )}
              >
                {step.label}
              </p>
              {index === 2 && step.completed && (
                <p className="mt-1 text-sm text-slate-500">
                  {status === "rejected"
                    ? "Merci de nous appeler directement"
                    : "Consulter vos mails"}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}