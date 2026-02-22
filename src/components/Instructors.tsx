import React from 'react';

const Instructors: React.FC = () => {
  return (
    <section id="shihan" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-red-600 mb-4">Shihan</h2>
        <p className="text-gray-700 mb-6">
          Shihan Santanu Ganguly, a 5th Dan Black Belt, is the official
          representative of India under the IFK International Federation of
          Karate. A lifelong practitioner and passionate instructor, Shihan
          Ganguly trained directly under Hanshi Steve Arneil and Sosai Mas
          Oyama, the legendary founder of Kyokushin Karate. His unwavering
          dedication to the art and philosophy of Kyokushin has made him a
          guiding force for countless students across India. Through his
          leadership and teaching, he continues to uphold the true spirit of
          Kyokushin — discipline, respect, and indomitable will.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <img
            src="/shihan.jpg"
            alt="Shihan portrait"
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">About Shihan Santanu Ganguly</h3>
            <p className="text-gray-700 mb-4">
              Shihan Ganguly has dedicated his life to training and teaching
              Kyokushin Karate, mentoring instructors and students across India
              and representing the nation at international events under the
              IFK banner.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>5th Dan Black Belt and IFK India representative.</li>
              <li>Trained under Hanshi Steve Arneil and Sosai Mas Oyama.</li>
              <li>Experienced instructor, seminar leader, and mentor.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shihan;
