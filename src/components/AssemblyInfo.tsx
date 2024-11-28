import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import type { AssemblyInfo } from '../types/assembly';

interface Props {
  info: AssemblyInfo;
}

export function AssemblyInfo({ info }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{info.title}</h1>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-5 h-5 mr-2" />
          <span>{info.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{info.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-5 h-5 mr-2" />
          <span>Assemblée Générale des Copropriétaires</span>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{info.description}</p>
    </div>
  );
}