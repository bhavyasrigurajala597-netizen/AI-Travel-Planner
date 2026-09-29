import React from 'react';
import { Compass, Bookmark, PlusCircle, Printer, Share2, Check, DollarSign, Globe } from 'lucide-react';
import { TravelPlan } from '../types/travel';
import { CurrencyMode } from '../utils/currency';
import { SupportedUILang, TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  currentPlan: TravelPlan | null;
  onNewPlan: () => void;
  onOpenSaved: () => void;
  savedCount: number;
  onSaveCurrentPlan?: () => void;
  isSaved?: boolean;
  currencyMode: CurrencyMode;
  onCurrencyModeChange: (mode: CurrencyMode) => void;
  uiLang: SupportedUILang;
  onUiLangChange: (lang: SupportedUILang) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPlan,
  onNewPlan,
  onOpenSaved,
  savedCount,
  onSaveCurrentPlan,
  isSaved = false,
  currencyMode,
  onCurrencyModeChange,
  uiLang,
  onUiLangChange,
}) => {
  const [copied, setCopied] = React.useState(false);
  const t = TRANSLATIONS[uiLang];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 print:hidden transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand */}
        <div 
          onClick={onNewPlan}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-emerald-600 via-teal-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-white animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl font-bold tracking-tight text-stone-900">
                Yatra<span className="text-emerald-600 font-sans text-lg font-extrabold ml-0.5">Genie</span>
              </span>
              <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                యాత్ర జెనీ
              </span>
            </div>
            <p className="text-[11px] text-stone-500 hidden sm:block -mt-0.5 font-medium">
              {uiLang === 'te' ? 'అందరికీ సులభమైన AI ట్రావెల్ ప్లానర్' : 'Easy AI Trip Planner in $ & ₹'}
            </p>
          </div>
        </div>

        {/* Center / Controls: Currency & Language Switchers */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Currency Switcher: Dual | USD | INR */}
          <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200 text-xs font-semibold">
            <button
              onClick={() => onCurrencyModeChange('dual')}
              className={`px-2 py-1 rounded-lg transition-all ${
                currencyMode === 'dual'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Show both Dollars ($) and Indian Rupees (₹)"
            >
              $ & ₹
            </button>
            <button
              onClick={() => onCurrencyModeChange('inr')}
              className={`px-2 py-1 rounded-lg transition-all ${
                currencyMode === 'inr'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Show Indian Rupees (₹)"
            >
              ₹ INR
            </button>
            <button
              onClick={() => onCurrencyModeChange('usd')}
              className={`px-2 py-1 rounded-lg transition-all ${
                currencyMode === 'usd'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Show US Dollars ($)"
            >
              $ USD
            </button>
          </div>

          {/* UI Language Switcher: English | తెలుగు */}
          <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200 text-xs font-semibold">
            <button
              onClick={() => onUiLangChange('en')}
              className={`px-2 py-1 rounded-lg transition-all ${
                uiLang === 'en'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onUiLangChange('te')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                uiLang === 'te'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="తెలుగు భాషలోకి మార్చండి"
            >
              తెలుగు
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {currentPlan && (
            <>
              {onSaveCurrentPlan && (
                <button
                  onClick={onSaveCurrentPlan}
                  className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors border ${
                    isSaved
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                  title={isSaved ? t.savedBadge : t.savePlanBtn}
                >
                  <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSaved ? 'fill-emerald-600 text-emerald-600' : ''}`} />
                  <span className="hidden md:inline">{isSaved ? t.savedBadge : t.savePlanBtn}</span>
                </button>
              )}

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 transition-colors"
                title={t.printPdfBtn}
              >
                <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500" />
                <span className="hidden lg:inline">{t.printPdfBtn}</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 transition-colors"
                title={t.shareBtn}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                    <span className="hidden lg:inline text-emerald-700">{t.copiedBtn}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500" />
                    <span className="hidden lg:inline">{t.shareBtn}</span>
                  </>
                )}
              </button>
            </>
          )}

          <button
            onClick={onOpenSaved}
            className="relative inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-stone-700 bg-stone-100/90 hover:bg-stone-200/80 transition-colors"
            title={t.savedTripsBtn}
          >
            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-600" />
            <span className="hidden sm:inline">{t.savedTripsBtn}</span>
            {savedCount > 0 && (
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-600 text-white text-[10px] sm:text-[11px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={onNewPlan}
            className="inline-flex items-center gap-1 px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/30 transition-all hover:scale-[1.02]"
          >
            <PlusCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{t.planTripBtn}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
