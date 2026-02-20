import React from 'react';

const HanshiDavid: React.FC = () => {
  return (
    <section id="hanshi-david" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-red-600 mb-4">Hanshi David Pickthall</h2>
        <p className="text-gray-700 mb-6">
          Hanshi David Pickthall, an 8th Dan Black Belt, is the President of the
          International Federation of Karate (IFK). A world-renowned competitor
          and coach, Hanshi Pickthall has dedicated his life to the promotion
          and preservation of Kyokushin Karate. Having trained extensively
          under Hanshi Steve Arneil, he now leads the IFK with the same passion
          and commitment to excellence, ensuring that the legacy of Sosai Mas
          Oyama continues to inspire future generations of martial artists
          worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">About Hanshi David Pickthall</h3>
            <p className="text-gray-700 mb-4">
              A former British, European, and All Japan champion, Hanshi Pickthall
              has represented the IFK at the highest levels of competition and
              now leads the organization globally.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>8th Dan Black Belt and President of the IFK.</li>
              <li>Multiple-time British, European, and All Japan Champion.</li>
              <li>Former GB National Coach for both Knockdown and Kata.</li>
              <li>Successor to Hanshi Steve Arneil as IFK President.</li>
            </ul>
          </div>

          <img
            src="/hanshi-david.jpeg"
            alt="Hanshi David Pickthall"
            className="w-full h-96 object-cover object-top rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HanshiDavid;