import React from 'react';
import { Shield, Search, Database, Brain } from 'lucide-react';

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
        <div className="relative z-10 px-4 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-6xl font-bold tracking-tight text-white">
              Comprendre
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}l'OSINT
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-24">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-white">Qu'est-ce que l'OSINT ?</h2>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-4xl font-bold text-white">Pourquoi l'OSINT ?</h2>
              <p className="text-gray-300 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-800/50">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Search className="w-8 h-8" />}
              title="Recherche"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="Collecte"
              description="Ut enim ad minim veniam, quis nostrud exercitation."
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="Analyse"
              description="Duis aute irure dolor in reprehenderit in voluptate."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Protection"
              description="Excepteur sint occaecat cupidatat non proident."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 transition-all duration-300 bg-slate-900/50 rounded-2xl hover:bg-slate-700/50 border border-white/5">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default Home;