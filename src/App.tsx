import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SubjectCategories from './components/SubjectCategories';
import HowItWorks from './components/HowItWorks';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SubjectCategories />
      <HowItWorks />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;