interface Testimonial {
  name: string;
  company: string;
  review: string;
  rating: number;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mike Rodriguez",
    company: "Rodriguez Roofing",
    review: "The NFC Metal Cards are game-changers! Homeowners are blown away when I tap my card to their phone and my entire portfolio appears. I've closed 3 additional jobs just from neighbors who saw my work and scanned my card.",
    rating: 5,
    location: "Austin, TX"
  },
  {
    name: "Sarah Chen",
    company: "Chen Construction",
    review: "These review stickers have doubled our Google reviews in just 2 months. The weatherproof quality is excellent - they stay put through Texas storms and still scan perfectly.",
    rating: 5,
    location: "Dallas, TX"
  },
  {
    name: "James Thompson",
    company: "Thompson Home Improvements",
    review: "The job site stand has been incredible for lead generation. We've gotten 5 new customers just from neighbors walking by our current projects. Best marketing investment we've made!",
    rating: 5,
    location: "Houston, TX"
  }
];
