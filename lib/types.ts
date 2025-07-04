export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  rating: number
  reviews: number
  category: string
  series: string
  badge?: string
  inStock: boolean
  stockCount?: number
  description?: string
  features?: string[]
  specifications?: Record<string, string>
}

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  series: string
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  shippingAddress: Address
  billingAddress: Address
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
}

export interface Review {
  id: number
  productId: number
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  comment: string
  verified: boolean
  createdAt: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  productCount: number
}

export interface WishlistItem {
  id: number
  productId: number
  userId: string
  createdAt: Date
}
