import React from 'react';
import { X, Calendar, MapPin, Trash2, ArrowRight, Download, Compass } from 'lucide-react';
import { TravelPlan } from '../types/travel';

interface SavedTripsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedPlans: TravelPlan[];
  onSelectPlan: (plan: TravelPlan) => void;
  onDeletePlan: (id: string) => void;
}

export const SavedTripsModal: React.FC<SavedTripsModalProps> = ({
  isOpen,
  onClose,
  savedPlans,
  onSelectPlan,
  onDeletePlan,
}) => {
  if (!isOpen) return null;

  const handleExportPlan = (plan: TravelPlan) => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(plan, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${plan.destination.toLowerCase().replace(/[^a-z0-9]/g, '_')}_itinerary.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-600" />
            <h2 className="font-serif text-xl font-bold text-stone-900">
              Saved Travel Itineraries ({savedPlans.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Plans */}
        {savedPlans.length === 0 ? (
          <div className="text-center py-12 space-y-3">
            <Compass className="w-12 h-12 text-stone-300 mx-auto" />
            <h3 className="font-bold text-stone-700 text-sm">No saved plans yet</h3>
            <p className="text-xs text-stone-500 max-w-xs mx-auto">
              Generate a travel plan and click the "Save Plan" button in the top bar to keep it for offline reference.
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            {savedPlans.map((plan) => (
              <div
                key={plan.id}
                className="p-4 rounded-2xl border border-stone-200 hover:border-emerald-300 bg-white hover:bg-emerald-50/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div
                  onClick={() => {
                    onSelectPlan(plan);
                    onClose();
                  }}
                  className="cursor-pointer space-y-1 flex-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                      {plan.destination}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {plan.inputs.days} Days
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 line-clamp-1 italic font-serif">
                    "{plan.tripOverview.tagline || plan.tripOverview.title}"
                  </p>
                  <div className="text-[10px] text-stone-400 flex items-center gap-2">
                    <span>{plan.inputs.travel_style}</span>
                    <span>•</span>
                    <span>{plan.inputs.budget}</span>
                    <span>•</span>
                    <span>Saved {new Date(plan.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() => handleExportPlan(plan)}
                    className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                    title="Export as JSON"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDeletePlan(plan.id)}
                    className="p-2 rounded-xl text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Delete from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onSelectPlan(plan);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    <span>Open</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pt-2 border-t border-stone-100 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
