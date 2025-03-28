import React from 'react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

interface SecurityCardProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
}

function SecurityCard({ icon, title, points }: SecurityCardProps) {
  return (
    <div className="p-8 bg-slate-800/50 rounded-2xl border border-white/5">
      <div className="flex items-center space-x-4 mb-6">
        <div className="text-blue-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-4">
        {points.map((point: string, index: number) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
            <span className="text-gray-300">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
              Dans un monde où le numérique prend de plus en plus d'importance et où les risques s'y multiplient, il est crucial de faire attention à nos données personnelles. La collecte massive d'informations et les cybermenaces croissantes rendent chaque action en ligne risquée. Il est donc essentiel de rester vigilant et informé, afin de comprendre les enjeux liés à la sécurité des données et de prendre de bonnes décisions pour protéger notre vie privée.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Bonnes Pratiques</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Afin de protéger vos données, il est nécessaire de prendre de bonnes habitudes dès le début.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Voici une petite liste de quelques bonnes pratiques à adopter dès que vous commencez à utiliser l'OSINT:
              <ul>
                <li>- La mise à jour régulière de vos appareils</li>
                <li>- L'utilisation d'un antivirus et d'un gestionnaire de mots de passe</li>
                <li>- Le respect des lois et de la vie privée d'autrui</li>
              </ul>  
            </p>
           

          </div>
        </div>

        {/* Security Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <SecurityCard
            icon={<Shield className="w-8 h-8" />}
            title="Protection de la Vie Privée"
            points={[
              "Réduire la quantité de données partagées",
              "Vérifier les paramètres de confidentialité",
              "Limiter les permissions des applications"
            ]}
          />
          
          <SecurityCard
            icon={<Lock className="w-8 h-8" />}
            title="Sécurité en Ligne"
            points={[
              "Utiliser des sites sécurisés",
              "Utiliser des mots de passe forts et uniques",
              "Éviter de cliquer sur des liens ou pièces jointes provenant de sources inconnues."
            ]}
          />
          
          <SecurityCard
            icon={<Eye className="w-8 h-8" />}
            title="Surveillance"
            points={[
              "Détecter les vulnérabiliés avant qu'elles ne soient exploitées",
              "Identifier les fuites de données sensibles",
              "Comprendre les tactiques et techniques des attaquants"
            ]}
          />
          
          <SecurityCard
            icon={<AlertTriangle className="w-8 h-8" />}
            title="Risques et Menaces"
            points={[
              "La confidentialité des vos informations n'est pas assurée.",
              "Les informations collectées ne sont pas toujours fiables.",
              "Certaines sources n'autorisent pas la collecte de leurs informaions."
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Security;