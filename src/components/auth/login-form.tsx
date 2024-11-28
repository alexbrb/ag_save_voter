import React from "react";
import { Mail, Lock } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="nom@exemple.fr"
            className="pl-8"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Mot de passe</Label>
        <div className="relative">
          <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            type="password"
            className="pl-8"
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Se connecter
      </Button>
    </form>
  );
}