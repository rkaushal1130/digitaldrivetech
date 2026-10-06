import { useEffect } from 'react';

/**
 * SEOHead Component
 * Manages document head elements for technical SEO:
 * - Page Title / Document Title
 * - Meta Description
 * - Canonical URL
 * - Robots Meta
 * - Open Graph (og:type, og:site_name, og:title, og:description, og:url, og:locale, og:image)
 * - Twitter/X Card (twitter:card, twitter:title, twitter:description, twitter:image)
 * - Document Language (en-IN)
 */

export default function SEOHead({
  pageUrl = 'https://www.digitaldrivetech.com/website-development',
  pageTitle = 'Website Development Company in Mohali | Digital Drive Tech',
  metaTitle = pageTitle,
  metaDescription = 'Digital Drive is a trusted website development company in Mohali. We build fast, secure, SEO-friendly websites and e-commerce stores. Get a free quote today.',
  robots = 'index, follow, max-image-preview:large',
  ogTitle = metaTitle,
  ogDescription = metaDescription,
  ogUrl = pageUrl,
  ogImage = 'https://www.digitaldrivetech.com/images/website-development-og.jpg',
  ogLocale = 'en_IN',
  twitterCard = 'summary_large_image',
  twitterTitle = metaTitle,
  twitterDescription = metaDescription,
  twitterImage = ogImage,
  lang = 'en-IN',
  siteName = 'Digital Drive Resource Tech Private Limited'
} = {}) {
  useEffect(() => {
    // 1. Page / Document Title
    const originalTitle = document.title;
    document.title = metaTitle;

    // 2. HTML Language
    const originalLang = document.documentElement.lang;
    document.documentElement.lang = lang;

    // 3. Helper to upsert a meta tag
    const metaTagsAdded = [];
    const setMetaTag = (attribute, attrValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
        metaTagsAdded.push(element);
      }
      element.setAttribute('content', content);
      return element;
    };

    // 4. Meta Description & Robots
    const descEl = document.querySelector('meta[name="description"]');
    const originalDesc = descEl ? descEl.getAttribute('content') : null;
    setMetaTag('name', 'description', metaDescription);
    setMetaTag('name', 'robots', robots);

    // 5. Open Graph
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', siteName);
    setMetaTag('property', 'og:title', ogTitle);
    setMetaTag('property', 'og:description', ogDescription);
    setMetaTag('property', 'og:url', ogUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', ogLocale);

    // 6. Twitter / X
    setMetaTag('name', 'twitter:card', twitterCard);
    setMetaTag('name', 'twitter:title', twitterTitle);
    setMetaTag('name', 'twitter:description', twitterDescription);
    setMetaTag('name', 'twitter:image', twitterImage);

    // 7. Canonical URL (Ensure single canonical tag)
    let canonical = document.querySelector('link[rel="canonical"]');
    let createdCanonical = false;
    let originalCanonicalHref = null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
      createdCanonical = true;
    } else {
      originalCanonicalHref = canonical.getAttribute('href');
    }
    canonical.setAttribute('href', pageUrl);

    // Cleanup on unmount
    return () => {
      document.title = originalTitle;
      document.documentElement.lang = originalLang || 'en';

      if (descEl && originalDesc !== null) {
        descEl.setAttribute('content', originalDesc);
      }

      metaTagsAdded.forEach((el) => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });

      if (createdCanonical && canonical.parentNode) {
        canonical.parentNode.removeChild(canonical);
      } else if (canonical && originalCanonicalHref) {
        canonical.setAttribute('href', originalCanonicalHref);
      }
    };
  }, [
    pageUrl,
    metaTitle,
    metaDescription,
    robots,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    ogLocale,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    lang,
    siteName
  ]);

  return null;
}
