import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import AvailsAt from './components/AvailsAt';
import Problem from './components/Problem';
import FeaturesGrid from './components/FeaturesGrid';
import CancerAwareness from './components/CancerAwareness';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import OxxySize from './components/OxxySize';
import Pricing from './components/Pricing';
import About from './components/About';
import SocialProof from './components/SocialProof';
import Urgency from './components/Urgency';
import LeadCapture from './components/LeadCapture';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import StickyCTA from './components/StickyCTA';

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !localStorage.getItem('exitPopupShown')) {
        setShowExitPopup(true);
        localStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen font-body text-gray-900 bg-background-soft">
      <Navbar />
      <main>
        <Hero />
        <Offers />
        <Problem />
        {/* <FeaturesGrid /> */}
        <CancerAwareness />
        <Solution />
        <Benefits />
        <OxxySize />
        <AvailsAt />
        <HowItWorks />
        <Pricing />
        <About />
        <SocialProof />
        <Urgency />
        {/* <FAQ /> */}
        <LeadCapture />
      </main>
      <Footer />

      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}
      <StickyCTA />
    </div>
  );
}

export default App;
