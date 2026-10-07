/**
 * Structured Data (JSON-LD) for Website Development Page
 * Conforms to Schema.org standards using linked @graph format.
 * Fully verified using real business data and visible page elements.
 */

export const webDevSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. Organization / Professional Service
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.digitaldrivetech.com/#organization',
      'name': 'Digital Drive Resource Tech Private Limited',
      'alternateName': 'Digital Drive',
      'url': 'https://www.digitaldrivetech.com',
      'logo': 'https://www.digitaldrivetech.com/logo_without_bg.png',
      'image': 'https://www.digitaldrivetech.com/images/website-development-og.jpg',
      'telephone': '+91-8360686961',
      'email': 'admin@digitaldrivetech.com',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Office No. 507, 5th Floor, E-257, Veerji Tower, Phase 8B, Industrial Area, Sector 74',
        'addressLocality': 'Mohali',
        'addressRegion': 'Punjab',
        'postalCode': '160071',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '30.7097',
        'longitude': '76.6948'
      },
      'hasMap': 'https://maps.google.com/?q=30.7097,76.6948',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          'opens': '10:00',
          'closes': '19:00'
        }
      ],
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Mohali'
        },
        {
          '@type': 'City',
          'name': 'Chandigarh'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Punjab'
        },
        {
          '@type': 'Country',
          'name': 'India'
        }
      ],
      'sameAs': [
        'https://www.facebook.com/profile.php?id=61591777337881',
        'https://www.instagram.com/ddrtech_official',
        'https://youtube.com/@digitaldriveresourcetech',
        'https://x.com/digitaldrive001'
      ]
    },

    // 2. WebSite
    {
      '@type': 'WebSite',
      '@id': 'https://www.digitaldrivetech.com/#website',
      'url': 'https://www.digitaldrivetech.com',
      'name': 'Digital Drive Resource Tech',
      'publisher': {
        '@id': 'https://www.digitaldrivetech.com/#organization'
      },
      'inLanguage': 'en-IN'
    },

    // 3. WebPage
    {
      '@type': 'WebPage',
      '@id': 'https://www.digitaldrivetech.com/website-development#webpage',
      'url': 'https://www.digitaldrivetech.com/website-development',
      'name': 'Website Development Company in Mohali | Digital Drive Tech',
      'description': 'Digital Drive is a trusted website development company in Mohali. We build fast, secure, SEO-friendly websites, custom web applications and e-commerce stores across Chandigarh, Punjab and India.',
      'isPartOf': {
        '@id': 'https://www.digitaldrivetech.com/#website'
      },
      'about': {
        '@id': 'https://www.digitaldrivetech.com/website-development#service'
      },
      'breadcrumb': {
        '@id': 'https://www.digitaldrivetech.com/website-development#breadcrumb'
      },
      'inLanguage': 'en-IN'
    },

    // 4. Service
    {
      '@type': 'Service',
      '@id': 'https://www.digitaldrivetech.com/website-development#service',
      'name': 'Website Development Services',
      'serviceType': 'Website Development',
      'url': 'https://www.digitaldrivetech.com/website-development',
      'description': 'Professional website development services in Mohali, Chandigarh and Punjab including custom business websites, e-commerce stores, responsive web design, performance optimization and web applications.',
      'provider': {
        '@id': 'https://www.digitaldrivetech.com/#organization'
      },
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Mohali'
        },
        {
          '@type': 'City',
          'name': 'Chandigarh'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Punjab'
        },
        {
          '@type': 'Country',
          'name': 'India'
        }
      ]
    },

    // 5. BreadcrumbList (Matches visible breadcrumbs in WebDevHero)
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.digitaldrivetech.com/website-development#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.digitaldrivetech.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Website Development',
          'item': 'https://www.digitaldrivetech.com/website-development'
        }
      ]
    },

    // 6. FAQPage (Matches visible FAQs in WebDevFAQ exactly)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.digitaldrivetech.com/website-development#faq',
      'isPartOf': {
        '@id': 'https://www.digitaldrivetech.com/website-development#webpage'
      },
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is website development and what does it include?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Website development is the process of planning, designing, building, testing and maintaining a website or web application. It includes frontend and backend engineering, responsive design, performance optimization, and the technical implementation required to create a fast, secure and user-friendly online presence for your business.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How much does website development cost and how long does it take?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Website development cost and timelines depend on the project\'s scope, including page count, custom features, design complexity and technical integrations. A standard business website generally requires less time than a custom web application or e-commerce platform. Contact Digital Drive with your project requirements for an accurate timeline and estimate.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you provide responsive and SEO-friendly website development?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Every website we build features responsive website development that adapts seamlessly across mobile, tablet and desktop devices. We also implement an SEO-ready technical foundation, including clean code, semantic structure, fast page speeds and on-page SEO fundamentals to support search engine visibility.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can you develop e-commerce websites and redesign existing sites?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Digital Drive develops tailored e-commerce website solutions with product management, shopping carts, secure checkout and payment integrations. We also provide website redesign services to modernize outdated websites, improving user experience, mobile responsiveness and technical performance while preserving your established brand identity and content.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you provide website maintenance and post-launch support?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. We provide ongoing website maintenance and post-launch technical support based on your business requirements. This includes software updates, performance monitoring, security checkups, technical troubleshooting and feature enhancements so your website continues running smoothly.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you provide website development services in Mohali and how can I get started?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Digital Drive provides professional website development services in Mohali and works with businesses across Chandigarh, Punjab and throughout India. To get started, share your business requirements, website goals and preferred features with our team, and we will guide you on the appropriate development approach for your project.'
          }
        }
      ]
    }
  ]
};

export default webDevSchema;
