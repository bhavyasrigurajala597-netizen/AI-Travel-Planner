import { TravelPlan } from '../types/travel';

export const SAMPLE_TOKYO_PLAN: TravelPlan = {
  id: 'sample-tokyo-7days',
  createdAt: new Date().toISOString(),
  destination: 'Tokyo, Japan',
  inputs: {
    destination: 'Tokyo, Japan',
    days: 7,
    budget: 'Moderate ($$$)',
    travel_style: 'Cultural & Heritage',
    hotel_type: 'Boutique Hotel',
    transport: 'Public Transit (Metro & Buses)',
    weather: 'Mild Spring & Blooms',
    interests: ['Culinary & Food', 'History & Heritage', 'Art & Museums', 'Shopping & Markets', 'Hidden Gems'],
    language: 'English',
    notes: 'Keen on authentic ramen, temple serenity, and historic tea gardens.',
  },
  tripOverview: {
    title: 'Neon Horizons & Edo Reverie: 7 Days in Tokyo',
    tagline: 'An unforgettable balance of ultra-modern energy and centuries-old tranquility',
    summary: 'Experience the electric soul of Tokyo across 7 immersive days. From dawn sushi in Toyosu and ancient incense at Senso-ji, to the bamboo groves of Yanaka and Michelin-starred alleys in Ginza, this itinerary balances iconic spectacles with hidden backstreets.',
    vibe: 'Refined, exhilarating, deeply sensory',
    pacing: 'Moderate (balanced between walking explorations and relaxed tea breaks)',
    keyHighlights: [
      'Early morning contemplation at Meiji Jingu Shrine surrounded by 70-hectare cedar forest',
      'Behind-the-scenes Tsukigi Outer Market street food tasting tour',
      'TeamLab Borderless immersive digital art spectacle in Azabudai Hills',
      'Sunset panoramic view over Mount Fuji from Shibuya Sky',
      'Edo-era artisan craft exploration through historic Yanaka "Old Tokyo"',
    ],
  },
  bestTimeToVisit: {
    bestMonths: 'Late March to mid-April (Sakura cherry blossoms) or October to November (Autumn momiji foliage)',
    seasonalBreakdown: 'Spring brings mild 15°C–20°C temperatures with blooming canopies. Autumn offers crisp blue skies, minimal rain, and stunning golden ginkgo trees along Icho Namiki.',
    weatherExpectations: 'Expect daytime highs around 18°C (64°F) and cool evenings around 11°C (52°F). Light layers and comfortable slip-on walking shoes are essential.',
    peakVsOffPeak: 'Cherry blossom week (early April) is peak season with higher accommodation rates. Mid-May and November offer equally sublime weather with smaller crowds.',
  },
  dayWiseItinerary: [
    {
      day: 1,
      title: 'Arrival, Historic Asakusa & Sumida River Sunset',
      morning: {
        time: '09:30 AM',
        activity: 'Sensō-ji Temple & Nakamise-dōri Exploration',
        location: 'Asakusa, Taito City',
        description: 'Pass under the giant red Kaminarimon Lantern into Tokyo’s oldest temple. Cleanse hands at the dragon font and inhale sandalwood incense at the main altar.',
        insiderTip: 'Visit before 10 AM to experience the sacred halls before the tour groups arrive.',
      },
      afternoon: {
        time: '02:00 PM',
        activity: 'Kappabashi Kitchen Town & Artisan Knife Shops',
        location: 'Matsugaya, Taito City',
        description: 'Wander the historic knife-making and pottery district where Tokyo’s top master chefs source handmade Santoku blades and ceramic wares.',
        insiderTip: 'Kama-Asa shop offers free English engraving on knives bought on site.',
      },
      evening: {
        time: '06:30 PM',
        activity: 'Tokyo Skytree Sunset & Riverside Izakaya',
        location: 'Sumida Riverfront',
        description: 'Watch Tokyo light up from 350 meters above ground, followed by grilled yakitori skewers and draft Suntory malt along Hoppy Street.',
        insiderTip: 'Reserve Skytree sunset timed tickets 2 weeks in advance online.',
      },
      meals: {
        breakfast: 'Fluffy shokupan toast and drip coffee at Pelican Cafe in Asakusa',
        lunch: 'Piping hot Tempura Tendon bowl at Daikokuya (established 1887)',
        dinner: 'Charcoal-grilled yakitori and yuzu highballs on historic Hoppy Dori',
      },
      estimatedCost: '$65 - $85 USD',
    },
    {
      day: 2,
      title: 'Imperial Gardens, Art of Ginza & Modern Gastronomy',
      morning: {
        time: '09:00 AM',
        activity: 'Imperial Palace East Gardens & Otemachi Gates',
        location: 'Chiyoda City',
        description: 'Stroll the foundation stones of Edo Castle, manicured bonsai collection, and Ninomaru Japanese garden designed with cascading stone waterfalls.',
        insiderTip: 'Entry is free, but gardens are closed on Mondays and Fridays.',
      },
      afternoon: {
        time: '01:30 PM',
        activity: 'Ginza Six Rooftop Garden & Art Galleries',
        location: 'Ginza District',
        description: 'Explore world-class Japanese architectural design, the Tsutaya Books art library, and boutique matcha parlors.',
        insiderTip: 'Department store basements (Depachika) offer incredible free wagashi confection samples.',
      },
      evening: {
        time: '07:00 PM',
        activity: 'Ginza Cocktail Chemistry or Omakase Dining',
        location: 'Ginza Corridor Street',
        description: 'Immerse yourself in precision Japanese mixology with hand-carved ice diamonds and botanical spirits.',
        insiderTip: 'Bar High Five or Star Bar requires smart casual dress; no sneakers.',
      },
      meals: {
        breakfast: 'Egg salad sando and matcha latte from Cha Zen Ginza',
        lunch: 'Ginza Kagari Michelin Bib Gourmand Tori Paitan ramen (rich chicken broth)',
        dinner: 'Seasonal Kaiseki tasting dinner at Ginza Ibuki or Tempura Kondo',
      },
      estimatedCost: '$90 - $140 USD',
    },
    {
      day: 3,
      title: 'Spiritual Meiji Jingu, Harajuku Contrasts & Shibuya Crossing',
      morning: {
        time: '08:30 AM',
        activity: 'Meiji Shrine Sacred Forest Walk',
        location: 'Shibuya / Yoyogi',
        description: 'Step under massive 1,500-year-old Taiwanese cypress Torii gates into a tranquil canopy of 120,000 evergreen trees right in the heart of Tokyo.',
        insiderTip: 'Write an Ema wooden prayer tablet wishing for safe travels and hanging it by the sacred camphor tree.',
      },
      afternoon: {
        time: '01:00 PM',
        activity: 'Omotesando Architectural Promenade & Cat Street',
        location: 'Jingumae',
        description: 'Browse avant-garde architectural flagships designed by Tadao Ando, paired with independent denim and vintage boutiques along Cat Street.',
        insiderTip: 'Duck into Nezu Museum for its private Japanese iris garden and stone Buddhist statues.',
      },
      evening: {
        time: '06:00 PM',
        activity: 'Shibuya Scramble Crossing & Shibuya Sky Observation Deck',
        location: 'Shibuya Crossing',
        description: 'Join thousands surging through the world’s busiest intersection, then ascend 229 meters to Shibuya Sky’s open-air sky deck as Tokyo illuminates.',
        insiderTip: 'Book the 5:40 PM Shibuya Sky slot to experience both golden hour and the night skyline.',
      },
      meals: {
        breakfast: 'Matcha castella pancakes at Bills Omotesando',
        lunch: 'Tonkatsu Maisen Aoyama (housed inside an art deco former public bathhouse)',
        dinner: 'Tasting menu at Afuri Ebisu (yuzu shio broth ramen and craft beer)',
      },
      estimatedCost: '$75 - $110 USD',
    },
    {
      day: 4,
      title: 'Digital Wonderlands in Odaiba & TeamLab Borderless',
      morning: {
        time: '10:00 AM',
        activity: 'TeamLab Borderless: Mori Building Digital Art Museum',
        location: 'Azabudai Hills',
        description: 'Wander without maps through an interactive universe of moving waterfalls, crystal light forests, and tea cups where digital flowers bloom.',
        insiderTip: 'Wear white or light-colored clothing so the projections cast directly onto your clothes for stunning photos.',
      },
      afternoon: {
        time: '02:30 PM',
        activity: 'Roppongi Hills & Mori Art Museum Sky Gallery',
        location: 'Roppongi',
        description: 'Contemporary East Asian modern art exhibitions paired with floor-to-ceiling vistas of Tokyo Tower glowing crimson.',
        insiderTip: 'Your art museum ticket includes entry to the 52nd-floor indoor observation deck.',
      },
      evening: {
        time: '07:30 PM',
        activity: 'Omoide Yokocho (Memory Lane) Izakaya Crawl',
        location: 'Shinjuku',
        description: 'Squeeze into 6-seat lantern-lit wooden stalls beneath railway tracks serving grilled wagyu skewers and cold draft Asahi.',
        insiderTip: 'Look for stalls displaying English menus or point directly at the grill master’s freshest skewers.',
      },
      meals: {
        breakfast: 'Handmade onigiri rice balls from Bongo Otsuka (Tokyo’s oldest onigiri shop)',
        lunch: 'Wood-fired sourdough pizza at Savoy Azabudai or Seirinkan',
        dinner: 'Charcoal yakitori and grilled shiitake skewers in Omoide Yokocho',
      },
      estimatedCost: '$80 - $115 USD',
    },
    {
      day: 5,
      title: 'Nostalgic "Shitamachi" Tokyo: Yanaka, Ueno & Nezu',
      morning: {
        time: '09:00 AM',
        activity: 'Yanaka Ginza Heritage Stroll & Cemetery Cherry Trees',
        location: 'Yanaka, Bunkyo City',
        description: 'One of the few districts that survived WWII bombing. Walk quiet cobblestone alleys, traditional wooden kissaten coffee shops, and cat shrines.',
        insiderTip: 'Try freshly fried minced meat croquettes (menchi-katsu) from Suzuki Meat Shop on the shopping street.',
      },
      afternoon: {
        time: '01:30 PM',
        activity: 'Tokyo National Museum & Ueno Park Lotus Pond',
        location: 'Ueno Park',
        description: 'Marvel at National Treasure samurai armor, master ukiyo-e woodblock prints by Hokusai, and lacquerware dating back 1,000 years.',
        insiderTip: 'The Honkan main building has English QR guides for top exhibits.',
      },
      evening: {
        time: '06:30 PM',
        activity: 'Ameyokocho Market Street Buzz & Craft Beer',
        location: 'Beneath Ueno elevated rail',
        description: 'Former post-war black market now bustling with seafood vendors, dried fruit stalls, and lively open-air tachinomi (standing bars).',
        insiderTip: 'Grab a craft beer flight at Hitachino Brewing Lab inside mAAch ecute Kanda.',
      },
      meals: {
        breakfast: 'Hand-drip siphon coffee and custard pudding at Kayaba Coffee (1916 wooden house)',
        lunch: 'Handmade soba noodles in duck broth at Kanda Yabusoba (est. 1880)',
        dinner: 'Gyoza and craft beer at Yanaka Beer Hall inside renovated 1938 folk house',
      },
      estimatedCost: '$55 - $75 USD',
    },
    {
      day: 6,
      title: 'Day Trip Escape: Historic Kamakura Giant Buddha & Enoshima Sea',
      morning: {
        time: '08:00 AM',
        activity: 'Scenic Enoden Coastal Train & Kōtoku-in Giant Buddha',
        location: 'Kamakura, Kanagawa (50 min train from Tokyo)',
        description: 'Board the charming retro green coastal train to view the magnificent 13-meter bronze Amida Buddha cast in the year 1252, sitting peacefully open to the sky.',
        insiderTip: 'Pay 50 yen to step inside the hollow interior of the Great Buddha statue.',
      },
      afternoon: {
        time: '01:00 PM',
        activity: 'Hōkoku-ji Bamboo Temple & Green Tea Pavilion',
        location: 'East Kamakura',
        description: 'Sip freshly whisked Uji matcha tea inside an ethereal 2,000-stalk moso bamboo forest with stone lantern pathways.',
        insiderTip: 'Buy the tea voucher at the main gate when purchasing admission.',
      },
      evening: {
        time: '05:30 PM',
        activity: 'Enoshima Island Sunset over Mount Fuji & Coastal Seafood',
        location: 'Enoshima Coastline',
        description: 'Cross the sea bridge as the sun dips into Sagami Bay, framing Mount Fuji’s silhouette on clear days.',
        insiderTip: 'Try fresh Shirasu (whitebait) rice bowl—a celebrated Kamakura coastal delicacy.',
      },
      meals: {
        breakfast: 'Bento box from Tokyo Station Gransta before boarding the Yokosuka Line',
        lunch: 'Matcha and traditional wagashi in Hokoku-ji bamboo garden',
        dinner: 'Fresh seafood shirasu-don and local Kamakura craft beer by the ocean',
      },
      estimatedCost: '$60 - $85 USD (including train fares)',
    },
    {
      day: 7,
      title: 'Culinary Masterclasses, Souvenir Treasures & Farewell Skyline',
      morning: {
        time: '09:00 AM',
        activity: 'Tsukiji Outer Market Culinary Tasting Stroll',
        location: 'Chuo City',
        description: 'Sample tamagoyaki rolled omelettes, flame-torched scallops in butter, fresh strawberries with sweet bean paste, and green tea.',
        insiderTip: 'Arrive hungry! Do not walk while eating; Japanese etiquette asks you to enjoy food in front of each vendor.',
      },
      afternoon: {
        time: '01:30 PM',
        activity: 'Akihabara Tech Culture & Tokyo Station Character Street',
        location: 'Chiyoda City',
        description: 'Explore retro gaming archives at Super Potato, gachapon capsule toy arcades, and collect KitKat regional specialty flavors for gifts.',
        insiderTip: 'Tax-free shopping requires having your original passport with immigration stamp.',
      },
      evening: {
        time: '07:00 PM',
        activity: 'Celebratory Shinjuku Park Hyatt New York Bar or Golden Gai',
        location: 'Shinjuku',
        description: 'Toast your 7-day voyage over live jazz overlooking Tokyo’s vast ocean of neon lights.',
        insiderTip: 'Golden Gai bars seat only 5 people; look for signs with "No Cover Charge" for budget-friendly drinks.',
      },
      meals: {
        breakfast: 'Flame-torched A5 Wagyu skewer and fresh sea urchin at Tsukiji Outer Market',
        lunch: 'Katsudon pork cutlet bowl at Tonkatsu Taro Tokyo Station',
        dinner: 'Farewell Sukiyaki hot pot feast with Marbled Wagyu at Ningyocho Imahan',
      },
      estimatedCost: '$95 - $150 USD',
    },
  ],
  hotelRecommendations: [
    {
      name: 'The Gate Hotel Asakusa Kaminarimon by Hulic',
      type: 'Boutique Hotel',
      neighborhood: 'Asakusa / Taito City',
      priceRange: '$180 - $260 / night',
      description: 'Sophisticated boutique gem situated directly across from Senso-ji temple with a breathtaking 13th-floor open-air terrace overlooking Tokyo Skytree.',
      highlights: ['Unmatched views of Senso-ji Temple', 'Walk to Asakusa Metro Station in 2 mins', 'French-inspired breakfast with honey on the comb'],
      bookingAdvice: 'Request an "Essential King" or "Scenic" room on floors 10+ for direct sunrise temple vistas.',
    },
    {
      name: 'TRUNK(HOTEL) Cat Street',
      type: 'Eco-Chic Design Hotel',
      neighborhood: 'Shibuya / Jingumae',
      priceRange: '$320 - $480 / night',
      description: 'Tokyo’s premier social boutique hotel focusing on sustainability, upcycled Japanese cedar wood furniture, and locally crafted craft beer lounge.',
      highlights: ['Located in trendy Cat Street between Shibuya & Harajuku', 'Vibrant lobby social hub', 'Organic Japanese amenities'],
      bookingAdvice: 'Book at least 3 months ahead; holds only 15 bespoke guest rooms.',
    },
    {
      name: 'Ryokan Sawanoya',
      type: 'Traditional Japanese Inn',
      neighborhood: 'Yanaka / Old Tokyo',
      priceRange: '$90 - $140 / night',
      description: 'Family-run traditional ryokan with fragrant tatami mats, sliding shoji screens, cypress cedar private bath (ofuro), and warm hospitality.',
      highlights: ['Authentic tatami sleeping experience with futons', 'Quiet residential historic quarter', 'Two private Japanese onsen-style baths'],
      bookingAdvice: 'Ideal for travelers desiring an authentic cultural stay at a very modest price point.',
    },
  ],
  foodRecommendations: {
    mustTryDishes: [
      {
        dish: 'Tori Paitan Ramen',
        description: 'Velvety, collagen-rich creamy chicken broth ramen topped with tender sous-vide chicken breast and seasonal lotus root.',
        bestSpot: 'Ginza Kagari Main Branch',
        priceLevel: '$11 - $14 USD',
      },
      {
        dish: 'Edomae Sushi Nigiri',
        description: 'Fresh bluefin tuna (otoro/chutoro), sea urchin (uni), and marinated sea eel brushed with sweet nikiri soy.',
        bestSpot: 'Sushi Dai (Toyosu) or Daiwa Sushi',
        priceLevel: '$35 - $60 USD for lunch set',
      },
      {
        dish: 'Crispy Tonkatsu Maisen',
        description: 'Kurobuta black pork tenderloin breaded in fresh panko, fried to golden perfection, served with shredded cabbage and sesame sauce.',
        bestSpot: 'Maisen Aoyama Honten',
        priceLevel: '$18 - $28 USD',
      },
      {
        dish: 'Charcoal Yakitori & Negima',
        description: 'Skewers of juicy chicken thigh and scallion caramelized over aromatic Binchotan white oak charcoal.',
        bestSpot: 'Toriyoshi or Omoide Yokocho stalls',
        priceLevel: '$2 - $4 per skewer',
      },
    ],
    recommendedRestaurants: [
      {
        name: 'Ningyocho Imahan',
        cuisine: 'Traditional Sukiyaki & Wagyu',
        vibe: 'Refined historic dining in private tatami rooms',
        signatureDish: 'A5 Kuroge Wagyu Sukiyaki simmered tableside in sweet dashi soy',
        priceLevel: '$$$ ($70 - $120/person)',
      },
      {
        name: 'Kanda Matsuya',
        cuisine: 'Handmade Buckwheat Soba (est. 1884)',
        vibe: 'Bustling, warm Edo-era community eatery',
        signatureDish: 'Zaru Soba served chilled with wasabi and steaming sobayu tea broth',
        priceLevel: '$ ($10 - $16/person)',
      },
      {
        name: 'Afuri Ebisu',
        cuisine: 'Modern Yuzu Citrus Ramen',
        vibe: 'Sleek, minimalist open-kitchen bar',
        signatureDish: 'Yuzu Shio Ramen with charcoal-grilled chashu pork',
        priceLevel: '$ ($12 - $15/person)',
      },
    ],
    streetFoodAreas: [
      {
        area: 'Tsukiji Outer Market',
        specialty: 'Fresh oysters, tamagoyaki rolled eggs on skewers, flame-torched A5 wagyu & sea urchin rolls.',
        bestTimeToVisit: '08:30 AM to 12:30 PM (closed Sundays)',
      },
      {
        area: 'Nakamise-dori & Asakusa Alleys',
        specialty: 'Ningyo-yaki bean paste cakes, melonpan sweet bread, and matcha gelato scoops.',
        bestTimeToVisit: '10:00 AM to 04:00 PM',
      },
      {
        area: 'Omoide Yokocho (Shinjuku)',
        specialty: 'Smoky yakitori skewers, tsukune meatballs with raw egg yolk, and gyoza dumplings.',
        bestTimeToVisit: '06:00 PM to 11:00 PM',
      },
    ],
    dietaryTips: 'Vegetarians should carry a card reading "Watashi wa niku to sakana to dashi ga taberaremasen" (I cannot eat meat, fish, or fish broth), as dashi (bonito fish stock) is used in nearly all broths and sauces.',
  },
  transportationGuide: {
    arrivalTransit: 'From Narita Airport (NRT), take the Keisei Skyliner (41 mins to Ueno) or JR Narita Express to Tokyo/Shinjuku (55 mins). From Haneda Airport (HND), take the Tokyo Monorail (15 mins to Hamamatsucho) or Keikyu Line.',
    localTransitSystems: 'Tokyo Metro and Toei Subway networks blanket the city flawlessly with millimeter-accurate train timings. Suica or Pasmo IC card is universal.',
    recommendedPasses: 'Add a digital "Welcome Suica" or "PASMO" card directly into Apple Wallet / Google Wallet. For heavy subway days, the 72-hour Tokyo Subway Ticket ($12 USD) offers unlimited rides across all 13 subway lines.',
    taxisAndRideHailing: 'Taxis are impeccably clean with automatic self-opening doors and white lace seat covers. Uber works in Tokyo, dispatching standard licensed taxis. Taxis are pricey for long rides but great for late nights after 00:30 AM subway closing.',
    walkabilityAdvice: 'Tokyo is one of the safest and most walkable cities on Earth. You will easily log 15,000 to 22,000 steps daily. Wear supportive, broken-in walking shoes.',
    navigationApps: ['Google Maps (handles train platform numbers and transfer cars flawlessly)', 'Japan Travel by NAVITIME', 'Yurekuru Call (earthquake alerts)'],
  },
  beginnerSummary: {
    walkingEffort: 'Moderate (15,000–20,000 steps/day, flat terrain with subway stairs)',
    vegetarianFriendly: 'Moderate (Requires checking dashi fish broth; abundant Indian restaurants in Ginza & Roppongi)',
    familyAndSeniorFriendly: 'Excellent accessibility with elevator-equipped metro stations, clean amenities, and polite hospitality.',
    threeMainRulesForEveryone: [
      'Carry a small coin pouch and trash bag—Japan is coin-heavy and street public trash bins are rare.',
      'Wear slip-on shoes with clean socks because temples, ryokans, and traditional restaurants require removing footwear.',
      'Add a digital Suica or Pasmo transit card to Apple/Google Wallet for effortless 1-tap subway navigation.',
    ],
  },
  budgetBreakdown: {
    currency: 'USD ($) & INR (₹)',
    totalEstimatedRange: '$1,850 - $2,650 USD (approx. ₹1,56,000 - ₹2,24,000 INR) for 2 people',
    categories: [
      {
        category: 'Accommodation (Boutique / 3-4 Star)',
        estimatedCost: '$950 - $1,400 USD (₹80,000 - ₹1,18,000 INR)',
        percentage: 48,
        description: '6 nights in comfortable, central boutique hotels or modern traditional ryokan.',
      },
      {
        category: 'Food, Dining & Drinks',
        estimatedCost: '$450 - $650 USD (₹38,000 - ₹55,000 INR)',
        percentage: 24,
        description: 'Combination of street food markets, casual ramen/soba, and 2-3 memorable upscale dinners.',
      },
      {
        category: 'Local Transport & Rail',
        estimatedCost: '$120 - $180 USD (₹10,000 - ₹15,000 INR)',
        percentage: 7,
        description: 'Subway IC card taps, airport express trains, and round-trip scenic train to Kamakura.',
      },
      {
        category: 'Sightseeing & Museum Tickets',
        estimatedCost: '$130 - $180 USD (₹11,000 - ₹15,000 INR)',
        percentage: 8,
        description: 'TeamLab Borderless, Shibuya Sky, Tokyo National Museum, and temple garden entries.',
      },
      {
        category: 'Shopping & Souvenirs Buffer',
        estimatedCost: '$200 - $240 USD (₹17,000 - ₹20,000 INR)',
        percentage: 13,
        description: 'Handmade ceramics, stationery, matcha tea tins, and Japanese confections.',
      },
    ],
    moneySavingTips: [
      'Take advantage of Tax-Free Shopping (8-10% discount) at stores displaying Japan Tax-Free logo when spending over 5,000 yen.',
      'Purchase the 72-hour Tokyo Subway Tourist Ticket at the airport for just 1,500 yen ($10 USD / ₹845 INR).',
      'Enjoy depachika (department store basement food halls) after 07:30 PM for 30-50% discounts on gourmet bento boxes.',
      'Drink high quality tap water—Tokyo tap water is among the cleanest and tastiest municipal water supplies worldwide.',
    ],
  },
  localAttractions: [
    {
      name: 'Sensō-ji Temple & Asakusa Shrine',
      category: 'Historic Landmark',
      description: 'Founded in 628 AD, this Buddhist temple features the towering five-story pagoda and vibrant incense hall dedicated to Kannon Bodhisattva.',
      visitTimingTip: 'Early morning (before 8:30 AM) or after 8:00 PM when the buildings are illuminated with zero crowds.',
      ticketTip: 'Free public entry to grounds and main worship hall.',
      isMustSee: true,
    },
    {
      name: 'TeamLab Borderless (Azabudai Hills)',
      category: 'Contemporary Digital Art',
      description: 'Over 50 mind-bending interactive digital artworks that communicate, influence each other, and intermingle without borders.',
      visitTimingTip: 'Book the first morning slot (10:00 AM) or late evening after 6:00 PM.',
      ticketTip: 'Must book online 3 to 4 weeks in advance; tickets strictly sell out.',
      isMustSee: true,
    },
    {
      name: 'Meiji Jingu Shrine & Yoyogi Forest',
      category: 'Shinto Shrine & Nature',
      description: 'A deeply serene sanctuary dedicated to Emperor Meiji, sheltered by towering forest canopy in central Tokyo.',
      visitTimingTip: 'Sunday mornings around 10:00 AM offer the chance to see traditional Shinto wedding processions.',
      ticketTip: 'Free entrance to the shrine and forest pathways.',
      isMustSee: true,
    },
    {
      name: 'Yanaka Cemetery & Asakura Choso Museum',
      category: 'Hidden Gem Cultural Heritage',
      description: 'The home and studio of renowned sculptor Fumio Asakura, complete with rooftop garden and koi pond courtyard.',
      visitTimingTip: 'Weekdays mid-morning for total quiet and contemplation.',
      ticketTip: '500 yen ($3.50 USD) at the entrance door.',
      isMustSee: false,
    },
    {
      name: 'Nezu Shrine & Senbon Torii Tunnel',
      category: 'Hidden Shrine Gem',
      description: 'One of Japan’s oldest shrines, dating back 1,900 years, featuring a tunnel of mini vermillion torii gates and hillside azaleas.',
      visitTimingTip: 'Late afternoon when the sun filters through the orange wooden gates.',
      ticketTip: 'Free public grounds.',
      isMustSee: false,
    },
  ],
  packingChecklist: [
    {
      category: 'Essentials & Documents',
      items: [
        'Valid Passport (valid for at least 6 months with blank pages)',
        'Visit Japan Web QR codes filled out 48 hours prior for expedited immigration & customs',
        'Physical credit/debit cards (Wise, Schwab, or Revolut with no foreign transaction fee)',
        'Small coin pouch (Japan remains a coin-heavy society with 100 & 500 yen coins)',
        'International health insurance card and copy',
      ],
    },
    {
      category: 'Clothing & Footwear',
      items: [
        'Slip-on comfortable walking sneakers (you will take your shoes off frequently in temples, ryokans, and restaurants)',
        'Clean, un-holey socks (cultural respect when walking on tatami mats)',
        'Breathable lightweight layers (merino wool or linen t-shirts)',
        'Light windbreaker or packable rain jacket for spring showers',
        'Smart casual dinner outfit (neat trousers / collar shirts / tasteful dress)',
      ],
    },
    {
      category: 'Electronics & Connectivity',
      items: [
        'Japanese eSIM (Ubigi, Airalo, or Holafly) pre-installed on smartphone',
        'High-capacity power bank (10,000–20,000 mAh) for heavy camera and navigation use',
        'Type A two-prong power plug adapter (100V, same two-prong flat pins as US/Canada, ungrounded)',
        'Noise-canceling earbuds for long train rides and flights',
      ],
    },
    {
      category: 'Weather & Daily Life',
      items: [
        'Compact UV travel umbrella',
        'Small quick-drying hand towel (many Japanese public restrooms do not provide paper towels or dryers)',
        'Reusable water bottle (free chilled tap refills available)',
        'Small plastic trash bag in backpack (public trash cans on Tokyo streets are rare)',
      ],
    },
    {
      category: 'Health & Pharmacy',
      items: [
        'Personal prescription medications in original labeled containers',
        'Blister bandages (Compeed / Moleskin) for high step counts',
        'Hand sanitizer spray',
        'Electrolyte packets',
      ],
    },
  ],
  safetyTips: {
    overallAssessment: 'Tokyo is ranked among the top 3 safest metropolitan capitals globally with extremely low violent crime rates. Traveling solo, even at 2 AM, is remarkably secure.',
    safeNeighborhoods: ['Asakusa', 'Ginza', 'Yanaka', 'Ueno', 'Shibuya', 'Meguro', 'Kichijoji', 'Chiyoda'],
    areasToWatch: [
      'Kabukicho (Shinjuku red-light district): Avoid street touts inviting you into bars with "cheap drinks" or "hostess specials"—these are classic drink-spiking / extortion traps.',
      'Roppongi late-night club zones: Never accept drinks or accompany persistent strangers inviting you to private lounges.',
    ],
    precautionsAndScams: [
      'Street Touts (Bottakuri): Never follow someone promising "free drink" or "cheap club." Licensed Japanese venues do not solicit customers on the pavement.',
      'Fake monk donations: Around Senso-ji, occasional impostors offer plastic gold medallions and demand cash donations. True Buddhist monks stand motionless in silence.',
      'Train etiquette: Keep phone on silent mode ("Manner Mode") and avoid talking on the phone in train cars.',
    ],
    emergencyContacts: {
      police: '110',
      ambulance: '119 (Fire & Medical)',
      general: 'Japan Visitor Hotline (JNTO 24/7 multilingual support): 050-3816-2720',
    },
    culturalEtiquette: [
      'No tipping: Tipping is not practiced and can cause embarrassment; exceptional service is considered standard.',
      'Trash disposal: Carry your trash with you until you find convenience store bins (7-Eleven, Lawson) or train station recycling receptacles.',
      'Public eating: Avoid eating or drinking while walking down crowded streets. Step aside or eat near the vending machine or stall.',
      'Onsen etiquette: Wash and scrub thoroughly before entering the hot water. Tie hair up and keep towel out of the water.',
    ],
  },
  estimatedTotalCost: {
    currency: 'USD ($) & INR (₹)',
    lowEstimate: 1650,
    highEstimate: 2450,
    dailyAverage: 290,
    inrLowEstimate: 139000,
    inrHighEstimate: 207000,
    inrDailyAverage: 24500,
    perPersonSummary: 'For 7 days in Tokyo with moderate-to-boutique lodging, daily subway rides, museum admissions, and a mix of street food and top-tier dining, expect ~$290 USD (approx. ₹24,500 INR) per person/day (excluding international airfare). Total ~ $1,650 - $2,450 USD (₹1,39,000 - ₹2,07,000 INR).',
  },
  importantTravelTips: {
    eSimAndConnectivity: 'Get an eSIM (such as Ubigi or Airalo) installed before takeoff. Seamless 5G data is indispensable for real-time train transfer navigation on Google Maps.',
    paymentsAndCash: 'While 85% of shops in Tokyo accept contactless Visa/Mastercard and Apple Pay, traditional ramen ticket vending machines, temple stalls, and small izakayas only take cash. Withdraw Japanese Yen at 7-Eleven Seven Bank ATMs with zero foreign ATM fees.',
    tippingNorms: 'Strictly zero tipping. Leaving extra money on the table will often result in a waiter running down the street to return your forgotten change.',
    powerPlugType: 'Type A (two ungrounded flat pins, 100V 50/60Hz). US two-prong plugs work directly, but three-prong grounded plugs will need a 2-prong adapter.',
    advanceBookingsRequired: [
      'TeamLab Borderless / Planets: 3 to 4 weeks in advance',
      'Shibuya Sky Sunset Slot: Exactly 4 weeks ahead when tickets release at midnight JST',
      'Ghibli Museum (Mitaka): 10th of the preceding month at 10 AM JST',
      'High-end Omakase sushi or Kaiseki restaurants: 1 to 2 months via TableCheck or Omakase.in',
    ],
    essentialLocalPhrases: [
      { phrase: 'Arigatou gozaimasu', pronunciation: 'Ah-ree-gah-toe go-zah-ee-mahs', meaning: 'Thank you very much (polite)' },
      { phrase: 'Sumimasen', pronunciation: 'Soo-mee-mah-sen', meaning: 'Excuse me / Sorry (use to get a waiter\'s attention)' },
      { phrase: 'Kore o kudasai', pronunciation: 'Ko-reh oh koo-dah-sigh', meaning: 'This one, please (point at menu item)' },
      { phrase: 'O-kaikei onegaishimasu', pronunciation: 'Oh-kye-kay oh-neh-guy-she-mahs', meaning: 'The bill / check, please' },
      { phrase: 'Eigo no menyu wa arimasu ka?', pronunciation: 'Ay-goh no men-yoo wah ah-ree-mahs kah', meaning: 'Do you have an English menu?' },
    ],
    usefulPhrases: [
      { phrase: 'Arigatou gozaimasu', pronunciation: 'Ah-ree-gah-toe go-zah-ee-mahs', meaning: 'Thank you very much (polite)' },
      { phrase: 'Sumimasen', pronunciation: 'Soo-mee-mah-sen', meaning: 'Excuse me / Sorry (use to get a waiter\'s attention)' },
      { phrase: 'Kore o kudasai', pronunciation: 'Ko-reh oh koo-dah-sigh', meaning: 'This one, please (point at menu item)' },
      { phrase: 'O-kaikei onegaishimasu', pronunciation: 'Oh-kye-kay oh-neh-guy-she-mahs', meaning: 'The bill / check, please' },
      { phrase: 'Eigo no menyu wa arimasu ka?', pronunciation: 'Ay-goh no men-yoo wah ah-ree-mahs kah', meaning: 'Do you have an English menu?' },
    ],
    keyRule: 'Always carry a small coin pouch, wear comfortable slip-on shoes, and download Google Translate camera mode for instant menu translations!',
  },
  formattedMarkdown: `# 1. Trip Overview
* **Destination:** Tokyo, Japan
* **Duration:** 7 Days / 6 Nights
* **Style:** Cultural & Heritage Exploration
* **Budget Level:** Moderate ($$$)
* **Tagline:** An unforgettable balance of ultra-modern energy and centuries-old tranquility
* **Summary:** Experience the electric soul of Tokyo across 7 immersive days. From dawn sushi in Toyosu and ancient incense at Senso-ji, to the bamboo groves of Yanaka and Michelin-starred alleys in Ginza, this itinerary balances iconic spectacles with hidden backstreets.
* **Key Highlights:**
  * Early morning contemplation at Meiji Jingu Shrine surrounded by 70-hectare cedar forest
  * Behind-the-scenes Tsukiji Outer Market street food tasting tour
  * TeamLab Borderless immersive digital art spectacle in Azabudai Hills
  * Sunset panoramic view over Mount Fuji from Shibuya Sky
  * Edo-era artisan craft exploration through historic Yanaka "Old Tokyo"

---

# 2. Best Time to Visit
* **Recommended Window:** Late March to mid-April (Sakura cherry blossoms) or October to November (Autumn momiji foliage).
* **Weather Profile:** Mild 15°C–20°C (59°F–68°F) daytime temperatures with crisp evening breezes and low rainfall.
* **Peak Season Warning:** Cherry blossom week (late March - early April) sees elevated hotel rates; book 4-6 months ahead.
* **Shoulder Season Alternative:** Mid-May or late October offer equally sublime weather with noticeably smaller tourist crowds.

---

# 3. Day-wise Itinerary

### Day 1: Historic Asakusa, Artisan Crafts & Sumida River Sunset
* **Morning (09:30 AM):**
  * Activity: Sensō-ji Temple & Nakamise-dōri Exploration
  * Location: Asakusa, Taito City
  * Insider Tip: Arrive before 10 AM to experience the sacred halls before the tour groups arrive.
* **Afternoon (02:00 PM):**
  * Activity: Kappabashi Kitchen Town & Artisan Knife Shops
  * Location: Matsugaya
  * Insider Tip: Kama-Asa shop offers complimentary English name engraving on Japanese chef knives.
* **Evening (06:30 PM):**
  * Activity: Tokyo Skytree Observation & Hoppy Street Izakaya
  * Location: Sumida Riverfront
* **Meals:**
  * Breakfast: Fluffy shokupan toast and drip coffee at Pelican Cafe
  * Lunch: Tempura Tendon bowl at Daikokuya (est. 1887)
  * Dinner: Yakitori and yuzu highballs on historic Hoppy Dori

### Day 2: Imperial Gardens, Art of Ginza & Modern Gastronomy
* **Morning (09:00 AM):**
  * Activity: Imperial Palace East Gardens & Edo Castle Stone Foundations
  * Insider Tip: Entry is free; closed Mondays and Fridays.
* **Afternoon (01:30 PM):**
  * Activity: Ginza Six Rooftop Garden & Artisan Tea Parlors
* **Evening (07:00 PM):**
  * Activity: Precision Ginza Mixology & Ramen Dining
* **Meals:**
  * Breakfast: Egg salad sando and matcha latte from Cha Zen Ginza
  * Lunch: Ginza Kagari Michelin Bib Gourmand Tori Paitan ramen
  * Dinner: Seasonal Kaiseki tasting dinner at Ginza Ibuki

### Day 3: Spiritual Meiji Jingu, Harajuku Contrasts & Shibuya Crossing
* **Morning (08:30 AM):**
  * Activity: Meiji Shrine Sacred Forest Walk & Ema prayer tablet
* **Afternoon (01:00 PM):**
  * Activity: Omotesando Architectural Promenade & Nezu Museum Garden
* **Evening (06:00 PM):**
  * Activity: Shibuya Scramble Crossing & Shibuya Sky 360° Deck
  * Insider Tip: Book the 5:40 PM Shibuya Sky slot for golden hour and night skyline.
* **Meals:**
  * Breakfast: Matcha castella pancakes at Bills Omotesando
  * Lunch: Tonkatsu Maisen Aoyama (in a 1930s public bathhouse)
  * Dinner: Afuri Ebisu (yuzu shio broth ramen and craft beer)

### Day 4: Digital Wonderlands in Odaiba & TeamLab Borderless
* **Morning (10:00 AM):**
  * Activity: TeamLab Borderless: Mori Building Digital Art Museum
  * Insider Tip: Wear light/white clothing for stunning projection photography.
* **Afternoon (02:30 PM):**
  * Activity: Roppongi Hills & Mori Art Museum Sky Gallery
* **Evening (07:30 PM):**
  * Activity: Omoide Yokocho (Memory Lane) Izakaya Crawl in Shinjuku
* **Meals:**
  * Breakfast: Handmade onigiri from Bongo Otsuka
  * Lunch: Sourdough pizza at Savoy Azabudai
  * Dinner: Charcoal yakitori and grilled shiitake in Omoide Yokocho

### Day 5: Nostalgic "Shitamachi" Tokyo: Yanaka & Ueno
* **Morning (09:00 AM):**
  * Activity: Yanaka Ginza Heritage Stroll & 19th-Century Woodcraft Shops
* **Afternoon (01:30 PM):**
  * Activity: Tokyo National Museum & Ueno Park Lotus Pond
* **Evening (06:30 PM):**
  * Activity: Ameyokocho Market Street Buzz & Yanaka Craft Beer
* **Meals:**
  * Breakfast: Siphon coffee and custard pudding at Kayaba Coffee (1916 house)
  * Lunch: Handmade soba in duck broth at Kanda Yabusoba (est. 1880)
  * Dinner: Gyoza and craft beer at Yanaka Beer Hall

### Day 6: Day Trip Escape: Historic Kamakura Giant Buddha & Enoshima Coast
* **Morning (08:00 AM):**
  * Activity: Retro Enoden Train & Kōtoku-in Giant Bronze Buddha (cast 1252)
* **Afternoon (01:00 PM):**
  * Activity: Hōkoku-ji Bamboo Temple & Green Tea Pavilion
* **Evening (05:30 PM):**
  * Activity: Enoshima Island Sunset over Mount Fuji
* **Meals:**
  * Breakfast: Ekiben bento box on train from Tokyo Station
  * Lunch: Fresh matcha in Hokoku-ji bamboo garden
  * Dinner: Shirasu-don coastal seafood rice bowl

### Day 7: Culinary Treasures, Souvenirs & Farewell Skyline
* **Morning (09:00 AM):**
  * Activity: Tsukiji Outer Market Culinary Tasting Stroll
  * Insider Tip: Do not walk while eating; eat politely in front of stalls.
* **Afternoon (01:30 PM):**
  * Activity: Tokyo Station Character Street & Akihabara Electronics
* **Evening (07:00 PM):**
  * Activity: Celebratory Shinjuku Skyline Toast & Sukiyaki Hot Pot Feast
* **Meals:**
  * Breakfast: Flame-torched A5 Wagyu skewer and tamagoyaki at Tsukiji
  * Lunch: Pork cutlet bowl at Tonkatsu Taro Tokyo Station
  * Dinner: Marbled Kuroge Wagyu Sukiyaki at Ningyocho Imahan

---

# 4. Hotel Recommendation
* **The Gate Hotel Asakusa Kaminarimon by Hulic (Boutique)**
  * Location: Asakusa / Taito City
  * Price: $180 - $260 / night
  * Highlights: Direct views of Senso-ji temple, 13th-floor terrace bar, 2 min walk to metro.
  * Booking Tip: Request an "Essential King" or "Scenic" room on floors 10+ for direct sunrise temple vistas.
* **TRUNK(HOTEL) Cat Street (Eco-Chic Design)**
  * Location: Shibuya / Jingumae
  * Price: $320 - $480 / night
  * Highlights: Prime location between Shibuya and Harajuku, organic materials, buzzing social lounge.
* **Ryokan Sawanoya (Traditional Inn)**
  * Location: Yanaka / Old Tokyo
  * Price: $90 - $140 / night
  * Highlights: Tatami mats, private cedar ofuro bath, authentic Japanese breakfast.

---

# 5. Food Recommendation
* **Must-Try Local Dishes:**
  * **Tori Paitan Ramen:** Rich creamy chicken broth with lotus root ($11-$14 at Ginza Kagari).
  * **Edomae Sushi:** Bluefin tuna and fresh uni nigiri ($35-$60 lunch at Toyosu).
  * **Kurobuta Tonkatsu:** Panko-crusted tender pork cutlet ($18-$28 at Maisen).
  * **Binchotan Yakitori:** Charcoal-grilled chicken skewers ($2-$4/skewer).
* **Iconic Restaurants:**
  * **Ningyocho Imahan:** Legendary Sukiyaki in private tatami rooms ($$$).
  * **Kanda Matsuya:** Hand-rolled buckwheat soba since 1884 ($).
  * **Afuri Ebisu:** Light citrus yuzu ramen and craft beer ($).
* **Street Food Hotspots:**
  * Tsukiji Outer Market (seafood, rolled omelets, torched wagyu) - best mornings.
  * Nakamise-dori (bean cakes, melonpan) - best 10 AM-4 PM.
  * Omoide Yokocho (yakitori skewers) - best 6 PM-11 PM.

---

# 6. Transportation Guide
* **Airport Transfers:** Narita Airport: Keisei Skyliner (41 min to Ueno). Haneda Airport: Tokyo Monorail (15 min to Hamamatsucho).
* **Subway & Train Navigation:** Add a digital Suica or PASMO transit card directly to Apple/Google Wallet.
* **Unlimited Pass Option:** 72-hour Tokyo Subway Tourist Pass for 1,500 yen ($10 USD) covers all 13 subway lines.
* **Taxis & Rideshare:** Automatic opening doors; exceptionally clean. Use Uber or GO Taxi app.
* **Walkability Score:** Very high. Expect 15,000–22,000 steps daily.

---

# 7. Budget Breakdown
* **Total Estimated Range (for 2 people / 7 days):** $1,850 - $2,650 USD (Excluding flights)
* **Itemized Allocation:**
  * Accommodation: $950 - $1,400 (48%)
  * Dining & Drinks: $450 - $650 (24%)
  * Local Transport: $120 - $180 (7%)
  * Sightseeing & Passes: $130 - $180 (8%)
  * Shopping & Buffer: $200 - $240 (13%)
* **Top Money-Saving Tips:**
  * Shop tax-free (8-10% discount) with your passport on purchases over 5,000 yen.
  * Visit department store basements (Depachika) after 7:30 PM for 30-50% discounts on gourmet bento meals.

---

# 8. Local Attractions
* **Sensō-ji Temple & Pagoda:** Tokyo's oldest temple (founded 628 AD). Visit early morning or late night illuminated.
* **TeamLab Borderless (Azabudai Hills):** World-class interactive digital museum. Must book 3 weeks ahead.
* **Meiji Jingu Shrine:** 120,000 sacred trees in the city center. Free admission.
* **Yanaka Historic District:** Preserved pre-war wooden streetscape with artisan shops and cat shrines.
* **Nezu Shrine:** 1,900-year-old sanctuary with vermillion mini-torii gate tunnels.

---

# 9. Packing Checklist
* **Essentials & Documents:** Passport (6+ mo validity), Visit Japan Web QR codes, No-fee travel debit card, Coin pouch.
* **Clothing:** Slip-on walking sneakers, clean socks for tatami mats, light layers, rain shell.
* **Tech:** Japanese eSIM pre-installed, 20,000 mAh power bank, Type A ungrounded 2-prong power adapter.
* **Daily Life:** Compact umbrella, small hand towel (many restrooms have no paper towels), small plastic trash bag.
* **Health:** Blister cushions (Moleskin), prescription meds in labeled bottles, hand sanitizer.

---

# 10. Safety Tips
* **Safety Level:** Extremely High (consistently ranked in the world's top 3 safest cities).
* **Safe Neighborhoods:** Asakusa, Ginza, Yanaka, Meguro, Shibuya, Chiyoda.
* **Scams to Avoid:** Never follow street touts in Kabukicho/Roppongi offering "cheap drinks" (classic drink-spiking extortion). Ignore fake monks soliciting donations.
* **Emergency Numbers:** Police: 110 | Ambulance/Fire: 119 | Tourist Hotline: 050-3816-2720.
* **Cultural Etiquette:** Strictly no tipping; avoid walking while eating; place phone on silent mode on trains.

---

# 11. Estimated Total Cost
* **Total Estimated Cost:** $1,650 - $2,450 USD per person
* **Daily Average Cost:** ~$290 USD / day per person
* **Summary:** Covers boutique lodging, daily subway passes, all attractions (TeamLab, Shibuya Sky), daily street food and gourmet dinners, and Kamakura day trip.

---

# 12. Important Travel Tips
* **Connectivity:** Install an eSIM before departure for seamless Google Maps train routing.
* **Currency:** Carry at least 15,000 yen in cash for ramen vending machines, coin lockers, and temple gifts.
* **Tipping:** Zero tipping under any circumstance.
* **Power:** Type A ungrounded 2-prong plugs (100V).
* **Key Bookings in Advance:** TeamLab Borderless (3 weeks), Shibuya Sky sunset slot (4 weeks), Ghibli Museum (10th of prior month).
* **Essential Phrases:**
  * *Arigatou gozaimasu* = Thank you very much
  * *Sumimasen* = Excuse me / Sorry
  * *Kore o kudasai* = This one please (pointing)
  * *O-kaikei onegaishimasu* = Check / bill please
* **Golden Rule:** Wear slip-on shoes, keep a small trash bag in your daypack, and embrace serendipitous side-alley wandering!`,
};

export const SAMPLE_TELUGU_BALI_PLAN: TravelPlan = {
  id: 'sample-bali-5days-telugu',
  createdAt: new Date().toISOString(),
  destination: 'బాలి, ఇండోనేషియా (Bali, Indonesia)',
  inputs: {
    destination: 'బాలి, ఇండోనేషియా (Bali, Indonesia)',
    days: 5,
    budget: 'బడ్జెట్ ($$ / ₹₹)',
    travel_style: 'విశ్రాంతి & సంస్కృతి (Relaxed & Heritage)',
    hotel_type: 'రిసార్ట్ & పూల్ విల్లా (Private Pool Villa)',
    transport: 'ప్రైవేట్ డ్రైవర్ & కారు (Private Car / Grab)',
    weather: 'ఎండ & ఆహ్లాదకరమైన వాతావరణం (Tropical Warm)',
    interests: ['ఆలయాలు & సంస్కృతి', 'ప్రకృతి & బీచ్‌లు', 'శాకాహార భోజనం', 'ఫోటోగ్రఫీ'],
    language: 'Telugu',
    notes: 'స్వచ్ఛమైన శాకాహార భోజనం (Pure Vegetarian food) మరియు కుటుంబ సభ్యులతో ప్రయాణం.',
  },
  tripOverview: {
    title: 'బాలి ద్వీపంలో 5 రోజుల స్వర్గధామ యాత్ర',
    tagline: 'పురాతన దేవాలయాలు, పచ్చని వరి పొలాలు మరియు నీలి సముద్ర తీరాల కలయిక',
    summary: 'ఇండోనేషియాలోని బాలి ద్వీపం అద్భుతమైన హిందూ సంస్కృతికి, సహజ సౌందర్యానికి ప్రసిద్ధి. ఉబుద్ పచ్చటి అడవులు, ఉలువతు కొండపై సూర్యాస్తమయం మరియు తనాహ్ లోట్ సముద్ర ఆలయాలను దర్శించుకునేందుకు ఈ 5 రోజుల ప్లాన్ చాలా సులభంగా, సౌకర్యవంతంగా రూపొందించబడింది.',
    vibe: 'ప్రశాంతమైన, ఆధ్యాత్మిక మరియు ఉల్లాసభరితమైన వాతావరణం',
    pacing: 'మితమైన వేగం (కుటుంబాలు మరియు పెద్దవారికి అనువైనది)',
    keyHighlights: [
      'ఉబుద్ తెగల్లలాంగ్ వరి మెట్ల పొలాలు & ప్రసిద్ధ బాలి స్వింగ్ (Bali Swing)',
      'సముద్రపు రాతి బండపై వెలసిన చారిత్రాత్మక తనాహ్ లోట్ ఆలయ దర్శనం',
      'ఉలువతు కొండపై సూర్యాస్తమయం & సాంప్రదాయ కేచక్ అగ్ని నృత్యం (Kecak Dance)',
      'నుసా పెనిడా ద్వీపంలో బ్రోకెన్ బీచ్ & కెలింగ్కింగ్ టీ-రెక్స్ వ్యూపాయింట్',
      'భారతీయ మరియు స్థానిక స్వచ్ఛమైన శాకాహార వంటకాల ఆనందం',
    ],
  },
  beginnerSummary: {
    walkingEffort: 'సులభం / మితం (చాలా చోట్ల ప్రైవేట్ కారు డ్రైవర్ తోడే ఉంటారు, మెట్లు కొద్దిగానే ఉంటాయి)',
    vegetarianFriendly: 'చాలా ఎక్కువ (భారతీయ రెస్టారెంట్లు ఉబుద్, సెమిన్యాక్ లలో విస్తారంగా ఉన్నాయి)',
    familyAndSeniorFriendly: 'కుటుంబాలు మరియు వృద్ధులకు 100% అనుకూలం; ప్రైవేట్ కారు సుఖవంతమైన ప్రయాణాన్ని అందిస్తుంది.',
    threeMainRulesForEveryone: [
      'ఆలయాలలోకి వెళ్లేటప్పుడు నడుముకు సాంప్రదాయ సరోంగ్ (Sarong) వస్త్రం తప్పనిసరిగా ధరించాలి.',
      'ఎయిర్‌పోర్ట్ వద్ద ఇండోనేషియా వీసా ఆన్ అరైవల్ ($35 USD / ₹3,000 INR) సులభంగా పొందవచ్చు.',
      'డబ్బుల కోసం స్థానిక అధీకృత మనీ ఎక్స్ఛేంజ్ (BMC లేదా Central Kuta) కేంద్రాలనే ఉపయోగించండి.',
    ],
  },
  bestTimeToVisit: {
    bestMonths: 'ఏప్రిల్ నుండి అక్టోబర్ వరకు (పొడి వాతావరణం, వర్షాలు తక్కువ)',
    seasonalBreakdown: 'ఈ నెలల్లో రోజువారీ ఉష్ణోగ్రత 27°C నుండి 30°C ఉంటుంది. చల్లని సముద్రపు గాలులతో ఆహ్లాదకరంగా ఉంటుంది.',
    weatherExpectations: 'మంచి ఎండ మరియు నిర్మలమైన ఆకాశం. సాయంత్రాలు చల్లగా ఉంటాయి.',
    peakVsOffPeak: 'జూలై, ఆగస్టు రద్దీ ఎక్కువ. ఏప్రిల్, మే మరియు సెప్టెంబర్ నెలలు బెస్ట్.',
  },
  dayWiseItinerary: [
    {
      day: 1,
      title: 'బాలి ఆగమనం, ఉబుద్ ప్రయాణం & ప్రశాంత సాయంత్రం',
      morning: {
        time: '10:00 AM',
        activity: 'డెన్‌పసార్ విమానాశ్రయం చేరుకోవడం & హోటల్ చెక్-ఇన్',
        location: 'ఉబుద్ (Ubud)',
        description: 'ఎయిర్‌పోర్ట్ వద్ద మీ ప్రైవేట్ డ్రైవర్ మిమ్మల్ని స్వాగతించి సుందరమైన ఉబుద్ ప్రైవేట్ పూల్ విల్లాకు తీసుకెళ్తారు.',
        insiderTip: 'ఎయిర్‌పోర్ట్ బయట టెల్కామ్‌సెల్ (Telkomsel) స్థానిక సిమ్ కార్డు లేదా eSIM తీసుకోండి.',
      },
      afternoon: {
        time: '02:30 PM',
        activity: 'ఉబుద్ రాయల్ ప్యాలెస్ & సరస్వతి వాటర్ టెంపుల్',
        location: 'ఉబుద్ మార్కెట్ సెంటర్',
        description: 'తామర పూల కొలనుల నడుమ ఉన్న సరస్వతి దేవి ఆలయాన్ని దర్శించి, స్థానిక సంప్రదాయ కళాకృతులను చూడవచ్చు.',
        insiderTip: 'సరస్వతి టెంపుల్ లోపలికి ప్రవేశం ఉచితం; పక్కనే ఉన్న కేఫ్‌లో తాజా కొబ్బరినీళ్లు తాగండి.',
      },
      evening: {
        time: '06:30 PM',
        activity: 'ఉబుద్ మార్కెట్ షాపింగ్ & సాంప్రదాయ భారతీయ డిన్నర్',
        location: 'ఉబుద్ ఆర్ట్ మార్కెట్',
        description: 'చేతితో చేసిన బ్యాగులు, చెక్క శిల్పాలు మరియు సుగంధ ద్రవ్యాల కొనుగోలు.',
        insiderTip: 'మార్కెట్లో బేరం ఆడేటప్పుడు నవ్వుతూ 30-40% తగ్గించి అడగవచ్చు.',
      },
      meals: {
        breakfast: 'విల్లాలో ఫ్రెష్ పండ్ల రసాలు మరియు టోస్ట్',
        lunch: 'ఉబుద్ లోని "గణేశ ఎక్స్‌ప్రెస్" లో సౌత్ ఇండియన్ దోశ లేదా థాలీ',
        dinner: '"క్వీన్స్ తందూరి" లో రుచికరమైన రోటీ, పన్నీర్ బట్టర్ మసాలా & జీరా రైస్',
      },
      estimatedCost: '$40 - $55 USD (₹3,400 - ₹4,600 INR)',
    },
    {
      day: 2,
      title: 'తెగల్లలాంగ్ వరి మెట్లు, బాలి స్వింగ్ & కాఫీ తోటలు',
      morning: {
        time: '08:30 AM',
        activity: 'తెగల్లలాంగ్ రైస్ టెర్రస్ & బాలి స్వింగ్ ఫోటోషూట్',
        location: 'తెగల్లలాంగ్, ఉబుద్',
        description: 'పచ్చని లోయల మీదుగా గాలిలో తేలియాడే ఊయల (Bali Swing). జీవితంలో మర్చిపోలేని అనుభూతి.',
        insiderTip: 'ఉదయం 9 గంటలకే వెళ్తే ఎండ తక్కువగా ఉంటుంది మరియు ఫోటోలకు క్యూ ఉండదు.',
      },
      afternoon: {
        time: '01:30 PM',
        activity: 'తిర్తా ఎంపుల్ పవిత్ర జల ఆలయం (Tirta Empul Holy Springs)',
        location: 'తంపక్సిరింగ్',
        description: '1000 సంవత్సరాల పురాతన పవిత్ర నీటి బుగ్గల ఆలయం. మనస్సుకు అత్యంత ప్రశాంతత లభిస్తుంది.',
        insiderTip: 'తీర్థ స్నానం చేయాలనుకుంటే ప్రత్యేక సరోంగ్ అక్కడే అద్దెకు దొరుకుతుంది.',
      },
      evening: {
        time: '06:00 PM',
        activity: 'లువాక్ కాఫీ తోటల సందర్శన & విశ్రాంతి',
        location: 'కింతామణి వ్యూ',
        description: 'రకరకాల హెర్బల్ టీలు మరియు చాక్లెట్ శాంపిల్స్ ఉచితంగా రుచి చూడవచ్చు.',
        insiderTip: 'లెమన్‌గ్రాస్ టీ మరియు అల్లం టీ ఇక్కడ చాలా రుచిగా ఉంటాయి.',
      },
      meals: {
        breakfast: 'ఫ్లోటింగ్ బ్రేక్‌ఫాస్ట్ (Floating Breakfast in Villa Pool)',
        lunch: 'లోయల వ్యూతో కూడిన రెస్టారెంట్‌లో ఇండోనేషియన్ గడో-గడో (పీనట్ సాస్ వెజ్ సలాడ్)',
        dinner: 'ఇండియన్ డెలైట్స్ రెస్టారెంట్‌లో దాల్ తడ్కా & రైస్',
      },
      estimatedCost: '$50 - $70 USD (₹4,200 - ₹5,900 INR)',
    },
    {
      day: 3,
      title: 'సముద్ర తీర విహారం, తనాహ్ లోట్ ఆలయం & సెమిన్యాక్ బీచ్',
      morning: {
        time: '09:00 AM',
        activity: 'ఉబుద్ నుండి సెమిన్యాక్ బీచ్ రిసార్ట్ కు ప్రయాణం',
        location: 'సెమిన్యాక్ / కుటా',
        description: 'బీచ్ ముంగిట ఉండే లగ్జరీ రిసార్ట్ చెక్-ఇన్. నీలి సముద్రపు అలల దర్శనం.',
        insiderTip: 'రిసార్ట్‌లో బీచ్ వ్యూ రూమ్స్ ముందుగానే బుక్ చేసుకోండి.',
      },
      afternoon: {
        time: '03:00 PM',
        activity: 'ప్రసిద్ధ తనాహ్ లోట్ సముద్ర ఆలయం (Tanah Lot Temple)',
        location: 'తబనాన్ తీరం',
        description: 'సముద్రం నడిబొడ్డున ఎత్తైన బండపై కొలువైన పురాతన ఆలయం. అలలు బండలను తాకుతుంటే అద్భుతమైన దృశ్యం.',
        insiderTip: 'సూర్యాస్తమయ సమయానికి (5:30 PM) కెమెరా సిద్ధంగా ఉంచుకోండి.',
      },
      evening: {
        time: '07:30 PM',
        activity: 'సెమిన్యాక్ కేఫ్ స్ట్రీట్ & లైవ్ మ్యూజిక్',
        location: 'సెమిన్యాక్',
        description: 'సముద్రపు ఒడ్డున కొవ్వొత్తుల వెలుగులో లైవ్ అకౌస్టిక్ మ్యూజిక్ వింటూ డిన్నర్.',
        insiderTip: 'కుటుంబంతో కలిసి కూర్చోవడానికి ప్రశాంతమైన బీచ్ కేఫ్‌లు చాలా ఉన్నాయి.',
      },
      meals: {
        breakfast: 'రిసార్ట్ కాంటినెంటల్ బఫే బ్రేక్‌ఫాస్ట్',
        lunch: 'సెమిన్యాక్ లోని "స్పైస్ మంత్ర" ఇండియన్ రెస్టారెంట్ భోజనం',
        dinner: 'బీచ్ సైడ్ లో ఇటాలియన్ వెజిటేరియన్ వుడ్-ఫైర్డ్ పిజ్జా & పాస్తా',
      },
      estimatedCost: '$60 - $80 USD (₹5,000 - ₹6,700 INR)',
    },
    {
      day: 4,
      title: 'ఉలువతు క్లిఫ్ ఆలయం, కేచక్ అగ్ని నృత్యం & జింబారన్ తీరం',
      morning: {
        time: '10:00 AM',
        activity: 'పండవా బీచ్ & వాటర్ స్పోర్ట్స్ లేదా ప్రశాంత విశ్రాంతి',
        location: 'దక్షిణ బాలి తీరం',
        description: 'తెల్లటి ఇసుక తిన్నెల పండవా బీచ్‌లో కయాకింగ్ లేదా సేదతీరడం.',
        insiderTip: 'ఎండ ఎక్కువగా ఉంటుంది కాబట్టి సన్‌స్క్రీన్ మరియు సన్‌గ్లాసెస్ వాడండి.',
      },
      afternoon: {
        time: '03:30 PM',
        activity: 'ఉలువతు క్లిఫ్ టాప్ టెంపుల్ (Pura Luhur Uluwatu)',
        location: 'ఉలువతు కొండ శిఖరం',
        description: 'సముద్రానికి 70 మీటర్ల ఎత్తులో నిటారైన కొండ అంచున నిర్మించిన అద్భుతమైన ఆలయం.',
        insiderTip: 'ఇక్కడి కోతులు కళ్లజోళ్ళు, ఫోన్లు లాక్కుంటాయి, కాబట్టి వాటిని జాగ్రత్తగా బ్యాగ్‌లో పెట్టండి.',
      },
      evening: {
        time: '06:00 PM',
        activity: 'సూర్యాస్తమయం వేళ కేచక్ అగ్ని నృత్య ప్రదర్శన (Kecak Fire Dance)',
        location: 'ఉలువతు ఓపెన్ ఎయిర్ యాంఫిథియేటర్',
        description: 'రామాయణ ఘట్టాలను వందలాది కళాకారులు అగ్ని నృత్యంతో ప్రదర్శించే రోమాంచితమైన దృశ్యం.',
        insiderTip: 'సాయంత్రం 5 గంటలకే సీట్లు ఆక్యుపై చేసుకోండి; సూర్యాస్తమయం వెనకాల అద్భుతంగా కనిపిస్తుంది.',
      },
      meals: {
        breakfast: 'రిసార్ట్ స్పెషల్ ఇడ్లీ, దోశ మరియు కాఫీ',
        lunch: 'జింబారన్ లోని స్వచ్ఛమైన శాకాహార కేఫ్',
        dinner: '"శివ శక్తి" లేదా "గేట్‌వే ఆఫ్ ఇండియా" లో వేడివేడి నాన్ మరియు పన్నీర్ ఖుర్చన్',
      },
      estimatedCost: '$65 - $90 USD (₹5,500 - ₹7,600 INR)',
    },
    {
      day: 5,
      title: 'కృష్ణా హస్తకళల బజార్ & వీడ్కోలు ప్రయాణం',
      morning: {
        time: '09:30 AM',
        activity: 'కృష్ణా ఒలేహ్-ఒలేహ్ బాలి అతిపెద్ద సావనీర్ మార్కెట్',
        location: 'కుటా (Kuta)',
        description: 'ఫిక్స్‌డ్ ధరలతో లభించే బాలి టీ-షర్టులు, అరోమా ఆయిల్స్, పెయింటింగ్స్ మరియు పిండి వంటలు.',
        insiderTip: 'ఇక్కడ బేరం ఆడాల్సిన పనిలేదు, అన్ని వస్తువులు చాలా చవకగా లభిస్తాయి.',
      },
      afternoon: {
        time: '01:00 PM',
        activity: 'విశ్రాంతి, ప్యాకింగ్ & ఎయిర్‌పోర్ట్ డ్రాప్',
        location: 'డెన్‌పసార్ విమానాశ్రయం',
        description: 'మీ డ్రైవర్ మిమ్మల్ని ఫ్లైట్ సమయానికి 3 గంటల ముందే ఎయిర్‌పోర్ట్ వద్ద డ్రాప్ చేస్తారు.',
        insiderTip: 'లగేజ్ బరువును ఎయిర్‌పోర్ట్‌కు బయలుదేరే ముందే హోటల్‌లో చెక్ చేసుకోండి.',
      },
      evening: {
        time: '06:00 PM',
        activity: 'స్వదేశానికి తిరుగు ప్రయాణం',
        location: 'ఇంటర్నేషనల్ డిపార్చర్స్',
        description: 'మధురమైన జ్ఞాపకాలతో భారత్‌కు తిరుగు ప్రయాణం.',
        insiderTip: 'డ్యూటీ ఫ్రీ లో మిగిలిన ఇండోనేషియన్ రూపాయలను ఖర్చు చేయవచ్చు.',
      },
      meals: {
        breakfast: 'హోటల్ లో బఫే బ్రేక్‌ఫాస్ట్',
        lunch: 'ఎయిర్‌పోర్ట్ సమీపంలో ఇండియన్ వెజిటేరియన్ థాలీ',
        dinner: 'విమాన ప్రయాణంలో భోజనం',
      },
      estimatedCost: '$35 - $50 USD (₹3,000 - ₹4,200 INR)',
    },
  ],
  hotelRecommendations: [
    {
      name: 'కామాండలు ఉబుద్ (Kamandalu Ubud)',
      type: 'లగ్జరీ నేచర్ విల్లా (Luxury Pool Villa)',
      neighborhood: 'ఉబుద్ లోయ (Ubud Valley)',
      priceRange: '$180 - $260 / రాత్రి (~₹15,000 - ₹22,000 INR)',
      description: 'పచ్చని కొండల మధ్య ప్రైవేట్ స్విమ్మింగ్ పూల్, సాంప్రదాయ చెక్క డిజైన్ మరియు అద్భుతమైన ఆతిథ్యం.',
      highlights: ['వ్యక్తిగత ప్రైవేట్ పూల్', 'ఫ్లోటింగ్ బ్రేక్‌ఫాస్ట్ సదుపాయం', 'ఉచిత యోగా క్లాసులు'],
      bookingAdvice: 'వ్యాలీ వ్యూ పూల్ విల్లాను 2 నెలల ముందే బుక్ చేసుకోండి.',
    },
    {
      name: 'హాలిడే ఇన్ రిసార్ట్ బాలి బరునా (Holiday Inn Baruna)',
      type: 'బీచ్ ఫ్రంట్ ఫ్యామిలీ రిసార్ట్',
      neighborhood: 'కుటా / టుబాన్ తీరం',
      priceRange: '$110 - $160 / రాత్రి (~₹9,200 - ₹13,500 INR)',
      description: 'ఎయిర్‌పోర్ట్‌కు 10 నిమిషాల దూరంలో, బీచ్ ముంగిట ఉండే అద్భుతమైన కుటుంబ రిసార్ట్.',
      highlights: ['ప్రత్యక్ష బీచ్ ప్రవేశం', 'పిల్లల కోసం కిడ్స్ క్లబ్', 'భారతీయ బ్రేక్‌ఫాస్ట్ ఎంపికలు'],
      bookingAdvice: 'కుటుంబాలతో ప్రయాణించేవారికి బెస్ట్ ఛాయిస్.',
    },
  ],
  foodRecommendations: {
    mustTryDishes: [
      {
        dish: 'నాసి గోరెంగ్ వెజిటేరియన్ (Nasi Goreng Veg)',
        description: 'ఇండోనేషియన్ వెజ్ ఫ్రైడ్ రైస్, కరకరలాడే క్రిస్పీ క్ర్యాకర్స్ మరియు వేరుశెనగ సాస్ తో అందిస్తారు.',
        bestSpot: 'వరుంగ్ వార్సీ (Warung Warsi Ubud)',
        priceLevel: '$3 - $5 USD (₹250 - ₹420 INR)',
      },
      {
        dish: 'గడో-గడో (Gado-Gado)',
        description: 'ఉడికించిన కూరగాయలు, టోఫు మరియు ఘుమఘుమలాడే వేరుశెనగ సాస్ సలాడ్.',
        bestSpot: 'స్థానిక సాంప్రదాయ రెస్టారెంట్లు',
        priceLevel: '$2 - $4 USD (₹170 - ₹340 INR)',
      },
    ],
    recommendedRestaurants: [
      {
        name: 'క్వీన్స్ తందూరి & గణేశ ఎక్స్‌ప్రెస్ (Queen\'s Tandoor)',
        cuisine: 'నార్త్ & సౌత్ ఇండియన్ ప్యూర్ వెజ్ ఎంపికలు',
        vibe: 'రాయల్ ఇండియన్ ఇంటీరియర్స్ & మృదువైన సంగీతం',
        signatureDish: 'పన్నీర్ టిక్కా మసాలా & మసాలా దోశ',
        priceLevel: '$$ ($10 - $18 USD / ₹840 - ₹1,500 INR)',
      },
      {
        name: 'స్పైస్ మంత్ర సెమిన్యాక్ (Spice Mantraa)',
        cuisine: 'మోడరన్ ఇండియన్ ఫ్యూజన్',
        vibe: 'ఆధునిక, ఆహ్లాదకరమైన వాతావరణం',
        signatureDish: 'దాల్ మఖానీ & వెజ్ బిర్యానీ',
        priceLevel: '$$ ($12 - $20 USD / ₹1,000 - ₹1,700 INR)',
      },
    ],
    streetFoodAreas: [
      {
        area: 'జింబారన్ బీచ్ రోడ్',
        specialty: 'మొక్కజొన్న పొత్తులు (Roasted Sweet Corn with Sweet Butter)',
        bestTimeToVisit: 'సాయంత్రం 5:00 నుండి రాత్రి 9:00 వరకు',
      },
    ],
    dietaryTips: 'బాలిలో హిందూ సంస్కృతి ఉండటం వలన శాకాహారులకు (Vegetarians) ఎలాంటి ఇబ్బంది ఉండదు. రెస్టారెంట్‌లో ఆర్డర్ ఇచ్చేటప్పుడు "తన్పా డాగింగ్, తన్పా ఇకాన్" (మాంసం వద్దు, చేపలు వద్దు) అని చెబితే సరిపోతుంది.',
  },
  transportationGuide: {
    arrivalTransit: 'డెన్‌పసార్ ఎయిర్‌పోర్ట్ నుండి హోటల్‌కు ముందే కేటాయించిన ప్రైవేట్ కారు డ్రైవర్ తీసుకెళ్తారు.',
    localTransitSystems: 'బాలిలో బస్సులు, మెట్రోలు ఉండవు. ప్రైవేట్ కారు డ్రైవర్‌ను రోజుకు 10 గంటల పాటు అద్దెకు తీసుకోవడం అత్యంత చవకైన, సౌకర్యవంతమైన పద్ధతి ($35 - $45 USD / ₹3,000 - ₹3,800 INR రోజుకు).',
    recommendedPasses: 'గ్రాబ్ (Grab) మరియు గోజెక్ (Gojek) యాప్‌లను మొబైల్‌లో డౌన్‌లోడ్ చేసుకోండి (ఇవి భారతదేశంలోని ఓలా, ఉబెర్ లాంటివి).',
    taxisAndRideHailing: 'బ్లూ బర్డ్ (Bluebird) బ్రాండ్ ఉన్న అధికారిక మీటర్ ట్యాక్సీలను మాత్రమే ఎక్కండి.',
    walkabilityAdvice: 'ఉబుద్ మార్కెట్ మరియు సెమిన్యాక్ మార్గాల్లో నడవడం సులభం, కానీ ఇతర ప్రాంతాలకు కారు అవసరం.',
    navigationApps: ['Google Maps', 'Grab App', 'Gojek App'],
  },
  budgetBreakdown: {
    currency: 'USD ($) & INR (₹)',
    totalEstimatedRange: '$750 - $1,100 USD (₹63,000 - ₹93,000 INR) ఇద్దరికి / 5 రోజులకు',
    categories: [
      {
        category: 'వసతి & పూల్ విల్లా (4 రాత్రులు)',
        estimatedCost: '$450 - $650 USD (₹38,000 - ₹55,000 INR)',
        percentage: 55,
        description: 'ఉబుద్ మరియు సెమిన్యాక్ లో లగ్జరీ పూల్ విల్లా లేదా స్టార్ రిసార్ట్.',
      },
      {
        category: 'ఆహారం & రెస్టారెంట్లు',
        estimatedCost: '$160 - $220 USD (₹13,500 - ₹18,500 INR)',
        percentage: 20,
        description: 'రోజుకు మూడు పూటలా భారతీయ మరియు స్థానిక శాకాహార భోజనం.',
      },
      {
        category: 'ప్రైవేట్ డ్రైవర్ & రవాణా',
        estimatedCost: '$120 - $160 USD (₹10,000 - ₹13,500 INR)',
        percentage: 15,
        description: '5 రోజుల పూర్తి ప్రైవేట్ ఎయిర్ కండిషన్డ్ కారు & డ్రైవర్ చార్జీలు, పార్కింగ్ రుసుములు.',
      },
      {
        category: 'దర్శన టికెట్లు & ఎంట్రీ ఫీజులు',
        estimatedCost: '$60 - $90 USD (₹5,000 - ₹7,500 INR)',
        percentage: 10,
        description: 'ఉలువతు డ్యాన్స్, బాలి స్వింగ్, తనాహ్ లోట్ మరియు సరస్వతి ఆలయ ప్రవేశ రుసుములు.',
      },
    ],
    moneySavingTips: [
      'ఎయిర్‌పోర్ట్ వద్ద కాకుండా బయట సిటీలోని అధీకృత ఎక్స్ఛేంజర్ల వద్ద కరెన్సీ మార్చుకుంటే ఎక్కువ రేటు వస్తుంది.',
      'మొత్తం ప్రయాణానికి ఒకే ప్రైవేట్ డ్రైవర్‌ను 5 రోజులకు మాట్లాడుకుంటే డిస్కౌంట్ లభిస్తుంది.',
      'షాపింగ్ కోసం కుటా లోని "కృష్ణా ఒలేహ్-ఒలేహ్" సూపర్ మార్కెట్‌కు వెళ్ళండి, అక్కడ ఫిక్స్‌డ్ చవకైన ధరలు ఉంటాయి.',
    ],
  },
  localAttractions: [
    {
      name: 'తనాహ్ లోట్ సముద్ర దేవాలయం (Tanah Lot)',
      category: 'చారిత్రక ఆధ్యాత్మిక క్షేత్రం',
      description: 'సముద్రపు రాతి బండపై నిర్మించబడిన 16వ శతాబ్దపు సముద్ర దేవాలయం.',
      visitTimingTip: 'సాయంత్రం 5:00 గంటలకు వెళ్లి అద్భుతమైన సూర్యాస్తమయం చూడండి.',
      ticketTip: 'టికెట్ 60,000 ఇండోనేషియన్ రూపాయలు (~$4 USD / ₹330 INR).',
      isMustSee: true,
    },
    {
      name: 'ఉలువతు క్లిఫ్ ఆలయం & కేచక్ నృత్యం (Uluwatu)',
      category: 'సాంస్కృతిక వారసత్వం',
      description: 'సముద్రానికి 70 మీటర్ల ఎత్తున కొండపై రామాయణ గాథల నృత్య ప్రదర్శన.',
      visitTimingTip: 'సాయంత్రం 5:30 సమయానికి కేచక్ డ్యాన్స్ మొదలవుతుంది.',
      ticketTip: 'ఆలయం ప్రవేశం + డ్యాన్స్ టికెట్ సుమారు $10 USD (₹840 INR).',
      isMustSee: true,
    },
    {
      name: 'తెగల్లలాంగ్ వరి మెట్ల లోయ (Tegalalang)',
      category: 'ప్రకృతి దృశ్యం',
      description: 'పచ్చటి కొండలపై మెట్ల రూపంలో సాగు చేసే ప్రపంచ ప్రసిద్ధ వరి పొలాలు.',
      visitTimingTip: 'ఉదయం 8:30 నుండి 10:00 వరకు ఎండ తక్కువగా ఉంటుంది.',
      ticketTip: 'ప్రవేశ రుసుము నామమాత్రం ($2 USD / ₹170 INR).',
      isMustSee: true,
    },
  ],
  packingChecklist: [
    {
      category: 'ముఖ్యమైన పత్రాలు & డబ్బు',
      items: [
        'పాస్‌పోర్ట్ (కనీసం 6 నెలల వ్యాలిడిటీ ఉండాలి)',
        'రిటర్న్ విమాన టికెట్లు మరియు హోటల్ వోచర్లు ప్రింట్ కాపీలు',
        'అంతర్జాతీయ క్రెడిట్/డెబిట్ కార్డు (ఇంటర్నేషనల్ యూసేజ్ ఆన్ చేసి ఉండాలి)',
        'వీసా ఆన్ అరైవల్ కోసం $35 USD లేదా ₹3,000 నగదు',
      ],
    },
    {
      category: 'దుస్తులు & పాదరక్షలు',
      items: [
        'తేలికపాటి కాటన్ దుస్తులు మరియు సమ్మర్ వేర్',
        'ఆలయ దర్శనాల కోసం మోకాళ్ళ కిందకు ఉండే గౌరవప్రదమైన దుస్తులు',
        'సౌకర్యవంతమైన నడక చెప్పులు / స్లిప్పర్లు',
        'ఈత దుస్తులు (Swimwear) పూల్ & బీచ్ కోసం',
      ],
    },
    {
      category: 'ఎలక్ట్రానిక్స్ & గాడ్జెట్లు',
      items: [
        'మొబైల్ ఫోన్ ఛార్జర్ మరియు 20,000 mAh పవర్ బ్యాంక్',
        'యూరోపియన్ టైప్ సి (Type C) టూ-పిన్ అడాప్టర్ (ఇండియన్ ప్లగ్గులు సరిపోతాయి)',
        'ఫోటోల కోసం కెమెరా లేదా స్మార్ట్‌ఫోన్',
      ],
    },
    {
      category: 'ఆరోగ్యం & చర్మ రక్షణ',
      items: [
        'సన్‌స్క్రీన్ లోషన్ (SPF 50+) ఎండ నుండి రక్షణ కోసం',
        'దోమల నివారణ క్రీమ్ (Odomos)',
        'రోజువారీ మందులు మరియు పారాసిటమాల్ మాత్రలు',
      ],
    },
  ],
  safetyTips: {
    overallAssessment: 'బాలి పర్యాటకులకు అత్యంత సురక్షితమైన ప్రదేశం. స్థానిక ప్రజలు దైవభక్తి కలిగినవారు, వినయంగా ఉంటారు.',
    safeNeighborhoods: ['ఉబుద్ (Ubud)', 'నుసా దువా (Nusa Dua)', 'సనూర్ (Sanur)', 'సెమిన్యాక్ (Seminyak)'],
    areasToWatch: [
      'కుటా రాత్రిపూట క్లబ్ రోడ్లు: అర్ధరాత్రి వేళల్లో పర్సులు, బ్యాగులు జాగ్రత్తగా చూసుకోవాలి.',
      'మనీ ఎక్స్ఛేంజ్ చిన్న సందులు: నంబర్ బోర్డులు పెట్టి మోసం చేసే చిన్న బంకుల వద్ద డబ్బులు మార్చకండి.',
    ],
    precautionsAndScams: [
      'ఉలువతు కొండపై కోతుల పట్ల అప్రమత్తంగా ఉండండి; కళ్లజోళ్ళు, చేతి బ్యాగులను లాక్కోకుండా జాగ్రత్త వహించండి.',
      'ట్యాక్సీ ఎక్కేటప్పుడు మీటర్ ఆన్ చేయమని చెప్పండి లేదా గ్రాబ్ (Grab) యాప్ వాడండి.',
    ],
    emergencyContacts: {
      police: '110',
      ambulance: '118 (వైద్య అత్యవసర సహాయం)',
      general: 'ఇండియన్ ఎంబసీ బాలి (భారత కాన్సులేట్ డెన్‌పసార్): +62 361 259 500',
    },
    culturalEtiquette: [
      'ఆలయాల వద్ద నేలపై ఉంచిన చిన్న పూల పళ్ళాలను (Canang Sari) తొక్కకూడదు; వాటిని గౌరవంగా దాటండి.',
      'ఎవరి తలనూ తాకకూడదు (బాలి సంప్రదాయంలో తల పరమ పవిత్రమైనది).',
      'ఎవరికైనా వస్తువులు ఇచ్చేటప్పుడు కుడిచేతిని మాత్రమే ఉపయోగించండి.',
    ],
  },
  estimatedTotalCost: {
    currency: 'USD ($) & INR (₹)',
    lowEstimate: 750,
    highEstimate: 1100,
    dailyAverage: 170,
    inrLowEstimate: 63000,
    inrHighEstimate: 93000,
    inrDailyAverage: 14500,
    perPersonSummary: '5 రోజుల బాలి యాత్రకు ఇద్దరు వ్యక్తులకు ప్రైవేట్ పూల్ విల్లా, కారు డ్రైవర్, ఇండియన్ భోజనం మరియు దర్శనాలతో కలిపి సుమారు $750 - $1,100 USD (₹63,000 - ₹93,000 INR) మాత్రమే అవుతుంది (విమాన టికెట్లు మినహాయించి). రోజువారీ సగటు ఖర్చు ₹14,500 INR.',
  },
  importantTravelTips: {
    eSimAndConnectivity: 'ఇండియాలోనే ఎయిర్‌టెల్/జియో ఇంటర్నేషనల్ రోమింగ్ లేదా ఎయిర్‌లో (Airalo) eSIM యాక్టివేట్ చేసుకోండి. లేదా బాలి ఎయిర్‌పోర్ట్‌లో టెల్కామ్‌సెల్ సిమ్ తీసుకోండి.',
    paymentsAndCash: 'చాలా హోటళ్లు, మాల్స్‌లో భారతీయ క్రెడిట్ కార్డులు సులభంగా పనిచేస్తాయి. చిన్న దుకాణాలు, ఆలయాల వద్ద చెల్లించడానికి కొంత స్థానిక కరెన్సీ (రూపియా) నగదుగా ఉంచుకోండి.',
    tippingNorms: 'టిప్పింగ్ తప్పనిసరి కాదు, కానీ డ్రైవర్‌కు రోజుకు 50,000 - 100,000 రూపియాలు (₹250 - ₹500 INR) ఇస్తే సంతోషిస్తారు.',
    powerPlugType: 'టైప్ సి & ఎఫ్ (Type C/F) - మన భారతీయ రెండు పిన్నుల మొబైల్ ఛార్జర్లు డైరెక్ట్‌గా సరిపోతాయి!',
    advanceBookingsRequired: [
      'బాలి స్వింగ్ ఫోటో టికెట్ (1 వారం ముందు)',
      'ఉలువతు కేచక్ డ్యాన్స్ టికెట్లు (ఆన్‌లైన్‌లో Klook ద్వారా ముందుగానే తీసుకోండి)',
    ],
    essentialLocalPhrases: [
      { phrase: 'ఓం స్వస్త్యస్తు (Om Swastyastu)', meaning: 'నమస్కారం (Greeting in Bali)', pronunciation: 'ఓం స్వ-స్త్య-స్తు' },
      { phrase: 'సుక్సుమ (Suksma)', meaning: 'ధన్యవాదాలు (Thank you)', pronunciation: 'సుక్-సు-మ' },
      { phrase: 'సమ-సమ (Sama-sama)', meaning: 'పర్వాలేదు / వెల్‌కమ్ (You are welcome)', pronunciation: 'సమ-సమ' },
      { phrase: 'బెరాప హర్గాన్య? (Berapa harganya?)', meaning: 'దీని ధర ఎంత? (How much is this?)', pronunciation: 'బె-రా-ప హర్-గా-న్య' },
    ],
    keyRule: 'ప్రైవేట్ కారు డ్రైవర్‌తో స్నేహపూర్వకంగా ఉండండి, పచ్చని ప్రకృతిని ఆస్వాదించండి, ఆలయ సంప్రదాయాలను గౌరవించండి!',
  },
  formattedMarkdown: `# 1. యాత్ర ముఖ్యాంశాలు (Trip Overview)
* **గమ్యస్థానం:** బాలి, ఇండోనేషియా (Bali, Indonesia)
* **వ్యవధి:** 5 రోజులు / 4 రాత్రులు
* **శైలి:** విశ్రాంతి, ప్రకృతి & సాంస్కృతిక యాత్ర
* **బడ్జెట్:** $750 - $1,100 USD (₹63,000 - ₹93,000 INR)
* **ట్యాగ్‌లైన్:** పురాతన దేవాలయాలు, పచ్చని వరి పొలాలు మరియు నీలి సముద్ర తీరాల కలయిక
* **సారాంశం:** ఇండోనేషియాలోని బాలి ద్వీపం అద్భుతమైన హిందూ సంస్కృతికి, సహజ సౌందర్యానికి ప్రసిద్ధి. ఉబుద్ పచ్చటి అడవులు, ఉలువతు కొండపై సూర్యాస్తమయం మరియు తనాహ్ లోట్ సముద్ర ఆలయాలను దర్శించుకునేందుకు ఈ 5 రోజుల ప్లాన్ చాలా సులభంగా రూపొందించబడింది.
* **ముఖ్య ఆకర్షణలు:**
  * ఉబుద్ తెగల్లలాంగ్ వరి మెట్ల పొలాలు & ప్రసిద్ధ బాలి స్వింగ్ (Bali Swing)
  * సముద్రపు రాతి బండపై వెలసిన చారిత్రాత్మక తనాహ్ లోట్ ఆలయ దర్శనం
  * ఉలువతు కొండపై సూర్యాస్తమయం & సాంప్రదాయ కేచక్ అగ్ని నృత్యం (Kecak Dance)
  * భారతీయ మరియు స్థానిక స్వచ్ఛమైన శాకాహార వంటకాల ఆనందం

---

# 2. సందర్శనకు అనువైన సమయం (Best Time to Visit)
* **అనువైన కాలం:** ఏప్రిల్ నుండి అక్టోబర్ వరకు (పొడి వాతావరణం, వర్షాలు తక్కువ).
* **వాతావరణం:** పగటి ఉష్ణోగ్రత 28°C నుండి 30°C ఉంటుంది. నిర్మలమైన ఆకాశం.
* **చిట్కా:** జూలై, ఆగస్టు నెలల్లో రద్దీ ఎక్కువ. ఏప్రిల్, మే లేదా సెప్టెంబర్ నెలలు చాలా ప్రశాంతంగా ఉంటాయి.

---

# 3. రోజువారీ ప్రణాళిక (Day-wise Itinerary)

### 1వ రోజు: బాలి ఆగమనం, ఉబుద్ ప్రయాణం & ప్రశాంత సాయంత్రం
* **ఉదయం (10:00 AM):** డెన్‌పసార్ ఎయిర్‌పోర్ట్ నుండి ఉబుద్ ప్రైవేట్ పూల్ విల్లాకు చేరుకోవడం.
* **మధ్యాహ్నం (02:30 PM):** ఉబుద్ రాయల్ ప్యాలెస్ & సరస్వతి వాటర్ టెంపుల్ దర్శనం.
* **సాయంత్రం (06:30 PM):** ఉబుద్ ఆర్ట్ మార్కెట్ సందర్శన & సాంప్రదాయ భారతీయ డిన్నర్.
* **భోజనం:** గణేశ లేదా క్వీన్స్ తందూరి రెస్టారెంట్‌లో శాకాహార భోజనం.
* **అంచనా ఖర్చు:** $40 - $55 USD (₹3,400 - ₹4,600 INR).

### 2వ రోజు: తెగల్లలాంగ్ వరి మెట్లు, బాలి స్వింగ్ & కాఫీ తోటలు
* **ఉదయం (08:30 AM):** తెగల్లలాంగ్ రైస్ టెర్రస్ & బాలి స్వింగ్ ఫోటోషూట్.
* **మధ్యాహ్నం (01:30 PM):** తిర్తా ఎంపుల్ పవిత్ర జల ఆలయ దర్శనం.
* **సాయంత్రం (06:00 PM):** కింతామణి వ్యూ పాయింట్ వద్ద లువాక్ కాఫీ & హెర్బల్ టీ తోటల సందర్శన.
* **అంచనా ఖర్చు:** $50 - $70 USD (₹4,200 - ₹5,900 INR).

### 3వ రోజు: సముద్ర తీర విహారం, తనాహ్ లోట్ ఆలయం & సెమిన్యాక్ బీచ్
* **ఉదయం (09:00 AM):** సెమిన్యాక్ బీచ్ ఫ్రంట్ రిసార్ట్ కు ప్రయాణం & చెక్-ఇన్.
* **మధ్యాహ్నం (03:00 PM):** సముద్రపు రాతి బండపై వెలసిన తనాహ్ లోట్ ఆలయ దర్శనం.
* **సాయంత్రం (07:30 PM):** సముద్ర తీరంలో కొవ్వొత్తుల వెలుగులో లైవ్ మ్యూజిక్ డిన్నర్.
* **అంచనా ఖర్చు:** $60 - $80 USD (₹5,000 - ₹6,700 INR).

### 4వ రోజు: ఉలువతు క్లిఫ్ ఆలయం, కేచక్ అగ్ని నృత్యం & జింబారన్ తీరం
* **ఉదయం (10:00 AM):** పండవా వైట్ శాండ్ బీచ్‌లో సేదతీరడం.
* **మధ్యాహ్నం (03:30 PM):** 70 మీటర్ల ఎత్తైన కొండ అంచున ఉన్న ఉలువతు క్లిఫ్ టెంపుల్.
* **సాయంత్రం (06:00 PM):** సూర్యాస్తమయం వేళ రామాయణ కేచక్ అగ్ని నృత్య ప్రదర్శన.
* **అంచనా ఖర్చు:** $65 - $90 USD (₹5,500 - ₹7,600 INR).

### 5వ రోజు: కృష్ణా హస్తకళల బజార్ & తిరుగు ప్రయాణం
* **ఉదయం (09:30 AM):** కృష్ణా ఒలేహ్-ఒలేహ్ సూపర్ మార్కెట్లో చవకైన సావనీర్ల షాపింగ్.
* **మధ్యాహ్నం (01:00 PM):** ఎయిర్‌పోర్ట్ డ్రాప్ & భారత దేశానికి తిరుగు ప్రయాణం.
* **అంచనా ఖర్చు:** $35 - $50 USD (₹3,000 - ₹4,200 INR).

---

# 4. హోటల్ సిఫార్సులు (Hotels in $ & ₹)
* **కామాండలు ఉబుద్ (Kamandalu Ubud Pool Villa):** $180 - $260 / రాత్రి (~₹15,000 - ₹22,000 INR). ప్రైవేట్ పూల్, లోయల వ్యూ, ఫ్లోటింగ్ బ్రేక్‌ఫాస్ట్.
* **హాలిడే ఇన్ రిసార్ట్ బాలి బరునా (Holiday Inn Baruna):** $110 - $160 / రాత్రి (~₹9,200 - ₹13,500 INR). బీచ్ ముంగిట ఉండే అద్భుతమైన ఫ్యామిలీ రిసార్ట్.

---

# 5. ఆహార సిఫార్సులు (Food in $ & ₹)
* **నాసి గోరెంగ్ వెజ్:** ఇండోనేషియన్ వెజ్ ఫ్రైడ్ రైస్ ($3-$5 USD / ₹250-₹420 INR).
* **గడో-గడో:** పీనట్ సాస్ కూరగాయల సలాడ్ ($2-$4 USD / ₹170-₹340 INR).
* **భారతీయ భోజనం:** క్వీన్స్ తందూరి, స్పైస్ మంత్ర, శివ శక్తి రెస్టారెంట్లలో స్వచ్ఛమైన శాకాహార భోజనం లభిస్తుంది.

---

# 6. రవాణా మార్గదర్శి (Transportation)
* **ప్రైవేట్ డ్రైవర్ & కారు:** బాలిలో అత్యుత్తమ ప్రయాణ సాధనం ($35-$45 USD / ₹3,000-₹3,800 INR రోజుకు).
* **యాప్స్:** గ్రాబ్ (Grab) మరియు గోజెక్ (Gojek) డౌన్‌లోడ్ చేసుకోండి.

---

# 7. బడ్జెట్ విశ్లేషణ (Budget Breakdown in $ & ₹)
* **మొత్తం అంచనా ఖర్చు (ఇద్దరికి):** $750 - $1,100 USD (₹63,000 - ₹93,000 INR)
* వసతి & పూల్ విల్లా: $450 - $650 USD (₹38,000 - ₹55,000 INR) - 55%
* ఆహారం & రెస్టారెంట్లు: $160 - $220 USD (₹13,500 - ₹18,500 INR) - 20%
* ప్రైవేట్ కారు & డ్రైవర్: $120 - $160 USD (₹10,000 - ₹13,500 INR) - 15%
* దర్శనాలు & ఎంట్రీ టికెట్లు: $60 - $90 USD (₹5,000 - ₹7,500 INR) - 10%

---

# 8. చూడదగిన ప్రదేశాలు (Local Attractions)
* **తనాహ్ లోట్ (Tanah Lot):** సముద్రపు రాతి బండపై వెలసిన ఆలయం. సూర్యాస్తమయం చాలా బాగుంటుంది.
* **ఉలువతు క్లిఫ్ ఆలయం (Uluwatu):** కొండ శిఖర దృశ్యం మరియు కేచక్ అగ్ని నృత్యం.
* **తెగల్లలాంగ్ (Tegalalang):** ఫోటోగ్రఫీ మరియు బాలి స్వింగ్ కోసం ప్రసిద్ధి.

---

# 9. ప్యాకింగ్ లిస్ట్ (Packing Checklist)
* పాస్‌పోర్ట్ (6 నెలల వ్యాలిడిటీ), రిటర్న్ టికెట్లు, హోటల్ వోచర్లు.
* సరోంగ్ లేదా ఆలయ దర్శనాలకు అనువైన సాంప్రదాయ దుస్తులు.
* సన్‌స్క్రీన్ లోషన్ (SPF 50+), పవర్ బ్యాంక్, ఇండియన్ 2-పిన్ మొబైల్ ఛార్జర్.

---

# 10. భద్రతా చిట్కాలు (Safety Tips)
* బాలి చాలా సురక్షితం. స్థానిక ప్రజలు ఎంతో స్నేహపూర్వకంగా ఉంటారు.
* ఎమర్జెన్సీ నంబర్లు: పోలీస్: 110, అంబులెన్స్: 118, భారత రాయబార కార్యాలయం: +62 361 259 500.
* ఆలయాల వద్ద పూల పళ్ళాలను (కనాంగ్ సారి) తొక్కకండి.

---

# 11. అంచనా మొత్తం ఖర్చు (Estimated Total Cost)
* **మొత్తం ఖర్చు:** $750 - $1,100 USD (₹63,000 - ₹93,000 INR) ఇద్దరికి 5 రోజులకు.
* **రోజువారీ సగటు:** సుమారు ₹14,500 INR / రోజుకు.

---

# 12. ముఖ్యమైన ప్రయాణ సూచనలు (Important Travel Tips)
* **సిమ్ కార్డ్:** ఎయిర్‌పోర్ట్ వద్ద టెల్కామ్‌సెల్ సిమ్ లేదా ఎయిర్‌లో eSIM తీసుకోండి.
* **కరెన్సీ:** అధికారిక మనీ ఎక్స్ఛేంజ్ కేంద్రాల వద్దే కరెన్సీ మార్చండి.
* **ముఖ్యమైన పదాలు:** *ఓం స్వస్త్యస్తు* (నమస్కారం), *సుక్సుమ* (ధన్యవాదాలు).
* **గోల్డెన్ రూల్:** పచ్చని ప్రకృతిని ఆస్వాదించండి, స్థానిక సంప్రదాయాలను గౌరవించండి!`,
};

export const POPULAR_DESTINATIONS = [
  {
    name: 'బాలి, ఇండోనేషియా (Bali)',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    tagline: 'ఆలయాలు, పచ్చని వరి పొలాలు & బీచ్ విల్లాలు',
    defaultDays: 5,
    defaultStyle: 'Relaxed & Leisure',
    defaultBudget: 'Budget ($$ / ₹₹)',
    teluguSample: true,
  },
  {
    name: 'Tokyo, Japan',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    tagline: 'Neon skylines, ancient temples & culinary mastery',
    defaultDays: 7,
    defaultStyle: 'Cultural & Heritage',
    defaultBudget: 'Moderate ($$$ / ₹₹₹)',
  },
  {
    name: 'Dubai, UAE (దుబాయ్)',
    country: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    tagline: 'బుర్జ్ ఖలీఫా, డెసర్ట్ సఫారీ & గోల్డ్ సూక్',
    defaultDays: 5,
    defaultStyle: 'Family-friendly',
    defaultBudget: 'Moderate ($$$ / ₹₹₹)',
  },
  {
    name: 'Amalfi Coast, Italy',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    tagline: 'Cliffside pastel villas, lemon groves & Mediterranean azure',
    defaultDays: 5,
    defaultStyle: 'Romantic Getaway',
    defaultBudget: 'Luxury ($$$$ / ₹₹₹₹)',
  },
  {
    name: 'Paris, France',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    tagline: 'Haute cuisine, world-class art & romantic Seine strolls',
    defaultDays: 6,
    defaultStyle: 'Foodie & Culinary',
    defaultBudget: 'Moderate ($$$ / ₹₹₹)',
  },
  {
    name: 'Swiss Alps, Switzerland',
    country: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    tagline: 'Dramatic peaks, cogwheel trains & alpine serenity',
    defaultDays: 6,
    defaultStyle: 'Adventure & Outdoor',
    defaultBudget: 'Luxury ($$$$ / ₹₹₹₹)',
  },
];
