"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star, ShoppingCart, Heart, Eye, ArrowRight, Truck } from "lucide-react"

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
    creator: "LEDAnimeShop",
    creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    likes: 1240,
    views: 5680,
    category: "Home Decor",
    location: "Tokyo, Japan",
    shipping: "Free shipping",
    soldCount: "1.2K+ sold",
    inStock: true,
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
    creator: "NarutoMerch",
    creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    likes: 890,
    views: 3240,
    category: "Clothing",
    location: "Seoul, Korea",
    shipping: "Free shipping",
    soldCount: "2.1K+ sold",
    inStock: true,
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
    creator: "JJKFashion",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    likes: 567,
    views: 2100,
    category: "Clothing",
    location: "Los Angeles, USA",
    shipping: "Free shipping",
    soldCount: "890+ sold",
    inStock: true,
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
    creator: "AnimeCafe",
    creatorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    likes: 445,
    views: 1890,
    category: "Home & Kitchen",
    location: "Osaka, Japan",
    shipping: "Free shipping",
    soldCount: "650+ sold",
    inStock: true,
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
    creator: "SamuraiCrafts",
    creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    likes: 234,
    views: 1200,
    category: "Collectibles",
    location: "Kyoto, Japan",
    shipping: "Free shipping",
    soldCount: "120+ sold",
    inStock: true,
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
    creator: "KawaiiClothing",
    creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    likes: 678,
    views: 2890,
    category: "Clothing",
    location: "Tokyo, Japan",
    shipping: "Free shipping",
    soldCount: "780+ sold",
    inStock: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">✨ Handpicked for you</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover authentic anime merchandise from verified sellers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
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
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                    {/* Badge */}
                    <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white">
                      {product.badge}
                    </Badge>

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Quick Add to Cart */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm py-2">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>

                  <div className="p-4">
                    {/* Creator Info */}
                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src={product.creatorAvatar || "/placeholder.svg"}
                        alt={product.creator}
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span className="text-xs text-gray-600">by {product.creator}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{product.location}</span>
                    </div>

                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-medium text-gray-900 mb-3 line-clamp-2 hover:text-orange-600 transition-colors leading-tight">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Rating and Stats */}
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

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
