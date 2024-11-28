import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { LoginForm } from "./login-form";
import { AccountRequestForm } from "./account-request-form";

export function AuthTabs() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Connexion</TabsTrigger>
            <TabsTrigger value="request">Nouveau compte</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="mt-6">
            <LoginForm />
          </TabsContent>
          <TabsContent value="request" className="mt-6">
            <AccountRequestForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}