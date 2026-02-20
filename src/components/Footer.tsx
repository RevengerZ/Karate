import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Academy Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              Kyokushin Karate Academy India
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Official home of authentic Kyokushin Karate in India under the guidance of
              Shihan Shantanu Ganguly, IFK Kyokushin Representative.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  Events
                </a>
              </li>
              <li>
                <a href="#hanshi" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  Hanshi
                </a>
              </li>
              <li>
                <a href="#hanshi-david" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  Hanshi David
                </a>
              </li>
              <li>
                <a href="#shihan" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  Shihan
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Training Programs</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Children's Program</li>
              <li className="text-gray-300">Teenage Program</li>
              <li className="text-gray-300">Adult Program</li>
              <li className="text-gray-300">Women's Self-Defense</li>
              <li className="text-gray-300">Competition Training</li>
              <li className="text-gray-300">Private Lessons</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Kyokushin Karate Academy India. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Follow the way of Kyokushin</span>
              <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold tracking-wider rounded">
                OSU!
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;