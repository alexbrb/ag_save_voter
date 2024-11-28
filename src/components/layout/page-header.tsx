import React from "react";
import { Building } from "lucide-react";

export function PageHeader() {
  return (
    <div className="text-center mb-8">
      <Building className="w-12 h-12 mx-auto text-primary" />
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Résidence Les Jardins</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Participez à votre Assemblée en ligne
      </p>
    </div>
  );
}