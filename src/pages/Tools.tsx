import React from 'react';
import { Search, Globe, Database, Network, Shield, Code } from 'lucide-react';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ToolCard({ icon, title, description, features }: ToolCardProps) {
  return (
    <div className="p-8 bg-slate-800/50 rounded-2xl border border-white/5">
      <div className="flex items-center space-x-4 mb-6">
        <div className="text-blue-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-4">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
            features={["Google Dorks", "Bing", "DuckDuckGo"]}
          />
          
          <ToolCard
            icon={<Globe />}
            title="Analyse Web"
            description="Ut enim ad minim veniam, quis nostrud exercitation."
            features={["Wayback Machine", "BuiltWith", "Wappalyzer"]}
          />
          
          <ToolCard
            icon={<Database />}
            title="Bases de Données"
            description="Duis aute irure dolor in reprehenderit in voluptate."
            features={["Shodan", "Censys", "ZoomEye"]}
          />
          
          <ToolCard
            icon={<Network />}
            title="Réseaux Sociaux"
            description="Excepteur sint occaecat cupidatat non proident."
            features={["Maltego", "Twint", "Sherlock"]}
          />
          
          <ToolCard
            icon={<Shield />}
            title="Sécurité"
            description="Sed do eiusmod tempor incididunt ut labore."
            features={["Have I Been Pwned", "VirusTotal", "URLScan"]}
          />
          
          <ToolCard
            icon={<Code />}
            title="Analyse de Code"
            description="Inspection approfondie du code source pour identifier les problèmes potentiels."
            features={[
              "Analyse statique",
              "Détection de malwares",
              "Audit de sécurité"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Tools;