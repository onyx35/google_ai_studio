export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  fee: string;
  tagline: string;
  description: string;
  targetAudience: string;
  commonIssues: string[];
  approach: string;
  inPersonAvailable: boolean;
  onlineAvailable: boolean;
}

export interface IssueSpecialty {
  name: string;
  category: 'emotional' | 'trauma' | 'relationships' | 'professional';
  description: string;
  symptoms: string[];
  therapeuticTechniques: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'getting-started' | 'practical' | 'clinical';
}

export const PRACTICE_INFO = {
  name: "Talkaid Counselling Services",
  shortName: "Talkaid",
  practitionerName: "Raksha Patel",
  practitionerTitle: "Qualified Counsellor, Psychotherapist & Clinical Supervisor (MBACP)",
  logoUrl: "/images/logo.png",
  faviconUrl: "/images/favicon.png",
  images: {
    logo: "/images/logo.png",
    room1: "/images/room-1.jpeg",
    room2: "/images/room-2.jpeg",
    room3: "/images/room-3.jpeg",
    banner1: "/images/banner-1.jpg",
    banner2: "/images/banner-2.jpg",
    teamIndex: "/images/team-index.png",
    servicesIndex: "/images/services-index.png",
    bacpBadge: "/images/bacp-badge.png",
    psychologyToday: "/images/psychology-today.jpg",
    counsellingDirectory: "/images/counselling-directory.jpg",
    gallery: [
      "/images/room-1.jpeg",
      "/images/room-2.jpeg",
      "/images/room-3.jpeg",
      "/images/gal-1.jpeg",
      "/images/gal-2.jpeg",
      "/images/gal-3.jpeg",
      "/images/gal-4.jpeg"
    ]
  },
  verificationLinks: {
    bacp: "https://www.bacp.co.uk/profile/292d84a5-5090-e711-80e8-3863bb349ac0/Therapist",
    psychologyToday: "https://www.psychologytoday.com/gb/counselling/raksha-patel-leicester-eng/384230",
    counsellingDirectory: "https://www.counselling-directory.org.uk/counsellors/raksha-patel",
    facebook: "https://www.facebook.com/Raksha-Patel-Talkaid-Counselling-and-Talking-Therapy-1328299260628846/",
    instagram: "https://www.instagram.com/talkaidcounsellingservices/"
  },
  credentials: [
    "Registered Member MBACP (British Association for Counselling & Psychotherapy)",
    "Enhanced DBS Checked",
    "Fully Insured for Private Practice",
    "BACP Ethical Framework Compliant",
    "Regular Clinical Supervision"
  ],
  phone: "07983 680550",
  email: "info@talkaidcounsellingservices.co.uk",
  websiteUrl: "http://www.talkaidcounsellingservices.co.uk/",
  address: {
    line1: "19 Highcroft Avenue",
    town: "Oadby",
    city: "Leicester",
    postcode: "LE2 5UH",
    county: "Leicestershire",
    country: "United Kingdom",
    notes: "Quiet residential setting with discreet private entrance and free on-street parking."
  },
  openingHours: "Monday to Friday: 8:00 AM – 8:00 PM · Saturday: 9:00 AM – 2:00 PM",
  pricingSummary: {
    individual: "£60 – £90 per 50-minute session",
    under18: "£60 per 50-minute session",
    couples: "£90 per 60-minute session",
    supervision: "£60 – £80 per hour / 90 minutes",
    initialConsultation: "Free 15-minute introductory telephone / video call"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "adult-counselling",
    title: "Individual Adult Counselling",
    subtitle: "Confidential 1-to-1 psychotherapy tailored to your unique journey",
    duration: "50 minutes",
    fee: "£60 – £90",
    tagline: "A safe, non-judgmental space to unpack overwhelm and rediscover calm",
    description: "Personalised integrative therapy supporting individuals through life transitions, deep-seated emotional pain, panic, low self-worth, and existential questions. We work at your own pace, creating a secure therapeutic alliance.",
    targetAudience: "Adults (18+) dealing with anxiety, depression, past trauma, or personal crisis",
    commonIssues: ["Anxiety & Panic", "Depression & Low Mood", "Trauma & PTSD", "Grief & Bereavement", "Low Self-Worth", "Life Transitions"],
    approach: "Integrative approach blending Humanistic, Psychodynamic, and Cognitive Behavioural techniques suited to your personal goals.",
    inPersonAvailable: true,
    onlineAvailable: true
  },
  {
    id: "couples-therapy",
    title: "Couples & Relationship Therapy",
    subtitle: "Rebuild communication, repair emotional safety, and find understanding",
    duration: "60 minutes",
    fee: "£90",
    tagline: "Move past recurring arguments into constructive, compassionate connection",
    description: "Therapy designed for couples feeling disconnected, caught in repetitive conflict cycles, navigating infidelity, or facing major relationship milestones. Neither partner is judged or blamed; we focus on the relationship dynamic.",
    targetAudience: "Couples at any stage seeking conflict resolution, intimacy renewal, or conscious uncoupling",
    commonIssues: ["Communication Breakdown", "Loss of Trust / Infidelity", "Parenting Conflicts", "Intimacy Issues", "Recurring Arguments"],
    approach: "Systemic and Emotionally Focused techniques exploring attachment styles and de-escalating destructive conflict patterns.",
    inPersonAvailable: true,
    onlineAvailable: true
  },
  {
    id: "young-people",
    title: "Young People & Adolescents",
    subtitle: "Supportive, empathetic guidance for ages 13 to 17",
    duration: "50 minutes",
    fee: "£60",
    tagline: "Empowering adolescents to navigate school pressure, anxiety, and identity",
    description: "A confidential and understanding space for teenagers struggling with the overwhelming pressures of modern youth. We help young people build emotional resilience, self-regulation tools, and healthy coping mechanisms.",
    targetAudience: "Young people aged 13–17 with parental consent where appropriate",
    commonIssues: ["Exam & Academic Pressure", "Social Anxiety & Friendship Issues", "Self-Harm Urges & Regulation", "Family Changes & Separation", "Identity & Self-Esteem"],
    approach: "Developmentally tailored integrative counselling with creative interventions and emotional literacy building.",
    inPersonAvailable: true,
    onlineAvailable: true
  },
  {
    id: "clinical-supervision",
    title: "Clinical Supervision",
    subtitle: "Ethical, reflective oversight for counsellors & caring professionals",
    duration: "60 – 90 minutes",
    fee: "£60 – £80",
    tagline: "Professional support maintaining client safety, practitioner wellbeing, and ethical excellence",
    description: "Collaborative, consultative supervision for qualified therapists, trainees, NHS healthcare staff, social workers, and care sector professionals. Rooted in the BACP Ethical Framework and Hawkins & Shohet's Seven-Eyed Model.",
    targetAudience: "Trainee & qualified counsellors, psychotherapists, support workers, and nurses",
    commonIssues: ["Caseload Management", "Transference & Countertransference", "Ethical Dilemmas & Safeguarding", "Practitioner Burnout & Vicarious Trauma", "Accreditation Support"],
    approach: "Seven-Eyed Model of Supervision, reflective inquiry, and ethical problem-solving.",
    inPersonAvailable: true,
    onlineAvailable: true
  }
];

export const SPECIALTIES: IssueSpecialty[] = [
  {
    name: "Trauma & PTSD",
    category: "trauma",
    description: "Processing single-incident shock trauma or long-term complex developmental trauma in a grounded, phased manner.",
    symptoms: ["Flashbacks & intrusive memories", "Hypervigilance & constant tension", "Emotional numbness", "Nightmares & sleep disturbance"],
    therapeuticTechniques: ["Stabilisation & grounding skills", "Psychoeducation on the nervous system", "Narrative processing", "Somatic regulation"]
  },
  {
    name: "Anxiety & Panic Disorders",
    category: "emotional",
    description: "Deconstructing overwhelming worry loops, catastrophic thinking, and physiological panic sensations.",
    symptoms: ["Racing heart & breathlessness", "Constant dread or worry", "Avoidance of places or social situations", "Brain fog & muscle aches"],
    therapeuticTechniques: ["Cognitive restructuring", "Vagus nerve soothing techniques", "Exposure & pacing plans", "Mindfulness-based acceptance"]
  },
  {
    name: "Depression & Low Mood",
    category: "emotional",
    description: "Navigating deep persistent fatigue, emptiness, loss of interest, and critical inner monologue.",
    symptoms: ["Chronic lethargy & lack of drive", "Pervasive guilt or worthlessness", "Disconnection from loved ones", "Altered appetite or sleep"],
    therapeuticTechniques: ["Compassion-focused therapy", "Behavioral activation", "Unpacking grief and repressed anger", "Values alignment"]
  },
  {
    name: "Sexual Abuse & Survivor Support",
    category: "trauma",
    description: "A deeply respectful, trauma-informed sanctuary for survivors to reclaim autonomy, safety, and bodily boundaries.",
    symptoms: ["Shame and self-blame", "Difficulty with physical intimacy", "Dissociation", "Boundary confusion"],
    therapeuticTechniques: ["Paced empowerment work", "Boundary restoration", "Shame deconstruction", "Safety stabilization"]
  },
  {
    name: "Grief & Bereavement",
    category: "emotional",
    description: "Holding space for complicated mourning, sudden loss, pet bereavement, or disenfranchised grief.",
    symptoms: ["Profound waves of heartache", "Brain fog and disorientation", "Anger or numbness", "Fear of the future"],
    therapeuticTechniques: ["Dual-process model of grief", "Continuing bonds exploration", "Gentle rituals of remembrance"]
  },
  {
    name: "Burnout & Caring Exhaustion",
    category: "professional",
    description: "Revitalising therapists, NHS staff, teachers, and family caregivers suffering from compassion fatigue.",
    symptoms: ["Emotional depletion", "Cynicism or detachment", "Physical exhaustion", "Loss of personal boundaries"],
    therapeuticTechniques: ["Boundary audit", "Vicarious trauma decontamination", "Self-compassion routines", "Restoration planning"]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "getting-started",
    question: "How do I take the first step, and what happens in the free 15-minute call?",
    answer: "Taking the first step is often the hardest part. You can either submit an inquiry through our form or call 07983 680550. We arrange a brief, informal 15-minute phone or video conversation. This gives you a chance to share a little of what brings you to therapy, ask any questions, and see if working together feels comfortable and safe—with zero obligation to book."
  },
  {
    category: "practical",
    question: "Where is the therapy room located in Leicester, and is there parking?",
    answer: "Our private practice is located at 19 Highcroft Avenue, Oadby, Leicester, LE2 5UH. It is a quiet, discreet residential location just off the A6, easily accessible from Leicester City Centre, Wigston, Knighton, and Blaby. Free and easy on-street parking is available directly outside."
  },
  {
    category: "clinical",
    question: "What does 'Registered Member MBACP' mean and why does it matter?",
    answer: "BACP (British Association for Counselling and Psychotherapy) is the UK's leading professional body for therapists. Being a Registered Member means our practitioner has completed extensive formal accredited psychotherapy training, adheres to a strict Ethical Framework, undergoes monthly clinical supervision, holds valid professional indemnity insurance, and maintains up-to-date Enhanced DBS clearance."
  },
  {
    category: "practical",
    question: "How much are sessions and how do I pay?",
    answer: "Session fees are transparent with no hidden costs: Young People (under 18s) are £60 per 50 minutes; Individual Adults are £60 – £90 per 50 minutes; Couples Counselling is £90 per 60 minutes; Clinical Supervision is £60 – £80. Fees can be paid via secure bank transfer or card payment ahead of each session."
  },
  {
    category: "clinical",
    question: "How many sessions will I need?",
    answer: "Therapy is tailored to your individual needs. Some clients find that short-term focused therapy (6 to 12 sessions) is sufficient to work through a specific problem or acute transition. Others benefit from longer-term open-ended work for complex trauma or deep-seated relational patterns. We review our progress together every 6 sessions."
  },
  {
    category: "getting-started",
    question: "Is everything I say completely confidential?",
    answer: "Yes, confidentiality is the cornerstone of safe therapy. What you discuss remains confidential within the therapy room. The only rare exceptions are if there is serious risk of imminent harm to yourself or someone else, or where UK law mandates disclosure (e.g., terrorism or child protection). These professional boundaries will be clearly explained in your written therapeutic agreement."
  },
  {
    category: "practical",
    question: "Can I do sessions online instead of visiting in person in Oadby?",
    answer: "Absolutely. We offer secure video sessions (via encrypted Zoom) and telephone therapy for clients across Leicestershire and throughout the UK. Online therapy offers identical clinical effectiveness with the convenience of connecting from the comfort and privacy of your own home."
  }
];
