import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TravelForm } from './components/TravelForm';
import { TripDisplay } from './components/TripDisplay';
import { SavedTripsModal } from './components/SavedTripsModal';
import { TravelInput, TravelPlan } from './types/travel';
import { SAMPLE_TOKYO_PLAN, SAMPLE_TELUGU_BALI_PLAN } from './data/samplePlans';
import { CurrencyMode } from './utils/currency';
import { SupportedUILang } from './utils/translations';
import { AlertCircle, Sparkles, Compass } from 'lucide-react';

const LOADING_STEPS_EN = [
  'Surveying top neighborhoods, historic quarters & hidden alleys...',
  'Curating authentic local dishes, iconic dining & street food hotspots...',
  'Optimizing day-wise routing, transfer passes & daily pacing...',
  'Selecting hand-picked boutique hotels matching your budget in $ & ₹...',
  'Assembling packing checklist, safety alerts & essential phrases...',
  'Formatting complete 12-section itinerary with headings & bullet points...',
];

const LOADING_STEPS_TE = [
  'అత్యుత్తమ ప్రాంతాలు, చారిత్రక ప్రదేశాలు మరియు రహస్య వీధుల అన్వేషణ...',
  'రుచికరమైన స్థానిక ఆహారం, ప్రసిద్ధ రెస్టారెంట్లు & స్ట్రీట్ ఫుడ్ ఎంపిక...',
  'రోజువారీ ప్రయాణ రూట్ మరియు సమయాల సర్దుబాటు...',
  'డాలర్లు ($) మరియు రూపాయలలో (₹) బడ్జెట్ ప్రకారం ఉత్తమ హోటళ్ళు...',
  'ప్యాకింగ్ లిస్ట్, రక్షణ చిట్కాలు మరియు ముఖ్యమైన ప్రయాణ సూచనలు...',
  'అన్ని 12 విభాగాలతో సంపూర్ణ ప్రయాణ ప్లాన్ సిద్ధమవుతోంది...',
];

export default function App() {
  const [currentPlan, setCurrentPlan] = useState<TravelPlan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStepIdx, setLoadingStepIdx] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [savedPlans, setSavedPlans] = useState<TravelPlan[]>([]);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New accessibility & currency states:
  const [currencyMode, setCurrencyMode] = useState<CurrencyMode>('dual');
  const [uiLang, setUiLang] = useState<SupportedUILang>('en');

  // Load saved plans from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('wanderlust_saved_plans');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSavedPlans(parsed);
        } else {
          setSavedPlans([SAMPLE_TOKYO_PLAN, SAMPLE_TELUGU_BALI_PLAN]);
        }
      } else {
        // Pre-seed with Tokyo and Bali (Telugu) sample plans in saved library
        const initial = [SAMPLE_TOKYO_PLAN, SAMPLE_TELUGU_BALI_PLAN];
        setSavedPlans(initial);
        localStorage.setItem('wanderlust_saved_plans', JSON.stringify(initial));
      }
    } catch (e) {
      console.error('Failed to load saved plans', e);
    }
  }, []);

  // Cycle loading messages when generating
  const activeLoadingSteps = uiLang === 'te' ? LOADING_STEPS_TE : LOADING_STEPS_EN;
  useEffect(() => {
    let interval: any;
    if (isLoading) {
      setLoadingStepIdx(0);
      interval = setInterval(() => {
        setLoadingStepIdx((prev) => (prev + 1) % activeLoadingSteps.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isLoading, activeLoadingSteps.length]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handlePlanTrip = async (inputs: TravelInput) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/plan-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to generate plan.');
      }

      setCurrentPlan(data.plan);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast(uiLang === 'te' ? 'యాత్ర ప్రణాళిక సిద్ధమైంది!' : 'Travel itinerary generated successfully!');
    } catch (err: any) {
      console.error('Plan generation failed:', err);
      setError(
        err?.message ||
          (uiLang === 'te'
            ? 'ట్రావెల్ ప్లానర్ సర్వీస్ చేరుకోలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి లేదా నమూనా ప్లాన్ చూడండి.'
            : 'Unable to reach travel planning service. Please try again or explore our sample plan.')
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveCurrentPlan = () => {
    if (!currentPlan) return;
    const exists = savedPlans.some((p) => p.id === currentPlan.id);
    let updated: TravelPlan[];
    if (exists) {
      updated = savedPlans.filter((p) => p.id !== currentPlan.id);
      showToast(uiLang === 'te' ? 'ప్లాన్ తొలగించబడింది.' : 'Removed plan from library.');
    } else {
      updated = [currentPlan, ...savedPlans];
      showToast(uiLang === 'te' ? 'ప్లాన్ సేవ్ చేయబడింది!' : 'Plan saved to your personal library!');
    }
    setSavedPlans(updated);
    localStorage.setItem('wanderlust_saved_plans', JSON.stringify(updated));
  };

  const handleDeleteSavedPlan = (id: string) => {
    const updated = savedPlans.filter((p) => p.id !== id);
    setSavedPlans(updated);
    localStorage.setItem('wanderlust_saved_plans', JSON.stringify(updated));
    showToast(uiLang === 'te' ? 'ప్లాన్ తొలగించబడింది.' : 'Plan deleted.');
  };

  const isCurrentPlanSaved = !!(currentPlan && savedPlans.some((p) => p.id === currentPlan.id));

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Global Header */}
      <Header
        currentPlan={currentPlan}
        onNewPlan={() => {
          setCurrentPlan(null);
          setError(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        savedCount={savedPlans.length}
        onSaveCurrentPlan={currentPlan ? handleSaveCurrentPlan : undefined}
        isSaved={isCurrentPlanSaved}
        currencyMode={currencyMode}
        onCurrencyModeChange={setCurrencyMode}
        uiLang={uiLang}
        onUiLangChange={setUiLang}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* Error Notification Alert */}
        {error && (
          <div className="max-w-4xl mx-auto px-4 mt-6">
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 shadow-xs">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex-1 text-xs sm:text-sm">
                <strong className="block font-bold">
                  {uiLang === 'te' ? 'గమనిక / సమాచారం:' : 'Generation Notice:'}
                </strong>
                <span>{error}</span>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setCurrentPlan(SAMPLE_TOKYO_PLAN);
                      setError(null);
                    }}
                    className="font-bold underline hover:text-rose-950"
                  >
                    {uiLang === 'te' ? 'టోక్యో 7 రోజుల ప్లాన్ చూడండి' : 'View Curated 7-Day Tokyo Plan'}
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPlan(SAMPLE_TELUGU_BALI_PLAN);
                      setUiLang('te');
                      setError(null);
                    }}
                    className="font-bold underline hover:text-rose-950 text-amber-900"
                  >
                    {uiLang === 'te' ? 'బాలి 5 రోజుల నమూనా ప్లాన్ (తెలుగు)' : 'View Bali 5-Day Plan (Telugu)'}
                  </button>
                  <button
                    onClick={() => setError(null)}
                    className="text-stone-500 hover:text-stone-800"
                  >
                    {uiLang === 'te' ? 'దాచండి' : 'Dismiss'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center space-y-6 border border-stone-200">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-emerald-100 animate-ping opacity-30" />
                <div className="w-20 h-20 rounded-full bg-linear-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                  <Compass className="w-10 h-10 animate-spin-slow" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  {uiLang === 'te' ? 'మీ ప్రయాణ ప్లాన్ సిద్ధమవుతోంది' : 'Architecting Your Trip'}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {uiLang === 'te'
                    ? 'Gemini AI అద్భుతమైన మార్గాలు, హోటళ్ళు మరియు బడ్జెట్‌ను లెక్కిస్తోంది...'
                    : 'Gemini AI is analyzing millions of routes, hotels & cultural spots in $ and ₹...'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 min-h-[72px] flex items-center justify-center">
                <p className="text-xs sm:text-sm font-medium text-emerald-800 animate-pulse text-center">
                  {activeLoadingSteps[loadingStepIdx]}
                </p>
              </div>

              <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full animate-indeterminate" />
              </div>
            </div>
          </div>
        )}

        {/* Views: If a plan is selected, show TripDisplay, otherwise show TravelForm */}
        {currentPlan ? (
          <TripDisplay
            plan={currentPlan}
            onNewSearch={() => {
              setCurrentPlan(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            currencyMode={currencyMode}
            uiLang={uiLang}
          />
        ) : (
          <TravelForm
            onSubmit={handlePlanTrip}
            isLoading={isLoading}
            onSelectSamplePlan={() => {
              setCurrentPlan(SAMPLE_TOKYO_PLAN);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectTeluguPlan={() => {
              setCurrentPlan(SAMPLE_TELUGU_BALI_PLAN);
              setUiLang('te');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            uiLang={uiLang}
          />
        )}
      </main>

      {/* Saved Trips Modal */}
      <SavedTripsModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedPlans={savedPlans}
        onSelectPlan={(plan) => {
          setCurrentPlan(plan);
          if (plan.inputs.language.toLowerCase().includes('telugu') || plan.destination.includes('బాలి')) {
            setUiLang('te');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onDeletePlan={handleDeleteSavedPlan}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-4 py-3 rounded-2xl shadow-xl text-xs sm:text-sm font-medium flex items-center gap-2 border border-stone-700 animate-bounce">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-stone-200/80 bg-white py-6 text-center text-xs text-stone-500 print:hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-serif font-bold text-stone-700">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>YatraGenie (యాత్ర జెనీ) • Global AI Travel Planner</span>
          </div>
          <p className="text-[11px] text-stone-400">
            {uiLang === 'te'
              ? 'డాలర్లు ($) మరియు భారతీయ రూపాయలలో (₹) పూర్తి 12-పాయింట్ల ప్రయాణ ప్లాన్ • ఆడియో మరియు డ్రైవర్ కార్డులతో'
              : 'Complete 12-point trip guide in USD ($) and INR (₹) • Easy for everyone with audio & pocket cards'}
          </p>
        </div>
      </footer>
    </div>
  );
}
