/**
 * Testimonials API Service
 */

const API_URL = process.env.REACT_APP_TESTIMONIALS_API_URL;

/**
 * Fetch testimonials from Google Sheets API
 * @returns {Promise<Array>} Array of testimonial objects
 * @throws {Error} If the API call fails
 */
export async function fetchTestimonials() {
  if (!API_URL) {
    throw new Error("REACT_APP_TESTIMONIALS_API_URL is not configured");
  }

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const result = await response.json();

  if (result.error) {
    throw new Error(result.message);
  }

  return Array.isArray(result) ? result : [];
}
