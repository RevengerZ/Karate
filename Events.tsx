import React from 'react';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      icon: Award,
      title: 'National Kyokushin Karate Championship',
      description: 'Premier national tournament featuring the best Kyokushin practitioners from across India',
      status: 'Coming Soon',
      color: 'red'
    },
    {
      icon: BookOpen,
      title: 'International Training Seminars',
      description: 'Intensive training sessions conducted by global Kyokushin masters',
      status: 'Registration Open',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Youth Empowerment & Self-Defense Programs',
      description: 'Community outreach programs for schools and youth organizations',
      status: 'Ongoing',
      color: 'green'
    },
    {
      icon: Calendar,
      title: 'Annual Grading & Belt Promotion Tests',
      description: 'Official belt testing and promotion ceremonies for dedicated students',
      status: 'Scheduled',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'from-red-500 to-red-600 border-red-200',
      blue: 'from-blue-500 to-blue-600 border-blue-200',
      green: 'from-green-500 to-green-600 border-green-200',
      purple: 'from-purple-500 to-purple-600 border-purple-200'
    };
    return colorMap[color] || colorMap.red;
  };

  const getStatusColor = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'Coming Soon': 'bg-red-100 text-red-800',
      'Registration Open': 'bg-blue-100 text-blue-800',
      'Ongoing': 'bg-green-100 text-green-800',
      'Scheduled': 'bg-purple-100 text-purple-800'
    };
    return statusMap[status] || statusMap['Coming Soon'];
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Future Events</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are constantly preparing for the next level. Stay updated with our upcoming events, 
            tournaments, and training programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className={`h-2 bg-gradient-to-r ${getColorClasses(event.color)}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-br ${getColorClasses(event.color)} rounded-full w-12 h-12 flex items-center justify-center`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Don't miss out on our events and training opportunities. Follow us on social media 
            and check our website regularly for announcements and updates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Subscribe to Updates
            </button>
            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
              View Event Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;