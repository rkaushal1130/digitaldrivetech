/**
 * Generates initials from a full name
 * @param {string} name - Full name (e.g., "Amit Verma")
 * @returns {string} Initials (e.g., "AV")
 *
 * Examples:
 * - "Amit Verma" → "AV"
 * - "Priya Sharma" → "PS"
 * - "John" → "J"
 * - "Mary Anne Smith" → "MS" (first and last)
 */
export function getInitials(name) {
  if (!name || typeof name !== 'string') {
    return '??';
  }

  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return '??';
  }

  if (words.length === 1) {
    return words[0][0].toUpperCase();
  }

  // Take first letter of first word and first letter of last word
  const firstInitial = words[0][0].toUpperCase();
  const lastInitial = words[words.length - 1][0].toUpperCase();

  return firstInitial + lastInitial;
}
