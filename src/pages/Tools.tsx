import React from 'react';
import { Search, Globe, Database, Network, Shield, Code } from 'lucide-react';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  source: string;
}

function ToolCard({ icon, title, description, features, source }: ToolCardProps) {
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
      <a href={source} className='text-blue-400 underline space-x-3'>Source</a>
    </div>
  );
}

function Tools() {
  return (
    <div className="min-h-screen py-24">
      <div className="px-4 mx-auto max-w-7xl">
        <h1 className="mb-12 text-5xl font-bold text-white">Outils OSINT</h1>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Moteurs de recherche et analyse web</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                icon={<Search />}
                title="Google Dorks"
                description="En 2002, Johnny Long, un expert en cybersécurité, a découvert que Google indexait bien plus que des sites web classiques : fichiers mal configurés, bases de données accessibles librement, ou encore pages d'administration oubliées. Grâce à des requêtes spécifiques (les Google Dorks, aussi appelées Google Hacks), il est possible de mettre la main sur des informations très spécifiques."
                features={["Recherche de fichiers sensibles", "Pages de connexion", "Informations de configuration exposées"]}
                source="https://www.jedha.co/formation-cybersecurite/google-dorks-techniques-gratuites-pour-exploiter-google"
              />

              <ToolCard
                icon={<Globe />}
                title="Wayback Machine"
                description="La Wayback Machine est un archive numérique du Web qui permet aux utilisateurs de voir les versions antérieures des sites web. Elle est utilisée en OSINT pour récupérer des informations supprimées ou modifiées, analyser l'évolution d'un site, vérifier l'authenticité des données et enquêter sur des activités en ligne."
                features={["Archivage des pages web", "Accès aux contenus supprimés"]}
                source="https://www.osintcurio.us/2021/03/03/using-archive-org-for-osint-investigations/"
              />

              <ToolCard
                icon={<Globe />}
                title="BuiltWith"
                description="BuiltWith est un outil de profilage de sites web qui fournit des informations détaillées sur les technologies utilisées par les sites web. Il est utile en OSINT pour faire des tests de pénétration et des audits de sécurité car il aide à détecter les vulnérabilités."
                features={["Détection des technologies utilisées"]}
                source="https://www.imperva.com/learn/application-security/open-source-intelligence-osint/"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Bases de données</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                icon={<Database />}
                title="Shodan"
                description="Shodan est un moteur de recherche qui permet de trouver des informations sur des appareils connectés à Internet, tels que des caméras, des routeurs et des serveurs. Contrairement à Google, par exemple, qui référence des pages web, avec Shodan on peut trouver des informations sur les appareils. Les analyses peuvent également être automatisées via une API."
                features={["Recherche d'appareils connectés", "Analyse des services exposés", "Analyse des systèmes vulnérables"]}
                source="https://www.shodan.io/"
              />

              <ToolCard
                icon={<Database />}
                title="Censys"
                description="Censys est une plateforme de gestion de la surface d'attaque qui aide les organisations à identifier et à sécuriser leurs actifs exposés sur Internet. Similaire à Shodan, Censys fournit des informations détaillées sur les certificats SSL/TLS et les configurations de sécurité."
                features={["Gestion de la surface d'attaque", "Analyse des vulnérabilités", "Informations détaillées sur les certificats SSL/TLS et les configurations de sécurité"]}
                source="https://censys.com/"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Réseaux Sociaux</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                icon={<Network />}
                title="Maltego"
                description="Maltego est un outil d'analyse de réseaux sociaux qui permet de visualiser les relations entre différentes entités."
                features={["Visualisation des réseaux sociaux", "Analyse des relations", "Découverte d'informations cachées"]}
                source="https://www.lemondeinformatique.fr/actualites/lire-8-outils-osint-pour-le-cyber-renseignement-80484.html#maltego"
              />

              <ToolCard
                icon={<Network />}
                title="Twint"
                description="Twint est un outil de scraping de X (Twitter) qui permet de collecter des données à partir de profils Twitter sans utiliser l'API de X (Twitter)."
                features={["Scraping de profils X (Twitter)", "Collecte de données", "Analyse des X (tweets)"]}
                source="https://pypi.org/project/twint/"
              />

              <ToolCard
                icon={<Network />}
                title="Sherlock"
                description="Sherlock est un outil de recherche de noms d'utilisateur qui permet de trouver des profils associés à un nom d'utilisateur sur plus de 400 réseaux sociaux."
                features={["Recherche de noms d'utilisateur", "Découverte de profils", "Analyse des plateformes"]}
                source="https://www.geeek.org/sherlock-securite-linux/"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Sécurité</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                icon={<Shield />}
                title="Have I Been Pwned"
                description="Have I Been Pwned est un service qui permet de vérifier si vos informations personnelles ont été compromises dans des violations de données."
                features={["Vérification des violations de données", "Protection des informations personnelles", "Alertes de sécurité"]}
                source="https://haveibeenpwned.com/"
              />

              <ToolCard
                icon={<Shield />}
                title="VirusTotal"
                description="VirusTotal est un service d'analyse de fichiers et d'URL qui permet de détecter les virus, les malwares et autres menaces."
                features={["Analyse de fichiers", "Analyse d'URL", "Détection de malwares"]}
                source="https://www.virustotal.com/"
              />

              <ToolCard
                icon={<Shield />}
                title="URLScan"
                description="URLScan est un service d'analyse d'URL qui permet de scanner les URL suspectes et d'analyser leur comportement."
                features={["Analyse d'URL", "Détection de menaces", "Rapports de sécurité"]}
                source="https://urlscan.io/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
