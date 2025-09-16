import React from 'react';
import { 
  Calculator, 
  Atom, 
  Globe, 
  Monitor, 
  Palette, 
  DollarSign,
  BookOpen,
  Music,
  Languages,
  Microscope,
  PenTool,
  Briefcase 
} from 'lucide-react';

const SubjectCategories = () => {
  const categories = [
    { name: 'Mathématiques', icon: Calculator, color: 'bg-blue-500', students: '2,340' },
    { name: 'Physique-Chimie', icon: Atom, color: 'bg-purple-500', students: '1,890' },
    { name: 'Anglais', icon: Globe, color: 'bg-green-500', students: '3,210' },
    { name: 'Informatique', icon: Monitor, color: 'bg-indigo-500', students: '1,670' },
    { name: 'Arts & Design', icon: Palette, color: 'bg-pink-500', students: '980' },
    { name: 'Économie', icon: DollarSign, color: 'bg-emerald-500', students: '1,450' },
    { name: 'Littérature', icon: BookOpen, color: 'bg-orange-500', students: '1,230' },
    { name: 'Musique', icon: Music, color: 'bg-red-500', students: '760' },
    { name: 'Langues', icon: Languages, color: 'bg-teal-500', students: '2,100' },
    { name: 'SVT', icon: Microscope, color: 'bg-lime-500', students: '1,540' },
    { name: 'Philosophie', icon: PenTool, color: 'bg-violet-500', students: '890' },
    { name: 'Gestion', icon: Briefcase, color: 'bg-cyan-500', students: '1,320' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explorez nos matières
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des centaines de mentors spécialisés dans toutes les disciplines, 
            prêts à vous accompagner dans votre apprentissage.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.name}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
              >
                <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-gray-800 text-center mb-2 text-sm">
                  {category.name}
                </h3>
                <p className="text-gray-500 text-xs text-center">
                  {category.students} étudiants
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Voir toutes les matières
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubjectCategories;