import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-black"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Background image pattern */}
      <div className="absolute inset-0 opacity-20 z-0">
        <img
          src="/world-map-desktop-377awf240ap812jp.jpg"
          alt="World Map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight whitespace-nowrap">
        Kyokushin Karate Academy India
        <span className="block text-red-400 text-2xl sm:text-3xl lg:text-4xl mt-2">
        Based in India
  </span>
</h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
          Welcome to the official home of authentic Kyokushin Karate in India
        </p>
        
        <div className="space-y-4 mb-12">
          <p className="text-lg text-gray-300">
            Under the leadership of <span className="text-red-400 font-semibold">Shihan Shantanu Ganguly</span>
          </p>
          <p className="text-lg text-gray-300">
            IFK Kyokushin Representative of India
          </p>
        </div>

        <div className="mb-16">
          <div className="inline-block bg-red-600 text-white px-8 py-3 text-xl font-bold tracking-widest border-2 border-red-600 hover:bg-transparent hover:text-red-400 transition-all duration-300 cursor-default">
            OSU!
          </div>
        </div>

        <div className="space-y-4 text-gray-300">
          <p className="text-lg">Strength • Respect • Perseverance</p>
          <p className="text-base max-w-2xl mx-auto">
            We offer training programs for children, teenagers, and adults, focusing on physical fitness, 
            self-defense, mental discipline, and the true philosophy of Kyokushin Karate.
          </p>

          <p className="text-base max-w-3xl mx-auto mt-4 text-gray-300">
          <span className="font-semibold text-red-400">States we operate from: </span> 
           West Bengal, Maharashtra, Karnataka, Bihar, Jharkhand, Odisha, Uttar Pradesh, 
           Uttarakhand, Manipur, Arunachal Pradesh, Meghalaya, Tripura, Delhi, 
           Rajasthan, Gujarat, Goa, Kerala, Tamil Nadu, Andhra Pradesh
          </p>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-red-400 transition-colors duration-300 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
