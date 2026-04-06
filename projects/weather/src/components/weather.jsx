import { useEffect, useState } from "react";

export default function WeatherCard({ data, item }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let h = now.getHours();
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setCurrentTime(`${h}:${m}:${s} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return (
      <div className="text-center text-slate-400 mt-10">
        Search for a city to see weather details.
      </div>
    );
  }

  const forecastMinTemp = item?.list?.[0]?.main?.temp_min ?? "--";

  return (
    <div className="bg-[#1a2540] border border-white/10 rounded-2xl p-7 w-full max-w-xl mx-auto text-[#e8edf5] shadow-2xl">

      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <p className="text-sm font-bold tracking-wide">{data.name}</p>
          <p className="text-xs text-slate-400 mt-0.5">{currentTime}</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:bg-white/10 transition">
          💬 Seeing different weather?
        </button>
      </div>

      {/* Main Row */}
      <div className="flex items-center gap-4 mb-2">
        <span className="text-5xl">🌥️</span>
        <p className="text-6xl font-bold tracking-tight text-white">{data.main.temp}°C</p>
        <div className="ml-auto text-right">
          <p className="text-lg font-semibold text-slate-200 capitalize">{data.weather[0].description}</p>
          <p className="text-xs text-slate-400 mt-1">
            Feels like <span className="text-slate-300 font-semibold">{data.main.feels_like}°</span>
          </p>
        </div>
      </div>

      {/* Forecast Text */}
      <p className="text-xs text-slate-400 border-t border-white/5 pt-4 mt-4 leading-relaxed">
        The skies will be mostly clear. The low will be {forecastMinTemp}°.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-6 border-t border-white/5 pt-5 mt-5">

        <div className="flex flex-col">
          <p className="text-[11px] text-slate-500 mb-1.5">Air quality <span className="border border-slate-500 rounded-full px-1 text-[9px]">i</span></p>
          <p className="text-sm font-semibold text-slate-300 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-500 shadow shadow-orange-500/50" />
            125
          </p>
        </div>

        <div className="flex flex-col pl-3 border-l border-white/5">
          <p className="text-[11px] text-slate-500 mb-1.5">Wind <span className="border border-slate-500 rounded-full px-1 text-[9px]">i</span></p>
          <p className="text-sm font-semibold text-slate-300">{data.wind?.speed ?? 6} km/h ➤</p>
        </div>

        <div className="flex flex-col pl-3 border-l border-white/5">
          <p className="text-[11px] text-slate-500 mb-1.5">Humidity <span className="border border-slate-500 rounded-full px-1 text-[9px]">i</span></p>
          <p className="text-sm font-semibold text-slate-300">{data.main.humidity}%</p>
        </div>

        <div className="flex flex-col pl-3 border-l border-white/5">
          <p className="text-[11px] text-slate-500 mb-1.5">Visibility <span className="border border-slate-500 rounded-full px-1 text-[9px]">i</span></p>
          <p className="text-sm font-semibold text-slate-300">{data.visibility ? (data.visibility / 1000).toFixed(0) : 6} km</p>
        </div>

        <div className="flex flex-col pl-3 border-l border-white/5">
          <p className="text-[11px] text-slate-500 mb-1.5">Pressure <span className="border border-slate-500 rounded-full px-1 text-[9px]">i</span></p>
          <p className="text-sm font-semibold text-slate-300">{data.main.pressure} mb</p>
        </div>

        <div className="flex flex-col pl-3 border-l border-white/5">
          <p className="text-[11px] text-slate-500 mb-1.5">Dew point</p>
          <p className="text-sm font-semibold text-slate-300">10°</p>
        </div>

      </div>
    </div>
  );
}