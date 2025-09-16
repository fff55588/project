import React from 'react';
import { Check, Star, Crown, Zap, Shield } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Étudiant",
      price: "0",
      period: "Gratuit",
      description: "Parfait pour commencer votre parcours d'apprentissage",
      features: [
        "Accès à la base de mentors",
        "Recherche par matière et ville",
        "Profils détaillés des mentors",
        "Système de notation et avis",
        "Support par email"
      ],
      notIncluded: [
        "Réservation de cours",
        "Messagerie directe",
        "Support prioritaire"
      ],
      color: "border-gray-300",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      popular: false
    },
    {
      name: "Premium",
      price: "2,500",
      period: "par mois",
      description: "Idéal pour les étudiants réguliers",
      features: [
        "Tout du plan Étudiant",
        "Réservation illimitée de cours",
        "Messagerie directe avec mentors",
        "Rappels automatiques",
        "Historique des cours",
        "Support prioritaire",
        "Accès aux cours en ligne"
      ],
      notIncluded: [
        "Cours de groupe",
        "Matériel pédagogique premium"
      ],
      color: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: true
    },
    {
      name: "Excellence",
      price: "5,000",
      period: "par mois",
      description: "Pour une expérience d'apprentissage complète",
      features: [
        "Tout du plan Premium",
        "Cours de groupe exclusifs",
        "Matériel pédagogique premium",
        "Suivi personnalisé",
        "Rapports de progression",
        "Accès aux webinaires",
        "Support 24/7",
        "Garantie de satisfaction"
      ],
      notIncluded: [],
      color: "border-yellow-500",
      buttonColor: "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",
      popular: false
    }
  ];

  const mentorPricing = [
    {
      category: "Niveau Débutant",
      description: "Étudiants ou nouveaux diplômés",
      priceRange: "1,500 - 3,000 FCFA/h",
      subjects: ["Aide aux devoirs", "Soutien scolaire primaire", "Cours de rattrapage"]
    },
    {
      category: "Niveau Intermédiaire",
      description: "Enseignants avec 2-5 ans d'expérience",
      priceRange: "3,000 - 6,000 FCFA/h",
      subjects: ["Mathématiques", "Sciences", "Langues", "Cours lycée"]
    },
    {
      category: "Niveau Expert",
      description: "Professeurs expérimentés et spécialistes",
      priceRange: "6,000 - 12,000 FCFA/h",
      subjects: ["Préparation concours", "Cours universitaires", "Formations professionnelles"]
    },
    {
      category: "Niveau Master",
      description: "Experts reconnus et formateurs",
      priceRange: "12,000 - 20,000 FCFA/h",
      subjects: ["Coaching personnalisé", "Préparation examens internationaux", "Formations spécialisées"]
    }
  ];

  const faqs = [
    {
      question: "Comment fonctionne le paiement ?",
      answer: "Les paiements se font de manière sécurisée via Mobile Money (Orange Money, Moov Money) ou par virement bancaire. Vous ne payez qu'après confirmation du cours."
    },
    {
      question: "Puis-je changer de plan à tout moment ?",
      answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement."
    },
    {
      question: "Y a-t-il des frais cachés ?",
      answer: "Non, nos tarifs sont transparents. Le seul coût supplémentaire peut être les frais de transaction Mobile Money (généralement 1-2%)."
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait ?",
      answer: "Nous offrons une garantie de satisfaction de 7 jours. Si vous n'êtes pas satisfait, nous vous remboursons intégralement."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tarifs transparents
            <span className="block text-yellow-400 mt-2">pour tous les budgets</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Choisissez le plan qui correspond à vos besoins d'apprentissage. 
            Pas d'engagement, annulation à tout moment.
          </p>
          <div className="flex items-center justify-center space-x-8 text-lg">
            <div className="flex items-center">
              <Shield className="mr-2" size={24} />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center">
              <Zap className="mr-2" size={24} />
              <span>Activation immédiate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Student Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Plans pour étudiants
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Accédez à notre plateforme et connectez-vous avec les meilleurs mentors du Burkina Faso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${plan.color} p-8 ${plan.popular ? 'transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star size={16} className="mr-1" />
                      Plus populaire
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    {plan.price !== "0" && <span className="text-gray-600"> FCFA</span>}
                    <div className="text-gray-600">{plan.period}</div>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Inclus :</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 mb-4">Non inclus :</h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-4 h-4 border-2 border-gray-300 rounded mr-3 mt-0.5 flex-shrink-0"></div>
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg font-semibold transition-colors`}>
                  {plan.price === "0" ? "Commencer gratuitement" : "Choisir ce plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tarifs des mentors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les tarifs varient selon l'expérience et la spécialisation du mentor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mentorPricing.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    index === 0 ? 'bg-green-100' :
                    index === 1 ? 'bg-blue-100' :
                    index === 2 ? 'bg-purple-100' : 'bg-yellow-100'
                  }`}>
                    {index === 0 && <Star className="text-green-600" size={28} />}
                    {index === 1 && <Zap className="text-blue-600" size={28} />}
                    {index === 2 && <Crown className="text-purple-600" size={28} />}
                    {index === 3 && <Shield className="text-yellow-600" size={28} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{category.category}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <div className="text-2xl font-bold text-blue-600">{category.priceRange}</div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Spécialités :</h4>
                  <ul className="space-y-2">
                    {category.subjects.map((subject, subjectIndex) => (
                      <li key={subjectIndex} className="text-gray-600 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Commission TeachConnect</h3>
              <p className="text-blue-100 mb-4">
                Nous prélevons seulement <span className="text-yellow-400 font-bold">15%</span> de commission 
                sur chaque cours pour maintenir la plateforme et assurer un service de qualité.
              </p>
              <p className="text-blue-100 text-sm">
                Les mentors reçoivent 85% du montant payé par l'étudiant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer votre parcours d'apprentissage ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Rejoignez des milliers d'étudiants qui ont déjà transformé leur éducation avec TeachConnect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              Commencer gratuitement
            </button>
            <button className="bg-yellow-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-600 transition-colors">
              Voir les mentors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;