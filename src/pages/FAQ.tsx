import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, Users, CreditCard, Shield, BookOpen } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    {
      title: "Général",
      icon: HelpCircle,
      color: "bg-blue-500",
      faqs: [
        {
          question: "Qu'est-ce que TeachConnect ?",
          answer: "TeachConnect est la première plateforme de mise en relation entre enseignants qualifiés et étudiants au Burkina Faso. Nous facilitons l'accès à l'éducation de qualité en connectant les apprenants avec les meilleurs mentors du pays, que ce soit pour des cours en ligne ou en présentiel."
        },
        {
          question: "Comment fonctionne TeachConnect ?",
          answer: "C'est simple : 1) Créez votre compte gratuitement, 2) Recherchez un mentor selon vos besoins (matière, ville, tarif), 3) Consultez les profils et avis, 4) Réservez votre cours et payez en toute sécurité, 5) Suivez votre cours et évaluez votre mentor."
        },
        {
          question: "TeachConnect est-il disponible dans toutes les villes du Burkina Faso ?",
          answer: "Nous sommes présents dans les principales villes : Ouagadougou, Bobo-Dioulasso, Koudougou, Banfora, Ouahigouya, Kaya, et bien d'autres. Nous proposons aussi des cours en ligne accessibles depuis n'importe où avec une connexion internet."
        },
        {
          question: "Puis-je utiliser TeachConnect gratuitement ?",
          answer: "Oui ! L'inscription et la recherche de mentors sont entièrement gratuites. Vous ne payez que lorsque vous réservez et suivez un cours. Nous proposons aussi un plan gratuit qui vous permet d'explorer la plateforme."
        }
      ]
    },
    {
      title: "Pour les étudiants",
      icon: BookOpen,
      color: "bg-green-500",
      faqs: [
        {
          question: "Comment choisir le bon mentor ?",
          answer: "Utilisez nos filtres de recherche (matière, ville, tarif, expérience). Consultez les profils détaillés, lisez les avis d'autres étudiants, vérifiez les qualifications et l'expérience. Vous pouvez aussi contacter le mentor avant de réserver pour poser vos questions."
        },
        {
          question: "Que se passe-t-il si je ne suis pas satisfait d'un cours ?",
          answer: "Votre satisfaction est notre priorité. Si vous n'êtes pas satisfait, contactez notre support dans les 24h suivant le cours. Nous offrons une garantie de satisfaction et pouvons vous proposer un remboursement ou un cours de remplacement selon la situation."
        },
        {
          question: "Comment se déroulent les cours en ligne ?",
          answer: "Les cours en ligne se font via notre plateforme intégrée ou des outils comme Zoom, Google Meet. Le mentor vous enverra le lien de connexion. Assurez-vous d'avoir une bonne connexion internet, un ordinateur/smartphone et un environnement calme."
        },
        {
          question: "Puis-je annuler ou reporter un cours ?",
          answer: "Oui, vous pouvez annuler ou reporter un cours jusqu'à 24h avant l'heure prévue sans frais. Pour les annulations de dernière minute, des frais peuvent s'appliquer selon la politique du mentor."
        },
        {
          question: "Comment puis-je suivre mes progrès ?",
          answer: "Votre tableau de bord personnel vous permet de suivre vos cours, vos progrès, vos notes et commentaires des mentors. Vous recevez aussi des rapports de progression réguliers pour mesurer votre évolution."
        }
      ]
    },
    {
      title: "Pour les mentors",
      icon: Users,
      color: "bg-purple-500",
      faqs: [
        {
          question: "Comment devenir mentor sur TeachConnect ?",
          answer: "Remplissez notre formulaire d'inscription en ligne avec vos qualifications, expérience et documents justificatifs. Notre équipe vérifie votre profil sous 48h. Une fois approuvé, vous suivez une formation gratuite et pouvez commencer à recevoir des demandes d'étudiants."
        },
        {
          question: "Quelles sont les qualifications requises ?",
          answer: "Nous recherchons des enseignants qualifiés avec au minimum un diplôme dans leur domaine d'expertise. L'expérience d'enseignement est un plus mais pas obligatoire. Nous évaluons aussi votre passion pour l'enseignement et votre capacité à transmettre vos connaissances."
        },
        {
          question: "Comment fixer mes tarifs ?",
          answer: "Vous fixez librement vos tarifs selon votre expérience, qualifications et spécialisation. Nous recommandons de consulter les tarifs d'autres mentors dans votre domaine. Vous pouvez ajuster vos prix à tout moment depuis votre tableau de bord."
        },
        {
          question: "Quand et comment suis-je payé ?",
          answer: "Vous êtes payé automatiquement 24h après chaque cours via Mobile Money ou virement bancaire. TeachConnect prélève une commission de 15% pour maintenir la plateforme. Vous recevez 85% du montant payé par l'étudiant."
        },
        {
          question: "Puis-je enseigner plusieurs matières ?",
          answer: "Oui, vous pouvez enseigner plusieurs matières si vous avez les qualifications requises. Créez des profils séparés pour chaque matière ou mentionnez toutes vos spécialités dans votre profil principal."
        }
      ]
    },
    {
      title: "Paiements et sécurité",
      icon: CreditCard,
      color: "bg-yellow-500",
      faqs: [
        {
          question: "Quels moyens de paiement acceptez-vous ?",
          answer: "Nous acceptons Orange Money, Moov Money, les virements bancaires et les cartes de crédit/débit. Tous les paiements sont sécurisés et cryptés. Vous ne payez qu'après confirmation du cours."
        },
        {
          question: "Mes données personnelles sont-elles sécurisées ?",
          answer: "Absolument. Nous utilisons un cryptage SSL de niveau bancaire pour protéger vos données. Nous ne partageons jamais vos informations personnelles avec des tiers sans votre consentement. Consultez notre politique de confidentialité pour plus de détails."
        },
        {
          question: "Que se passe-t-il si un mentor ne se présente pas ?",
          answer: "Si un mentor ne se présente pas sans préavis, vous êtes automatiquement remboursé intégralement. Nous prenons des mesures disciplinaires contre les mentors qui ne respectent pas leurs engagements."
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer: "Non, nos tarifs sont transparents. Le prix affiché est le prix final que vous payez. Les seuls frais supplémentaires peuvent être les frais de transaction Mobile Money (généralement 1-2% selon votre opérateur)."
        }
      ]
    },
    {
      title: "Support technique",
      icon: Shield,
      color: "bg-red-500",
      faqs: [
        {
          question: "J'ai des problèmes techniques, que faire ?",
          answer: "Contactez notre support technique 24/7 via le chat en ligne, email (support@teachconnect.bf) ou téléphone. Notre équipe vous aidera à résoudre rapidement tout problème technique."
        },
        {
          question: "Comment contacter le support client ?",
          answer: "Plusieurs options : 1) Chat en ligne (disponible 24/7), 2) Email : contact@teachconnect.bf, 3) Téléphone : +226 XX XX XX XX, 4) Formulaire de contact sur notre site. Nous répondons généralement sous 2h."
        },
        {
          question: "L'application mobile est-elle disponible ?",
          answer: "Oui, nos applications iOS et Android sont disponibles sur l'App Store et Google Play. Elles offrent toutes les fonctionnalités de la version web : recherche, réservation, cours en ligne, messagerie, paiements."
        },
        {
          question: "Puis-je utiliser TeachConnect sur plusieurs appareils ?",
          answer: "Oui, votre compte fonctionne sur tous vos appareils (ordinateur, smartphone, tablette). Vos données sont synchronisées automatiquement. Vous pouvez vous connecter depuis n'importe où."
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Centre d'aide
            <span className="block text-yellow-400 mt-2">TeachConnect</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à toutes vos questions sur notre plateforme d'apprentissage
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher dans la FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-gray-800 rounded-xl border-2 border-transparent focus:border-yellow-400 focus:outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support disponible</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">&lt; 2h</div>
              <div className="text-gray-600">Temps de réponse moyen</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Problèmes résolus</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-yellow-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Satisfaction support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="mb-12">
                  <div className="flex items-center mb-8">
                    <div className={`${category.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <div key={faqIndex} className="bg-white rounded-2xl shadow-md overflow-hidden">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-800 pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                            ) : (
                              <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <div className="border-t border-gray-200 pt-4">
                                <p className="text-gray-600 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {filteredCategories.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search size={64} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-gray-500">
                  Essayez avec d'autres mots-clés ou contactez notre support
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Notre équipe de support est là pour vous aider 24h/24 et 7j/7
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Chat en ligne</h3>
              <p className="text-blue-100 mb-4">Réponse immédiate 24/7</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Démarrer le chat
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-100 mb-4">contact@teachconnect.bf</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Envoyer un email
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <p className="text-blue-100 mb-4">+226 XX XX XX XX</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Appeler maintenant
              </button>
            </div>
          </div>

          <p className="text-blue-100">
            Temps de réponse moyen : moins de 2 heures
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;