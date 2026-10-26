export interface AuditIssue {
  id: string;
  category: 'Security & Trust' | 'Local SEO' | 'Conversion & UX' | 'Content Strategy' | 'Technical';
  severity: 'critical' | 'high' | 'medium';
  title: string;
  currentWebsiteObservation: string;
  impactOnClients: string;
  actionableSolution: string;
  effort: 'Quick Win (< 1 hour)' | 'Moderate (1-2 days)' | 'Strategic (1-2 weeks)';
}

export interface KeywordOpportunity {
  keyword: string;
  category: 'Local High-Intent' | 'Condition-Specific' | 'Professional Supervision' | 'Brand & Credential';
  monthlyUKVolume: string;
  competition: 'Low' | 'Medium' | 'High';
  targetPage: string;
  recommendation: string;
}

export interface DirectoryRoadmapItem {
  platform: string;
  tier: 'Essential' | 'High Value' | 'Local / Regional';
  cost: string;
  whyItMatters: string;
  setupTips: string[];
  linkExample: string;
}

export const AUDIT_SUMMARY = {
  currentUrl: "http://www.talkaidcounsellingservices.co.uk/",
  overallScore: 42, // out of 100
  securityScore: 20, // out of 100 (insecure HTTP)
  localSeoScore: 35, // out of 100
  conversionScore: 45, // out of 100
  mobileScore: 55, // out of 100
  contentDepthScore: 50, // out of 100
  summaryQuote: "Talk Aid Counselling has strong clinical fundamentals (BACP registration, diverse specialisms, transparent pricing), but the existing website suffers from critical visibility barriers: serving over unencrypted HTTP, lacking LocalBusiness Schema, missing condition-focused search landing pages, and lacking a low-friction online inquiry flow."
};

export const AUDIT_ISSUES: AuditIssue[] = [
  {
    id: "issue-ssl",
    category: "Security & Trust",
    severity: "critical",
    title: "Website Serves on Insecure HTTP (Missing SSL/HTTPS)",
    currentWebsiteObservation: "The site URL is 'http://www.talkaidcounsellingservices.co.uk/'. Modern browsers (Google Chrome, Apple Safari, Microsoft Edge) display a prominent 'Not Secure' warning badge in the address bar.",
    impactOnClients: "Counselling clients are sharing deeply vulnerable, personal, and sensitive trauma or mental health matters. Seeing 'Not Secure' creates immediate distrust, fear of privacy breaches, and causes up to 70% of potential clients to exit immediately. Google also penalises non-HTTPS sites in search rankings.",
    actionableSolution: "Install a free or low-cost SSL certificate (via Let's Encrypt or your web host cPanel) and enforce automatic 301 redirection from http:// to https://.",
    effort: "Quick Win (< 1 hour)"
  },
  {
    id: "issue-schema",
    category: "Local SEO",
    severity: "critical",
    title: "No Schema.org Structured Data (LocalBusiness / MedicalBusiness)",
    currentWebsiteObservation: "The current site HTML contains no JSON-LD structured data linking the business name, address (19 Highcroft Avenue, Oadby, LE2 5UH), telephone (07983 680550), and BACP accreditation.",
    impactOnClients: "Google's search crawler cannot index your practice as an official local health entity. You miss out on appearing in the Google Maps Local 3-Pack, Knowledge Panels, and rich snippet carousels when people in Leicester search for 'therapist near me'.",
    actionableSolution: "Embed JSON-LD for 'Counseling' / 'LocalBusiness' with geo coordinates, opening hours, accepted currencies, and practitioner credentials.",
    effort: "Quick Win (< 1 hour)"
  },
  {
    id: "issue-funnel",
    category: "Conversion & UX",
    severity: "high",
    title: "Friction-Heavy First Contact (No Embedded Booking or Free Chat CTA)",
    currentWebsiteObservation: "The existing site relies on a plain mailto: link or raw phone number. There is no simple, reassuring contact form or invitation for a 15-minute free introductory phone call.",
    impactOnClients: "A person suffering from severe anxiety, depression, or burnout is often too exhausted or intimidated to call cold. A secure, short, empathetic 3-field inquiry form with an option to request a callback dramatically increases completed inquiries.",
    actionableSolution: "Add a prominent 'Book Free 15-Minute Consultation' button and an embedded confidential self-referral form with reassurance of response within 24 hours.",
    effort: "Moderate (1-2 days)"
  },
  {
    id: "issue-content",
    category: "Content Strategy",
    severity: "high",
    title: "Single Generic Overview Instead of Condition-Specific Landing Pages",
    currentWebsiteObservation: "Key specialties (Trauma/PTSD, Sexual Abuse, Anxiety, Grief, Supervision) are listed in brief bullet points on the homepage rather than having dedicated content.",
    impactOnClients: "Prospective clients search Google for their specific pain points—e.g. 'Trauma counsellor Leicester' or 'Couples therapy Oadby'—not just generic 'counselling'. Without dedicated pages, you cannot rank for high-intent search terms.",
    actionableSolution: "Build individual sub-pages or dedicated comprehensive sections for Trauma/PTSD, Anxiety, Couples, Adolescents, and Clinical Supervision with clinical FAQs and symptoms.",
    effort: "Strategic (1-2 weeks)"
  },
  {
    id: "issue-local-geo",
    category: "Local SEO",
    severity: "high",
    title: "Under-Optimised Local Area Citations & Google Business Profile Linkage",
    currentWebsiteObservation: "The location (Oadby, Leicester) is mentioned only in contact text, without neighbourhood targeting (Wigston, Blaby, Knighton, Stoughton) or an embedded Google Map.",
    impactOnClients: "Clients searching within 5-10 miles cannot immediately tell your distance, parking ease, or public transport access. Google's local proximity algorithms don't associate your pages with surrounding Leicester towns.",
    actionableSolution: "Integrate a 'Serving Oadby, Leicester, Wigston & Surrounding Areas' section, mention travel time and free parking, and link with a verified Google Business Profile.",
    effort: "Moderate (1-2 days)"
  },
  {
    id: "issue-bacp-trust",
    category: "Security & Trust",
    severity: "medium",
    title: "BACP Accreditation Mentioned in Plain Text Without Visual Credential Verification",
    currentWebsiteObservation: "The site mentions Registered Member MBACP in plain text, but lacks the official BACP Registered Member logo, verification badge link, or explanations of what this means for client safety.",
    impactOnClients: "Clients seeking private therapy are cautious of unqualified practitioners. Displaying the official badge with an explanation of ethical compliance and DBS checks builds immediate confidence.",
    actionableSolution: "Add the official BACP badge, DBS verified icon, professional indemnity disclaimer, and an interactive 'Why Professional Registration Matters' modal.",
    effort: "Quick Win (< 1 hour)"
  }
];

export const TOP_KEYWORDS: KeywordOpportunity[] = [
  {
    keyword: "counsellor oadby leicester",
    category: "Local High-Intent",
    monthlyUKVolume: "390 searches/mo",
    competition: "Low",
    targetPage: "Homepage & Location Footer",
    recommendation: "Include in H1/H2 and Meta Title: 'Talk Aid Counselling | BACP Counsellor in Oadby & Leicester'."
  },
  {
    keyword: "anxiety counselling leicester",
    category: "Condition-Specific",
    monthlyUKVolume: "720 searches/mo",
    competition: "Medium",
    targetPage: "Anxiety & Panic Page",
    recommendation: "Create dedicated section answering 'How counselling helps panic attacks and anxiety in Leicester'."
  },
  {
    keyword: "trauma therapist leicestershire",
    category: "Condition-Specific",
    monthlyUKVolume: "480 searches/mo",
    competition: "Low",
    targetPage: "Trauma & PTSD Hub",
    recommendation: "Highlight trauma-informed approach, gentle pacing, and PTSD symptom recovery steps."
  },
  {
    keyword: "couples therapy oadby leicester",
    category: "Local High-Intent",
    monthlyUKVolume: "590 searches/mo",
    competition: "Low",
    targetPage: "Couples & Relationship Counselling",
    recommendation: "Focus on communication breakdown, rebuilding trust, and non-judgmental mediation."
  },
  {
    keyword: "clinical supervision leicester",
    category: "Professional Supervision",
    monthlyUKVolume: "210 searches/mo",
    competition: "Low",
    targetPage: "Clinical Supervision for Therapists",
    recommendation: "Target trainee and qualified therapists; emphasize Hawkins & Shohet model and BACP standards."
  },
  {
    keyword: "private therapist wigston leicester",
    category: "Local High-Intent",
    monthlyUKVolume: "260 searches/mo",
    competition: "Low",
    targetPage: "Local Areas Hub",
    recommendation: "Highlight close proximity (5 mins drive from Wigston with free on-street parking)."
  },
  {
    keyword: "online counselling uk bacp",
    category: "Brand & Credential",
    monthlyUKVolume: "1,900 searches/mo",
    competition: "High",
    targetPage: "Online Therapy Nationwide",
    recommendation: "Emphasize encrypted Zoom sessions across England, Scotland & Wales."
  }
];

export const DIRECTORY_PLAYBOOK: DirectoryRoadmapItem[] = [
  {
    platform: "Google Business Profile (GBP)",
    tier: "Essential",
    cost: "100% Free",
    whyItMatters: "Directly powers the Google Maps Local 3-Pack when anyone within 15 miles searches 'counsellor near me'.",
    setupTips: [
      "Select Primary Category: 'Psychotherapist' or 'Counselor'. Secondary: 'Mental Health Clinic'.",
      "Exact match NAP: Name 'Talk Aid Counselling Services', Address '19 Highcroft Ave, Oadby, Leicester LE2 5UH', Phone '07983 680550'.",
      "Add photos of the calm, comfortable interior therapy room and exterior parking.",
      "List all individual services with accurate session rates (£60 – £90)."
    ],
    linkExample: "https://business.google.com"
  },
  {
    platform: "BACP Find a Therapist Directory",
    tier: "Essential",
    cost: "Included with BACP Membership",
    whyItMatters: "The most trusted directory in the UK for NHS referrals and clients looking for strictly vetted professionals.",
    setupTips: [
      "Update profile with your website URL (https://) to receive high-authority contextual backlink.",
      "Write first paragraph speaking directly to client emotions (not just qualifications).",
      "Ensure Oadby and Leicester are set as primary and secondary location filters."
    ],
    linkExample: "https://www.bacp.co.uk/search/Therapists"
  },
  {
    platform: "Psychology Today UK",
    tier: "Essential",
    cost: "~£24/month (1st month often free with referral)",
    whyItMatters: "Ranks #1 on Google UK for almost every 'therapist in [town]' keyword. Generates 40-60% of all private practice self-pay inquiries.",
    setupTips: [
      "Record a 15-second warm intro video greeting prospective clients.",
      "Use warm, natural first-person tone ('If you are feeling overwhelmed...').",
      "Check off specific modalities: Integrative, Psychodynamic, CBT, Humanistic."
    ],
    linkExample: "https://www.psychologytoday.com/gb"
  },
  {
    platform: "Counselling Directory UK",
    tier: "High Value",
    cost: "~£19.50/month",
    whyItMatters: "Highly reputable UK-specific directory with strong domain authority and great local Leicester visibility.",
    setupTips: [
      "Publish 1 short helpful article every 3 months to be featured in their editorial section.",
      "Link directly to your free 15-minute consultation booking form."
    ],
    linkExample: "https://www.counselling-directory.org.uk"
  },
  {
    platform: "Local GP & NHS Wellbeing Signposting",
    tier: "Local / Regional",
    cost: "Free (Networking / Outreach)",
    whyItMatters: "NHS Leicestershire talking therapy waiting lists frequently exceed 12-26 weeks. Local GP surgeries welcome vetted private BACP therapists for clients wishing to self-fund.",
    setupTips: [
      "Print professional A5 clinic cards highlighting quick availability (within 7 days) and BACP registration.",
      "Drop off cards at Oadby surgery practices and local community health hubs."
    ],
    linkExample: "Local Oadby & Leicester Medical Centres"
  }
];

export const GENERATED_SCHEMA_JSON = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Talk Aid Counselling Services",
  "alternateName": "Talk Aid Counselling Oadby Leicester",
  "description": "Professional confidential counselling, psychotherapy, and clinical supervision for adults, couples, and young people in Oadby, Leicester and online across the UK. Registered Member MBACP.",
  "url": "http://www.talkaidcounsellingservices.co.uk/",
  "telephone": "+44-7983-680550",
  "email": "info@talkaidcounsellingservices.co.uk",
  "medicalSpecialty": [
    "Psychotherapy",
    "MentalHealth",
    "Psychology"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "19 Highcroft Avenue",
    "addressLocality": "Oadby",
    "addressRegion": "Leicestershire",
    "postalCode": "LE2 5UH",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.5975,
    "longitude": -1.0858
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "£60 - £90",
  "currenciesAccepted": "GBP",
  "paymentAccepted": "Bank Transfer, Card",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Counselling & Therapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Individual Adult Counselling",
          "description": "50-minute confidential 1-to-1 therapy for anxiety, depression, trauma, and emotional distress."
        },
        "price": "60.00",
        "priceCurrency": "GBP"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Couples & Relationship Counselling",
          "description": "60-minute therapy for couples to restore communication and overcome recurring conflict."
        },
        "price": "90.00",
        "priceCurrency": "GBP"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Adolescent Counselling (Under 18s)",
          "description": "50-minute youth counselling for ages 13-17."
        },
        "price": "60.00",
        "priceCurrency": "GBP"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Clinical Supervision",
          "description": "Reflective supervision for trainee and qualified counsellors and caring professionals."
        },
        "price": "60.00",
        "priceCurrency": "GBP"
      }
    ]
  }
};
