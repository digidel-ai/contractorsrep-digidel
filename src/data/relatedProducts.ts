import nfcMetalCardImg from "../assets/34fb5c340c0891aac50c44bd2d7de7f944db7ef0.png";
import nfcPlasticCardsImg from "../assets/b6f9b1d8a2fc4a90fff2f471b25930ed7bd3b561.png";
import reviewStickersImg from "../assets/4a75d08f97892396001244cfcdbd42416d29580b.png";

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const relatedProducts: RelatedProduct[] = [
  { id: "nfc-metal-card", name: "NFC Metal Card", price: 49.99, image: nfcMetalCardImg },
  { id: "nfc-plastic-card", name: "NFC Plastic Card", price: 19.99, image: nfcPlasticCardsImg },
  { id: "google-review-stickers", name: "Google Review Stickers", price: 24.99, image: reviewStickersImg }
];
