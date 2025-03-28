import React from 'react';
import { Scale, Database, Scroll } from 'lucide-react';

interface LegalCardProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
  law?: string;
  sanction?: string;
}

function LegalCard({ icon, title, points, law, sanction }: LegalCardProps) {
  return (
    <div className="p-8 bg-slate-800/50 rounded-2xl border border-white/5 hover:bg-slate-700/50 transition-all">
      <div className="flex items-center space-x-4 mb-6">
        <div className="text-blue-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-blue-400 mt-1">•</span>
            <span className="text-gray-300">{point}</span>
          </li>
        ))}
        {law && (
          <li className="mt-4 p-3 bg-slate-900/30 rounded-lg">
            <span className="text-blue-400 font-medium">Base légale :</span>
            <span className="text-gray-300 ml-2">{law}</span>
          </li>
        )}
        {sanction && (
          <li className="mt-2 p-3 bg-red-900/20 rounded-lg">
            <span className="text-red-400 font-medium">Sanction :</span>
            <span className="text-gray-300 ml-2">{sanction}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

function Ethic() {
  return (
    <div className="min-h-screen py-24 bg-slate-900">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              OSINT
            </span> 
            &nbsp;et Cadre Juridique
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Légalité de la collecte, de la copie et de la réutilisation des données.
          </p>
        </div>

        {/* Main Legal Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <LegalCard
            icon={<Scale className="w-8 h-8" />}
            title="Accès Légal"
            points={[
              "Consulter un site web public est légal, mais accéder à une base de données protégée sans autorisation est illégal.",
              "L’accès a une base de données protéger ou des documents confidentiels est considéré comme une atteinte a un système de traitement automatisé de donnée (STAD)."
            ]}
            law="Article 323-1 Code Pénal"
            sanction="3 ans + 100 000€ d'amende"
          />

          <LegalCard
            icon={<Database className="w-8 h-8" />}
            title="Collecte de Données"
            points={[
              "Le producteur de bases de données peut interdire l’extraction de données sans autorisation.",
              "Le scraping de données personnelles sans autorisation est illégal pour une utilisation personnelle."
            ]}
            law="Article L342-1 CPI"
            sanction="3 ans + 300 000€ d'amende"
          />

          <LegalCard
            icon={<Scroll className="w-8 h-8" />}
            title="Réutilisation des Données"
            points={[
              "Bien que vous puissiez les consulter, il est interdit de réutiliser des données pour une réutilisation professionnelle sans autorisation.",
              "La publication d’informations personnelles (nom, prénom, adresse, numéro de téléphone, etc.) identifiables est un délit pénal."
            ]}
            law="Article L335-3 CPI"
            sanction="5 ans + 300 000€ d'amende"
          />
        </div>

        {/* Data Mining*/}
        <div className="mt-20 p-8 bg-slate-800/50 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Data Mining
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-slate-900/30 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
                Exception de la fouille de données
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
              l’article L122-5-3-II du Code de la Propriété Intellectuelle « Les copies et reproductions numériques effectuées lors d'une fouille de textes et de données sont stockées avec un niveau de sécurité approprié et peuvent être conservées à des fins exclusives de recherche scientifique, y compris pour la vérification des résultats de la recherche. »
              </p>
            </div>
          </div>
        </div>

        {/* Bonnes Pratiques pour Utiliser l'OSINT Légalement */}
        <div className="mt-20 p-8 bg-slate-800/50 rounded-2xl">
  <h2 className="text-3xl font-bold text-white mb-8 text-center">
    Comment faire de l'OSINT légalement ?
  </h2>
  <div className="max-w-4xl mx-auto">
    <div className="p-8 bg-slate-900/30 rounded-lg">
      <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
        Il est impératif de respecter les réglementations légales et éthiques :
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Carte 1 : Respect des Droits d'Auteur */}
        <div className="p-8 bg-slate-900/30 rounded-lg hover:bg-slate-700/50 transition-all">
          <h4 className="text-xl font-semibold text-blue-400 mb-4 text-center">
            1. Respect des Droits d'Auteur
          </h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-center">
              <span className="text-blue-400 font-medium">Droits d’auteur :</span> Ne copiez ou ne réutilisez pas des contenus protégés sans autorisation, même s'ils sont librement accessibles en ligne.
            </p>
            <p className="text-gray-300 text-center">
              <span className="text-blue-400 font-medium">Données personnelles :</span> Assurez-vous que les données collectées sont légalement accessibles et ne violent pas la vie privée des individus.
            </p>
          </div>
        </div>

        {/* Carte 2 : Durée de conservation des données */}
        <div className="p-8 bg-slate-900/30 rounded-lg hover:bg-slate-700/50 transition-all">
          <h4 className="text-xl font-semibold text-blue-400 mb-4 text-center">
            2. Durée de conservation des données
          </h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-center">
              <span className="text-blue-400 font-medium">Données personnelles :</span> Selon le RGPD, elles ne doivent être conservées que pour la durée nécessaire. Après, elles doivent être supprimées ou anonymisées.
            </p>
            <p className="text-gray-300 text-center">
              <span className="text-blue-400 font-medium">Données non personnelles :</span> La durée est plus flexible, mais il est recommandé de ne les conserver que pendant la durée nécessaire.
            </p>
          </div>
        </div>

        {/* Carte 3 : Bonnes pratiques */}
        <div className="p-8 bg-slate-900/30 rounded-lg hover:bg-slate-700/50 transition-all">
          <h4 className="text-xl font-semibold text-blue-400 mb-4 text-center">
            3. Bonnes pratiques
          </h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-center">
              <span className="text-blue-400 font-medium">Consentement :</span> Obtenez le consentement explicite des individus concernés avant toute collecte de données.
            </p>
            <p className="text-gray-300 text-center">
              <span className="text-blue-400 font-medium">Sécurité des données :</span> Utilisez des technologies de cryptage et des sauvegardes sécurisées pour protéger les données.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  );
}

export default Ethic;