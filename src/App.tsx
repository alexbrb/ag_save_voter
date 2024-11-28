import React from "react";
import { PageHeader } from "./components/layout/page-header";
import { AssemblyCard } from "./components/assembly/assembly-card";
import { SyndicCard } from "./components/assembly/syndic-card";
import { AuthTabs } from "./components/auth/auth-tabs";
import { PoweredBy } from "./components/layout/powered-by";
import { assemblyInfo, syndicInfo } from "./config/assembly";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <PageHeader />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <AssemblyCard info={assemblyInfo} />
            <SyndicCard info={syndicInfo} />
          </div>

          <div className="space-y-6">
            <AuthTabs />
          </div>
        </div>

        <div className="mt-12 text-center">
          <PoweredBy />
        </div>
      </div>
    </div>
  );
}

export default App;