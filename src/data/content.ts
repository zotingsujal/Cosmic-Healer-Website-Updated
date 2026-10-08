export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName: string;
  tags: string[];
  image?: string;
}

export interface CrystalItem {
  id: string;
  name: string;
  sanskritOrAlt?: string;
  role: string;
  headline: string;
  colorName: string;
  accentBorder: string;
  bgTint: string;
  image: string;
  traditionalAssociation: string;
  consultationRole: string;
  carefulNote: string;
  keywords: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location?: string;
  rating: number;
  highlight?: string;
  text: string;
  badge?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BUSINESS_CONFIG = {
  brandName: "Cosmic Healer",
  founder: "Dr. Dipenti Merchant",
  establishedYear: "2018",
  phone: "96195 50466",
  phoneRaw: "+919619550466",
  phoneDisplay: "+91 96195 50466",
  whatsappUrl: "https://wa.me/919619550466?text=Hello%20Dr.%20Dipenti%20Merchant%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation%20with%20Cosmic%20Healer.",
  address: "1st Floor, Vikas Center, Swami Vivekanand Rd, next to Bus Depot, above Hyundai showroom, BEST Colony, Santacruz (West), Mumbai, Maharashtra 400054",
  mapDirectionsUrl: "https://maps.google.com/?q=Vikas+Center+Swami+Vivekanand+Rd+Santacruz+West+Mumbai+400054",
  googleReviewsUrl: "https://search.google.com/local/writereview?placeid=ChIJ-example-cosmic-healer",
  hours: {
    physical: [
      { days: "Monday – Saturday", time: "11:30 AM – 7:30 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    online: "Available 24 hours",
  },
  heroImage: "/images/hero-background.jpg",
  heroBackgroundImage: "/images/hero-background.jpg",
  heroCrystalImage: "/images/hero-crystals.jpg",
  sanctuaryImage: "/images/sanctuary.jpg",
  logoImage: "/images/logo.jpg",
  logoSvg: "/images/logo.svg",
};

export const PRIMARY_CRYSTALS: CrystalItem[] = [
  {
    id: "amethyst",
    name: "Amethyst",
    role: "Cosmic & Spiritual Intuition",
    headline: "Serenity, Deep Meditation & Higher Awareness",
    colorName: "Deep Mystical Violet",
    accentBorder: "border-purple-300",
    bgTint: "bg-[#F5F0FA]",
    image: "/images/amethyst.jpg",
    traditionalAssociation: "Traditionally associated with crown chakra activation, mental calmness, and quiet introspective reflection.",
    consultationRole: "Commonly used in spiritual and astrological practices to support mental balance and meditative clarity during life transitions.",
    carefulNote: "Often selected for personal sanctuaries to encourage a calm, contemplative atmosphere.",
    keywords: ["Intuition", "Spiritual Focus", "Crown Chakra", "Meditation"],
  },
  {
    id: "clear-quartz",
    name: "Clear Quartz",
    role: "Luminous Clarity & Amplification",
    headline: "Pure Focus, Perspective & Intention Harmonisation",
    colorName: "Luminous Crystalline Prism",
    accentBorder: "border-amber-200",
    bgTint: "bg-[#FBF9F4]",
    image: "/images/clear-quartz.jpg",
    traditionalAssociation: "Traditionally considered the master harmoniser of spiritual traditions, associated with pure resonance and intention clarity.",
    consultationRole: "Commonly selected during personal consultations to bring uncluttered focus to decision-making and thought patterns.",
    carefulNote: "Often paired with sacred geometric layouts and Vastu placement to foster clear spatial resonance.",
    keywords: ["Purity", "Clarity of Thought", "Amplification", "Balance"],
  },
  {
    id: "rose-quartz",
    name: "Rose Quartz",
    role: "Gentle Compassion & Emotional Harmony",
    headline: "Heart Alignment, Warmth & Inner Tranquility",
    colorName: "Soft Blush Pink",
    accentBorder: "border-rose-200",
    bgTint: "bg-[#FDF6F7]",
    image: "/images/rose-quartz.jpg",
    traditionalAssociation: "Traditionally associated with the Anahata (Heart) chakra, gentle self-acceptance, and harmonious interpersonal relationships.",
    consultationRole: "Commonly used in Reiki and holistic healing sessions to support gentle emotional release, patience, and mutual understanding.",
    carefulNote: "Frequently placed in home living and relationship corners according to subtle environmental principles.",
    keywords: ["Heart Chakra", "Empathy", "Emotional Peace", "Kindness"],
  },
  {
    id: "citrine",
    name: "Citrine",
    role: "Warm Radiance & Abundant Energy",
    headline: "Optimism, Creative Motivation & Solar Vitality",
    colorName: "Warm Champagne Amber",
    accentBorder: "border-[#B89A63]/50",
    bgTint: "bg-[#FAF5EC]",
    image: "/images/citrine.jpg",
    traditionalAssociation: "Traditionally celebrated as a stone of solar warmth, creative inspiration, and buoyant positive energy.",
    consultationRole: "Often recommended alongside Numerology and career reviews to stimulate proactive confidence and joyful direction.",
    carefulNote: "Commonly placed in workspaces and creative sanctuaries to maintain an uplifting, energised atmosphere.",
    keywords: ["Vitality", "Positive Energy", "Solar Plexus", "Motivation"],
  },
  {
    id: "black-tourmaline",
    name: "Black Tourmaline",
    role: "Protective Grounding & Space Purification",
    headline: "Energetic Shielding, Stability & Dense Energy Dispersion",
    colorName: "Deep Obsidian Black",
    accentBorder: "border-stone-400",
    bgTint: "bg-[#F2EFE9]",
    image: "/images/black-tourmaline.jpg",
    traditionalAssociation: "Traditionally associated with strong root chakra anchoring, energetic boundaries, and shielding sensitive environments.",
    consultationRole: "Regularly utilised during Negative Energy Removal and space cleansing assessments to stabilise heavy emotional residue.",
    carefulNote: "Widely used near entrances, consultation rooms, and busy offices to anchor peaceful stability.",
    keywords: ["Grounding", "Space Cleansing", "Energetic Shield", "Root Chakra"],
  },
];

export const TRUST_POINTS = [
  {
    title: "Established 2018",
    subtitle: "Over 8 years of dedicated practice",
  },
  {
    title: "Personalized Guidance",
    subtitle: "Every consultation tailored to your life",
  },
  {
    title: "Multiple Disciplines",
    subtitle: "Astrology, Numerology, Tarot, Vastu & Healing",
  },
  {
    title: "Santacruz Sanctuary",
    subtitle: "Vikas Center, SV Road, Mumbai",
  },
  {
    title: "Global Consultations",
    subtitle: "In-person & 24-hour online worldwide",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "astrology",
    number: "01",
    title: "Astrology",
    subtitle: "Planetary insights & Grah-Dasha analysis",
    description: "Personalised astrological guidance based on your individual birth chart, planetary alignments, and life cycles to navigate life decisions with clarity.",
    iconName: "Compass",
    image: "/images/service-astrology.jpg",
    tags: ["Vedic Astrology", "Grah & Dasha", "Kundali", "Life Timing"],
  },
  {
    id: "numerology",
    number: "02",
    title: "Numerology",
    subtitle: "Name correction & vibrational harmony",
    description: "In-depth numerological guidance including name correction, business name vibrations, and date-of-birth alignment to attract positive outcomes.",
    iconName: "Binary",
    image: "/images/service-numerology.jpg",
    tags: ["Name Correction", "Date Analysis", "Vibration", "Life Path"],
  },
  {
    id: "tarot",
    number: "03",
    title: "Tarot Reading",
    subtitle: "Intuitive perspective on life questions",
    description: "Intuitive tarot card consultations designed to provide reflection, perspective, and thoughtful direction around relationships, career, and personal dilemmas.",
    iconName: "Layers",
    image: "/images/service-tarot.jpg",
    tags: ["Card Reading", "Intuitive Reflection", "Perspective", "Clarity"],
  },
  {
    id: "vastu",
    number: "04",
    title: "Vastu Consultation",
    subtitle: "Residential, commercial & industrial harmony",
    description: "Comprehensive Vastu Shastra consultation using practical, non-demolition remedies to align physical directions and cultivate balance, abundance, and peace.",
    iconName: "Home",
    image: "/images/service-vastu.jpg",
    tags: ["Residential", "Commercial", "Industrial", "Non-Demolition"],
  },
  {
    id: "healing",
    number: "05",
    title: "Healing & Reiki",
    subtitle: "Subtle energy balancing & deep restoration",
    description: "Gentle universal life energy balancing and Reiki sessions intended to release tension, soothe emotional fatigue, and restore inner harmony.",
    iconName: "Sun",
    image: "/images/service-reiki.jpg",
    tags: ["Reiki Healing", "Chakra Balance", "Stress Relief", "Restoration"],
  },
  {
    id: "negative-energy-removal",
    number: "06",
    title: "Negative Energy Removal",
    subtitle: "Aura cleansing & space purification",
    description: "Spiritual and holistic cleansing practices intended to address heavy or stagnant energy in your personal space, home, or emotional atmosphere.",
    iconName: "Shield",
    image: "/images/service-energy-clearing.jpg",
    tags: ["Space Cleansing", "Aura Clearing", "Energy Protection", "Peace"],
  },
  {
    id: "crystal",
    number: "07",
    title: "Crystal Guidance",
    subtitle: "Frequency alignment & healing crystals",
    description: "Curated crystal guidance and placement advice to harmonize environmental energies and support your meditative and emotional intentions.",
    iconName: "Sparkles",
    image: "/images/service-crystals.jpg",
    tags: ["Natural Crystals", "Space Harmony", "Frequency", "Remedies"],
  },
  {
    id: "gemstone",
    number: "08",
    title: "Gemstone Guidance",
    subtitle: "Astrological gemstone recommendations",
    description: "Carefully calibrated gemstone guidance aligned with your planetary strengths, helping to channel positive planetary influences harmoniously.",
    iconName: "Diamond",
    image: "/images/service-gemstones.jpg",
    tags: ["Vedic Gemstones", "Planetary Alignment", "Karmic Balance"],
  },
  {
    id: "consultation",
    number: "09",
    title: "Holistic Life Consultation",
    subtitle: "Comprehensive one-on-one personal guidance",
    description: "An open, confidential session tailored to your immediate circumstances, bringing together multiple disciplines to provide clear direction.",
    iconName: "UserCheck",
    image: "/images/service-consultation.jpg",
    tags: ["One-on-One", "Multi-Disciplinary", "Confidential", "In-Depth"],
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Connect & Share Your Concerns",
    description: "Reach out via our direct telephone line (96195 50466), WhatsApp, or through the online booking form to share your requirements.",
  },
  {
    step: "02",
    title: "One-on-One Dedicated Session",
    description: "Meet with Dr. Dipenti Merchant at our Santacruz West sanctuary or via secure video/call for an attentive, unhurried consultation.",
  },
  {
    step: "03",
    title: "Actionable Guidance & Remedies",
    description: "Receive practical, non-disruptive remedies and clear spiritual wisdom tailored to align your personal circumstances and environment.",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Personalized Guidance",
    description: "Every consultation is crafted around your unique journey, questions, and specific life patterns rather than generic formulas.",
    iconName: "Fingerprint",
  },
  {
    title: "Comprehensive Multi-Disciplinary Practice",
    description: "Seamlessly combining Astrology, Numerology, Tarot, Reiki Healing, and Vastu to address both inner and environmental harmony.",
    iconName: "Layers",
  },
  {
    title: "Established Since 2018 in Mumbai",
    description: "Over 8 years of dedicated practice in Santacruz West, earning client trust across Maharashtra, India, and internationally.",
    iconName: "Award",
  },
  {
    title: "Realistic, Accessible Remedies",
    description: "Practical solutions and simple mindful practices that fit naturally into modern life without demanding unrealistic rituals.",
    iconName: "CheckCircle",
  },
  {
    title: "In-Person Sanctuary & 24-Hour Online",
    description: "Welcoming in-person consultations at Vikas Center, Santacruz West, alongside flexible 24-hour worldwide remote appointments.",
    iconName: "Globe",
  },
  {
    title: "Confidentiality, Patience & Compassion",
    description: "A calm, dignified space where you can share your challenges openly without judgment, receiving deep empathy and focus.",
    iconName: "Feather",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "ratan-singh",
    name: "Ratan Singh",
    location: "Mumbai",
    rating: 5,
    highlight: "A ray of light in my dark times",
    badge: "Verified Client",
    text: `I was passing through a very rough time after having lost my mother suddenly and immediately after, suffering extensive health and financial troubles.

I already had very vague guidance from other astrologers earlier which was not clear and left a lot to be desired. For these reasons, I met Dipentiji. She came as a ray of light in my dark times.

Dipentiji guided me on my Grah and Dasha. She explained where the main problems were and why I was passing through difficult times. She also emphasized that what is written cannot be altered, but the damages can be minimized with Karma and Prayers.

Dipentiji guided us on remedies to be better prepared next for difficult times. The remedies are not something fanciful or costly, but rather can be followed with ease with dedication and truthfulness.

Most of my life situations were accurately analyzed by Dipentiji. Now I am more at peace after meeting her. Knowing well that your Karma and prayers will decide on the outcome of the difficulties in life.

Many thanks to Dipentiji, who in addition to a great guide is also a gem of a person. Also, she spent over 5 hours to explain to me each aspect and listen to me patiently.`,
  },
  {
    id: "satveer-kour",
    name: "Satveer Kour",
    location: "Mumbai",
    rating: 5,
    highlight: "The best mentor and healer",
    badge: "Verified Client",
    text: `Dipenti ma'am is truly an Angel and a very wise powerful beautiful soul who has come on Mother Earth to help, assist, guide many souls on their journey.. She is the best mentor and healer..`,
  },
  {
    id: "rohanpreet-singh",
    name: "Rohanpreet Singh",
    location: "Mumbai",
    rating: 5,
    highlight: "Great command over numerology and human relations",
    badge: "Family Consultation",
    text: `She is absolutely fantastic at her work. My family has been benefited a lot due to her guidance of name correction, great knowledge and command over numerology and also on human relations. God Bless her too with all the happiness in life !!`,
  },
  {
    id: "vhume-kaur",
    name: "Vhume Kaur",
    location: "USA",
    rating: 5,
    highlight: "Easy to understand and implement remedies",
    badge: "International Consultation",
    text: `I am from USA and came across a video with Cosmic Healer by Dr.Dipenti on Instagram. We took a consult from her and were really impressed by the outcome. Her remedies were easy to understand and implement. Thank you Dipenti for your guidance and help.`,
  },
  {
    id: "anmol-singh",
    name: "Anmol Singh",
    location: "Mumbai",
    rating: 5,
    highlight: "Healing and guidance that helped my family",
    badge: "Verified Client",
    text: `One of my family members was always ill, and medication was also not working for him. I consulted her, and her rituals and healings worked great and helped to make him recover again...`,
  },
  {
    id: "aman-singh",
    name: "Aman Singh",
    location: "Mumbai",
    rating: 5,
    highlight: "An amazing interaction",
    badge: "Verified Client",
    text: `It was an amazing interaction. Dipenti ji is a very nice, empathetic individual who brings immense peace.`,
  },
  {
    id: "shivam-singh",
    name: "Shivam Singh",
    location: "Mumbai",
    rating: 5,
    highlight: "Accurate insight & calm guidance",
    badge: "Verified Client",
    text: `Good work ma'am, thank you for providing clarity and peace during a difficult phase of life.`,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What services does Cosmic Healer offer?",
    answer: "Cosmic Healer offers personalized consultations across Astrology, Numerology, Tarot Reading, Reiki and Holistic Healing, Vastu Consultation (residential, commercial, industrial), Negative Energy Removal, and Gemstone/Crystal guidance.",
  },
  {
    question: "How does a consultation work?",
    answer: "During a private session, Dr. Dipenti Merchant reviews your birth details, planetary dasha, or specific concerns in an unrushed dialogue. She identifies root patterns, explains underlying influences clearly, and recommends realistic, accessible remedies.",
  },
  {
    question: "Can I book a consultation by phone?",
    answer: "Yes. You can directly call 96195 50466 during centre hours or reach out via WhatsApp to schedule an in-person or remote appointment.",
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes. For clients outside Mumbai or international locations across various time zones, online consultations via phone or secure video call are available 24 hours by prior booking.",
  },
  {
    question: "Where is Cosmic Healer located?",
    answer: "Cosmic Healer is located on the 1st Floor, Vikas Center, Swami Vivekanand Road, next to Santacruz Bus Depot, above Hyundai showroom, BEST Colony, Santacruz (West), Mumbai, Maharashtra 400054.",
  },
  {
    question: "Which service should I choose?",
    answer: "If you are uncertain which discipline fits your need best, select 'General Consultation'. Dr. Dipenti Merchant will listen to your current life situation and determine whether Astrology, Numerology, Tarot, Vastu, or Healing is most appropriate.",
  },
];
