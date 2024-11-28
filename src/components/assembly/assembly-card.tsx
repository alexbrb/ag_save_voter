import React from "react";
import { Calendar, MapPin, Users, FileText, ExternalLink } from "lucide-react";
import type { AssemblyInfo } from "../../types/assembly";
import { generateGoogleMapsUrl } from "../../lib/utils";

interface AssemblyCardProps {
  info: AssemblyInfo;
}

export function AssemblyCard({ info }: AssemblyCardProps) {
  const mapsUrl = generateGoogleMapsUrl(info.location);

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">{info.title}</h2>
          <p className="text-sm text-muted-foreground">{info.description}</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-sm">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{info.date}</span>
          </div>
          
          <div className="flex items-start space-x-3 text-sm">
            <MapPin className="h-4 w-4 text-primary mt-1" />
            <div>
              <span>{info.location}</span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-1 text-primary hover:underline"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                <span>Voir sur Google Maps</span>
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span>Assemblée Générale des Copropriétaires</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <FileText className="h-4 w-4 text-primary" />
            <span>Documents disponibles après connexion</span>
          </div>
        </div>
      </div>
    </div>
  );
}