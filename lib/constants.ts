export const SITE_CONFIG = {
  name: "HubAnime",
  description: "Your ultimate destination for authentic anime merchandise",
  url: "https://hubanime.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/hubanime",
    facebook: "https://facebook.com/hubanime",
    instagram: "https://instagram.com/hubanime",
    youtube: "https://youtube.com/hubanime",
  },
}

export const ANIME_SERIES = [
  "Naruto",
  "Attack on Titan",
  "Dragon Ball Z",
  "One Piece",
  "Demon Slayer",
  "My Hero Academia",
  "Death Note",
  "Fullmetal Alchemist",
  "Tokyo Ghoul",
  "Jujutsu Kaisen",
  "Chainsaw Man",
  "Spy x Family",
  "Hunter x Hunter",
  "Bleach",
  "One Punch Man",
] as const

export const PRODUCT_CATEGORIES = [
  {
    id: "figures",
    name: "Figures",
    description: "High-quality anime figures and collectibles",
    image: "/categories/figures.jpg",
  },
  {
    id: "clothing",
    name: "Clothing",
    description: "Anime-themed apparel and accessories",
    image: "/categories/clothing.jpg",
  },
  {
    id: "posters",
    name: "Posters",
    description: "Beautiful anime posters and wall art",
    image: "/categories/posters.jpg",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Keychains, bags, and other anime accessories",
    image: "/categories/accessories.jpg",
  },
  {
    id: "manga",
    name: "Manga",
    description: "Original and translated manga volumes",
    image: "/categories/manga.jpg",
  },
  {
    id: "collectibles",
    name: "Collectibles",
    description: "Rare and limited edition anime collectibles",
    image: "/categories/collectibles.jpg",
  },
] as const

export const SHIPPING_RATES = {
  FREE_SHIPPING_THRESHOLD: 50,
  STANDARD_SHIPPING: 9.99,
  EXPRESS_SHIPPING: 19.99,
  OVERNIGHT_SHIPPING: 29.99,
} as const

export const TAX_RATE = 0.08 // 8% tax rate

export const ORDER_STATUS = {
  PENDING: "pending",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
} as const

export const PAYMENT_METHODS = ["credit_card", "debit_card", "paypal", "apple_pay", "google_pay"] as const
