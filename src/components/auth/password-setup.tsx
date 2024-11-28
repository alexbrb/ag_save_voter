import React, { useState } from "react";
import { Lock, Shield, User, Mail, LogIn } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface PasswordSetupProps {
  userInfo: {
    fullName: string;
    email: string;
  };
  onComplete: () => void;
}

export function PasswordSetup({ userInfo, onComplete }: PasswordSetupProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordSet, setIsPasswordSet] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    
    // Here you would typically send the password to your backend
    console.log("Password set:", { password });
    setIsPasswordSet(true);
  };

  if (isPasswordSet) {
    return (
      <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
          <Shield className="w-6 h-6 text-green-600" />
        </div>
        
        <h2 className="mt-4 text-xl font-semibold">Compte sécurisé</h2>
        <p className="mt-2 text-sm text-slate-500">
          Votre compte est maintenant prêt. Vous pouvez rejoindre l'Assemblée.
        </p>

        <div className="mt-6">
          <Button 
            onClick={onComplete}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Rejoindre l'Assemblée
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-slate-200">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full">
        <Shield className="w-6 h-6 text-blue-600" />
      </div>
      
      <h2 className="mt-4 text-xl font-semibold text-center">Sécurisez votre compte</h2>
      <p className="mt-2 text-sm text-center text-slate-500">
        Votre compte a été validé. Veuillez définir votre mot de passe pour y accéder.
      </p>

      <div className="mt-6 p-4 bg-slate-50 rounded-lg">
        <div className="flex items-center space-x-3 text-sm">
          <User className="w-4 h-4 text-slate-400" />
          <span className="font-medium">{userInfo.fullName}</span>
        </div>
        <div className="mt-2 flex items-center space-x-3 text-sm">
          <Mail className="w-4 h-4 text-slate-400" />
          <span>{userInfo.email}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <div className="relative">
            <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              className="pl-8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
          <div className="relative">
            <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              type="password"
              className="pl-8"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <Button type="submit" className="w-full">
          Valider mon mot de passe
        </Button>
      </form>
    </div>
  );
}