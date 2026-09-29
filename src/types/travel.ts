export interface TravelInput {
  destination: string;
  days: number;
  budget: string; // 'Backpacker ($)' | 'Budget ($$)' | 'Moderate ($$$)' | 'Luxury ($$$$)' | 'Ultra-Luxury ($$$$$)'
  travel_style: string; // 'Cultural & Heritage' | 'Relaxed & Leisure' | 'Adventure & Outdoor' | 'Romantic Getaway' | 'Family-friendly' | 'Solo Explorer' | 'Fast-paced Highlights' | 'Foodie & Culinary'
  hotel_type: string; // 'Boutique Hotel' | '5-Star Luxury Resort' | 'Cozy Airbnb / Apartment' | 'Budget Hostel' | 'Eco-Lodge / Glamping' | 'Traditional Inn (Ryokan/Riad)' | 'Central City Hotel'
  transport: string; // 'Public Transit (Metro & Buses)' | 'Walking & Biking' | 'Car Rental' | 'Private Chauffeur / Taxis' | 'High-Speed Rail'
  weather: string; // 'Sunny & Warm' | 'Mild Spring & Blooms' | 'Crisp Autumn' | 'Snowy Winter' | 'Tropical Sunshine' | 'Any / Best Season'
  interests: string[];
  language: string; // 'English' | 'Spanish' | 'French' | 'German' | 'Japanese' | 'Italian' | etc.
  notes?: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  morning: {
    time: string;
    activity: string;
    location: string;
    description: string;
    insiderTip?: string;
  };
  afternoon: {
    time: string;
    activity: string;
    location: string;
    description: string;
    insiderTip?: string;
  };
  evening: {
    time: string;
    activity: string;
    location: string;
    description: string;
    insiderTip?: string;
  };
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  estimatedCost?: string;
}

export interface HotelRecommendation {
  name: string;
  type: string;
  neighborhood: string;
  priceRange: string;
  description: string;
  highlights: string[];
  bookingAdvice: string;
}

export interface FoodRecommendation {
  mustTryDishes: Array<{
    dish: string;
    description: string;
    bestSpot: string;
    priceLevel: string;
  }>;
  recommendedRestaurants: Array<{
    name: string;
    cuisine: string;
    vibe: string;
    signatureDish: string;
    priceLevel: string;
  }>;
  streetFoodAreas: Array<{
    area: string;
    specialty: string;
    bestTimeToVisit: string;
  }>;
  dietaryTips: string;
}

export interface TransportationGuide {
  arrivalTransit: string;
  localTransitSystems: string;
  recommendedPasses: string;
  taxisAndRideHailing: string;
  walkabilityAdvice: string;
  navigationApps: string[];
}

export interface BudgetBreakdown {
  currency: string;
  totalEstimatedRange: string;
  categories: Array<{
    category: string;
    estimatedCost: string;
    percentage: number;
    description: string;
  }>;
  moneySavingTips: string[];
}

export interface LocalAttraction {
  name: string;
  category: string;
  description: string;
  visitTimingTip: string;
  ticketTip: string;
  isMustSee: boolean;
}

export interface PackingCategory {
  category: string;
  items: string[];
}

export interface SafetyTips {
  overallAssessment: string;
  safeNeighborhoods: string[];
  areasToWatch?: string[];
  precautionsAndScams: string[];
  emergencyContacts: {
    police: string;
    ambulance: string;
    general: string;
  };
  culturalEtiquette: string[];
}

export interface EstimatedTotalCost {
  currency: string;
  lowEstimate: number;
  highEstimate: number;
  dailyAverage: number;
  inrLowEstimate?: number;
  inrHighEstimate?: number;
  inrDailyAverage?: number;
  perPersonSummary: string;
}

export interface BeginnerFriendlySummary {
  walkingEffort: string; // 'Low / Gentle' | 'Moderate' | 'High / Lots of steps'
  vegetarianFriendly: string; // 'Abundant Pure Veg' | 'Decent Options Available' | 'Need to plan ahead'
  familyAndSeniorFriendly: string;
  threeMainRulesForEveryone: string[];
}

export interface ImportantTravelTips {
  eSimAndConnectivity: string;
  paymentsAndCash: string;
  tippingNorms: string;
  powerPlugType: string;
  advanceBookingsRequired: string[];
  essentialLocalPhrases: Array<{
    phrase: string;
    meaning: string;
    pronunciation?: string;
  }>;
  usefulPhrases?: Array<{
    phrase: string;
    meaning: string;
    pronunciation?: string;
  }>;
  keyRule: string;
}

export interface TravelPlan {
  id: string;
  createdAt: string;
  inputs: TravelInput;
  destination: string;
  
  // 12 Required Sections
  tripOverview: {
    title: string;
    tagline: string;
    summary: string;
    vibe: string;
    pacing: string;
    keyHighlights: string[];
  };
  bestTimeToVisit: {
    bestMonths: string;
    seasonalBreakdown: string;
    weatherExpectations: string;
    peakVsOffPeak: string;
  };
  dayWiseItinerary: DayItinerary[];
  hotelRecommendations: HotelRecommendation[];
  foodRecommendations: FoodRecommendation;
  transportationGuide: TransportationGuide;
  budgetBreakdown: BudgetBreakdown;
  localAttractions: LocalAttraction[];
  packingChecklist: PackingCategory[];
  safetyTips: SafetyTips;
  estimatedTotalCost: EstimatedTotalCost;
  importantTravelTips: ImportantTravelTips;
  beginnerSummary?: BeginnerFriendlySummary;

  // Exact markdown representation with headings and bullet points
  formattedMarkdown: string;
}
