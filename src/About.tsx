import React from 'react';
import ifkWorldMap from '../assets/ifk-map.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Our Academy
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        {/* Mission + Programs */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Kyokushin Karate Academy India was founded with the vision of creating a strong martial arts 
              community that values discipline, humility, and determination.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Head Coach, 
              <span className="font-semibold text-red-600"> Shihan Shantanu Ganguly</span>, 
              is an internationally recognized martial artist, teacher, and the official IFK Kyokushin 
              representative for India. With decades of experience, he has trained countless students 
              and champions, spreading the authentic Kyokushin spirit across the nation.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
              <p className="text-red-800 font-medium italic">
                "We believe karate is not just about combat—it is a way of life."
              </p>
            </div>
          </div>

          {/* Training Programs */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Training Programs
            </h4>

            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Children's Programs (Ages 6-12)
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Teenage Programs (Ages 13-17)
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Adult Programs (18+)
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Advanced/Competition Training
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Women's Self-Defense
              </li>
            </ul>
          </div>
        </div>

        {/* IFK World Map Section (Replaced What Students Learn) */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            IFK Worldwide Presence
          </h3>

          <div className="bg-white rounded-xl shadow-xl p-6">
            <img
              src={ifkWorldMap}
              alt="IFK Kyokushin World Map"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
