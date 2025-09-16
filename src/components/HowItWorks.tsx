import React from 'react';
import { Search, Calendar, GraduationCap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Cherchez un mentor",
      description: "Parcourez notre base de mentors qualifiés et trouvez celui qui correspond à vos besoins spécifiques.",
      color: "bg-blue-500"
    },
    {
      icon: Calendar,
      title: "2. Réservez un créneau",
      description: "Choisissez un horaire qui vous convient et réservez votre cours en quelques clics. Paiement sécurisé en FCFA.",
      color: "bg-yellow-500"
    },
    {
      icon: GraduationCap,
      title: "3. Apprenez et progressez",
      description: "Suivez vos cours en ligne ou en présentiel et atteignez vos objectifs académiques avec un accompagnement personnalisé.",
      color: "bg-green-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En seulement 3 étapes simples, commencez votre parcours d'apprentissage 
            avec les meilleurs mentors du Burkina Faso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-1 bg-gray-200 transform -translate-y-1/2 z-0">
                    <div className="absolute right-0 top-1/2 w-3 h-3 bg-gray-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                )}
                
                <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}>
                  <Icon className="text-white" size={36} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg transform hover:scale-105">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;