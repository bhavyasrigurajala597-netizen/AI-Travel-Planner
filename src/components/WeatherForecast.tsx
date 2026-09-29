import React, { useState, useEffect } from 'react';
import {
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudLightning,
  Snowflake,
  CloudFog,
  Droplets,
  Wind,
  RotateCw,
  MapPin,
  ShieldAlert,
  Info,
  Thermometer,
} from 'lucide-react';
import { DailyForecast, fetch7DayWeather, WeatherData } from '../services/weatherService';
import { SupportedUILang, TRANSLATIONS } from '../utils/translations';

interface WeatherForecastProps {
  destination: string;
  uiLang: SupportedUILang;
  selectedDayIdx?: number;
  onSelectDayIdx?: (idx: number) => void;
}

export const WeatherForecast: React.FC<WeatherForecastProps> = ({
  destination,
  uiLang,
  selectedDayIdx,
  onSelectDayIdx,
}) => {
  const t = TRANSLATIONS[uiLang];
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  const loadWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetch7DayWeather(destination);
      setWeather(data);
    } catch (err: any) {
      console.error('Failed to load weather:', err);
      setError('Could not fetch real-time weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();
  }, [destination]);

  const renderWeatherIcon = (
    type: DailyForecast['iconType'],
    size: 'sm' | 'md' | 'lg' = 'md',
    className = ''
  ) => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-10 h-10',
    }[size];

    switch (type) {
      case 'sun':
        return <Sun className={`${sizeClasses} text-amber-500 animate-spin-slow ${className}`} />;
      case 'cloud-sun':
        return <CloudSun className={`${sizeClasses} text-amber-400 ${className}`} />;
      case 'cloud':
        return <Cloud className={`${sizeClasses} text-stone-400 ${className}`} />;
      case 'rain':
        return <CloudRain className={`${sizeClasses} text-sky-500 ${className}`} />;
      case 'thunder':
        return <CloudLightning className={`${sizeClasses} text-purple-600 ${className}`} />;
      case 'snow':
        return <Snowflake className={`${sizeClasses} text-blue-300 ${className}`} />;
      case 'fog':
        return <CloudFog className={`${sizeClasses} text-stone-300 ${className}`} />;
      default:
        return <Sun className={`${sizeClasses} text-amber-500 ${className}`} />;
    }
  };

  if (loading && !weather) {
    return (
      <div className="bg-white rounded-3xl border border-stone-200/90 p-5 shadow-xs animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="h-5 bg-stone-200 rounded w-48" />
          <div className="h-6 bg-stone-200 rounded-full w-20" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-32 bg-stone-100 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 p-5 sm:p-6 shadow-xs space-y-4">
      {/* Header bar: Title, Location, Live Badge & Unit Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping mr-0.5" />
              {t.weatherLiveBadge}
            </span>
            <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 flex items-center gap-1.5">
              <span>{t.weatherForecastTitle}</span>
            </h3>
          </div>
          <p className="text-xs text-stone-500 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>
              {weather.city} {weather.country ? `(${weather.country})` : ''} • {t.weatherForecastSub}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          {/* Unit Toggle °C / °F */}
          <div className="inline-flex p-0.5 bg-stone-100 rounded-xl border border-stone-200 text-xs font-bold">
            <button
              onClick={() => setUnit('C')}
              className={`px-2 py-1 rounded-lg transition-all ${
                unit === 'C' ? 'bg-emerald-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              °C
            </button>
            <button
              onClick={() => setUnit('F')}
              className={`px-2 py-1 rounded-lg transition-all ${
                unit === 'F' ? 'bg-emerald-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              °F
            </button>
          </div>

          {/* Refresh Button */}
          <button
            onClick={loadWeather}
            disabled={loading}
            className="p-1.5 rounded-xl border border-stone-200 text-stone-500 hover:text-stone-800 hover:bg-stone-50 transition-colors"
            title={t.weatherRefresh}
          >
            <RotateCw className={`w-4 h-4 ${loading ? 'animate-spin text-emerald-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* 7-Day Horizontal Weather Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
        {weather.forecast.map((day, idx) => {
          const isSelected = selectedDayIdx !== undefined && selectedDayIdx === idx + 1;
          const maxTemp = unit === 'C' ? `${day.tempMaxC}°` : `${day.tempMaxF}°`;
          const minTemp = unit === 'C' ? `${day.tempMinC}°` : `${day.tempMinF}°`;
          const conditionLabel = uiLang === 'te' ? day.conditionTe : day.condition;
          const dayTitle = uiLang === 'te' ? day.dayNameTe : day.dayName;

          return (
            <div
              key={day.date}
              onClick={() => onSelectDayIdx && onSelectDayIdx(idx + 1)}
              className={`rounded-2xl p-3 border transition-all flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30 shadow-xs'
                  : 'border-stone-200/80 bg-stone-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-xs'
              }`}
            >
              {/* Day & Date Header */}
              <div className="text-center pb-1 border-b border-stone-200/50">
                <span className="block text-xs font-bold text-stone-900 truncate">
                  {dayTitle}
                </span>
                <span className="text-[10px] text-stone-500 font-medium">
                  {new Date(day.date).toLocaleDateString(uiLang === 'te' ? 'te-IN' : 'en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>

              {/* Weather Icon & Condition */}
              <div className="my-2.5 flex flex-col items-center justify-center text-center">
                <div className="p-2 rounded-2xl bg-white shadow-2xs border border-stone-100 mb-1">
                  {renderWeatherIcon(day.iconType, 'md')}
                </div>
                <span className="text-[11px] font-semibold text-stone-700 line-clamp-1 leading-tight">
                  {conditionLabel}
                </span>
              </div>

              {/* Temperature High / Low */}
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold pt-1 border-t border-stone-200/50">
                <span className="text-stone-900">{maxTemp}</span>
                <span className="text-stone-400 font-normal">/</span>
                <span className="text-stone-500 font-normal">{minTemp}</span>
              </div>

              {/* Rain Chance & Wind Badges */}
              <div className="mt-2 pt-1.5 flex items-center justify-between text-[10px] text-stone-500">
                <span
                  className={`inline-flex items-center gap-0.5 font-medium ${
                    day.precipitationChance > 30 ? 'text-sky-700 font-bold' : ''
                  }`}
                  title={`${t.weatherRainChance}: ${day.precipitationChance}%`}
                >
                  <Droplets className="w-3 h-3 text-sky-500" />
                  {day.precipitationChance}%
                </span>
                <span
                  className="inline-flex items-center gap-0.5 text-stone-400"
                  title={`${t.weatherWindSpeed}: ${day.windSpeedKmH} km/h`}
                >
                  <Wind className="w-3 h-3 text-stone-400" />
                  {day.windSpeedKmH}k
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Weather Advisory / Packing Recommendation Pill */}
      <div className="p-3.5 rounded-2xl bg-sky-50/80 border border-sky-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Thermometer className="w-4 h-4" />
          </div>
          <div>
            <strong className="block text-sky-950 font-bold">
              {t.weatherPackingTip}:
            </strong>
            <span className="text-sky-900 leading-snug">
              {uiLang === 'te' ? weather.packingTipTe : weather.packingTip}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 text-[11px] text-sky-700 font-medium">
          <span>
            {uiLang === 'te' ? 'తాజా అప్‌డేట్:' : 'Last Updated:'} {weather.lastUpdated}
          </span>
        </div>
      </div>
    </div>
  );
};
