import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SubjectCategories from './components/SubjectCategories';
import HowItWorks from './components/HowItWorks';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import FindMentor from './pages/FindMentor';
import BecomeMentor from './pages/BecomeMentor';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';

const HomePage = () => (
  <>
    <HeroSection />
    <SubjectCategories />
    <HowItWorks />
    <TestimonialsSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentors" element={<FindMentor />} />
          <Route path="/become-mentor" element={<BecomeMentor />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;