import React from 'react';
import { Medal, Globe, Users, Calendar } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: Globe,
      title: 'International Recognition',
      description: 'Participation and victories in international Kyokushin championships across Asia and Europe'
    },
    {
      icon: Medal,
      title: 'Official Representative',
      description: 'Recognition of Shihan Shantanu Ganguly as the IFK Kyokushin Representative of India'
    },
    {
      icon: Users,
      title: 'National Champions',
      description: 'Training and producing national-level champions in full-contact karate'
    },
    {
      icon: Calendar,
      title: 'Event Organization',
      description: 'Organizing state and national Kyokushin events, promoting martial arts growth in India'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Previous Achievements</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our academy and its students have proudly represented India at national and international 
            platforms, achieving excellence in various Kyokushin Karate tournaments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{achievement.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Excellence in Martial Arts</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Our commitment to authentic Kyokushin Karate has earned recognition both nationally and 
            internationally. We continue to uphold the highest standards of martial arts excellence, 
            producing champions who embody the true spirit of Kyokushin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;