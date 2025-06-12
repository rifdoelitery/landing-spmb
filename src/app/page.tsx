'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const getTargetTime = () => {
      const now = new Date();
      const target = new Date(now);
      if (now.getHours() < 6) {
        target.setHours(0, 41, 0, 0); // Hari ini jam 00:20
      } else {
        target.setDate(target.getDate() + 1); // Besok
        target.setHours(0, 41, 0, 0);
      }
      return target;
    };

    const updateCountdown = () => {
      const now = new Date();
      const target = getTargetTime();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setIsFinished(true);
        setTime({ hours: '00', minutes: '00', seconds: '00' });
        return;
      }

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-6">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-8 text-center relative animate-fade-in">
        <div className="mb-10 flex justify-center items-center space-x-2">
          <div className="mx-auto w-24 h-24 bg-[url('/logo_jabar.png')] bg-center bg-contain bg-no-repeat drop-shadow-lg animate-[logoFloat_3s_ease-in-out_infinite]" />
          <div className="mx-auto w-24 h-24 bg-[url('/logo-spmb.png')] bg-center bg-contain bg-no-repeat drop-shadow-lg animate-[logoFloat_3s_ease-in-out_infinite]" />
        </div>

        <h1 className="text-4md font-bold uppercase text-gray-800 mb-5">
          Saat ini sedang dilakukan optimalisasi dan peningkatan kualitas
          pelayanan.
        </h1>
        <p className="text-gray-600 mb-6">
          Optimalisasi untuk pengalaman yang lebih baik
        </p>

        <div className="bg-gradient-to-br bg-[#fae72e] text-black rounded-xl p-5 mb-6 shadow-lg">
          <div className="text-xl font-bold">Pukul 23:40 - 00:20 WIB</div>
        </div>

        {!isFinished ? (
          <>
            <div className="flex justify-center items-center space-x-4 mb-3">
              <div className="text-center">
                <h1 className="text-[#006f1e] font-bold text-2xl">
                  {time.hours}
                </h1>
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
            <p className="text-black uppercase mb-6">
              Silakan akses kembali pukul 00:10 WIB
            </p>
          </>
        ) : (
          <div className="mt-6">
            {/* <p className="text-green-700 text-sm font-semibold mb-4">
              Refresh halaman untuk mengakses layanan SPMB Jabar.
            </p> */}
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 shadow-lg"
              onClick={() => {
                // Misalnya redirect
                window.location.href = 'https://spmb.jabarprov.go.id/apps'; // Ganti sesuai kebutuhan
              }}
            >
              Akses SPMB Jabar
            </button>
          </div>
        )}

        <div className="text-sm text-black uppercase font-bold flex items-center justify-center gap-1 border-t border-gray-100 pt-4 mt-6">
          <span>Terima kasih</span>
        </div>
      </div>
    </div>
  );
}
