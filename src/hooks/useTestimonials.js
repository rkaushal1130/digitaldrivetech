import { useState, useEffect, useRef } from 'react';
import { fetchTestimonials } from '../services/testimonialsApi';
import { getCachedTestimonials, setCachedTestimonials, areTestimonialsEqual } from '../utils/cache';
import fallbackTestimonials from '../data/testimonials';

/**
 * Custom hook for testimonials with stale-while-revalidate caching
 *
 * Strategy:
 * 1. Check cache → show instantly if exists
 * 2. Fetch in background
 * 3. Update only if data changed
 *
 * @returns {Object} { testimonials, loading, error }
 */
export function useTestimonials() {
  const cache = getCachedTestimonials();
  const hasCacheRef = useRef(!!cache);

  const [testimonials, setTestimonials] = useState(
    cache ? cache.data : (hasCacheRef.current ? [] : [])
  );
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadTestimonials() {
      try {
        const data = await fetchTestimonials();

        if (!isMounted) return;

        // Only update if data is valid and different from current
        if (data && data.length > 0) {
          const currentData = testimonials.length > 0 ? testimonials : cache?.data;

          if (!areTestimonialsEqual(currentData, data)) {
            setTestimonials(data);
            setCachedTestimonials(data);
          } else if (!cache) {
            // First fetch, no cache existed
            setTestimonials(data);
            setCachedTestimonials(data);
          }
        } else if (!cache && testimonials.length === 0) {
          // No cache, no API data → use fallback
          setTestimonials(fallbackTestimonials);
        }

        setError(null);
      } catch (err) {
        console.error('Failed to fetch testimonials:', err.message);

        if (isMounted) {
          setError(err.message);

          // If no cache and API failed, use fallback
          if (!cache && testimonials.length === 0) {
            setTestimonials(fallbackTestimonials);
          }
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadTestimonials();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { testimonials, loading, error };
}
