import React from 'react';
import { Search, Shield, Database, Brain } from 'lucide-react';

interface StepCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function StepCard({ number, icon, title, description }: StepCardProps) {
  return (
    <div className="p-8 bg-slate-800/50 rounded-2xl border border-white/5">
      <div className="flex items-center space-x-4 mb-6">
        <div className="text-blue-400">{icon}</div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-blue-400">{number}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function Investigation() {
  return (
    <div className="min-h-screen py-24">
      <div className="px-4 mx-auto max-w-7xl">
        <h1 className="mb-12 text-5xl font-bold text-white">Guide d'Investigation OSINT</h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Méthodologie</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Bonnes Pratiques</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <StepCard
            number="01"
            icon={<Search className="w-8 h-8" />}
            title="Collecte d'Informations"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam."
          />
          
          <StepCard
            number="02"
            icon={<Shield className="w-8 h-8" />}
            title="Analyse des Sources"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
          />
          
          <StepCard
            number="03"
            icon={<Database className="w-8 h-8" />}
            title="Vérification des Données"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
          />
          
          <StepCard
            number="04"
            icon={<Brain className="w-8 h-8" />}
            title="Synthèse et Rapport"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
          />
        </div>
      </div>
    </div>
  );
}

export default Investigation;