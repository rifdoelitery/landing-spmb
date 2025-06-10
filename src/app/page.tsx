'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-5 relative">
      <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-16 text-center max-w-xl w-full overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-teal-400 to-green-300 animate-pulse" />
        <div className="absolute top-5 right-5 text-yellow-500 text-2xl animate-[ring_2s_ease-in-out_infinite]">
          🔔
        </div>

        <div className="mb-10">
          <div className="mx-auto w-28 h-28 bg-[url('/logo_jabar.png')] bg-center bg-contain bg-no-repeat drop-shadow-lg animate-[logoFloat_3s_ease-in-out_infinite]" />
        </div>

        <h1 className="text-4xl font-bold text-slate-800 mb-6 leading-tight drop-shadow">
          Pendaftaran SPMB akan dibuka pukul{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 animate-[pulse_2s_ease-in-out_infinite]">
            08.00 WIB
          </span>
        </h1>

        <p className="text-slate-500 italic text-lg mb-10">
          Bersiaplah untuk masa depan yang gemilang!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fadeInUp">
            <div className="text-2xl mb-4">⏰</div>
            <div className="text-lg font-semibold text-slate-800 mb-2">
              Waktu Pembukaan
            </div>
            <p className="text-slate-600">
              Pendaftaran akan dibuka tepat pukul 08.00 WIB. Pastikan Anda sudah
              siap dengan semua dokumen yang diperlukan.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fadeInUp [animation-delay:0.2s]">
            <div className="text-2xl mb-4">📋</div>
            <div className="text-lg font-semibold text-slate-800 mb-2">
              Persiapan Dokumen
            </div>
            <p className="text-slate-600">
              Siapkan semua berkas pendaftaran, foto, dan dokumen pendukung
              lainnya sebelum waktu pembukaan.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-gray-400 text-sm">
          <p>Sistem Penerimaan Mahasiswa Baru (SPMB) - Jawa Barat</p>
          <p>Untuk informasi lebih lanjut, hubungi panitia pendaftaran</p>
        </div>
      </div>

      {/* Countdown & Animation */}
      <style jsx>{`
        @keyframes logoFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes ring {
          0%,
          100% {
            transform: rotate(0deg);
          }
          10%,
          30% {
            transform: rotate(10deg);
          }
          20% {
            transform: rotate(-10deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          function updateCountdown() {
              const now = new Date();
              const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0);
              if (now > today) today.setDate(today.getDate() + 1);
              const diff = today - now;
              const hours = Math.floor(diff / (1000 * 60 * 60));
              const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((diff % (1000 * 60)) / 1000);
              if (hours > 0 || minutes > 0 || seconds > 0) {
                  const countdownText = \`\${hours.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
                  document.title = \`\${countdownText} - Pendaftaran SPMB\`;
              }
          }
          setInterval(updateCountdown, 1000);
          updateCountdown();
        `,
        }}
      />
    </div>
  );
}
