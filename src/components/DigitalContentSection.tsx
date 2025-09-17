import React, { useState } from 'react';
import { PlayCircle, CheckSquare, FileText, BookOpen, Star, ShoppingCart } from 'lucide-react';

const DigitalContentSection = () => {
  const [activeCategory, setActiveCategory] = useState('cours-video');

  const categories = [
    { id: 'cours-video', name: 'Cours Vidéo', icon: PlayCircle },
    { id: 'exercices', name: 'Exercices Corrigés', icon: CheckSquare },
    { id: 'annales', name: 'Annales d\'Examens', icon: FileText },
    { id: 'documents', name: 'Documents PDF', icon: BookOpen }
  ];

  const products = {
    'cours-video': [
      {
        id: 1,
        title: 'Cours Complet de Mathématiques',
        subject: 'Mathématiques | Terminale S',
        category: 'Cours Vidéo',
        price: 4500,
        rating: 5,
        image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-blue-500'
      },
      {
        id: 2,
        title: 'Physique-Chimie Terminale',
        subject: 'Physique-Chimie | Terminale S',
        category: 'Cours Vidéo',
        price: 4000,
        rating: 5,
        image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-blue-500'
      },
      {
        id: 3,
        title: 'Anglais Conversationnel',
        subject: 'Anglais | Tous niveaux',
        category: 'Cours Vidéo',
        price: 3500,
        rating: 5,
        image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-blue-500'
      },
      {
        id: 4,
        title: 'SVT - Biologie Cellulaire',
        subject: 'SVT | Première S',
        category: 'Cours Vidéo',
        price: 3000,
        rating: 5,
        image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-blue-500'
      },
      {
        id: 5,
        title: 'Histoire-Géographie BAC',
        subject: 'Histoire-Géo | Terminale',
        category: 'Cours Vidéo',
        price: 3500,
        rating: 5,
        image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-blue-500'
      },
      {
        id: 6,
        title: 'Philosophie Terminale',
        subject: 'Philosophie | Terminale',
        category: 'Cours Vidéo',
        price: 2500,
        rating: 5,
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-blue-500'
      }
    ],
    'exercices': [
      {
        id: 7,
        title: 'Exercices Corrigés - Maths',
        subject: 'Mathématiques | Seconde C',
        category: 'Exercices',
        price: 2000,
        rating: 5,
        image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-green-500'
      },
      {
        id: 8,
        title: 'Problèmes de Physique Résolus',
        subject: 'Physique | Première S',
        category: 'Exercices',
        price: 2500,
        rating: 5,
        image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-green-500'
      },
      {
        id: 9,
        title: 'Exercices d\'Anglais Corrigés',
        subject: 'Anglais | Troisième',
        category: 'Exercices',
        price: 1500,
        rating: 5,
        image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-green-500'
      },
      {
        id: 10,
        title: 'QCM SVT avec Corrections',
        subject: 'SVT | Seconde',
        category: 'Exercices',
        price: 1800,
        rating: 5,
        image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-green-500'
      },
      {
        id: 11,
        title: 'Exercices de Français',
        subject: 'Français | Première',
        category: 'Exercices',
        price: 2200,
        rating: 5,
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-green-500'
      },
      {
        id: 12,
        title: 'Problèmes d\'Économie',
        subject: 'Économie | Terminale',
        category: 'Exercices',
        price: 2800,
        rating: 5,
        image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-green-500'
      }
    ],
    'annales': [
      {
        id: 13,
        title: 'Annales BAC Maths 2020-2024',
        subject: 'Mathématiques | Terminale S',
        category: 'Annales',
        price: 3500,
        rating: 5,
        image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-purple-500'
      },
      {
        id: 14,
        title: 'Sujets BEPC Sciences 2019-2023',
        subject: 'Sciences | Troisième',
        category: 'Annales',
        price: 2500,
        rating: 5,
        image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-purple-500'
      },
      {
        id: 15,
        title: 'Annales BAC Anglais',
        subject: 'Anglais | Terminale',
        category: 'Annales',
        price: 2000,
        rating: 5,
        image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-purple-500'
      },
      {
        id: 16,
        title: 'Sujets Concours ENS',
        subject: 'Mathématiques | Supérieur',
        category: 'Annales',
        price: 5000,
        rating: 5,
        image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-purple-500'
      },
      {
        id: 17,
        title: 'Annales BAC Philosophie',
        subject: 'Philosophie | Terminale',
        category: 'Annales',
        price: 1800,
        rating: 5,
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-purple-500'
      },
      {
        id: 18,
        title: 'Sujets BAC Histoire-Géo',
        subject: 'Histoire-Géo | Terminale',
        category: 'Annales',
        price: 2200,
        rating: 5,
        image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-purple-500'
      }
    ],
    'documents': [
      {
        id: 19,
        title: 'Manuel Complet de Chimie',
        subject: 'Chimie | Première S',
        category: 'Document PDF',
        price: 3000,
        rating: 5,
        image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-orange-500'
      },
      {
        id: 20,
        title: 'Résumés de Cours - SVT',
        subject: 'SVT | Terminale S',
        category: 'Document PDF',
        price: 1500,
        rating: 5,
        image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-orange-500'
      },
      {
        id: 21,
        title: 'Fiches de Révision Français',
        subject: 'Français | Première',
        category: 'Document PDF',
        price: 1200,
        rating: 5,
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-orange-500'
      },
      {
        id: 22,
        title: 'Guide Méthodologique Maths',
        subject: 'Mathématiques | Tous niveaux',
        category: 'Document PDF',
        price: 2500,
        rating: 5,
        image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-orange-500'
      },
      {
        id: 23,
        title: 'Lexique Anglais-Français',
        subject: 'Anglais | Tous niveaux',
        category: 'Document PDF',
        price: 1000,
        rating: 5,
        image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-orange-500'
      },
      {
        id: 24,
        title: 'Cartes Mentales Histoire',
        subject: 'Histoire | Terminale',
        category: 'Document PDF',
        price: 1800,
        rating: 5,
        image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        categoryColor: 'bg-orange-500'
      }
    ]
  };

  const currentProducts = products[activeCategory as keyof typeof products] || products['cours-video'];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ressources Premium : Cours, Exercices et Annales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accédez à des manuels corrigés par niveau et des cours vidéo pour maîtriser chaque matière.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                <Icon size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 right-4 ${product.categoryColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-3">
                  {product.subject}
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">({product.rating}/5)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    {product.price.toLocaleString()} FCFA
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 shadow-md">
                    <ShoppingCart size={18} />
                    <span>Acheter</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Plus de 200 ressources disponibles
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Découvrez notre catalogue complet de cours, exercices et annales pour tous les niveaux
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg">
              Voir toute la boutique
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalContentSection;