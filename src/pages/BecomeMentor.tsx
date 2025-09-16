import React, { useState } from 'react';
import { 
  GraduationCap, 
  DollarSign, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  BookOpen,
  Globe,
  Calendar
} from 'lucide-react';

const BecomeMentor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    city: '',
    experience: '',
    education: '',
    description: '',
    pricePerHour: '',
    availableOnline: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pouvez ajouter la logique pour envoyer les données à Supabase
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Revenus attractifs",
      description: "Fixez vos tarifs et gagnez jusqu'à 15,000 FCFA par heure selon votre expertise"
    },
    {
      icon: Clock,
      title: "Horaires flexibles",
      description: "Travaillez quand vous voulez, où vous voulez. Vous contrôlez votre emploi du temps"
    },
    {
      icon: Users,
      title: "Impact positif",
      description: "Aidez des étudiants à réussir et contribuez à l'éducation au Burkina Faso"
    },
    {
      icon: Globe,
      title: "Cours en ligne",
      description: "Enseignez depuis chez vous grâce à notre plateforme de cours en ligne"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Inscription",
      description: "Remplissez le formulaire avec vos informations et qualifications"
    },
    {
      number: "2",
      title: "Vérification",
      description: "Notre équipe vérifie vos diplômes et expériences sous 48h"
    },
    {
      number: "3",
      title: "Formation",
      description: "Suivez notre formation gratuite sur les meilleures pratiques d'enseignement"
    },
    {
      number: "4",
      title: "Commencez",
      description: "Créez votre profil et commencez à recevoir des demandes d'étudiants"
    }
  ];

  const subjects = [
    'Mathématiques', 'Physique-Chimie', 'Anglais', 'Français', 'SVT',
    'Histoire-Géographie', 'Philosophie', 'Économie', 'Informatique',
    'Arts', 'Musique', 'Langues', 'Comptabilité', 'Gestion'
  ];

  const cities = [
    'Ouagadougou', 'Bobo-Dioulasso', 'Koudougou', 'Banfora', 
    'Ouahigouya', 'Kaya', 'Tenkodogo', 'Dori', 'Gaoua', 'Fada N\'Gourma'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Devenez mentor sur
            <span className="block text-yellow-400 mt-2">TeachConnect</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Partagez vos connaissances, inspirez la prochaine génération et générez des revenus supplémentaires
          </p>
          <div className="flex items-center justify-center space-x-8 text-lg">
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={24} />
              <span>Inscription gratuite</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={24} />
              <span>Support 24/7</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={24} />
              <span>Paiements sécurisés</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pourquoi devenir mentor ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rejoignez une communauté de plus de 500 mentors qui transforment l'éducation au Burkina Faso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors">
                  <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-blue-200 transform -translate-y-1/2 z-0">
                    <div className="absolute right-0 top-1/2 w-3 h-3 bg-blue-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                )}
                
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-10">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Inscrivez-vous maintenant
              </h2>
              <p className="text-xl text-gray-600">
                Remplissez le formulaire ci-dessous pour commencer votre parcours de mentor
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+226 XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Ville *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Sélectionnez votre ville</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Matière principale *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Sélectionnez une matière</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Années d'expérience *</label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: 5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Formation/Diplômes *</label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: Master en Mathématiques"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tarif par heure (FCFA) *</label>
                  <input
                    type="number"
                    name="pricePerHour"
                    value={formData.pricePerHour}
                    onChange={handleInputChange}
                    required
                    min="1000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: 5000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Description de votre profil *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez votre expérience, votre méthode d'enseignement et ce qui vous rend unique..."
                />
              </div>

              <div className="mb-8">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="availableOnline"
                    checked={formData.availableOnline}
                    onChange={handleInputChange}
                    className="mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Je suis disponible pour des cours en ligne</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all shadow-lg"
              >
                Soumettre ma candidature
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Mentors actifs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Étudiants aidés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-200">Note moyenne</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeMentor;