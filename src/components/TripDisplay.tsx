import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Bed,
  Utensils,
  Bus,
  DollarSign,
  Compass,
  CheckSquare,
  Square,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Phone,
  FileText,
  Copy,
  Check,
  Printer,
  ChevronRight,
  Sun,
  CloudSun,
  Luggage,
  Sparkles,
  Info,
  Layers,
  Heart,
  ExternalLink,
  Volume2,
  VolumeX,
  Smartphone,
  Users,
  Footprints,
  Leaf,
  X,
} from 'lucide-react';
import { TravelPlan } from '../types/travel';
import { CurrencyMode, enrichPriceString, formatINR, formatUSD, usdToInr } from '../utils/currency';
import { SupportedUILang, TRANSLATIONS } from '../utils/translations';
import { WeatherForecast } from './WeatherForecast';

interface TripDisplayProps {
  plan: TravelPlan;
  onNewSearch: () => void;
  currencyMode: CurrencyMode;
  uiLang: SupportedUILang;
}

type TabType =
  | 'itinerary'
  | 'overview'
  | 'weather'
  | 'hotels'
  | 'food'
  | 'transit'
  | 'budget'
  | 'attractions'
  | 'packing'
  | 'safety'
  | 'tips'
  | 'document';

export const TripDisplay: React.FC<TripDisplayProps> = ({
  plan,
  onNewSearch,
  currencyMode,
  uiLang,
}) => {
  const t = TRANSLATIONS[uiLang];

  const [activeTab, setActiveTab] = useState<TabType>('itinerary');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copiedDoc, setCopiedDoc] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showPocketCard, setShowPocketCard] = useState(false);

  // Toggle packing checklist item
  const togglePackingItem = (itemKey: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const handleCopyDocument = () => {
    navigator.clipboard.writeText(plan.formattedMarkdown || '');
    setCopiedDoc(true);
    setTimeout(() => setCopiedDoc(false), 2000);
  };

  // Text-To-Speech Audio Narration
  const handleToggleAudio = (textToRead: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    // Choose appropriate voice/language
    if (plan.inputs.language.toLowerCase().includes('telugu') || uiLang === 'te') {
      utterance.lang = 'te-IN';
    } else {
      utterance.lang = 'en-US';
    }
    
    utterance.rate = 0.95; // comfortable listening speed
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    
    setIsPlayingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  // Stop audio on unmount or tab change
  React.useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedDay, activeTab]);

  // Calculate total packing progress
  const allPackingItems = plan.packingChecklist.flatMap((c) => c.items);
  const totalItemsCount = allPackingItems.length;
  const checkedItemsCount = Object.values(checkedItems).filter(Boolean).length;
  const packingProgress = totalItemsCount > 0 ? Math.round((checkedItemsCount / totalItemsCount) * 100) : 0;

  const currentDayData = plan.dayWiseItinerary.find((d) => d.day === selectedDay) || plan.dayWiseItinerary[0];

  // Helper text for current day audio read
  const currentDaySpeechText = currentDayData
    ? `${currentDayData.title}. Morning: ${currentDayData.morning.activity} at ${currentDayData.morning.location}. ${currentDayData.morning.description}. Afternoon: ${currentDayData.afternoon.activity} at ${currentDayData.afternoon.location}. ${currentDayData.afternoon.description}. Evening: ${currentDayData.evening.activity}. Recommended meals include ${currentDayData.meals.lunch} and ${currentDayData.meals.dinner}.`
    : '';

  // Format currency helpers for dual USD & INR display
  const formatCostText = (text: string | undefined): string => {
    if (!text) return '';
    return enrichPriceString(text, currencyMode);
  };

  const lowCostUSD = plan.estimatedTotalCost.lowEstimate || 1500;
  const highCostUSD = plan.estimatedTotalCost.highEstimate || 2500;
  const dailyAvgUSD = plan.estimatedTotalCost.dailyAverage || 250;
  const lowCostINR = plan.estimatedTotalCost.inrLowEstimate || usdToInr(lowCostUSD);
  const highCostINR = plan.estimatedTotalCost.inrHighEstimate || usdToInr(highCostUSD);
  const dailyAvgINR = plan.estimatedTotalCost.inrDailyAverage || usdToInr(dailyAvgUSD);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-stone-900 via-emerald-950 to-stone-900 text-white p-6 sm:p-10 shadow-2xl border border-emerald-900/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-4xl space-y-4">
          
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/25 text-emerald-300 font-semibold border border-emerald-500/30">
              <MapPin className="w-3.5 h-3.5" />
              {plan.destination}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-stone-200">
              {plan.inputs.days} {t.days} / {plan.inputs.days - 1} Nights
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-stone-200">
              {plan.inputs.travel_style}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
              {plan.inputs.budget}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {plan.tripOverview.title}
          </h1>

          <p className="text-emerald-200 text-base sm:text-lg italic font-serif">
            "{plan.tripOverview.tagline}"
          </p>

          <p className="text-stone-300 text-xs sm:text-base leading-relaxed max-w-3xl">
            {plan.tripOverview.summary}
          </p>

          {/* Quick Dual Budget Highlight Pill in Banner */}
          <div className="p-3 bg-white/10 rounded-2xl border border-white/15 max-w-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span className="text-stone-300">{t.totalCostLabel}:</span>
              <span className="font-bold text-white font-mono">
                {currencyMode === 'inr'
                  ? `${formatINR(lowCostINR)} - ${formatINR(highCostINR)}`
                  : currencyMode === 'usd'
                  ? `${formatUSD(lowCostUSD)} - ${formatUSD(highCostUSD)}`
                  : `${formatUSD(lowCostUSD)} - ${formatUSD(highCostUSD)} (${formatINR(lowCostINR)} - ${formatINR(highCostINR)})`}
              </span>
            </div>
            <div className="text-stone-300">
              {t.dailyAvgLabel}: <strong className="text-emerald-300 font-mono">
                {currencyMode === 'inr' ? formatINR(dailyAvgINR) : currencyMode === 'usd' ? formatUSD(dailyAvgUSD) : `${formatUSD(dailyAvgUSD)} (~${formatINR(dailyAvgINR)})`}
              </strong>
            </div>
          </div>
        </div>

        {/* Floating Quick Action Buttons */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowPocketCard(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 text-stone-950 text-xs sm:text-sm font-bold shadow-md hover:bg-amber-400 transition-colors"
            >
              <Smartphone className="w-4 h-4 text-stone-950" />
              <span>{t.pocketCardTitle}</span>
            </button>

            <button
              onClick={() => setActiveTab('document')}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold transition-colors border border-white/20"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>{t.tabDocument}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 text-xs sm:text-sm transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">{t.printPdfBtn}</span>
            </button>
          </div>

          <button
            onClick={onNewSearch}
            className="text-xs sm:text-sm text-stone-400 hover:text-white underline underline-offset-4 transition-colors"
          >
            ← {uiLang === 'te' ? 'మరొక ప్రయాణం ప్లాన్ చేయండి' : 'Plan another trip'}
          </button>
        </div>
      </div>

      {/* Feature 1: "Trip at a Glance / Easy for Everyone" Card */}
      <div className="bg-linear-to-r from-emerald-50 via-teal-50 to-amber-50 rounded-2xl border border-emerald-200/80 p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-emerald-700" />
          <h2 className="font-serif text-base sm:text-lg font-bold text-emerald-950">
            {t.beginnerGuideTitle}
          </h2>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-200/60 text-emerald-900 ml-auto">
            Easy Guide
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Walking Effort */}
          <div className="bg-white p-3.5 rounded-xl border border-emerald-100 flex items-start gap-2.5">
            <Footprints className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-bold mb-0.5">
                {uiLang === 'te' ? 'నడక & శ్రమ స్థాయి:' : 'Walking Effort:'}
              </strong>
              <span className="text-stone-700 leading-snug">
                {plan.beginnerSummary?.walkingEffort || 'Moderate walking (12,000–18,000 steps). Public transit and flat avenues.'}
              </span>
            </div>
          </div>

          {/* Vegetarian & Indian Food */}
          <div className="bg-white p-3.5 rounded-xl border border-emerald-100 flex items-start gap-2.5">
            <Leaf className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-bold mb-0.5">
                {uiLang === 'te' ? 'శాకాహార వసతి (Pure Veg):' : 'Veg & Indian Food:'}
              </strong>
              <span className="text-stone-700 leading-snug">
                {plan.beginnerSummary?.vegetarianFriendly || 'Vegetarian and Indian options available; specific dining spots recommended in food guide.'}
              </span>
            </div>
          </div>

          {/* Family & Elder Friendly */}
          <div className="bg-white p-3.5 rounded-xl border border-emerald-100 flex items-start gap-2.5">
            <Users className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-bold mb-0.5">
                {uiLang === 'te' ? 'కుటుంబం & వృద్ధులకు:' : 'Family & Senior Friendly:'}
              </strong>
              <span className="text-stone-700 leading-snug">
                {plan.beginnerSummary?.familyAndSeniorFriendly || 'Comfortable pacing with elevator-accessible transit and family-friendly resting spots.'}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Golden Rules */}
        {plan.beginnerSummary?.threeMainRulesForEveryone && plan.beginnerSummary.threeMainRulesForEveryone.length > 0 && (
          <div className="mt-3 pt-3 border-t border-emerald-200/50 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-[11px] text-emerald-950">
            <strong className="shrink-0 font-bold">
              {uiLang === 'te' ? 'ముఖ్యమైన 3 సూత్రాలు:' : '3 Simple Rules:'}
            </strong>
            <div className="flex flex-wrap gap-2">
              {plan.beginnerSummary.threeMainRulesForEveryone.map((rule, rIdx) => (
                <span key={rIdx} className="bg-white/80 px-2.5 py-1 rounded-lg border border-emerald-200">
                  ✓ {rule}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Live 7-Day Weather Forecast Component */}
      <WeatherForecast
        destination={plan.destination}
        uiLang={uiLang}
        selectedDayIdx={selectedDay}
        onSelectDayIdx={(d) => {
          setSelectedDay(d);
          setActiveTab('itinerary');
        }}
      />

      {/* Navigation Tabs Bar */}
      <div className="sticky top-16 z-30 bg-stone-100/90 backdrop-blur-md py-2 border-b border-stone-200/80 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          {[
            { id: 'itinerary', label: t.tabItinerary, icon: Calendar, badge: `${plan.dayWiseItinerary.length}d` },
            { id: 'overview', label: t.tabOverview, icon: Compass },
            { id: 'weather', label: uiLang === 'te' ? 'వాతావరణం' : 'Weather', icon: CloudSun, badge: '7-Day Live' },
            { id: 'hotels', label: t.tabHotels, icon: Bed, badge: plan.hotelRecommendations.length },
            { id: 'food', label: t.tabFood, icon: Utensils },
            { id: 'transit', label: t.tabTransit, icon: Bus },
            { id: 'budget', label: t.tabBudget, icon: DollarSign },
            { id: 'attractions', label: t.tabAttractions, icon: MapPin },
            { id: 'packing', label: t.tabPacking, icon: Luggage, badge: `${packingProgress}%` },
            { id: 'safety', label: t.tabSafety, icon: ShieldCheck },
            { id: 'tips', label: t.tabTips, icon: Lightbulb },
            { id: 'document', label: t.tabDocument, icon: FileText, highlight: true },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                    : tab.highlight
                    ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                    : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : tab.highlight ? 'text-emerald-700' : 'text-stone-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1 text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab 1: Day-Wise Itinerary */}
      {activeTab === 'itinerary' && (
        <div className="space-y-6">
          {/* Day Selector Ribbon with Audio Read Aloud button */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-1">
              {plan.dayWiseItinerary.map((dayItem) => {
                const isSelected = selectedDay === dayItem.day;
                return (
                  <button
                    key={dayItem.day}
                    onClick={() => setSelectedDay(dayItem.day)}
                    className={`px-4 py-2.5 rounded-xl text-left transition-all shrink-0 border ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                      Day {dayItem.day}
                    </div>
                    <div className="text-xs sm:text-sm font-bold truncate max-w-[160px]">
                      {dayItem.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Audio Listen Button for seniors and accessibility */}
            <button
              onClick={() => handleToggleAudio(currentDaySpeechText)}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors shadow-2xs ${
                isPlayingAudio
                  ? 'bg-rose-50 text-rose-700 border-rose-200 animate-pulse'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
              }`}
              title="Listen to this day's plan in voice"
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-4 h-4 text-rose-600" />
                  <span>{t.audioStopBtn}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-600" />
                  <span>{t.audioListenBtn}</span>
                </>
              )}
            </button>
          </div>

          {/* Current Day Detail Card */}
          {currentDayData && (
            <div className="bg-white rounded-2xl border border-stone-200 shadow-md p-6 sm:p-8 space-y-8">
              {/* Day Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-100 gap-3">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-1 border border-emerald-200">
                    <span>Day {currentDayData.day} of {plan.inputs.days}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    {currentDayData.title}
                  </h2>
                </div>
                {currentDayData.estimatedCost && (
                  <div className="bg-emerald-50/70 rounded-xl px-4 py-2 border border-emerald-200 text-right">
                    <span className="text-[11px] text-emerald-800 font-bold uppercase tracking-wider block">
                      Estimated Day Cost ($ & ₹)
                    </span>
                    <span className="text-sm font-extrabold text-emerald-950 font-mono">
                      {formatCostText(currentDayData.estimatedCost)}
                    </span>
                  </div>
                )}
              </div>

              {/* Timeline Cards: Morning, Afternoon, Evening */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Morning */}
                <div className="bg-amber-50/40 rounded-2xl p-5 border border-amber-200/60 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs">
                        <Sun className="w-3.5 h-3.5 text-amber-600" />
                        {t.morning}
                      </span>
                      <span className="text-xs font-bold text-amber-900/80 font-mono">
                        {currentDayData.morning.time}
                      </span>
                    </div>

                    <h3 className="font-bold text-stone-900 text-base mb-1">
                      {currentDayData.morning.activity}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-stone-500 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{currentDayData.morning.location}</span>
                    </div>

                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {currentDayData.morning.description}
                    </p>
                  </div>

                  {currentDayData.morning.insiderTip && (
                    <div className="p-3 rounded-xl bg-white border border-amber-200 text-xs text-amber-900 flex items-start gap-2 shadow-2xs">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>{t.insiderTip}:</strong> {currentDayData.morning.insiderTip}
                      </div>
                    </div>
                  )}
                </div>

                {/* Afternoon */}
                <div className="bg-sky-50/40 rounded-2xl p-5 border border-sky-200/60 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-100 text-sky-900 font-bold text-xs">
                        <CloudSun className="w-3.5 h-3.5 text-sky-600" />
                        {t.afternoon}
                      </span>
                      <span className="text-xs font-bold text-sky-900/80 font-mono">
                        {currentDayData.afternoon.time}
                      </span>
                    </div>

                    <h3 className="font-bold text-stone-900 text-base mb-1">
                      {currentDayData.afternoon.activity}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-stone-500 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{currentDayData.afternoon.location}</span>
                    </div>

                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {currentDayData.afternoon.description}
                    </p>
                  </div>

                  {currentDayData.afternoon.insiderTip && (
                    <div className="p-3 rounded-xl bg-white border border-sky-200 text-xs text-sky-900 flex items-start gap-2 shadow-2xs">
                      <Lightbulb className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>{t.insiderTip}:</strong> {currentDayData.afternoon.insiderTip}
                      </div>
                    </div>
                  )}
                </div>

                {/* Evening */}
                <div className="bg-indigo-50/40 rounded-2xl p-5 border border-indigo-200/60 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-900 font-bold text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                        {t.evening}
                      </span>
                      <span className="text-xs font-bold text-indigo-900/80 font-mono">
                        {currentDayData.evening.time}
                      </span>
                    </div>

                    <h3 className="font-bold text-stone-900 text-base mb-1">
                      {currentDayData.evening.activity}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-stone-500 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{currentDayData.evening.location}</span>
                    </div>

                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {currentDayData.evening.description}
                    </p>
                  </div>

                  {currentDayData.evening.insiderTip && (
                    <div className="p-3 rounded-xl bg-white border border-indigo-200 text-xs text-indigo-900 flex items-start gap-2 shadow-2xs">
                      <Lightbulb className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>{t.insiderTip}:</strong> {currentDayData.evening.insiderTip}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Day Meals Section */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3 flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-emerald-600" />
                  <span>{t.meals} - Day {currentDayData.day}</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                    <span className="text-[11px] font-bold text-amber-700 uppercase block mb-1">Breakfast</span>
                    <p className="text-stone-800">{currentDayData.meals.breakfast}</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                    <span className="text-[11px] font-bold text-sky-700 uppercase block mb-1">Lunch</span>
                    <p className="text-stone-800">{currentDayData.meals.lunch}</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                    <span className="text-[11px] font-bold text-indigo-700 uppercase block mb-1">Dinner</span>
                    <p className="text-stone-800">{currentDayData.meals.dinner}</p>
                  </div>
                </div>
              </div>

              {/* Next/Prev Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <button
                  disabled={selectedDay === 1}
                  onClick={() => setSelectedDay(selectedDay - 1)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-stone-200 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Previous Day
                </button>
                <span className="text-xs text-stone-500 font-medium">
                  Showing Day {selectedDay} of {plan.dayWiseItinerary.length}
                </span>
                <button
                  disabled={selectedDay === plan.dayWiseItinerary.length}
                  onClick={() => setSelectedDay(selectedDay + 1)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next Day →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Overview & Timing */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Trip Highlights */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>Trip Highlights</span>
              </h3>
              <ul className="space-y-3">
                {plan.tripOverview.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Time to Visit */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-500" />
                <span>2. Best Time to Visit</span>
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900">
                  <strong className="block text-xs uppercase tracking-wider mb-1">Recommended Window</strong>
                  {plan.bestTimeToVisit.bestMonths}
                </div>
                <div>
                  <strong className="text-stone-900 block mb-0.5">Seasonal Weather & Atmosphere:</strong>
                  <p className="text-stone-600">{plan.bestTimeToVisit.seasonalBreakdown}</p>
                </div>
                <div>
                  <strong className="text-stone-900 block mb-0.5">Weather Expectations:</strong>
                  <p className="text-stone-600">{plan.bestTimeToVisit.weatherExpectations}</p>
                </div>
                <div>
                  <strong className="text-stone-900 block mb-0.5">Peak vs Off-Peak Strategy:</strong>
                  <p className="text-stone-600">{plan.bestTimeToVisit.peakVsOffPeak}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Weather Forecast */}
      {activeTab === 'weather' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
                <CloudSun className="w-6 h-6 text-amber-500" />
                <span>
                  {uiLang === 'te'
                    ? 'వాతావరణ సూచన & ప్రత్యక్ష సమాచారం'
                    : 'Current 7-Day Weather & Climate Guide'}
                </span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                {uiLang === 'te'
                  ? `${plan.destination} కోసం ప్రత్యక్ష వాతావరణం, వర్షం మరియు ఉష్ణోగ్రతలు`
                  : `Real-time satellite meteorological conditions and temperatures for ${plan.destination}`}
              </p>
            </div>
            <button
              onClick={() => setActiveTab('itinerary')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-colors border border-emerald-200"
            >
              <span>{uiLang === 'te' ? 'రోజువారీ ప్లాన్‌కు వెళ్ళండి' : 'View Day Itinerary'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Full Interactive Weather Component */}
          <WeatherForecast
            destination={plan.destination}
            uiLang={uiLang}
            selectedDayIdx={selectedDay}
            onSelectDayIdx={(d) => {
              setSelectedDay(d);
              setActiveTab('itinerary');
            }}
          />

          {/* Seasonal Analysis & Planning Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-500" />
                <span>{uiLang === 'te' ? 'ఉత్తమ ప్రయాణ కాలం (Best Season)' : 'Ideal Visiting Season'}</span>
              </h3>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950">
                <strong className="block font-bold mb-1">
                  {uiLang === 'te' ? 'సిఫార్సు చేయబడిన నెలలు:' : 'Recommended Months:'}
                </strong>
                {plan.bestTimeToVisit.bestMonths}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {plan.bestTimeToVisit.seasonalBreakdown}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                <Luggage className="w-5 h-5 text-emerald-600" />
                <span>{uiLang === 'te' ? 'వాతావరణ ప్యాకింగ్ చిట్కాలు' : 'Weather-Adaptive Packing'}</span>
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {plan.bestTimeToVisit.weatherExpectations}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('packing')}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline flex items-center gap-1"
                >
                  <span>{uiLang === 'te' ? 'పూర్తి ప్యాకింగ్ లిస్ట్ చూడండి →' : 'Review Full Packing Checklist →'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Hotels */}
      {activeTab === 'hotels' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Bed className="w-6 h-6 text-emerald-600" />
              <span>4. Hotel Recommendations</span>
            </h2>
            <span className="text-xs text-stone-500">
              Matched to {plan.inputs.hotel_type} ({plan.inputs.budget})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plan.hotelRecommendations.map((hotel, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                      {hotel.type}
                    </span>
                    <span className="text-xs font-mono font-bold text-stone-900">
                      {formatCostText(hotel.priceRange)}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-stone-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{hotel.neighborhood}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                    {hotel.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    <span className="text-[11px] font-bold text-stone-500 uppercase block">Amenities & Highlights:</span>
                    {hotel.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="text-xs text-stone-700 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700">
                  <strong className="text-stone-900 block mb-0.5">Booking Tip:</strong>
                  {hotel.bookingAdvice}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Food & Dining */}
      {activeTab === 'food' && (
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2 mb-2">
              <Utensils className="w-6 h-6 text-emerald-600" />
              <span>5. Food & Gastronomy Guide</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Hand-picked local specialties, iconic dining spots, and pure vegetarian / Indian food options.
            </p>
          </div>

          {/* Must-Try Local Dishes */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-700">
              Must-Try Authentic Dishes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {plan.foodRecommendations.mustTryDishes.map((dish, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-stone-900 text-sm">{dish.dish}</h4>
                    <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      {formatCostText(dish.priceLevel)}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{dish.description}</p>
                  <div className="text-[11px] text-stone-500 pt-1 border-t border-stone-100 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Best at: <strong>{dish.bestSpot}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Iconic Restaurants */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-700">
              Recommended Restaurants & Cafes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plan.foodRecommendations.recommendedRestaurants.map((res, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 space-y-2.5 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-700 uppercase">{res.cuisine}</span>
                    <span className="text-xs font-mono font-bold text-stone-800">{formatCostText(res.priceLevel)}</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-stone-900">{res.name}</h4>
                  <p className="text-xs text-stone-500 italic">Vibe: {res.vibe}</p>
                  <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-xs">
                    <strong className="text-stone-800">Must Order: </strong>
                    <span className="text-stone-700">{res.signatureDish}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Street Food Areas & Dietary Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-700">
                Street Food Hotspots
              </h3>
              <div className="space-y-3">
                {plan.foodRecommendations.streetFoodAreas.map((area, idx) => (
                  <div key={idx} className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-stone-900">
                      <span>{area.area}</span>
                      <span className="text-stone-500 text-[11px] font-normal">{area.bestTimeToVisit}</span>
                    </div>
                    <p className="text-stone-600">{area.specialty}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50/50 rounded-xl border border-emerald-200 p-5 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-emerald-700" />
                <span>Pure Vegetarian, Vegan & Dietary Advice</span>
              </h3>
              <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                {plan.foodRecommendations.dietaryTips}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Transportation */}
      {activeTab === 'transit' && (
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
            <Bus className="w-6 h-6 text-emerald-600" />
            <span>6. Transportation Guide</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                  Airport to City Center
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {plan.transportationGuide.arrivalTransit}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                  Subway, Rail & Buses
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {plan.transportationGuide.localTransitSystems}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Recommended Passes & Smart Cards
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {formatCostText(plan.transportationGuide.recommendedPasses)}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                  Taxis, Rideshare & Car Rental
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {plan.transportationGuide.taxisAndRideHailing}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                  Walkability & Biking
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {plan.transportationGuide.walkabilityAdvice}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Recommended Navigation Apps
                </span>
                <div className="flex flex-wrap gap-2">
                  {plan.transportationGuide.navigationApps.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-stone-100 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Budget & Cost (Dual USD & INR) */}
      {activeTab === 'budget' && (
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-emerald-600" />
                <span>7. Budget Breakdown & 11. Estimated Total Cost</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Itemized expense allocation with clear calculations in both Dollars ($) and Indian Rupees (₹).
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl text-right">
              <span className="text-[11px] text-emerald-800 font-bold uppercase tracking-wider block">
                Estimated Total Trip Cost ($ & ₹)
              </span>
              <span className="text-base sm:text-lg font-mono font-extrabold text-emerald-900">
                {formatCostText(plan.budgetBreakdown.totalEstimatedRange)}
              </span>
            </div>
          </div>

          {/* Visual Percentage Bar */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600">
              Estimated Expense Allocation
            </h3>
            
            {/* Multi-segmented progress bar */}
            <div className="w-full h-4 rounded-full overflow-hidden flex bg-stone-100">
              {plan.budgetBreakdown.categories.map((cat, idx) => {
                const colors = ['bg-emerald-600', 'bg-teal-500', 'bg-cyan-500', 'bg-amber-500', 'bg-purple-500'];
                return (
                  <div
                    key={idx}
                    style={{ width: `${cat.percentage}%` }}
                    className={`${colors[idx % colors.length]} transition-all`}
                    title={`${cat.category}: ${cat.percentage}%`}
                  />
                );
              })}
            </div>

            {/* Category Cards with Dual Currency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {plan.budgetBreakdown.categories.map((cat, idx) => {
                const badgeColors = ['text-emerald-700', 'text-teal-700', 'text-cyan-700', 'text-amber-700', 'text-purple-700'];
                return (
                  <div key={idx} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-stone-900">{cat.category}</span>
                      <span className={`text-xs font-extrabold font-mono ${badgeColors[idx % badgeColors.length]}`}>
                        {cat.percentage}%
                      </span>
                    </div>
                    <div className="text-xs font-mono font-bold text-stone-900">
                      {formatCostText(cat.estimatedCost)}
                    </div>
                    <p className="text-[11px] text-stone-500 leading-relaxed">{cat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Estimated Total Cost Card & Money Saving Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                <span>11. Estimated Total Cost Analysis</span>
              </h3>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] text-stone-500 uppercase block">Low End</span>
                  <span className="text-xs sm:text-sm font-extrabold font-mono text-stone-800 block">
                    {formatUSD(lowCostUSD)}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">
                    {formatINR(lowCostINR)}
                  </span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 uppercase block font-bold">High End</span>
                  <span className="text-xs sm:text-sm font-extrabold font-mono text-emerald-950 block">
                    {formatUSD(highCostUSD)}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">
                    {formatINR(highCostINR)}
                  </span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] text-stone-500 uppercase block">Daily Avg</span>
                  <span className="text-xs sm:text-sm font-extrabold font-mono text-stone-800 block">
                    ~{formatUSD(dailyAvgUSD)}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">
                    ~{formatINR(dailyAvgINR)}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {formatCostText(plan.estimatedTotalCost.perPersonSummary)}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-emerald-600" />
                <span>Top Money-Saving Tips</span>
              </h3>
              <ul className="space-y-2.5">
                {plan.budgetBreakdown.moneySavingTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{formatCostText(tip)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 7: Attractions */}
      {activeTab === 'attractions' && (
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-emerald-600" />
            <span>8. Local Attractions & Highlights</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plan.localAttractions.map((att, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border p-6 space-y-3 transition-shadow ${
                  att.isMustSee ? 'border-emerald-200 shadow-sm' : 'border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      att.isMustSee
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {att.isMustSee ? '★ Must-See Highlight' : 'Hidden Gem'}
                  </span>
                  <span className="text-xs font-semibold text-stone-500">{att.category}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900">{att.name}</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{att.description}</p>

                <div className="pt-2 border-t border-stone-100 space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Timing Tip:</strong> {att.visitTimingTip}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Ticket Advice:</strong> {formatCostText(att.ticketTip)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 8: Packing Checklist */}
      {activeTab === 'packing' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
                <Luggage className="w-6 h-6 text-emerald-600" />
                <span>9. Interactive Packing Checklist</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Click items to check them off as you pack your bags.
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="bg-white border border-stone-200 px-4 py-3 rounded-2xl min-w-[200px]">
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span>Packing Progress</span>
                <span className="text-emerald-700 font-mono">{packingProgress}%</span>
              </div>
              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${packingProgress}%` }}
                />
              </div>
              <span className="text-[10px] text-stone-400 mt-1 block">
                {checkedItemsCount} of {totalItemsCount} packed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plan.packingChecklist.map((categoryGroup, cIdx) => (
              <div key={cIdx} className="bg-white rounded-2xl border border-stone-200 p-5 space-y-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-800 pb-2 border-b border-stone-100">
                  {categoryGroup.category}
                </h3>
                <div className="space-y-2">
                  {categoryGroup.items.map((item, iIdx) => {
                    const itemKey = `${cIdx}-${iIdx}`;
                    const isChecked = !!checkedItems[itemKey];
                    return (
                      <button
                        key={itemKey}
                        type="button"
                        onClick={() => togglePackingItem(itemKey)}
                        className={`w-full text-left p-2 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 transition-colors ${
                          isChecked
                            ? 'bg-emerald-50 text-stone-400 line-through'
                            : 'hover:bg-stone-50 text-stone-800'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        )}
                        <span className="leading-snug">{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 9: Safety & Etiquette */}
      {activeTab === 'safety' && (
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <span>10. Safety Tips & Cultural Etiquette</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Safety Overview */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                  Overall Safety Assessment
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {plan.safetyTips.overallAssessment}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                  Recommended Safe Neighborhoods
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {plan.safetyTips.safeNeighborhoods.map((n, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-200"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {plan.safetyTips.areasToWatch && plan.safetyTips.areasToWatch.length > 0 && (
                <div className="pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-2 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Areas to Exercise Caution</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {plan.safetyTips.areasToWatch.map((area, idx) => (
                      <li key={idx}>• {area}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Scams & Emergency Contacts */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block mb-2 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Common Scams & Precautions</span>
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {plan.safetyTips.precautionsAndScams.map((scam, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold shrink-0">!</span>
                      <span>{scam}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency Contacts */}
              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-2 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-stone-500" />
                  <span>Emergency Numbers</span>
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-950 font-bold">
                    Police: {plan.safetyTips.emergencyContacts.police}
                  </div>
                  <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-bold">
                    Ambulance: {plan.safetyTips.emergencyContacts.ambulance}
                  </div>
                </div>
                {plan.safetyTips.emergencyContacts.general && (
                  <div className="mt-2 text-[11px] text-stone-500">
                    Helpline: {plan.safetyTips.emergencyContacts.general}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Cultural Etiquette */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600">
              Cultural Etiquette & Do's / Don'ts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plan.safetyTips.culturalEtiquette.map((etiq, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs text-stone-700 flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{etiq}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 10: Important Tips */}
      {activeTab === 'tips' && (
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-emerald-600" />
            <span>12. Important Travel Tips</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  eSIM & Mobile Data
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {plan.importantTravelTips.eSimAndConnectivity}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                  Payments, Cards & Cash
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {plan.importantTravelTips.paymentsAndCash}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                  Tipping Norms
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {plan.importantTravelTips.tippingNorms}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                  Power Plug & Voltage
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {plan.importantTravelTips.powerPlugType}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block mb-2">
                  Must Book in Advance
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  {plan.importantTravelTips.advanceBookingsRequired.map((book, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold shrink-0">⏰</span>
                      <span>{book}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Phrases */}
              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                  Essential Local Phrases
                </span>
                <div className="space-y-2">
                  {(plan.importantTravelTips.essentialLocalPhrases || plan.importantTravelTips.usefulPhrases || []).map((phrase, idx) => (
                    <div key={idx} className="p-2.5 bg-stone-50 rounded-xl border border-stone-100 text-xs">
                      <div className="flex items-center justify-between font-bold text-stone-900">
                        <span>"{phrase.phrase}"</span>
                        <span className="text-emerald-700 font-medium">{phrase.meaning}</span>
                      </div>
                      {phrase.pronunciation && (
                        <div className="text-[11px] text-stone-500 italic mt-0.5">
                          Say: {phrase.pronunciation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Golden Rule */}
              <div className="pt-3 border-t border-stone-100">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950">
                  <strong className="block mb-0.5">Golden Rule:</strong>
                  {plan.importantTravelTips.keyRule}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 11: Document View (Strict Headings & Bullet Points) */}
      {activeTab === 'document' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-stone-200">
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-base">
                Formatted Headings & Bullet Points Document
              </h3>
              <p className="text-xs text-stone-500">
                Exact text format with headings (#) and bullet points (*) ready to copy or print.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyDocument}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-2xs"
              >
                {copiedDoc ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDoc ? 'Copied to Clipboard!' : 'Copy Markdown'}</span>
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 text-stone-700 text-xs font-semibold hover:bg-stone-200 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 font-mono text-xs sm:text-sm text-stone-800 whitespace-pre-wrap leading-relaxed overflow-x-auto shadow-sm">
            {plan.formattedMarkdown}
          </div>
        </div>
      )}

      {/* Driver & Hotel Pocket Card Modal */}
      {showPocketCard && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 space-y-4 relative">
            <button
              onClick={() => setShowPocketCard(false)}
              className="absolute top-4 right-4 p-1.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-emerald-600" />
              <h3 className="font-serif text-lg font-bold text-stone-900">
                {t.pocketCardTitle}
              </h3>
            </div>
            <p className="text-xs text-stone-500">
              {t.pocketCardSub}
            </p>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                Destination / నగరం:
              </span>
              <div className="text-xl font-extrabold text-stone-900 font-serif">
                {plan.destination}
              </div>
              <div className="text-xs text-stone-600">
                Today's Key Stop: <strong>{currentDayData?.morning.location || plan.destination}</strong>
              </div>
            </div>

            {/* Quick Emergency Contacts */}
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
              <span className="font-bold text-stone-700 block mb-1">Emergency Numbers:</span>
              <div className="flex justify-between text-stone-800 font-mono">
                <span>Police: <strong>{plan.safetyTips.emergencyContacts.police}</strong></span>
                <span>Ambulance: <strong>{plan.safetyTips.emergencyContacts.ambulance}</strong></span>
              </div>
            </div>

            {/* Top phrase to show */}
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-1">
              <span className="font-bold text-emerald-900 block">Show to Driver:</span>
              <p className="text-emerald-950 font-bold text-sm">
                "Please take me to {currentDayData?.morning.activity || plan.destination}"
              </p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowPocketCard(false)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
