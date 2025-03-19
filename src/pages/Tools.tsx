import React from 'react';
import { Search, Globe, Database, Network, Shield } from 'lucide-react';

function Tools() {
  return (
    <div className="min-h-screen py-24">
      <div className="px-4 mx-auto max-w-7xl">
        <h1 className="mb-12 text-5xl font-bold text-white">Outils OSINT</h1>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ToolCard
            icon={<Search />}
            title="Moteurs de Recherche"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            tools={["Google Dorks", "Bing", "DuckDuckGo"]}
          />
          
          <ToolCard
            icon={<Globe />}
            title="Analyse Web"
            description="Ut enim ad minim veniam, quis nostrud exercitation."
            tools={["Wayback Machine", "BuiltWith", "Wappalyzer"]}
          />
          
          <ToolCard
            icon={<Database />}
            title="Bases de Données"
            description="Duis aute irure dolor in reprehenderit in voluptate."
            tools={["Shodan", "Censys", "ZoomEye"]}
          />
          
          <ToolCard
            icon={<Network />}
            title="Réseaux Sociaux"
            description="Excepteur sint occaecat cupidatat non proident."
            tools={["Maltego", "Twint", "Sherlock"]}
          />
          
          <ToolCard
            icon={<Shield />}
            title="Sécurité"
            description="Sed do eiusmod tempor incididunt ut labore."
            tools={["Have I Been Pwned", "VirusTotal", "URLScan"]}
          />
        </div>
      </div>
    </div>
  );
}

function ToolCard({ icon, title, description, tools }) {
  return (
    <div className="p-8 bg-slate-800/50 rounded-2xl border border-white/5 hover:bg-slate-700/50 transition-all duration-300">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span key={index} className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tools;