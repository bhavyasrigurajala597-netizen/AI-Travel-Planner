// UI Translations for English and Telugu (తెలుగు)

export type SupportedUILang = 'en' | 'te';

export interface TranslationDictionary {
  brandName: string;
  brandTagline: string;
  planTripBtn: string;
  savedTripsBtn: string;
  savePlanBtn: string;
  savedBadge: string;
  printPdfBtn: string;
  shareBtn: string;
  copiedBtn: string;
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  popularDestinations: string;
  viewSamplePlan: string;
  destinationLabel: string;
  destinationPlaceholder: string;
  durationLabel: string;
  days: string;
  budgetLabel: string;
  travelStyleLabel: string;
  hotelLabel: string;
  transportLabel: string;
  weatherLabel: string;
  languageLabel: string;
  interestsLabel: string;
  notesLabel: string;
  notesPlaceholder: string;
  generateBtn: string;
  generatingBtn: string;
  generatingSubtext: string;

  // Tabs
  tabItinerary: string;
  tabOverview: string;
  tabHotels: string;
  tabFood: string;
  tabTransit: string;
  tabBudget: string;
  tabAttractions: string;
  tabPacking: string;
  tabSafety: string;
  tabTips: string;
  tabDocument: string;

  // Easy / Beginner Features
  beginnerGuideTitle: string;
  beginnerGuideSub: string;
  audioListenBtn: string;
  audioStopBtn: string;
  pocketCardTitle: string;
  pocketCardSub: string;
  vegFriendlyTag: string;
  currencyToggle: string;
  totalCostLabel: string;
  dailyAvgLabel: string;
  morning: string;
  afternoon: string;
  evening: string;
  meals: string;
  insiderTip: string;

  // Weather Forecast Features
  weatherForecastTitle: string;
  weatherForecastSub: string;
  weatherLiveBadge: string;
  weatherRainChance: string;
  weatherWindSpeed: string;
  weatherUvIndex: string;
  weatherRefresh: string;
  weatherPackingTip: string;
}

export const TRANSLATIONS: Record<SupportedUILang, TranslationDictionary> = {
  en: {
    brandName: 'YatraGenie',
    brandTagline: 'Easy Global AI Travel Planner',
    planTripBtn: 'Plan Trip',
    savedTripsBtn: 'Saved Trips',
    savePlanBtn: 'Save Plan',
    savedBadge: 'Saved',
    printPdfBtn: 'Print / PDF',
    shareBtn: 'Share',
    copiedBtn: 'Copied!',
    heroBadge: 'Easy Travel Planning for Everyone',
    heroHeading: 'Your Dream Journey, Planned in Minutes',
    heroSubheading: 'Complete 12-point trip guide with simple day-wise timetables, hotel stays, authentic food, packing list, safety tips, and clear budgets in both USD ($) and INR (₹).',
    popularDestinations: 'Popular Destinations',
    viewSamplePlan: 'View 7-Day Tokyo Sample Plan',
    destinationLabel: '1. Destination City or Region',
    destinationPlaceholder: 'e.g. Tirupati, Paris, Tokyo, Dubai, Goa, London, Bali...',
    durationLabel: '2. Trip Duration',
    days: 'Days',
    budgetLabel: '3. Budget Level (USD $ & INR ₹)',
    travelStyleLabel: '4. Travel Style',
    hotelLabel: '5. Stay / Hotel Preference',
    transportLabel: '6. Getting Around',
    weatherLabel: '7. Preferred Weather',
    languageLabel: '8. Output Language',
    interestsLabel: '9. Specific Interests & Activities',
    notesLabel: '10. Special Requests (Pure Veg, Family, Senior Citizens, etc.)',
    notesPlaceholder: 'e.g., Pure vegetarian / Jain food needed, traveling with parents/kids, prefer relaxed morning starts, wheel-chair accessible...',
    generateBtn: 'Generate Simple & Detailed Travel Plan',
    generatingBtn: 'Crafting Your Trip Plan...',
    generatingSubtext: 'Creates all 12 modules with costs in Dollars ($) & Rupees (₹)',

    tabItinerary: 'Day-by-Day Plan',
    tabOverview: 'Trip Overview',
    tabHotels: 'Hotels & Stays',
    tabFood: 'Food & Dining',
    tabTransit: 'How to Travel',
    tabBudget: 'Budget ($ & ₹)',
    tabAttractions: 'Attractions',
    tabPacking: 'Packing Checklist',
    tabSafety: 'Safety & Scams',
    tabTips: 'Essential Tips',
    tabDocument: 'Document View',

    beginnerGuideTitle: 'Trip at a Glance (Easy for Everyone)',
    beginnerGuideSub: 'Essential summary crafted in plain words for hassle-free travel',
    audioListenBtn: 'Listen to Day Plan',
    audioStopBtn: 'Stop Audio',
    pocketCardTitle: 'Driver & Hotel Pocket Card',
    pocketCardSub: 'Show this screen to taxi drivers, auto drivers, or hotel reception',
    vegFriendlyTag: 'Vegetarian & Indian Food Options',
    currencyToggle: 'Currency',
    totalCostLabel: 'Estimated Total Cost',
    dailyAvgLabel: 'Daily Average',
    morning: 'Morning',
    afternoon: 'Afternoon',
    evening: 'Evening',
    meals: 'Recommended Meals',
    insiderTip: 'Helpful Tip',

    weatherForecastTitle: 'Current 7-Day Live Weather Forecast',
    weatherForecastSub: 'Real-time satellite & meteorological forecast to prepare your daily excursions',
    weatherLiveBadge: 'Live Forecast',
    weatherRainChance: 'Rain Chance',
    weatherWindSpeed: 'Wind',
    weatherUvIndex: 'UV Index',
    weatherRefresh: 'Refresh',
    weatherPackingTip: 'Weather Advisory',
  },
  te: {
    brandName: 'యాత్ర జెనీ (YatraGenie)',
    brandTagline: 'సులభమైన AI ట్రావెల్ ప్లానర్',
    planTripBtn: 'ట్రిప్ ప్లాన్ చేయండి',
    savedTripsBtn: 'సేవ్ చేసిన ట్రిప్స్',
    savePlanBtn: 'ప్లాన్ సేవ్ చేయండి',
    savedBadge: 'సేవ్ అయ్యింది',
    printPdfBtn: 'ప్రింట్ / PDF',
    shareBtn: 'షేర్ చేయండి',
    copiedBtn: 'కాపీ అయ్యింది!',
    heroBadge: 'ప్రతి ఒక్కరికీ సులభమైన ట్రావెల్ ప్లానింగ్',
    heroHeading: 'మీ కలల యాత్ర, నిమిషాల్లో సిద్ధం',
    heroSubheading: 'రోజువారీ షెడ్యూల్, మంచి హోటళ్ళు, రుచికరమైన ఆహారం, ప్యాకింగ్ లిస్ట్, రక్షణ చిట్కాలు మరియు డాలర్లు ($) & రూపాయలలో (₹) పూర్తి బడ్జెట్‌తో కూడిన 12-పాయింట్ల ప్రయాణ ప్లాన్.',
    popularDestinations: 'ప్రముఖ పర్యాటక ప్రాంతాలు',
    viewSamplePlan: '7 రోజుల టోక్యో నమూనా ప్లాన్ చూడండి',
    destinationLabel: '1. మీరు వెళ్లాలనుకుంటున్న ప్రాంతం / ఊరు',
    destinationPlaceholder: 'ఉదాహరణ: తిరుపతి, పారిస్, టోక్యో, దుబాయ్, గోవా, లండన్, కాశీ...',
    durationLabel: '2. ఎన్ని రోజులు ప్రయాణం?',
    days: 'రోజులు',
    budgetLabel: '3. బడ్జెట్ స్థాయి (డాలర్లు $ & రూపాయలు ₹)',
    travelStyleLabel: '4. ప్రయాణ శైలి',
    hotelLabel: '5. హోటల్ ప్రాధాన్యత',
    transportLabel: '6. ప్రయాణ సాధనం (రవాణా)',
    weatherLabel: '7. వాతావరణం',
    languageLabel: '8. ఫలిత భాష (Language)',
    interestsLabel: '9. మీ ఆసక్తులు & ఇష్టాలు',
    notesLabel: '10. ప్రత్యేక అవసరాలు (శాకాహారం, కుటుంబం, వృద్ధులు మొదలైనవి)',
    notesPlaceholder: 'ఉదాహరణకు: స్వచ్ఛమైన శాకాహార భోజనం (Pure Veg), తల్లిదండ్రులు లేదా పిల్లలతో ప్రయాణం, ఉదయం ఆలస్యంగా మొదలవడం...',
    generateBtn: 'పూర్తి ప్రయాణ ప్లాన్ తయారు చేయండి',
    generatingBtn: 'మీ ప్లాన్ తయారవుతోంది...',
    generatingSubtext: 'డాలర్లు ($) మరియు రూపాయలలో (₹) అన్ని 12 వివరాలతో సిద్ధమవుతోంది',

    tabItinerary: 'రోజువారీ ప్రణాళిక',
    tabOverview: 'యాత్ర ముఖ్యాంశాలు',
    tabHotels: 'హోటళ్ళు & వసతి',
    tabFood: 'రుచికరమైన ఆహారం',
    tabTransit: 'ప్రయాణ మార్గాలు',
    tabBudget: 'బడ్జెట్ ($ & ₹ ఖర్చులు)',
    tabAttractions: 'చూడదగిన ప్రదేశాలు',
    tabPacking: 'ప్యాకింగ్ లిస్ట్',
    tabSafety: 'భద్రత & రక్షణ చిట్కాలు',
    tabTips: 'ముఖ్యమైన ప్రయాణ సూచనలు',
    tabDocument: 'డాక్యుమెంట్ రూపం',

    beginnerGuideTitle: 'ప్రయాణ సారాంశం (అందరికీ సులభంగా అర్థమయ్యేలా)',
    beginnerGuideSub: 'ఎలాంటి కన్ఫ్యూజన్ లేకుండా స్పష్టంగా తెలుసుకోండి',
    audioListenBtn: 'ఈ రోజు ప్లాన్ వినండి (Audio)',
    audioStopBtn: 'ఆపండి (Stop)',
    pocketCardTitle: 'డ్రైవర్ & హోటల్ పాకెట్ కార్డ్',
    pocketCardSub: 'ట్యాక్సీ డ్రైవర్ లేదా హోటల్ వద్ద ఈ స్క్రీన్ చూపించండి',
    vegFriendlyTag: 'శాకాహార & భారతీయ భోజన సూచనలు',
    currencyToggle: 'కరెన్సీ',
    totalCostLabel: 'అంచనా మొత్తం ఖర్చు',
    dailyAvgLabel: 'రోజువారీ సగటు ఖర్చు',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    meals: 'సిఫార్సు చేసిన భోజనం',
    insiderTip: 'ముఖ్యమైన చిట్కా',

    weatherForecastTitle: 'ప్రస్తుత 7 రోజుల ప్రత్యక్ష వాతావరణ అంచనా (Live Weather)',
    weatherForecastSub: 'మీ రోజువారీ పర్యటనల కోసం రియల్-టైమ్ వాతావరణ సమాచారం & ఉష్ణోగ్రతలు',
    weatherLiveBadge: 'లైవ్ ఫోర్‌కాస్ట్',
    weatherRainChance: 'వర్ష సూచన',
    weatherWindSpeed: 'గాలి వేగం',
    weatherUvIndex: 'ఎండ తీవ్రత (UV)',
    weatherRefresh: 'రిఫ్రెష్',
    weatherPackingTip: 'వాతావరణ సలహా',
  },
};
