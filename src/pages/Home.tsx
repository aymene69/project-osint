import React from 'react';
import { Shield, Search, Database, Brain, AlertTriangle, UserCheck, Lock, Eye } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  example?: string;
}

function FeatureCard({ icon, title, description, example }: FeatureCardProps) {
  return (
    <div className="p-8 transition-all duration-300 bg-slate-900/50 rounded-2xl hover:bg-slate-700/50 border border-white/5">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      {example && <p className="mt-2 text-sm text-gray-500 italic">Exemple : {example}</p>}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-transparent z-10" />
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-6xl font-bold tracking-tight text-white">
              Comprendre
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}l'OSINT
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-300 leading-relaxed">
              Open Source INTelligence </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-white">Qu'est-ce que l'OSINT ?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Le renseignement de sources ouvertes, ou Open Source Intelligence (OSINT), est une méthode de collecte et d'analyse d'informations issues de sources accessibles au public.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Articles de presse, blogs et publications officielles</li>
                <li>Réseaux sociaux (Twitter, Instagram ,Facebook…)</li>
                <li>Bases de données publiques (archives)</li>
                <li>Images et métadonnées associées</li>
                <li>Forums et plateformes de discussion</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-4xl font-bold text-white">Qui utilise l'OSINT ?</h2>
              <p className="text-gray-300 leading-relaxed">L'OSINT est exploité dans de nombreux domaines :</p>
              <p className="text-gray-300"><strong>Journalisme et vérification des faits :</strong> Les journalistes luttent contre la désinformation en vérifiant les sources.</p>
              <p className="text-gray-300"><strong>Forces de l'ordre et justice :</strong> Les autorités exploitent l'OSINT pour identifier des criminels.</p>
              <p className="text-gray-300"><strong>Cybersécurité :</strong> Les experts utilisent l'OSINT pour détecter des menaces.</p>
              <p className="text-gray-300"><strong>Intelligence économique :</strong> Les entreprises surveillent la concurrence grâce à l'OSINT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-800/50">
        <div className="container-custom">
          <h2 className="mb-12 text-4xl font-bold text-center text-white">L'OSINT : une arme à double tranchant</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<AlertTriangle className="w-8 h-8" />} title="Doxxing" description="Exposition publique d'informations personnelles." example="Un streameur victime de doxxing a subi une fausse intervention du SWAT (swatting)." />
            <FeatureCard icon={<UserCheck className="w-8 h-8" />} title="Usurpation d'identité" description="Création de faux profils avec des données publiques." example="Un arnaqueur se fait passer pour un proche pour extorquer de l'argent." />
            <FeatureCard icon={<Lock className="w-8 h-8" />} title="Ingénierie sociale" description="Manipulation pour obtenir des informations sensibles." example="Un pirate se fait passer pour un employé et demande un transfert d'argent." />
            <FeatureCard icon={<Eye className="w-8 h-8" />} title="Cyberharcèlement" description="Traque et harcèlement via les informations en ligne." example="Un harceleur suit une cible en analysant ses stories Instagram." />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;