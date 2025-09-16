import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Trouvez le mentor parfait
          <span className="block text-yellow-400 mt-2">pour réussir vos études</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
          Connectez-vous avec des enseignants qualifiés partout au Burkina Faso. 
          Cours en ligne ou en présentiel selon vos besoins.
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-2xl p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Quelle matière souhaitez-vous apprendre ?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-800 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-gray-400" size={20} />
                <select className="pl-12 pr-8 py-4 text-gray-800 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg bg-white">
                  <option>Ouagadougou</option>
                  <option>Bobo-Dioulasso</option>
                  <option>Koudougou</option>
                  <option>Banfora</option>
                  <option>Ouahigouya</option>
                  <option>Cours en ligne</option>
                </select>
              </div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg">
                Rechercher
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-blue-100">Mentors qualifiés</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10,000+</div>
            <div className="text-blue-100">Étudiants satisfaits</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">20+</div>
            <div className="text-blue-100">Matières enseignées</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;