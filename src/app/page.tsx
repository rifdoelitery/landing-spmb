'use client';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-5">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-10 max-w-xl w-full text-center shadow-2xl border border-white/20">
        <div className="mb-5">
          <div className="mx-auto w-28 h-28 bg-[url('/logo_jabar.png')] bg-center bg-contain bg-no-repeat drop-shadow-lg animate-[logoFloat_3s_ease-in-out_infinite]" />
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-5">
          Mohon maaf atas ketidaknyamanannya
        </h1>

        <div className="bg-gradient-to-r from-red-400 to-orange-500 text-white py-3 px-6 rounded-xl text-lg font-bold inline-block shadow-lg mb-5">
          📅 Pukul 13:00 - 14:00 WIB
        </div>

        <div className="text-gray-600 leading-relaxed text-base mb-6 space-y-4">
          <p>
            <strong>
              Saat ini kami sedang melakukan pemeliharaan dan penyesuaian{' '}
            </strong>{' '}
            sistem untuk meningkatkan kualitas layanan aplikasi.
          </p>
          <p>Aplikasi akan dapat diakses kembali setelah proses selesai</p>
        </div>

        <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white py-3 px-4 rounded-lg font-medium mt-4">
          🙏 Terima kasih atas kesabaran dan pengertian Anda.
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Sistem akan kembali normal setelah pukul 14:00 WIB
        </p>
      </div>
    </div>
  );
}
