import nfcPlasticCardsImg from "../assets/b6f9b1d8a2fc4a90fff2f471b25930ed7bd3b561.png";
import nfcMetalCardImg from "../assets/34fb5c340c0891aac50c44bd2d7de7f944db7ef0.png";
import qrStickersImg from "../assets/f3b60b27c518ba0b5f3fe5ab34f8d9e8b7e13a43.png";
import reviewNfcStandImg from "../assets/dcedbe742ec442cd26cb5901fa7a7ef9dd0eb672.png";
import reviewStickersImg from "../assets/4a75d08f97892396001244cfcdbd42416d29580b.png";
import jobSiteStandImg from "../assets/82a8b93c0fcd6d1d360d49c8b1c1a83f07f73908.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  detailedDescription: string;
  specifications: { [key: string]: string };
  benefits: string[];
  useCases: string[];
  gallery: string[];
}

export const products: Product[] = [
  {
    id: "nfc-metal-card",
    name: "NFC Metal Card",
    price: 49.99,
    description: "The ultimate first impression. Tap to share your profile instantly.",
    detailedDescription: "Elevate your contractor brand with our premium NFC Metal Card. This sophisticated business card replacement uses cutting-edge Near Field Communication technology to instantly share your complete digital profile with homeowners. Simply tap the card against any smartphone to showcase your credentials, portfolio, contact information, and reviews.",
    features: ["Premium metal construction", "NFC technology", "Custom branding", "Instant profile sharing"],
    benefits: [
      "Make unforgettable first impressions with premium metal construction",
      "Instantly share your complete contractor profile and portfolio",
      "Never worry about running out of business cards again",
      "Track engagement and follow up with interested prospects",
      "Compatible with all modern smartphones (iPhone & Android)"
    ],
    useCases: [
      "Initial homeowner consultations and estimates",
      "Trade shows and networking events",
      "Door-to-door canvassing and lead generation",
      "Follow-up visits and project check-ins",
      "Referral sharing with satisfied customers"
    ],
    specifications: {
      "Material": "Premium stainless steel",
      "Dimensions": "3.375\" × 2.125\" × 0.03\"",
      "Technology": "NFC Type 2 (13.56 MHz)",
      "Compatibility": "iPhone 7+ & Android with NFC",
      "Durability": "Waterproof, scratch-resistant",
      "Customization": "Laser etching & color printing"
    },
    image: nfcMetalCardImg,
    gallery: [nfcMetalCardImg, nfcPlasticCardsImg, qrStickersImg],
    category: "NFC Cards",
    rating: 4.9,
    reviews: 127,
    inStock: true,
    isPopular: true
  },
  {
    id: "branded-fridge-magnet",
    name: "Branded Fridge Magnet (QR Code)",
    price: 9.99,
    description: "Stay top-of-mind - and on the fridge. Great for repeat business and referrals.",
    detailedDescription: "Keep your contractor business visible in your customers' homes with our weatherproof QR code fridge magnets. These professional-grade magnets feature your custom branding and a QR code that links directly to your digital profile, making it easy for homeowners to find your contact information, leave reviews, or refer you to neighbors.",
    features: ["Weatherproof QR code", "Custom branding", "Strong magnetic hold", "UV resistant"],
    benefits: [
      "Stay visible in customers' homes for ongoing referrals",
      "Professional branded appearance reinforces your credibility",
      "Weatherproof design works indoors and outdoors",
      "Strong magnetic hold ensures long-term placement",
      "Cost-effective marketing that works 24/7"
    ],
    useCases: [
      "Post-job completion follow-up",
      "Seasonal maintenance reminders",
      "Emergency contact information",
      "Review collection campaigns",
      "Neighbor referral programs"
    ],
    specifications: {
      "Material": "Weatherproof vinyl with strong magnet",
      "Dimensions": "3.5\" × 2\" × 0.125\"",
      "QR Code": "High-contrast, scannable design",
      "Magnet Strength": "35 lb pull force",
      "Durability": "UV resistant, weatherproof",
      "Customization": "Full-color printing available"
    },
    image: qrStickersImg,
    gallery: [qrStickersImg, reviewStickersImg, jobSiteStandImg],
    category: "Marketing Materials",
    rating: 4.8,
    reviews: 89,
    inStock: true
  },
  {
    id: "nfc-plastic-card",
    name: "NFC Plastic Card",
    price: 19.99,
    description: "Affordable professional tap card for every team member.",
    detailedDescription: "Equip your entire team with professional NFC Plastic Cards that deliver the same powerful digital profile sharing capabilities as our metal cards at a more accessible price point. Perfect for larger teams or contractors who want to test NFC technology before upgrading to premium options.",
    features: ["Durable plastic", "NFC enabled", "Team branding", "Cost effective"],
    benefits: [
      "Affordable way to equip your entire crew",
      "Same powerful NFC technology as premium cards",
      "Durable plastic construction withstands daily use",
      "Consistent branding across your whole team",
      "Perfect for testing NFC technology adoption"
    ],
    useCases: [
      "Team member introductions on job sites",
      "Crew lead contact sharing",
      "Subcontractor coordination",
      "Trade show booth interactions",
      "Customer service follow-ups"
    ],
    specifications: {
      "Material": "High-quality PVC plastic",
      "Dimensions": "3.375\" × 2.125\" × 0.03\"",
      "Technology": "NFC Type 2 (13.56 MHz)",
      "Compatibility": "iPhone 7+ & Android with NFC",
      "Durability": "Water-resistant, flexible",
      "Customization": "Digital printing & embossing"
    },
    image: nfcPlasticCardsImg,
    gallery: [nfcPlasticCardsImg, nfcMetalCardImg, reviewNfcStandImg],
    category: "NFC Cards",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    isNew: true
  },
  {
    id: "google-review-stickers",
    name: "Google Review Stickers (10-Pack)",
    price: 24.99,
    description: "Easy-to-place QR stickers for collecting on-site reviews post-job.",
    detailedDescription: "Transform your review collection strategy with these weatherproof QR code stickers. Each pack contains 10 professionally designed stickers that link directly to your Google Business profile, making it effortless for satisfied customers to leave reviews immediately after job completion when their satisfaction is highest.",
    features: ["10 weatherproof stickers", "QR code technology", "Easy application", "Review collection"],
    benefits: [
      "Capture reviews at peak customer satisfaction",
      "Weatherproof design works in all conditions",
      "Professional appearance maintains brand credibility",
      "Easy application saves time on every job",
      "Significant boost to online reputation and SEO"
    ],
    useCases: [
      "Post-completion review collection",
      "Job site signage for ongoing projects",
      "Equipment and vehicle branding",
      "Window and door installations",
      "Follow-up marketing campaigns"
    ],
    specifications: {
      "Quantity": "10 stickers per pack",
      "Material": "Weatherproof vinyl with strong adhesive",
      "Dimensions": "2\" × 2\" per sticker",
      "QR Code": "High-contrast, scannable design",
      "Adhesive": "Permanent, weather-resistant",
      "Customization": "Your Google Business Profile link"
    },
    image: reviewStickersImg,
    gallery: [reviewStickersImg, qrStickersImg, reviewNfcStandImg],
    category: "Review Tools",
    rating: 4.6,
    reviews: 156,
    inStock: true
  },
  {
    id: "job-site-stand",
    name: "Job Site Stand",
    price: 129.99,
    description: "Branded, weatherproof stand with QR code for walk-by leads.",
    detailedDescription: "Make your job sites work as lead generation tools with our professional Job Site Stand. This weatherproof display features your company branding and a prominent QR code that curious neighbors can scan to learn about your services, view your portfolio, and request estimates for their own projects.",
    features: ["Weather resistant", "Professional branding", "QR code display", "Portable design"],
    benefits: [
      "Turn every job site into a lead generation opportunity",
      "Professional appearance enhances your brand reputation",
      "Weatherproof construction ensures year-round durability",
      "Portable design allows easy setup and repositioning",
      "Generates qualified leads from interested neighbors"
    ],
    useCases: [
      "Residential job site marketing",
      "Neighborhood awareness campaigns",
      "Trade show and event displays",
      "Commercial project visibility",
      "Open house and demonstration events"
    ],
    specifications: {
      "Material": "Aluminum frame with weatherproof graphics",
      "Dimensions": "24\" × 36\" × 1.5\"",
      "Weight": "8 lbs (lightweight yet stable)",
      "Setup": "Tool-free assembly in under 2 minutes",
      "Durability": "Wind and weather resistant",
      "Customization": "Full custom branding and QR code"
    },
    image: jobSiteStandImg,
    gallery: [jobSiteStandImg, qrStickersImg, reviewStickersImg],
    category: "Signage",
    rating: 4.9,
    reviews: 67,
    inStock: true,
    isPopular: true
  },
  {
    id: "google-review-nfc-stand",
    name: "Google Review NFC Stand (Tabletop)",
    price: 39.99,
    description: "Sleek counter display that prompts reviews before you leave the home.",
    detailedDescription: "Maximize your review collection with this elegant tabletop NFC stand. Place it prominently during consultations and project completion meetings to make requesting reviews feel natural and professional. The sleek design complements any home environment while the NFC technology makes leaving a review effortless for your customers.",
    features: ["NFC technology", "Tabletop design", "Review prompting", "Professional appearance"],
    benefits: [
      "Elegant design fits seamlessly in any home environment",
      "NFC technology makes review process effortless",
      "Increases review collection rates significantly",
      "Professional appearance reinforces your credibility",
      "Compact size perfect for carrying to every appointment"
    ],
    useCases: [
      "In-home consultations and estimates",
      "Project completion walkthroughs",
      "Customer service follow-ups",
      "Showroom and office displays",
      "Trade show booth interactions"
    ],
    specifications: {
      "Material": "Premium acrylic with weighted base",
      "Dimensions": "4\" × 6\" × 3\"",
      "Technology": "NFC Type 2 (13.56 MHz)",
      "Compatibility": "iPhone 7+ & Android with NFC",
      "Weight": "12 oz (stable yet portable)",
      "Customization": "Your Google Business Profile link"
    },
    image: reviewNfcStandImg,
    gallery: [reviewNfcStandImg, nfcMetalCardImg, nfcPlasticCardsImg],
    category: "Review Tools",
    rating: 4.8,
    reviews: 94,
    inStock: true
  }
];
