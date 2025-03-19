import React from 'react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

function Security() {
  return (
    <div className="min-h-screen py-24">
      <div className="px-4 mx-auto max-w-7xl">
        <h1 className="mb-12 text-5xl font-bold text-white">Prévention et Sécurité</h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Protection des Données</h2>
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

        {/* Security Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <SecurityCard
            icon={<Shield className="w-8 h-8" />}
            title="Protection de la Vie Privée"
            points={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "Ut enim ad minim veniam, quis nostrud exercitation",
              "Duis aute irure dolor in reprehenderit in voluptate"
            ]}
          />
          
          <SecurityCard
            icon={<Lock className="w-8 h-8" />}
            title="Sécurité en Ligne"
            points={[
              "Excepteur sint occaecat cupidatat non proident",
              "Sed ut perspiciatis unde omnis iste natus error",
              "Nemo enim ipsam voluptatem quia voluptas"
            ]}
          />
          
          <SecurityCard
            icon={<Eye className="w-8 h-8" />}
            title="Surveillance"
            points={[
              "At vero eos et accusamus et iusto odio dignissimos",
              "Et harum quidem rerum facilis est et expedita",
              "Nam libero tempore, cum soluta nobis est"
            ]}
          />
          
          <SecurityCard
            icon={<AlertTriangle className="w-8 h-8" />}
            title="Risques et Menaces"
            points={[
              "Temporibus autem quibusdam et aut officiis debitis",
              "Itaque earum rerum hic tenetur a sapiente delectus",
              "Ut aut reiciendis voluptatibus maiores alias"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function SecurityCard({ icon, title, points }) {
  return (
    <div className="p-8 bg-slate-800/50 rounded-2xl border border-white/5">
      <div className="flex items-center space-x-4 mb-6">
        <div className="text-blue-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
            <span className="text-gray-300">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Security;