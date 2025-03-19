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
        <h1 className="mb-12 text-5xl font-bold text-white">Investigation OSINT : Conflit Ukraine-Russie</h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Contexte</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              L'offensive russe en Ukraine a mis en lumière l'importance des techniques d'OSINT, 
              qui consistent à collecter et analyser des informations à partir de sources publiques en ligne. L'attaque du 
              centre commercial de Krementchouk, le 27 juin 2022, illustre bien comment ces méthodes peuvent être utilisées 
              pour vérifier les déclarations des parties en conflit.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Utilisation des Techniques OSINT</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Depuis le 24 février 2022, les journalistes utilisent des techniques OSINT pour suivre le conflit. 
              Ils exploitent des posts sur les réseaux sociaux, des bases de données, des retransmissions en direct, 
              des images de webcams, ainsi que des outils comme les images satellites et Google Street View.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <StepCard
            number="01"
            icon={<Search className="w-8 h-8" />}
            title="Analyse des Vidéos et Images"
            description="Avant le conflit, des vidéos de mouvements de troupes russes circulaient sur TikTok. Les enquêteurs de Bellingcat ont vérifié, contextualisé et géolocalisé ces vidéos en les comparant avec des images satellites."
          />
          
          <StepCard
            number="02"
            icon={<Shield className="w-8 h-8" />}
            title="Outils Principaux"
            description="Suncalc.org pour l'analyse des ombres, Ventusky.com pour les conditions météorologiques, et Eo Browser pour l'examen des images satellites."
          />
          
          <StepCard
            number="03"
            icon={<Database className="w-8 h-8" />}
            title="Cas Pratique : Krementchouk"
            description="Le 27 juin 2022, une attaque de missile sur le centre commercial Amstor. Bellingcat a utilisé des vidéos et images satellites pour vérifier les faits et réfuter les dénis."
          />
          
          <StepCard
            number="04"
            icon={<Brain className="w-8 h-8" />}
            title="Activités Pédagogiques"
            description="Le CLEMI propose des activités pour sensibiliser les élèves aux techniques OSINT, incluant l'analyse d'images satellites et l'utilisation de Google Maps."
          />
        </div>

        {/* Detailed Investigation Process */}
        <div className="mt-16 bg-slate-800/50 rounded-2xl border border-white/5 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Résultats de l'Enquête : Cas Krementchouk</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Contexte de l'Incident</h3>
              <p className="text-gray-300 mb-4">
                Le 27 juin 2022, un missile russe a frappé le centre commercial Amstor à Krementchouk, 
                ville située à mi-chemin entre Kiev et Marioupol. L'Ukraine a annoncé au moins 16 morts 
                et 59 blessés, avec environ 1000 personnes présentes lors de l'attaque. Selon les 
                Ukrainiens, l'attaque a été menée par deux missiles de longue portée tirés par des 
                bombardiers russes.
              </p>
              <p className="text-gray-300 mb-4">
                La version russe, présentée par Dimitri Polansky aux Nations unies, qualifie l'incident 
                de "provocation" avant le sommet de l'OTAN à Madrid. La Russie affirme avoir visé un 
                hangar de munitions, et que le centre commercial, prétendu inutilisé, a été touché par 
                la propagation du feu.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Analyse des Preuves</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 mb-4">
                    Une caméra de surveillance dans un parc au nord du site a capturé des images cruciales :
                    on y voit les flammes d'une explosion alors qu'un nuage de fumée est déjà visible au loin.
                  </p>
                  <img 
                    src="./images/1.png" 
                    alt="Capture de la caméra de surveillance" 
                    className="rounded-lg w-full max-w-2xl mx-auto mb-4"
                  />
                </div>

                <div>
                  <p className="text-gray-300 mb-4">
                    L'analyse des images satellites par Bellingcat a permis de déterminer l'angle exact 
                    de la caméra et de confirmer qu'il s'agissait bien du centre commercial, déjà en 
                    flammes au moment de l'impact (indiqué par la flèche rouge).
                  </p>
                  <img 
                    src="./images/2.png" 
                    alt="Analyse satellite de l'angle de la caméra" 
                    className="rounded-lg w-full max-w-2xl mx-auto mb-4"
                  />
                </div>

                <div>
                  <p className="text-gray-300 mb-4">
                    Les images satellites montrent que les bâtiments situés entre les deux points d'impact 
                    (environ 500 mètres) ne présentent aucun dégât ni trace de feu, réfutant la thèse 
                    d'une propagation des flammes.
                  </p>
                  <img 
                    src="./images/3.png" 
                    alt="Vue satellite des dégâts" 
                    className="rounded-lg w-full max-w-2xl mx-auto mb-4"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Preuves d'Activité Commerciale</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Messages des chaînes de magasins confirmant leur ouverture</li>
                <li>Tickets de caisse des jours précédant l'attaque partagés en ligne</li>
                <li>Communications des enseignes concernant leurs employés victimes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Conclusions de l'Enquête</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Confirmation de deux impacts de missiles distincts le 27 juin</li>
                <li>Confirmation de deux frappes de missiles distinctes</li>
                <li>Réfutation de la thèse de la propagation du feu</li>
                <li>Confirmation que le centre commercial était actif</li>
                <li>Impossibilité de vérifier la nature du second site (présumé dépôt de munitions)</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-3">Limites de l'Investigation</h3>
              <p className="text-gray-300">
                Cette enquête démontre à la fois la puissance des techniques OSINT pour établir une chronologie 
                précise des événements, mais aussi ses limites : certaines informations, comme la nature exacte 
                des installations visées, ne peuvent être vérifiées uniquement à partir de sources en ligne.
              </p>
            </div>
          </div>
        </div>

        {/* Deuxième cas d'investigation */}
        <div className="mt-16 bg-slate-800/50 rounded-2xl border border-white/5 p-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">2ème cas: fake news sur Rennes 2</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-gray-300 mb-6">
                Imaginons désormais qu'un utilisateur publie un tweet (ou un X désormais) affirmant qu'une manifestation monstre a lieu à l'Université de Rennes 2.
                Ce tweet, vu par des centaines de milliers d'utilisateurs pourrait entrainer des soulèvements dans d'autres universités de France. La ville de Rennes étant pas trop connue du français moyen,
                beaucoup de personnes pourraient être induites en erreur.
              </p>

              <div className="my-8">
                <img src="./images/tweet.png" alt="Tweet" className="rounded-lg w-full max-w-2xl mx-auto" />
              </div>
            </div>

            <div>
              <p className="text-gray-300 mb-6">
                L'objectif de cette enquête est de démontrer que les techniques d'OSINT peuvent être utilisées pour débusquer les fake news et trouver l'origine de la vidéo originale.
              </p>

              <div className="my-8">
                <video src="./videos/1.mp4" className="rounded-lg w-full max-w-2xl mx-auto" controls />
              </div>
            </div>

            <div>
              <p className="text-gray-300 mb-6">
                Voici la vidéo originale, qui montre une manifestation de 1000 personnes à l'Université de Rennes 2.
                La première façon de pouvoir démontrer que cette vidéo est fausse est de la comparer avec des images satellites de l'Université de Rennes 2. Un rapide coup d'oeil à Google Maps suffit à montrer que l'Université de Rennes 2 n'est clairement pas l'endroit où se trouve la vidéo.
              </p>

              <div className="my-8">
                <img src="./images/4.png" alt="Map" className="rounded-lg w-full max-w-2xl mx-auto" />
              </div>
            </div>

            <div>
              <p className="text-gray-300 mb-6">
                Mais alors trouvons donc l'origine de la vidéo originale. Pour cela, nous allons utiliser les techniques d'OSINT. On peut apercevoir un préau, un batiment gris aux formes géométriques ainsi qu'un batiment de 2 étages.
                On pourrait tout d'abord jeter un coup d'oeil aux universités "chaudes" de France, comme l'Université de Paris Nanterre, Paris 3 ou encore Lyon 2. Un coup d'oeil à Google Maps permet de voir que l'Université de Lyon 2 pourrait correspondre à l'endroit de la vidéo notamment grâce à la forme géométrique du bâtiment.
              </p>

              <div className="my-8">
                <img src="./images/5.png" alt="Map" className="rounded-lg w-full max-w-2xl mx-auto" />
              </div>
            </div>

            <div>
              <p className="text-gray-300 mb-6">
                Tout y est sauf une partie, semblant en travaux.
              </p>

              <div className="my-8 space-y-6">
                <img src="./images/6.png" alt="Map" className="rounded-lg w-full max-w-2xl mx-auto" />
                <img src="./images/7.png" alt="Map" className="rounded-lg w-full max-w-2xl mx-auto" />
              </div>
            </div>

            <div>
              <p className="text-gray-300 mb-6">
                On peut donc essayer de remonter dans le temps, en regardant les images satellites de l'Université de Lyon 2 avant les travaux. Nous allons utiliser Google Earth pour cela. On n'a pas besoin de remonter à un jour bien précis. Le satellite Sentinel 2, lancé en 2015, aurait été dans ce cas utile pour voir l'évolution entre un delta de temps relativement court.
              </p>

              <div className="my-8">
                <img src="./images/8.png" alt="Map" className="rounded-lg w-full max-w-2xl mx-auto" />
              </div>
            </div>

            <div>
              <p className="text-gray-300 mb-6">
                Une image de 2022 montre que la partie en travaux n'existait pas encore. On peut donc en déduire que la vidéo originale a été tournée en 2022 ou plus tôt au sein de l'Université de Lyon 2.
                Pour trouver la vidéo originale, il suffit de chercher sur les réseaux la première apparition de la vidéo. Une recherche par exemple sur Twitter de "blocus lyon 2" avec une date avant 2022 pourrait aider à trouver la vidéo originale.
                Nous tombons sur ce tweet de 2019, qui est en réalité la vidéo prise par Taha Bouhafs, non disponible sur son compte après une recherche avec les dorks adéquats. On en déduit que la vidéo a été tournée puis transmise au compte Twitter en question pour une première publication le 14 novembre 2019.
              </p>

              <div className="my-8">
                <img src="./images/9.png" alt="Map" className="rounded-lg w-full max-w-2xl mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investigation;