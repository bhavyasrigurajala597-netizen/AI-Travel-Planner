import { GoogleGenAI } from '@google/genai';
import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

const apiKey = process.env.GEMINI_API_KEY || '';

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

app.post('/api/plan-trip', async (req: Request, res: Response) => {
  try {
    const {
      destination,
      days = 5,
      budget = 'Moderate ($$$)',
      travel_style = 'Cultural & Heritage',
      hotel_type = 'Boutique Hotel',
      transport = 'Public Transit',
      weather = 'Mild Spring',
      interests = [],
      language = 'English',
      notes = '',
    } = req.body;

    if (!destination || typeof destination !== 'string') {
      res.status(400).json({ error: 'Destination is required.' });
      return;
    }

    const interestsString = Array.isArray(interests) && interests.length > 0
      ? interests.join(', ')
      : 'None selected';

    const isTelugu = language.toLowerCase().includes('telugu') || language.includes('తెలుగు');

    const systemPrompt = `You are YatraGenie, an elite, world-renowned travel specialist and guidebook author who makes travel easy, accessible, and understandable for everyone—first-timers, families, senior citizens, and seasoned globe-trotters alike.
Your task is to craft an exceptional, hyper-detailed, highly practical travel plan.
You must return a strictly valid JSON object adhering to the schema specified below.

Crucial requirements:
1. CURRENCY IN BOTH USD ($) AND INDIAN RUPEES (INR ₹):
   - In EVERY cost, price range, meal budget, and total estimate, you MUST provide BOTH US Dollars and Indian Rupees (using conversion rate 1 USD ≈ 84.5 INR).
   - Format example: "$180 - $250 / night (~₹15,000 - ₹21,000 INR)" or "$65 - $85 USD (₹5,500 - ₹7,200 INR)".
   - For total estimated range: "$1,800 - $2,500 USD (₹1,50,000 - ₹2,10,000 INR)".
   - Populate numerical fields for both USD and INR in "estimatedTotalCost" (lowEstimate, highEstimate, dailyAverage, inrLowEstimate, inrHighEstimate, inrDailyAverage).

2. LANGUAGE:
   ${isTelugu ? '- Output Language is TELUGU (తెలుగు). Generate ALL descriptions, headings, day plans, tips, food descriptions, and markdown in natural, easy-to-understand Telugu script. Keep foreign place names recognizable by mentioning English alongside (e.g. సెన్సో-జి ఆలయం (Sensō-ji Temple)).' : `- Output Language: All text content (descriptions, tips, headings, markdown) must be in "${language}".`}

3. EASY FOR EVERYONE (Beginner & Family Friendly):
   - Provide a "beginnerSummary" that evaluates walking effort (easy/moderate/high stairs), vegetarian/Indian food availability, family/kids/elder suitability, and 3 plain-English/Telugu Golden Rules.
   - Day-wise itinerary from Day 1 to Day ${days} MUST have morning, afternoon, and evening activities with specific times, locations, clear descriptions, and simple insider tips.

4. FORMATTED MARKDOWN:
   - Provide "formattedMarkdown" containing the complete travel plan formatted strictly with headings (# 1. Trip Overview, # 2. Best Time to Visit, etc.) and bullet points (* / -), with dual USD ($) & INR (₹) prices throughout.

5. Return ONLY clean, valid JSON with no markdown code blocks outside of the JSON object.`;

    const userPrompt = `You are YatraGenie, the expert AI Travel Planner.

Destination: ${destination}
Trip Duration: ${days} days
Budget: ${budget}
Travel Style: ${travel_style}
Hotel Preference: ${hotel_type}
Transportation: ${transport}
Preferred Weather: ${weather}
Interests: ${interestsString}
Language: ${language}
${notes ? `Additional Traveler Preferences: ${notes}` : ''}

Generate all 12 modules with costs in BOTH USD ($) and INR (₹):
1. Trip Overview
2. Best Time to Visit
3. Day-wise Itinerary (Days 1 to ${days})
4. Hotel Recommendation
5. Food Recommendation (including pure vegetarian / Indian food availability)
6. Transportation Guide
7. Budget Breakdown (both USD $ and INR ₹)
8. Local Attractions
9. Packing Checklist
10. Safety Tips
11. Estimated Total Cost (both USD $ and INR ₹)
12. Important Travel Tips

Format the response using headings and bullet points.

Return your response as a valid JSON object with the following schema:
{
  "tripOverview": {
    "title": "string",
    "tagline": "string",
    "summary": "string",
    "vibe": "string",
    "pacing": "string",
    "keyHighlights": ["string"]
  },
  "beginnerSummary": {
    "walkingEffort": "Low / Gentle / Flat OR Moderate OR High with stairs",
    "vegetarianFriendly": "High / Abundant OR Moderate OR Requires advance planning",
    "familyAndSeniorFriendly": "string evaluation for families and elderly travelers",
    "threeMainRulesForEveryone": ["rule 1", "rule 2", "rule 3"]
  },
  "bestTimeToVisit": {
    "bestMonths": "string",
    "seasonalBreakdown": "string",
    "weatherExpectations": "string",
    "peakVsOffPeak": "string"
  },
  "dayWiseItinerary": [
    {
      "day": 1,
      "title": "string",
      "morning": { "time": "string", "activity": "string", "location": "string", "description": "string", "insiderTip": "string" },
      "afternoon": { "time": "string", "activity": "string", "location": "string", "description": "string", "insiderTip": "string" },
      "evening": { "time": "string", "activity": "string", "location": "string", "description": "string", "insiderTip": "string" },
      "meals": { "breakfast": "string", "lunch": "string", "dinner": "string" },
      "estimatedCost": "string with both USD $ and INR ₹ (e.g. $60 - $80 USD / ₹5,000 - ₹6,800 INR)"
    }
  ],
  "hotelRecommendations": [
    {
      "name": "string",
      "type": "string",
      "neighborhood": "string",
      "priceRange": "string with USD and INR (e.g. $180 - $250 / night / ₹15,000 - ₹21,000)",
      "description": "string",
      "highlights": ["string"],
      "bookingAdvice": "string"
    }
  ],
  "foodRecommendations": {
    "mustTryDishes": [
      { "dish": "string", "description": "string", "bestSpot": "string", "priceLevel": "string with USD and INR" }
    ],
    "recommendedRestaurants": [
      { "name": "string", "cuisine": "string", "vibe": "string", "signatureDish": "string", "priceLevel": "string with USD and INR" }
    ],
    "streetFoodAreas": [
      { "area": "string", "specialty": "string", "bestTimeToVisit": "string" }
    ],
    "dietaryTips": "string (include pure veg, vegan, halal, and Indian food options)"
  },
  "transportationGuide": {
    "arrivalTransit": "string",
    "localTransitSystems": "string",
    "recommendedPasses": "string",
    "taxisAndRideHailing": "string",
    "walkabilityAdvice": "string",
    "navigationApps": ["string"]
  },
  "budgetBreakdown": {
    "currency": "USD ($) & INR (₹)",
    "totalEstimatedRange": "string with both USD and INR (e.g. $1,800 - $2,500 USD / ₹1,50,000 - ₹2,10,000 INR)",
    "categories": [
      { "category": "string", "estimatedCost": "string with USD and INR", "percentage": 40, "description": "string" }
    ],
    "moneySavingTips": ["string"]
  },
  "localAttractions": [
    { "name": "string", "category": "string", "description": "string", "visitTimingTip": "string", "ticketTip": "string", "isMustSee": true }
  ],
  "packingChecklist": [
    { "category": "string", "items": ["string"] }
  ],
  "safetyTips": {
    "overallAssessment": "string",
    "safeNeighborhoods": ["string"],
    "precautionsAndScams": ["string"],
    "emergencyContacts": { "police": "string", "ambulance": "string", "general": "string" },
    "culturalEtiquette": ["string"]
  },
  "estimatedTotalCost": {
    "currency": "USD & INR",
    "lowEstimate": 1500,
    "highEstimate": 2500,
    "dailyAverage": 300,
    "inrLowEstimate": 125000,
    "inrHighEstimate": 210000,
    "inrDailyAverage": 25000,
    "perPersonSummary": "string with both USD and INR explained clearly"
  },
  "importantTravelTips": {
    "eSimAndConnectivity": "string",
    "paymentsAndCash": "string",
    "tippingNorms": "string",
    "powerPlugType": "string",
    "advanceBookingsRequired": ["string"],
    "essentialLocalPhrases": [
      { "phrase": "string", "meaning": "string", "pronunciation": "string" }
    ],
    "keyRule": "string"
  },
  "formattedMarkdown": "string (the full complete response formatted using # headings and * bullet points answering all 12 sections with prices in both USD $ and INR ₹)"
}`;

    const modelsToTry = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    let text = '';
    let lastError: any = null;

    for (const modelName of modelsToTry) {
      // Try each model with up to 2 attempts if transient 503 occurs
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          console.log(`Requesting itinerary generation with ${modelName} (attempt ${attempt})...`);
          const response = await ai.models.generateContent({
            model: modelName,
            contents: userPrompt,
            config: {
              systemInstruction: systemPrompt,
              responseMimeType: 'application/json',
              temperature: 0.7,
            },
          });
          text = response.text || '';
          if (text) {
            console.log(`Successfully generated itinerary with ${modelName}`);
            break;
          }
        } catch (err: any) {
          lastError = err;
          const errMsg = err?.message || String(err);
          console.warn(`Attempt ${attempt} with ${modelName} failed:`, errMsg);
          if (errMsg.includes('503') || errMsg.includes('high demand') || errMsg.includes('UNAVAILABLE')) {
            // Wait 1.5 seconds before retrying
            await new Promise((resolve) => setTimeout(resolve, 1500));
          } else {
            // Non-transient error, move to next model
            break;
          }
        }
      }
      if (text) break;
    }

    if (!text) {
      throw lastError || new Error('Empty response received from AI model.');
    }

    // Clean any accidental markdown codeblock wrapper
    let cleanJson = text.trim();
    if (cleanJson.startsWith('```json')) {
      cleanJson = cleanJson.replace(/^```json\s*/i, '').replace(/```\s*$/i, '');
    } else if (cleanJson.startsWith('```')) {
      cleanJson = cleanJson.replace(/^```\s*/, '').replace(/```\s*$/i, '');
    }

    const parsedPlan = JSON.parse(cleanJson);

    // Attach unique ID and timestamp
    const fullPlan = {
      id: 'plan-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      createdAt: new Date().toISOString(),
      destination,
      inputs: {
        destination,
        days: Number(days),
        budget,
        travel_style,
        hotel_type,
        transport,
        weather,
        interests: Array.isArray(interests) ? interests : [],
        language,
        notes,
      },
      ...parsedPlan,
    };

    res.json({ success: true, plan: fullPlan });
  } catch (error: any) {
    console.error('Error generating travel plan:', error);
    res.status(500).json({
      error: error?.message || 'Failed to generate travel plan.',
    });
  }
});

// Configure Vite or Static Files
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
