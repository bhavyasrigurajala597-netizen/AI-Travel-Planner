// Weather service for fetching live 7-day meteorological forecast via Open-Meteo

export interface DailyForecast {
  date: string;
  dayName: string;
  dayNameTe: string;
  weatherCode: number;
  condition: string;
  conditionTe: string;
  iconType: 'sun' | 'cloud-sun' | 'cloud' | 'rain' | 'thunder' | 'snow' | 'fog';
  tempMaxC: number;
  tempMinC: number;
  tempMaxF: number;
  tempMinF: number;
  precipitationChance: number;
  windSpeedKmH: number;
  uvIndex: number;
}

export interface WeatherData {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  currentTempC: number;
  currentTempF: number;
  currentCondition: string;
  currentConditionTe: string;
  iconType: 'sun' | 'cloud-sun' | 'cloud' | 'rain' | 'thunder' | 'snow' | 'fog';
  forecast: DailyForecast[];
  packingTip: string;
  packingTipTe: string;
  lastUpdated: string;
}

const TELUGU_CITY_MAP: Record<string, string> = {
  'బాలి': 'Bali',
  'తిరుపతి': 'Tirupati',
  'పారిస్': 'Paris',
  'దుబాయ్': 'Dubai',
  'గోవా': 'Goa',
  'లండన్': 'London',
  'కాశీ': 'Varanasi',
  'వారణాసి': 'Varanasi',
  'టోక్యో': 'Tokyo',
  'సింగపూర్': 'Singapore',
  'రోమ్': 'Rome',
  'న్యూయార్క్': 'New York',
  'స్విస్': 'Zurich',
  'స్విట్జర్లాండ్': 'Interlaken',
  'హైదరాబాద్': 'Hyderabad',
  'బెంగళూరు': 'Bengaluru',
  'ఢిల్లీ': 'Delhi',
};

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAY_NAMES_TE = ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'];

export function cleanDestinationForGeo(dest: string): string {
  // Check known Telugu place names
  for (const [te, en] of Object.entries(TELUGU_CITY_MAP)) {
    if (dest.includes(te)) return en;
  }

  // Extract from parentheses e.g. "బాలి (Bali, Indonesia)"
  const parenMatch = dest.match(/\(([^)]+)\)/);
  if (parenMatch) {
    const inside = parenMatch[1].split(',')[0].trim();
    if (/[A-Za-z]/.test(inside)) return inside;
  }

  // Extract first English word of 3+ letters
  const englishWords = dest.match(/[A-Za-z]{3,}/g);
  if (englishWords && englishWords.length > 0) {
    return englishWords[0];
  }

  return dest.split(',')[0].trim();
}

function getWeatherCondition(code: number): {
  condition: string;
  conditionTe: string;
  iconType: 'sun' | 'cloud-sun' | 'cloud' | 'rain' | 'thunder' | 'snow' | 'fog';
} {
  switch (code) {
    case 0:
      return { condition: 'Clear Sky / Sunny', conditionTe: 'నిర్మలమైన ఎండ / ఆహ్లాదకరం', iconType: 'sun' };
    case 1:
      return { condition: 'Mainly Sunny', conditionTe: 'ఎక్కువగా ఎండ', iconType: 'sun' };
    case 2:
      return { condition: 'Partly Cloudy', conditionTe: 'పాక్షికంగా మేఘావృతం', iconType: 'cloud-sun' };
    case 3:
      return { condition: 'Overcast', conditionTe: 'పూర్తిగా మేఘాలు', iconType: 'cloud' };
    case 45:
    case 48:
      return { condition: 'Foggy / Mist', conditionTe: 'పొగమంచు', iconType: 'fog' };
    case 51:
    case 53:
    case 55:
      return { condition: 'Light Drizzle', conditionTe: 'తేలికపాటి చినుకులు', iconType: 'rain' };
    case 61:
    case 63:
    case 65:
      return { condition: 'Rain Showers', conditionTe: 'వర్షం / జల్లులు', iconType: 'rain' };
    case 71:
    case 73:
    case 75:
    case 77:
      return { condition: 'Snowfall', conditionTe: 'మంచు కురిసే అవకాశం', iconType: 'snow' };
    case 80:
    case 81:
    case 82:
      return { condition: 'Passing Showers', conditionTe: 'క్షణిక వర్షపు జల్లులు', iconType: 'rain' };
    case 95:
    case 96:
    case 99:
      return { condition: 'Thunderstorm', conditionTe: 'ఉరుములు & వర్షం', iconType: 'thunder' };
    default:
      return { condition: 'Mild & Fair', conditionTe: 'ఆహ్లాదకరమైన వాతావరణం', iconType: 'cloud-sun' };
  }
}

export function cToF(c: number): number {
  return Math.round((c * 9) / 5 + 32);
}

export async function fetch7DayWeather(destination: string): Promise<WeatherData> {
  const query = cleanDestinationForGeo(destination);

  try {
    // 1. Geocode city name
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      query
    )}&count=1&language=en&format=json`;

    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    let lat = 13.63;
    let lon = 79.42;
    let cityName = query;
    let countryName = 'Global';

    if (geoData.results && geoData.results.length > 0) {
      const top = geoData.results[0];
      lat = top.latitude;
      lon = top.longitude;
      cityName = top.name;
      countryName = top.country || '';
    }

    // 2. Fetch 7-day forecast
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max,uv_index_max&current_weather=true&timezone=auto`;

    const weatherRes = await fetch(weatherUrl);
    const weatherData = await weatherRes.json();

    if (!weatherData.daily || !weatherData.daily.time) {
      throw new Error('No forecast data returned');
    }

    const times: string[] = weatherData.daily.time;
    const codes: number[] = weatherData.daily.weathercode;
    const maxTemps: number[] = weatherData.daily.temperature_2m_max;
    const minTemps: number[] = weatherData.daily.temperature_2m_min;
    const rainChances: number[] = weatherData.daily.precipitation_probability_max || [];
    const winds: number[] = weatherData.daily.windspeed_10m_max || [];
    const uvs: number[] = weatherData.daily.uv_index_max || [];

    const forecast: DailyForecast[] = times.slice(0, 7).map((dateStr, idx) => {
      const dateObj = new Date(dateStr);
      const dayIdx = dateObj.getDay();
      const code = codes[idx] ?? 0;
      const meta = getWeatherCondition(code);
      const maxC = Math.round(maxTemps[idx] ?? 25);
      const minC = Math.round(minTemps[idx] ?? 18);

      return {
        date: dateStr,
        dayName: idx === 0 ? 'Today' : DAY_NAMES[dayIdx],
        dayNameTe: idx === 0 ? 'ఈ రోజు' : DAY_NAMES_TE[dayIdx],
        weatherCode: code,
        condition: meta.condition,
        conditionTe: meta.conditionTe,
        iconType: meta.iconType,
        tempMaxC: maxC,
        tempMinC: minC,
        tempMaxF: cToF(maxC),
        tempMinF: cToF(minC),
        precipitationChance: Math.round(rainChances[idx] ?? 10),
        windSpeedKmH: Math.round(winds[idx] ?? 12),
        uvIndex: Math.round(uvs[idx] ?? 5),
      };
    });

    const hasHighRain = forecast.some((d) => d.precipitationChance > 45);
    const hasHighUv = forecast.some((d) => d.uvIndex >= 7);
    const hasCoolWeather = forecast.some((d) => d.tempMinC < 14);

    let packingTip = 'Comfortable light cotton clothing and walking shoes recommended.';
    let packingTipTe = 'తేలికపాటి కాటన్ దుస్తులు మరియు నడకకు అనువైన బూట్లు అనుకూలం.';

    if (hasHighRain) {
      packingTip = 'Rain expected on some days: Pack a compact umbrella or light rain poncho.';
      packingTipTe = 'కొన్ని రోజులలో వర్ష సూచన ఉంది: కాంపాక్ట్ గొడుగు లేదా రెయిన్‌కోట్ వెంట ఉంచుకోండి.';
    } else if (hasHighUv) {
      packingTip = 'High UV / strong sunshine: Sunglasses, wide-brim hat, and SPF 50+ sunscreen essential.';
      packingTipTe = 'ఎండ తీవ్రత ఎక్కువ: సన్‌గ్లాసెస్, టోపీ మరియు సన్‌స్క్రీన్ లోషన్ తప్పనిసరి.';
    } else if (hasCoolWeather) {
      packingTip = 'Cool evenings: Pack a fleece jacket, shawl, or light windbreaker.';
      packingTipTe = 'సాయంత్రాలు చల్లగా ఉంటాయి: తేలికపాటి జాకెట్ లేదా శాలువా వెంట తీసుకెళ్లండి.';
    }

    const currentC = Math.round(weatherData.current_weather?.temperature ?? maxTemps[0] ?? 24);
    const currentCode = weatherData.current_weather?.weathercode ?? codes[0] ?? 0;
    const currentMeta = getWeatherCondition(currentCode);

    return {
      city: cityName,
      country: countryName,
      latitude: lat,
      longitude: lon,
      currentTempC: currentC,
      currentTempF: cToF(currentC),
      currentCondition: currentMeta.condition,
      currentConditionTe: currentMeta.conditionTe,
      iconType: currentMeta.iconType,
      forecast,
      packingTip,
      packingTipTe,
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  } catch (err) {
    console.warn('Weather fetch fallback triggered for:', query, err);
    return getFallbackWeatherData(query);
  }
}

// Fallback generator in case of network constraint or offline mode
function getFallbackWeatherData(query: string): WeatherData {
  const today = new Date();
  const days: DailyForecast[] = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    const dayIdx = d.getDay();
    const isRain = i % 3 === 2;
    const code = isRain ? 61 : i % 2 === 0 ? 0 : 2;
    const meta = getWeatherCondition(code);
    const maxC = 26 + (i % 3);
    const minC = 19 + (i % 2);

    days.push({
      date: d.toISOString().split('T')[0],
      dayName: i === 0 ? 'Today' : DAY_NAMES[dayIdx],
      dayNameTe: i === 0 ? 'ఈ రోజు' : DAY_NAMES_TE[dayIdx],
      weatherCode: code,
      condition: meta.condition,
      conditionTe: meta.conditionTe,
      iconType: meta.iconType,
      tempMaxC: maxC,
      tempMinC: minC,
      tempMaxF: cToF(maxC),
      tempMinF: cToF(minC),
      precipitationChance: isRain ? 65 : 15,
      windSpeedKmH: 14,
      uvIndex: 6,
    });
  }

  return {
    city: query,
    country: 'Destination',
    latitude: 0,
    longitude: 0,
    currentTempC: 25,
    currentTempF: 77,
    currentCondition: 'Pleasant & Mild',
    currentConditionTe: 'ఆహ్లాదకరమైన వాతావరణం',
    iconType: 'sun',
    forecast: days,
    packingTip: 'Light cotton attire, sunglasses, and comfortable walking shoes recommended.',
    packingTipTe: 'తేలికపాటి కాటన్ దుస్తులు, సన్‌గ్లాసెస్ మరియు నడకకు అనువైన బూట్లు మంచివి.',
    lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}
