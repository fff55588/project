import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aminata Ouédraogo",
      role: "Étudiante en Terminale S",
      location: "Ouagadougou",
      rating: 5,
      comment: "Grâce à TeachConnect, j'ai trouvé un excellent professeur de mathématiques. Mes notes se sont considérablement améliorées et j'ai plus confiance en moi pour le BAC.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Ibrahim Sawadogo",
      role: "Parent d'élève",
      location: "Bobo-Dioulasso",
      rating: 5,
      comment: "Mon fils avait des difficultés en anglais. Le mentor que nous avons trouvé sur TeachConnect est fantastique. Les cours en ligne sont pratiques et efficaces.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Fatoumata Kaboré",
      role: "Étudiante en Licence",
      location: "Koudougou",
      rating: 5,
      comment: "La plateforme est facile à utiliser et les tarifs sont abordables. J'ai pu prendre des cours de comptabilité qui m'ont beaucoup aidée dans mes études.",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ce que disent nos étudiants
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de ceux qui ont déjà transformé leur parcours éducatif 
            grâce à TeachConnect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 text-yellow-400 opacity-20" size={40} />
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={18} />
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Rejoignez des milliers d'étudiants satisfaits</h3>
            <p className="text-blue-100 mb-6">
              Commencez votre parcours d'apprentissage dès aujourd'hui avec TeachConnect
            </p>
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition-colors shadow-lg">
              S'inscrire gratuitement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;