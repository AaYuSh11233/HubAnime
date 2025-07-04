"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  Star,
  ShoppingCart,
  Truck,
  Shield,
  Headphones,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  Heart,
  Eye,
} from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Attack on Titan Eren LED Night Lamp - 3D Acrylic",
    price: 34.99,
    originalPrice: 49.99,
    image: "/images/eren-lamp.jpg",
    rating: 4.9,
    reviews: 287,
    badge: "Best Seller",
    seller: "LEDAnimeShop",
    location: "Tokyo, Japan",
    shipping: "Free shipping",
    category: "Home Decor",
    inStock: true,
    soldCount: "1.2K+ sold",
  },
  {
    id: 2,
    name: "Naruto Itachi Uchiha Akatsuki Premium T-Shirt",
    price: 24.99,
    originalPrice: 34.99,
    image: "/images/itachi-tshirt.jpg",
    rating: 4.8,
    reviews: 456,
    badge: "Hot Deal",
    seller: "NarutoMerch",
    location: "Seoul, Korea",
    shipping: "Free shipping",
    category: "Clothing",
    inStock: true,
    soldCount: "2.1K+ sold",
  },
  {
    id: 3,
    name: "Jujutsu Kaisen Characters Panel Design T-Shirt",
    price: 27.99,
    originalPrice: 39.99,
    image: "/images/jjk-shirt.jpg",
    rating: 4.7,
    reviews: 234,
    badge: "Trending",
    seller: "JJKFashion",
    location: "Los Angeles, USA",
    shipping: "Free shipping",
    category: "Clothing",
    inStock: true,
    soldCount: "890+ sold",
  },
  {
    id: 4,
    name: "Kakashi Coffee Mug - Starbucks Parody Design",
    price: 16.99,
    originalPrice: 24.99,
    image: "/images/kakashi-cup.jpg",
    rating: 4.6,
    reviews: 178,
    badge: "Popular",
    seller: "AnimeCafe",
    location: "Osaka, Japan",
    shipping: "Free shipping",
    category: "Home & Kitchen",
    inStock: true,
    soldCount: "650+ sold",
  },
  {
    id: 5,
    name: "Premium Japanese Katana Replica Set - Display Quality",
    price: 149.99,
    originalPrice: 199.99,
    image: "/images/katana.webp",
    rating: 4.9,
    reviews: 89,
    badge: "Premium",
    seller: "SamuraiCrafts",
    location: "Kyoto, Japan",
    shipping: "Free shipping",
    category: "Collectibles",
    inStock: true,
    soldCount: "120+ sold",
  },
  {
    id: 6,
    name: "Naruto Ramen Bowl Kawaii Hoodie - Beige",
    price: 42.99,
    originalPrice: 59.99,
    image: "/images/naruto-hoodie-beige.jpg",
    rating: 4.8,
    reviews: 312,
    badge: "Cute",
    seller: "KawaiiClothing",
    location: "Tokyo, Japan",
    shipping: "Free shipping",
    category: "Clothing",
    inStock: true,
    soldCount: "780+ sold",
  },
  {
    id: 7,
    name: "Naruto & Sasuke Friendship Hoodie - White",
    price: 39.99,
    originalPrice: 54.99,
    image: "/images/naruto-hoodie-white.jpg",
    rating: 4.7,
    reviews: 267,
    badge: "Fan Favorite",
    seller: "TeamSevenShop",
    location: "Seoul, Korea",
    shipping: "Free shipping",
    category: "Clothing",
    inStock: true,
    soldCount: "950+ sold",
  },
]

const categories = [
  {
    name: "LED Lamps & Lights",
    image: "/images/eren-lamp.jpg",
    count: "500+ items",
    trending: "+25% this week",
  },
  {
    name: "Anime Clothing",
    image: "/images/itachi-tshirt.jpg",
    count: "2,800+ items",
    trending: "+18% this week",
  },
  {
    name: "Home & Kitchen",
    image: "/images/kakashi-cup.jpg",
    count: "1,200+ items",
    trending: "+15% this week",
  },
  {
    name: "Collectibles & Replicas",
    image: "/images/katana.webp",
    count: "800+ items",
    trending: "+30% this week",
  },
]

const stats = [
  { icon: Users, label: "Active Sellers", value: "15K+", color: "text-blue-600" },
  { icon: ShoppingCart, label: "Products Sold", value: "750K+", color: "text-green-600" },
  { icon: Award, label: "Happy Customers", value: "150K+", color: "text-purple-600" },
  { icon: TrendingUp, label: "Monthly Growth", value: "35%", color: "text-pink-600" },
]

const features = [
  {
    icon: Shield,
    title: "Buyer Protection",
    description: "Your purchase is protected",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $35",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here to help you",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Sparkles,
    title: "Unique Items",
    description: "One-of-a-kind anime merchandise",
    color: "bg-pink-100 text-pink-600",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-pink-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                <Sparkles className="w-4 h-4 mr-1" />
                Over 75,000 unique anime items
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Find the perfect
                <span className="block text-orange-600">anime merchandise</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover authentic anime items, from LED lamps to premium clothing, all made by passionate creators and
                official licensees worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                  <Link href="/products">
                    Start Shopping
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
                >
                  <Link href="/sell">Start Selling</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/images/eren-lamp.jpg"
                    alt="LED Anime Lamp"
                    width={250}
                    height={300}
                    className="rounded-lg shadow-lg object-cover"
                  />
                  <Image
                    src="/images/kakashi-cup.jpg"
                    alt="Anime Mug"
                    width={250}
                    height={200}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="/images/itachi-tshirt.jpg"
                    alt="Anime T-Shirt"
                    width={250}
                    height={200}
                    className="rounded-lg shadow-lg object-cover"
                  />
                  <Image
                    src="/images/naruto-hoodie-beige.jpg"
                    alt="Anime Hoodie"
                    width={250}
                    height={300}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Explore our most popular anime merchandise categories</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          width={300}
                          height={200}
                          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                          <p className="text-sm text-white/90">{category.count}</p>
                          <Badge className="mt-2 bg-green-500 hover:bg-green-600 text-xs">{category.trending}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular right now</h2>
              <p className="text-gray-600">Trending anime merchandise from our community</p>
            </div>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/products">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>

                      {/* Badge */}
                      <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white text-xs">
                        {product.badge}
                      </Badge>

                      {/* Wishlist Button */}
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute top-3 right-3 h-8 w-8 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>

                      {/* Quick View */}
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" className="w-full bg-black/80 hover:bg-black text-white">
                          <Eye className="h-4 w-4 mr-2" />
                          Quick View
                        </Button>
                      </div>
                    </div>

                    <div className="p-4">
                      {/* Seller Info */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500">by</span>
                        <span className="text-xs font-medium text-gray-700">{product.seller}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{product.location}</span>
                      </div>

                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors leading-tight">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Rating and Reviews */}
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">({product.reviews})</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-600">{product.soldCount}</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      </div>

                      {/* Shipping */}
                      <div className="flex items-center gap-1 text-xs text-green-600">
                        <Truck className="h-3 w-3" />
                        <span>{product.shipping}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why shop with us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best anime shopping experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color} mb-4`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-bold mb-4">Never miss a deal</h2>
            <p className="text-xl mb-8 text-orange-100">
              Get exclusive offers and be the first to know about new arrivals
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
