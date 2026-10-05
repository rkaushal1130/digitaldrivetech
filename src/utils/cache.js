/**
 * LocalStorage Cache Utilities
 */

const CACHE_KEY = 'testimonials_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Get cached testimonials
 * @returns {Object|null} { data: Array, timestamp: number } or null
 */
export function getCachedTestimonials() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const parsed = JSON.parse(cached);

    if (!parsed.data || !parsed.timestamp) return null;

    return parsed;
  } catch (error) {
    console.error('Failed to read cache:', error);
    return null;
  }
}

/**
 * Save testimonials to cache
 * @param {Array} data - Testimonials array
 */
export function setCachedTestimonials(data) {
  try {
    const cacheObject = {
      data,
      timestamp: Date.now()
    };

    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));
  } catch (error) {
    console.error('Failed to save cache:', error);
  }
}

/**
 * Check if cache is expired
 * @param {number} timestamp - Cache timestamp
 * @returns {boolean}
 */
export function isCacheExpired(timestamp) {
  return Date.now() - timestamp > CACHE_DURATION;
}

/**
 * Compare two testimonial arrays for equality
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean}
 */
export function areTestimonialsEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;

  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

/**
 * Clear testimonials cache
 */
export function clearTestimonialsCache() {
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch (error) {
    console.error('Failed to clear cache:', error);
  }
}
