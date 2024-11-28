import React, { useState, useEffect } from "react";
import { UserPlus, Mail, Key, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { testUser } from "../../config/test-user";
import { RequestStatus } from "./request-status";
import { PasswordSetup } from "./password-setup";

export function AccountRequestForm() {
  const [formData, setFormData] = useState({
    fullName: testUser.fullName,
    email: testUser.email,
    phone: testUser.phone,
    inviteCode: testUser.inviteCode
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [requestStatus, setRequestStatus] = useState<RequestStatus | null>(null);
  const [showPasswordSetup, setShowPasswordSetup] = useState(false);

  useEffect(() => {
    const isValid = 
      formData.fullName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.inviteCode.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      /^[0-9\s]{10,}$/.test(formData.phone.replace(/\s/g, ''));

    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Account request submitted:', formData);
      setRequestStatus("sent");
      
      // Simulate status changes for demonstration
      setTimeout(() => setRequestStatus("viewed"), 2000);
      setTimeout(() => {
        setRequestStatus("accepted");
        setShowPasswordSetup(true);
      }, 4000);
    }
  };

  const handlePasswordSetupComplete = () => {
    // Here you would typically redirect to the login page
    console.log("Password setup completed");
  };

  if (showPasswordSetup) {
    return (
      <PasswordSetup
        userInfo={{
          fullName: formData.fullName,
          email: formData.email,
        }}
        onComplete={handlePasswordSetupComplete}
      />
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nom complet</Label>
          <div className="relative">
            <UserPlus className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="fullName"
              type="text"
              placeholder="Jean Dupont"
              className="pl-8"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="requestEmail">Email</Label>
          <div className="relative">
            <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="requestEmail"
              type="email"
              placeholder="nom@exemple.fr"
              className="pl-8"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone</Label>
          <div className="relative">
            <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              placeholder="06 12 34 56 78"
              className="pl-8"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="inviteCode">Code d'invitation</Label>
          <div className="relative">
            <Key className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="inviteCode"
              type="text"
              placeholder="XXXX-XXXX-XXXX"
              className="pl-8 uppercase"
              value={formData.inviteCode}
              onChange={(e) => setFormData({ ...formData, inviteCode: e.target.value.toUpperCase() })}
              required
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Le code d'invitation se trouve sur la première page de votre convocation envoyée par le syndic
          </p>
        </div>

        <Button 
          type="submit" 
          variant={isFormValid ? "default" : "secondary"}
          className="w-full"
          disabled={!isFormValid || requestStatus !== null}
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Demander un compte
        </Button>
      </form>

      {requestStatus && !showPasswordSetup && <RequestStatus status={requestStatus} />}
    </div>
  );
}