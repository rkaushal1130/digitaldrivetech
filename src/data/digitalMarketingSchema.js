/**
 * Structured Data (JSON-LD) for Digital Marketing Page
 * Conforms to Schema.org standards using linked @graph format.
 * Fully verified using real business data and visible page elements.
 */

export const digitalMarketingSchema = {
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
      'image': 'https://www.digitaldrivetech.com/images/digital-marketing-og.jpg',
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
      '@id': 'https://www.digitaldrivetech.com/digital-marketing-company-in-mohali#webpage',
      'url': 'https://www.digitaldrivetech.com/digital-marketing-company-in-mohali',
      'name': 'digital marketing company in Mohali | DigitalDriveTech',
      'description': 'Digital Drive Resource Tech Private Limited (DigitalDriveTech) is a digital marketing company in Mohali, offering result-driven services with transparent reporting to grow your business.',
      'isPartOf': {
        '@id': 'https://www.digitaldrivetech.com/#website'
      },
      'about': {
        '@id': 'https://www.digitaldrivetech.com/digital-marketing-company-in-mohali#service'
      },
      'breadcrumb': {
        '@id': 'https://www.digitaldrivetech.com/digital-marketing-company-in-mohali#breadcrumb'
      },
      'inLanguage': 'en-IN'
    },

    // 4. Service
    {
      '@type': 'Service',
      '@id': 'https://www.digitaldrivetech.com/digital-marketing-company-in-mohali#service',
      'name': 'Digital Marketing Services in Mohali',
      'serviceType': 'Digital Marketing',
      'url': 'https://www.digitaldrivetech.com/digital-marketing-company-in-mohali',
      'description': 'Result-driven digital marketing services in Mohali, Chandigarh, and Punjab including SEO, social media marketing, paid ads, lead generation, and transparent reporting to grow your business.',
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

    // 5. BreadcrumbList
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.digitaldrivetech.com/digital-marketing-company-in-mohali#breadcrumb',
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
          'name': 'Services',
          'item': 'https://www.digitaldrivetech.com/services'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Digital Marketing Company in Mohali',
          'item': 'https://www.digitaldrivetech.com/digital-marketing-company-in-mohali'
        }
      ]
    },

    // 6. FAQPage (Matches visible FAQs in DigiMarkFAQ exactly)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.digitaldrivetech.com/digital-marketing-company-in-mohali#faq',
      'isPartOf': {
        '@id': 'https://www.digitaldrivetech.com/digital-marketing-company-in-mohali#webpage'
      },
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is digital marketing?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Digital marketing means promoting a business, product, service, or brand online. It includes platforms like Google, social media, websites, email, and online ads.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How can digital marketing help my business?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'At Digital Drive Resource Tech Private Limited (DigitalDriveTech), we first analyse your business and understand its requirements, then plan and implement a strategy. Digital marketing can improve online visibility, reach a relevant audience, build brand awareness, attract website traffic, and generate quality leads.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why is digital marketing important?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Today, many people use the internet and social media to find information, products, and services. Digital marketing helps you reach more people, increase brand awareness, connect with customers, and grow your business online.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How long does digital marketing take to show results?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'It depends on your business, industry, goals, and the type of marketing you choose. SEO usually takes time and needs regular work. Paid ads can bring results faster, but results can vary from business to business.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can digital marketing help generate leads?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, digital marketing can help you get new leads through both organic and paid methods. Organic leads come through SEO and social media for sustainable growth, while paid ads help reach target audiences quickly.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I choose the right digital marketing company for my business?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Choose a company that understands your business, listens to your goals, gives you the right plan, communicates clearly, and shows you transparent reports of its work.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How can I get started with digital marketing services?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'You can contact Digital Drive Resource Tech Private Limited (DigitalDriveTech) and tell us about your business, goals, and requirements. We will understand your needs and suggest the right digital marketing plan for you.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can digital marketing help a new business build its online presence?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Digital Drive Resource Tech Private Limited (DigitalDriveTech) helps businesses of all types build their online presence, reach the right people, and increase brand awareness.'
          }
        }
      ]
    }
  ]
};

export default digitalMarketingSchema;
