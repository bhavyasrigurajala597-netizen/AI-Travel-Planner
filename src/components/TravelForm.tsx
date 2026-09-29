import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Calendar,
  DollarSign,
  Compass,
  Bed,
  Bus,
  Sun,
  Heart,
  Globe,
  Sparkles,
  ArrowRight,
  Shield,
  Utensils,
  Camera,
  Trees,
  Mountain,
  Palmtree,
  ShoppingBag,
  Landmark,
  Music,
  Smile,
  Coffee,
  CheckCircle2,
  Users,
} from 'lucide-react';
import { TravelInput } from '../types/travel';
import { POPULAR_DESTINATIONS } from '../data/samplePlans';
import { SupportedUILang, TRANSLATIONS } from '../utils/translations';

interface TravelFormProps {
  onSubmit: (inputs: TravelInput) => void;
  isLoading: boolean;
  onSelectSamplePlan: () => void;
  onSelectTeluguPlan?: () => void;
  uiLang: SupportedUILang;
}

const BUDGET_OPTIONS = [
  { value: 'Backpacker ($ / ₹)', label: 'Backpacker ($ / ₹)', symbol: '$ / ₹', desc: 'Hostels, local food (~$30 / ~₹2,500/day)' },
  { value: 'Budget ($$ / ₹₹)', label: 'Budget ($$ / ₹₹)', symbol: '$$ / ₹₹', desc: 'Smart stays & budget savings (~$70 / ~₹6,000/day)' },
  { value: 'Moderate ($$$ / ₹₹₹)', label: 'Moderate ($$$ / ₹₹₹)', symbol: '$$$ / ₹₹₹', desc: 'Boutique hotels & great dining (~$150 / ~₹12,500/day)' },
  { value: 'Luxury ($$$$ / ₹₹₹₹)', label: 'Luxury ($$$$ / ₹₹₹₹)', symbol: '$$$$ / ₹₹₹₹', desc: '4-5 star resorts & private tours (~$350 / ~₹30,000/day)' },
  { value: 'Ultra-Luxury ($$$$$ / ₹₹₹₹₹)', label: 'Ultra-Luxury ($$$$$ / ₹₹₹₹₹)', symbol: '$$$$$ / ₹₹₹₹₹', desc: 'Palatial suites & VIP bespoke (~$750+ / ~₹65,000+/day)' },
];

const TRAVEL_STYLES = [
  { value: 'Cultural & Heritage', label: 'Cultural & Heritage', teLabel: 'సంస్కృతి & ఆలయాలు', icon: Landmark, desc: 'Temples, historic districts & monuments' },
  { value: 'Relaxed & Leisure', label: 'Relaxed & Leisure', teLabel: 'ప్రశాంత విహారం & బీచ్', icon: Smile, desc: 'Scenic cafes, gardens & gentle pacing' },
  { value: 'Adventure & Outdoor', label: 'Adventure & Outdoor', teLabel: 'సాహసం & ప్రకృతి', icon: Mountain, desc: 'Hiking, outdoor trails & activities' },
  { value: 'Foodie & Culinary', label: 'Foodie & Culinary', teLabel: 'రుచికరమైన ఆహారం & మార్కెట్లు', icon: Utensils, desc: 'Markets, street food & specialties' },
  { value: 'Family-friendly', label: 'Family & Kids', teLabel: 'కుటుంబం & పిల్లలు', icon: Shield, desc: 'Fun for all ages with easy logistics' },
  { value: 'Romantic Getaway', label: 'Romantic Getaway', teLabel: 'హనీమూన్ & రొమాంటిక్', icon: Heart, desc: 'Sunset vistas, cozy dinners & views' },
  { value: 'Solo Explorer', label: 'Solo Explorer', teLabel: 'ఒంటరి ప్రయాణం (Solo)', icon: Compass, desc: 'Safe alleys, social spots & hidden gems' },
  { value: 'Fast-paced Highlights', label: 'Fast-Paced Highlights', teLabel: 'తక్కువ సమయంలో ఎక్కువ ప్రదేశాలు', icon: Sparkles, desc: 'Maximum sights in limited time' },
];

const HOTEL_TYPES = [
  'Boutique Hotel',
  '5-Star Luxury Resort',
  'Private Pool Villa (ప్రైవేట్ విల్లా)',
  'Cozy Airbnb / Apartment',
  'Budget Friendly Hotel (చవకైన బడ్జెట్ హోటల్)',
  'Traditional Inn (Ryokan/Riad/హెరిటేజ్ స్టే)',
  'Central City Hotel',
];

const TRANSPORT_OPTIONS = [
  'Public Transit (Metro & Buses)',
  'Private Chauffeur & Car (ప్రైవేట్ డ్రైవర్ & కారు)',
  'Walking & Biking',
  'Car Rental / Self Drive',
  'High-Speed Rail / Trains',
];

const WEATHER_PREFERENCES = [
  'Sunny & Warm (ఎండ & ఆహ్లాదకరం)',
  'Mild Spring & Blooms (వసంత కాలం)',
  'Crisp Autumn Breezes (చల్లని గాలి)',
  'Snowy Winter Wonderland (మంచు వాతావరణం)',
  'Tropical Sunshine (ట్రోపికల్ బీచ్ వాతావరణం)',
  'Any / Best Season Available',
];

const INTEREST_TAGS = [
  { name: 'Culinary & Street Food', teName: 'రుచికరమైన ఆహారం & స్ట్రీట్ ఫుడ్', icon: Utensils },
  { name: 'Historic Landmarks & Temples', teName: 'చారిత్రక కట్టడాలు & ఆలయాలు', icon: Landmark },
  { name: 'Pure Vegetarian / Indian Food', teName: 'స్వచ్ఛమైన శాకాహారం (Pure Veg)', icon: Heart },
  { name: 'Nature & Hiking Trails', teName: 'ప్రకృతి దృశ్యాలు & కొండలు', icon: Trees },
  { name: 'Beaches & Watersports', teName: 'సముద్ర తీరాలు & బీచ్‌లు', icon: Palmtree },
  { name: 'Art & World-Class Museums', teName: 'కళలు & మ్యూజియంలు', icon: Camera },
  { name: 'Local Markets & Shopping', teName: 'షాపింగ్ & స్థానిక బజార్లు', icon: ShoppingBag },
  { name: 'Coffee & Cafe Culture', teName: 'కాఫీ కేఫ్‌లు & విశ్రాంతి', icon: Coffee },
  { name: 'Photography Viewpoints', teName: 'ఫోటోగ్రఫీ స్పాట్స్', icon: Camera },
  { name: 'Family Fun & Theme Parks', teName: 'పిల్లల పార్కులు & సరదా', icon: Smile },
  { name: 'Hidden Gems & Backstreets', teName: 'రహస్య అందమైన ప్రదేశాలు', icon: Compass },
  { name: 'Wellness & Thermal Spas', teName: 'ఆయుర్వేదం & వెల్‌నెస్ స్పా', icon: Heart },
];

const LANGUAGES = [
  { code: 'Telugu', label: 'తెలుగు (Telugu)' },
  { code: 'English', label: 'English' },
  { code: 'Hindi', label: 'हिन्दी (Hindi)' },
  { code: 'Spanish', label: 'Español (Spanish)' },
  { code: 'French', label: 'Français (French)' },
  { code: 'German', label: 'Deutsch (German)' },
  { code: 'Japanese', label: '日本語 (Japanese)' },
  { code: 'Italian', label: 'Italiano (Italian)' },
  { code: 'Mandarin Chinese', label: '中文 (Mandarin)' },
  { code: 'Arabic', label: 'العربية (Arabic)' },
];

export const TravelForm: React.FC<TravelFormProps> = ({
  onSubmit,
  isLoading,
  onSelectSamplePlan,
  onSelectTeluguPlan,
  uiLang,
}) => {
  const t = TRANSLATIONS[uiLang];

  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(7);
  const [budget, setBudget] = useState('Moderate ($$$ / ₹₹₹)');
  const [travelStyle, setTravelStyle] = useState('Cultural & Heritage');
  const [hotelType, setHotelType] = useState('Boutique Hotel');
  const [transport, setTransport] = useState('Public Transit (Metro & Buses)');
  const [weather, setWeather] = useState('Mild Spring & Blooms (వసంత కాలం)');
  const [interests, setInterests] = useState<string[]>([
    'Culinary & Street Food',
    'Historic Landmarks & Temples',
    'Pure Vegetarian / Indian Food',
    'Local Markets & Shopping',
  ]);
  const [language, setLanguage] = useState(uiLang === 'te' ? 'Telugu' : 'English');
  const [pureVeg, setPureVeg] = useState(false);
  const [seniorFriendly, setSeniorFriendly] = useState(false);
  const [familyKids, setFamilyKids] = useState(false);
  const [notes, setNotes] = useState('');

  // Sync language with UI toggle if user changes it
  useEffect(() => {
    if (uiLang === 'te') {
      setLanguage('Telugu');
    }
  }, [uiLang]);

  const toggleInterest = (tag: string) => {
    if (interests.includes(tag)) {
      setInterests(interests.filter((i) => i !== tag));
    } else {
      setInterests([...interests, tag]);
    }
  };

  const handleDestinationPreset = (dest: typeof POPULAR_DESTINATIONS[0]) => {
    setDestination(dest.name);
    setDays(dest.defaultDays);
    setBudget(dest.defaultBudget);
    setTravelStyle(dest.defaultStyle);
    if (dest.teluguSample && onSelectTeluguPlan) {
      onSelectTeluguPlan();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;

    let combinedNotes = notes.trim();
    const flags: string[] = [];
    if (pureVeg) flags.push('Strictly Pure Vegetarian / Indian vegetarian dining options required.');
    if (seniorFriendly) flags.push('Traveling with senior citizens; keep walking flat and pacing gentle with elevator/rest stops.');
    if (familyKids) flags.push('Traveling with kids; include fun child-friendly sights and convenient stops.');
    
    if (flags.length > 0) {
      combinedNotes = flags.join(' ') + (combinedNotes ? ' ' + combinedNotes : '');
    }

    onSubmit({
      destination: destination.trim(),
      days,
      budget,
      travel_style: travelStyle,
      hotel_type: hotelType,
      transport,
      weather,
      interests,
      language,
      notes: combinedNotes,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Hero Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
          <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
          <span>{t.heroBadge} • Dual USD ($) & INR (₹)</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
          {t.heroHeading}
        </h1>
        <p className="mt-3 text-stone-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          {t.heroSubheading}
        </p>
      </div>

      {/* Preset Inspirations Cards */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
            {t.popularDestinations}
          </span>
          <div className="flex items-center gap-3 text-xs font-semibold">
            {onSelectTeluguPlan && (
              <button
                type="button"
                onClick={onSelectTeluguPlan}
                className="text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 hover:bg-amber-100 flex items-center gap-1 transition-colors"
              >
                <span>బాలి 5 రోజుల నమూనా (Telugu)</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
            <button
              type="button"
              onClick={onSelectSamplePlan}
              className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 hover:bg-emerald-100 flex items-center gap-1 transition-colors"
            >
              <span>{t.viewSamplePlan}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
          {POPULAR_DESTINATIONS.map((dest) => (
            <button
              key={dest.name}
              type="button"
              onClick={() => handleDestinationPreset(dest)}
              className={`p-2.5 text-left rounded-xl border transition-all text-xs group flex flex-col justify-between ${
                destination.toLowerCase().includes(dest.country.toLowerCase()) ||
                destination.toLowerCase().includes(dest.name.toLowerCase().split(',')[0])
                  ? 'border-emerald-600 bg-emerald-50/70 shadow-xs ring-1 ring-emerald-600'
                  : 'border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50/70'
              }`}
            >
              <div className="font-bold text-stone-800 group-hover:text-emerald-700 transition-colors line-clamp-1">
                {dest.name.split(',')[0]}
              </div>
              <div className="text-[10px] text-stone-500 mt-1 line-clamp-1">
                {dest.country} • {dest.defaultDays}d
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Form Container */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-200/90 p-6 sm:p-8 space-y-8">
        
        {/* 1. Destination Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            {t.destinationLabel} <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <MapPin className="w-5 h-5 text-emerald-600" />
            </div>
            <input
              type="text"
              required
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder={t.destinationPlaceholder}
              className="w-full pl-11 pr-4 py-3.5 text-base sm:text-lg rounded-xl border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-inner"
            />
          </div>
        </div>

        {/* 2. Duration & Budget Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-stone-100">
          {/* Trip Duration */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>{t.durationLabel}</span>
              </label>
              <span className="text-sm font-extrabold text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
                {days} {t.days}
              </span>
            </div>
            
            <input
              type="range"
              min="1"
              max="21"
              step="1"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer h-2 bg-stone-200 rounded-lg"
            />

            <div className="flex justify-between items-center gap-1 mt-2.5">
              {[3, 5, 7, 10, 14].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDays(d)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md border transition-colors ${
                    days === d
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {d}d
                </button>
              ))}
            </div>
          </div>

          {/* Budget Level with Dual USD & INR */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>{t.budgetLabel}</span>
            </label>
            <div className="space-y-1.5">
              {BUDGET_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setBudget(opt.value)}
                  className={`w-full p-2 text-left rounded-xl border text-xs transition-all flex items-center justify-between ${
                    budget === opt.value
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold ring-1 ring-emerald-600'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                  }`}
                >
                  <div>
                    <span className="font-semibold block">{opt.label}</span>
                    <span className="text-[10px] text-stone-500">{opt.desc}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold ml-2 shrink-0">
                    {opt.symbol}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Travel Style Cards */}
        <div className="pt-2 border-t border-stone-100">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>{t.travelStyleLabel}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {TRAVEL_STYLES.map((style) => {
              const Icon = style.icon;
              const isSelected = travelStyle === style.value;
              return (
                <button
                  key={style.value}
                  type="button"
                  onClick={() => setTravelStyle(style.value)}
                  className={`p-3 text-left rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold ring-1 ring-emerald-600 shadow-xs'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-700' : 'text-stone-500'}`} />
                    <span className="text-xs font-semibold leading-tight">
                      {uiLang === 'te' ? style.teLabel : style.label}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 line-clamp-1 leading-tight">
                    {style.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Hotel & Transportation Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-stone-100">
          {/* Hotel Preference */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-emerald-600" />
              <span>{t.hotelLabel}</span>
            </label>
            <div className="space-y-1.5">
              {HOTEL_TYPES.map((h) => (
                <label
                  key={h}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                    hotelType === h
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                      : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="hotelType"
                    checked={hotelType === h}
                    onChange={() => setHotelType(h)}
                    className="accent-emerald-600"
                  />
                  <span>{h}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
              <Bus className="w-4 h-4 text-emerald-600" />
              <span>{t.transportLabel}</span>
            </label>
            <div className="space-y-1.5">
              {TRANSPORT_OPTIONS.map((tOpt) => (
                <label
                  key={tOpt}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                    transport === tOpt
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                      : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="transport"
                    checked={transport === tOpt}
                    onChange={() => setTransport(tOpt)}
                    className="accent-emerald-600"
                  />
                  <span>{tOpt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Preferred Weather & Language Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-stone-100">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-emerald-600" />
              <span>{t.weatherLabel}</span>
            </label>
            <select
              value={weather}
              onChange={(e) => setWeather(e.target.value)}
              className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-300 bg-white text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              {WEATHER_PREFERENCES.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>{t.languageLabel}</span>
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-emerald-400 bg-emerald-50/30 text-stone-900 font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label} {lang.code === 'Telugu' ? '★ (తెలుగు)' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 6. Easy-For-Everyone Quick Switches */}
        <div className="pt-2 border-t border-stone-100">
          <label className="block text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-emerald-600" />
            <span>Special Considerations (Easy for Everyone)</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label
              className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                pureVeg
                  ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold ring-1 ring-emerald-600'
                  : 'border-stone-200 hover:bg-stone-50 text-stone-700'
              }`}
            >
              <input
                type="checkbox"
                checked={pureVeg}
                onChange={(e) => setPureVeg(e.target.checked)}
                className="w-4 h-4 accent-emerald-600 rounded"
              />
              <span className="text-xs">
                {uiLang === 'te' ? '🌱 స్వచ్ఛమైన శాకాహారం (Pure Veg)' : '🌱 Pure Veg / Indian Food'}
              </span>
            </label>

            <label
              className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                seniorFriendly
                  ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold ring-1 ring-emerald-600'
                  : 'border-stone-200 hover:bg-stone-50 text-stone-700'
              }`}
            >
              <input
                type="checkbox"
                checked={seniorFriendly}
                onChange={(e) => setSeniorFriendly(e.target.checked)}
                className="w-4 h-4 accent-emerald-600 rounded"
              />
              <span className="text-xs">
                {uiLang === 'te' ? '👴 వృద్ధులకు సులభమైన నడక' : '👴 Senior Citizens / Easy Walking'}
              </span>
            </label>

            <label
              className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                familyKids
                  ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold ring-1 ring-emerald-600'
                  : 'border-stone-200 hover:bg-stone-50 text-stone-700'
              }`}
            >
              <input
                type="checkbox"
                checked={familyKids}
                onChange={(e) => setFamilyKids(e.target.checked)}
                className="w-4 h-4 accent-emerald-600 rounded"
              />
              <span className="text-xs">
                {uiLang === 'te' ? '👨‍👩‍👧‍👦 పిల్లలతో కుటుంబ యాత్ర' : '👨‍👩‍👧‍👦 Family with Kids'}
              </span>
            </label>
          </div>
        </div>

        {/* 7. Interests Selection (Multi-select) */}
        <div className="pt-2 border-t border-stone-100">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
              {t.interestsLabel} ({interests.length} selected)
            </label>
            <span className="text-[11px] text-stone-400">Click to toggle</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {INTEREST_TAGS.map((item) => {
              const isSelected = interests.includes(item.name);
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => toggleInterest(item.name)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-xs font-semibold'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-stone-500'}`} />
                  <span>{uiLang === 'te' ? item.teName : item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 8. Additional Notes / Custom Requests */}
        <div className="pt-2 border-t border-stone-100">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            {t.notesLabel}
          </label>
          <textarea
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t.notesPlaceholder}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading || !destination.trim()}
            className="w-full py-4 px-6 rounded-2xl font-bold text-white text-base sm:text-lg bg-linear-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group cursor-pointer"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>{t.generatingBtn}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
                <span>{t.generateBtn}</span>
                <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <p className="text-center text-[11px] text-stone-500 mt-2">
            {t.generatingSubtext}
          </p>
        </div>
      </form>
    </div>
  );
};
