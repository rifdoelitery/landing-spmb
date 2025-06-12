'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  useEffect(() => {
    const getTargetTime = () => {
      const now = new Date();
      const target = new Date(now);
      if (now.getHours() < 6) {
        target.setHours(0, 10, 0, 0); // Hari ini jam 6 pagi
      } else {
        target.setDate(target.getDate() + 1); // Besok
        target.setHours(0, 10, 0, 0);
      }
      return target;
    };

    const updateCountdown = () => {
      const now = new Date();
      const target = getTargetTime();
      const diff = target.getTime() - now.getTime();

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-white p-5">
      <div className=" rounded-2xl p-10 max-w-xl w-full text-center ">
        <div className="mb-5">
          <div className="mx-auto w-28 h-28 bg-[url('/logo_jabar.png')] bg-center bg-contain bg-no-repeat drop-shadow-lg animate-[logoFloat_3s_ease-in-out_infinite]" />
        </div>

        <h1 className="text-xl font-semibold uppercase text-gray-800 mb-5">
          Saat ini sedang dilakukan optimalisasi dan peningkatan kualitas
          pelayanan.
        </h1>

        <div className="bg-[#fae72e]  text-black py-3 px-6 rounded-xl text-lg font-bold inline-block shadow-lg mb-5">
          📅 Pukul 23:40 - 00:10 WIB
        </div>

        <div className="text-black font-bold  leading-relaxed text-base mb-6 space-y-4">
          <p className="uppercase"> Silakan akses kembali pukul 14:00 WIB</p>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="text-center">
            <h1 className="text-[#006f1e] font-bold text-2xl">{time.hours}</h1>
            <span className="text-sm text-gray-600">Hours</span>
          </div>
          <div className="text-center">
            <h1 className="text-[#006f1e] font-bold text-2xl">
              {time.minutes}
            </h1>
            <span className="text-sm text-gray-600">Minutes</span>
          </div>
          <div className="text-center">
            <h1 className="text-[#006f1e] font-bold text-2xl">
              {time.seconds}
            </h1>
            <span className="text-sm text-gray-600">Seconds</span>
          </div>
        </div>

        <div className="bg-gradient-to-r  uppercase  bg-[#006f1e]   text-white py-3 px-4 rounded-lg font-bold mt-4">
          Terima kasih
        </div>
      </div>
    </div>
  );
}
