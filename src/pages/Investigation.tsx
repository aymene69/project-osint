import React from 'react';
import { Search, Filter, FileSearch, Brain } from 'lucide-react';

function Investigation() {
  return (
    <div className="min-h-screen py-24">
      <div className="px-4 mx-auto max-w-7xl">
        <h1 className="mb-12 text-5xl font-bold text-white">Méthodologie d'Enquête</h1>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Steps */}
          <div className="space-y-8">
            <StepCard
              number="01"
              icon={<Search />}
              title="Définition des Objectifs"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            />
            
            <StepCard
              number="02"
              icon={<Filter />}
              title="Collecte d'Information"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            
            <StepCard
              number="03"
              icon={<FileSearch />}
              title="Analyse des Données"
              description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            
            <StepCard
              number="04"
              icon={<Brain />}
              title="Synthèse"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            />
          </div>

          {/* Best Practices */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">Bonnes Pratiques</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-300">
                <span className="text-blue-400">•</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <span className="text-blue-400">•</span>
                <span>Ut enim ad minim veniam, quis nostrud exercitation.</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <span className="text-blue-400">•</span>
                <span>Duis aute irure dolor in reprehenderit in voluptate.</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <span className="text-blue-400">•</span>
                <span>Excepteur sint occaecat cupidatat non proident.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ number, icon, title, description }) {
  return (
    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
        {icon}
      </div>
      <div>
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-sm font-semibold text-blue-400">ÉTAPE {number}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default Investigation;