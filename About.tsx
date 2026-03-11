import React from 'react';
import { Users, Target, Heart, Trophy, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Traditional Techniques',
      description: 'Authentic Kyokushin Karate techniques passed down through generations'
    },
    {
      icon: Zap,
      title: 'Full-Contact Fighting',
      description: 'Build real fighting skills through proper full-contact training methods'
    },
    {
      icon: Users,
      title: 'Kata & Applications',
      description: 'Master traditional forms and understand their practical applications'
    },
    {
      icon: Heart,
      title: 'Mental Conditioning',
      description: 'Develop mental strength, discipline, and indomitable spirit'
    },
    {
      icon: Shield,
      title: 'Self-Defense',
      description: 'Practical self-defense skills for real-world situations'
    },
    {
      icon: Trophy,
      title: 'Character Building',
      description: 'Values of respect, perseverance, and humility in daily life'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Our Academy</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Kyokushin Karate Academy India was founded with the vision of creating a strong martial arts 
              community that values discipline, humility, and determination.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Head Coach, <span className="font-semibold text-red-600">Shihan Shantanu Ganguly</span>, 
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
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Training Programs</h4>
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

        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Students Learn</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                  <value.icon className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;