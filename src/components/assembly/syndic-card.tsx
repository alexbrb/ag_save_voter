import React from "react";
import { Building2, Phone, Mail, MapPin, Award } from "lucide-react";
import type { SyndicInfo } from "../../types/assembly";

interface SyndicCardProps {
  info: SyndicInfo;
}

export function SyndicCard({ info }: SyndicCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">Votre Syndic</h2>
            <p className="text-sm text-muted-foreground">
              {info.description}
            </p>
          </div>
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-sm">
            <Award className="h-4 w-4 text-primary" />
            <div>
              <span className="font-medium">{info.name}</span>
              <p className="text-xs text-muted-foreground">Carte professionnelle : {info.license}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{info.address}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <span>{info.phone}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <Mail className="h-4 w-4 text-primary" />
            <a href={`mailto:${info.email}`} className="text-primary hover:underline">
              {info.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}