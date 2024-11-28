import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import type { AccountRequestData } from '../types/assembly';

export function AccountRequest() {
  const [formData, setFormData] = useState<AccountRequestData>({
    email: '',
    fullName: '',
    propertyUnit: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle account request logic here
    console.log('Account request:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Nom complet
        </label>
        <input
          type="text"
          id="fullName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="requestEmail" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="requestEmail"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="propertyUnit" className="block text-sm font-medium text-gray-700">
          Numéro d'appartement
        </label>
        <input
          type="text"
          id="propertyUnit"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.propertyUnit}
          onChange={(e) => setFormData({ ...formData, propertyUnit: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Justificatif de propriété
        </label>
        <input
          type="file"
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          onChange={(e) => setFormData({ ...formData, proofDocument: e.target.files?.[0] })}
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <UserPlus className="w-5 h-5 mr-2" />
        Demander un compte
      </button>
    </form>
  );
}