import React from 'react';

const Hanshi: React.FC = () => {
  return (
    <section id="hanshi" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-red-600 mb-4">Hanshi</h2>
        <p className="text-gray-700 mb-6">
          Hanshi Steve Arneil was a 10th Dan Black Belt and one of the most
          respected figures in the world of Kyokushin Karate. A direct student
          of Sosai Mas Oyama, Hanshi Arneil was the first person to complete
          the legendary 100-man Kumite outside Japan — a testament to his
          strength, endurance, and spirit. He played a pivotal role in
          spreading Kyokushin Karate across the world and later founded the
          International Federation of Karate (IFK) to preserve and promote the
          true teachings of Sosai Oyama. Through his lifelong dedication,
          Hanshi Arneil inspired generations of karateka to pursue excellence,
          humility, and the true Budo spirit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <img
            src="/hanshi.jpg"
            alt="Hanshi portrait"
            className="w-full h-120 object-cover rounded-lg shadow-md"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">About Hanshi Steve Arneil</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>10th Dan Black Belt, direct student of Sosai Mas Oyama.</li>
              <li>First to complete the 100-man Kumite outside Japan.</li>
              <li>Founder of the International Federation of Karate (IFK).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hanshi;
