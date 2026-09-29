// Currency utilities for USD ($) and INR (₹)
export const USD_TO_INR_RATE = 84.5;

export type CurrencyMode = 'dual' | 'usd' | 'inr';

/**
 * Format number into USD currency string (e.g. $1,250)
 */
export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number into INR Indian Rupees (e.g. ₹1,05,600) using Indian numbering system
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Convert USD to INR
 */
export function usdToInr(usdAmount: number): number {
  return Math.round(usdAmount * USD_TO_INR_RATE);
}

/**
 * Convert INR to USD
 */
export function inrToUsd(inrAmount: number): number {
  return Math.round(inrAmount / USD_TO_INR_RATE);
}

/**
 * Format dual currency representation
 * e.g. "$150 • ₹12,675" or based on active currency preference
 */
export function formatDualCurrency(
  usdAmount: number,
  mode: CurrencyMode = 'dual'
): string {
  const inrAmount = usdToInr(usdAmount);
  if (mode === 'usd') {
    return formatUSD(usdAmount);
  }
  if (mode === 'inr') {
    return formatINR(inrAmount);
  }
  return `${formatUSD(usdAmount)} (${formatINR(inrAmount)})`;
}

/**
 * Helper to parse a text price string and enrich it with INR or USD if missing
 */
export function enrichPriceString(text: string, mode: CurrencyMode = 'dual'): string {
  if (!text) return '';

  // If text already has both $ and ₹ / INR, return as is or adjust according to mode
  if (text.includes('₹') && text.includes('$')) {
    if (mode === 'usd') {
      return text.replace(/\s*\(?₹[^)]*\)?/g, '').trim();
    }
    if (mode === 'inr') {
      return text.replace(/\$[^•/(]*\s*[•/(]?/g, '').replace(/\)/g, '').trim();
    }
    return text;
  }

  // If text contains $ and numbers like $65 - $85 USD
  const usdMatch = text.match(/\$\s*(\d+(?:,\d+)?)/);
  if (usdMatch) {
    const rawVal = parseInt(usdMatch[1].replace(/,/g, ''), 10);
    if (!isNaN(rawVal)) {
      const inrVal = usdToInr(rawVal);
      if (mode === 'inr') {
        return text.replace(/\$\s*(\d+(?:,\d+)?)/, formatINR(inrVal));
      }
      if (mode === 'dual' && !text.includes('₹')) {
        return `${text} (≈ ${formatINR(inrVal)})`;
      }
    }
  }

  return text;
}
