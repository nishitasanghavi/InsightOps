import React from 'react';
import Navbar from '../components/Navbar';
import Sidenav from '../components/Sidenav';
import Herosection from '../components/Herosection';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Community from '../components/Community';
import Footer from '../components/Footer';
import { useTheme } from '../Context/ThemeContext';

function LandingPage() {
  const { theme } = useTheme();

  return (
    <div
  className={`transition-all duration-300 ease-in-out flex flex-col min-h-screen w-full overflow-hidden
  ${theme === 'dark' ? 'bg-[#000000] text-[#CCCCCC]' : 'bg-[#C9D7E4] text-[#2F4D6F]'}`}
>

      {/* Navigation */}
      <Navbar />
      <Sidenav />

      {/* Main Content - Full Height & Centered */}
      <main className="flex-1 flex flex-col items-center w-full overflow-y-auto">
        {/* Hero Section */}
        <section className="w-full sm:w-11/12 md:w-full">
          <Herosection />
        </section>

        {/* Features Section */}
        <section className="w-full sm:w-11/12 md:w-full">
          <Features />
        </section>

        {/* How It Works Section */}
        <section className="w-full sm:w-11/12 md:w-full">
          <HowItWorks />
        </section>

        {/* Testimonials */}
        <section className="w-full sm:w-11/12 md:w-full">
          <Testimonials />
        </section>

        {/* Community & Networking Section */}
        <section className="w-full sm:w-11/12 md:w-full">
          <Community />
        </section>

        {/* Footer (Sticks to Bottom) */}
        <section className="w-full sm:w-11/12 md:w-full mt-auto">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
