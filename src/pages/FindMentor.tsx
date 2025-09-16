import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, Clock, DollarSign, Filter } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface Mentor {
  id: string;
  name: string;
  subject: string;
  city: string;
  rating: number;
  price_per_hour: number;
  experience_years: number;
  description: string;
  avatar_url?: string;
  available_online: boolean;
}

const FindMentor = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);

  useEffect(() => {
    fetchMentors();
  }, []);

  useEffect(() => {
    filterMentors();
  }, [mentors, searchTerm, selectedCity, selectedSubject]);

  const fetchMentors = async () => {
    try {
      const { data, error } = await supabase
        .from('mentors')
        .select('*');

      if (error) {
        console.error('Erreur lors de la récupération des mentors:', error);
        return;
      }

      if (data) {
        setMentors(data);
        
        // Extraire les villes et matières uniques
        const uniqueCities = [...new Set(data.map(mentor => mentor.city).filter(Boolean))];
        const uniqueSubjects = [...new Set(data.map(mentor => mentor.subject).filter(Boolean))];
        
        setCities(uniqueCities);
        setSubjects(uniqueSubjects);
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterMentors = () => {
    let filtered = mentors;

    if (searchTerm) {
      filtered = filtered.filter(mentor =>
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCity) {
      filtered = filtered.filter(mentor => mentor.city === selectedCity);
    }

    if (selectedSubject) {
      filtered = filtered.filter(mentor => mentor.subject === selectedSubject);
    }

    setFilteredMentors(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des mentors...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Trouvez votre mentor idéal
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Découvrez nos {mentors.length} mentors qualifiés prêts à vous accompagner dans votre réussite académique
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher par nom ou matière..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">Toutes les villes</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">Toutes les matières</option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredMentors.length} mentor{filteredMentors.length > 1 ? 's' : ''} trouvé{filteredMentors.length > 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {mentor.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">{mentor.name}</h3>
                    <p className="text-blue-600 font-semibold">{mentor.subject}</p>
                    <div className="flex items-center mt-1">
                      <MapPin size={14} className="text-gray-400 mr-1" />
                      <span className="text-gray-600 text-sm">{mentor.city}</span>
                      {mentor.available_online && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          En ligne
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < mentor.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">({mentor.rating}/5)</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {mentor.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{mentor.experience_years} ans d'exp.</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-bold">
                    <DollarSign size={16} className="mr-1" />
                    <span>{mentor.price_per_hour} FCFA/h</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Contacter le mentor
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucun mentor trouvé
            </h3>
            <p className="text-gray-500">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindMentor;