'use client';

export default function Home() {
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
          📅 Pukul 13:00 - 14:00 WIB
        </div>

        <div className="text-black font-bold  leading-relaxed text-base mb-6 space-y-4">
          <p className="uppercase"> Silakan akses kembali pukul 14:00 WIB</p>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-6">
          <div>
            <h1 className="text-[#006f1e] font-bold text-2xl ">04</h1>
            <span>Hours</span>
          </div>
          <div>
            <h1 className="text-[#006f1e] font-bold text-2xl ">04</h1>
            <span>Minutes</span>
          </div>
          <div>
            <h1 className="text-[#006f1e] font-bold text-2xl ">04</h1>
            <span>Seconds</span>
          </div>
        </div>

        <div className="bg-gradient-to-r  uppercase  bg-[#006f1e]   text-white py-3 px-4 rounded-lg font-bold mt-4">
          Terima kasih
        </div>
      </div>
    </div>
  );
}
