"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"
import { Star, ShoppingCart, Search, Heart, Eye, Truck, SlidersHorizontal } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Attack on Titan Eren LED Night Lamp - 3D Acrylic Design",
    price: 34.99,
    originalPrice: 49.99,
    image: "/images/eren-lamp.jpg",
    rating: 4.9,
    reviews: 287,
    category: "Home Decor",
    series: "Attack on Titan",
    badge: "Best Seller",
    seller: "LEDAnimeShop",
    location: "Tokyo, Japan",
    shipping: "Free shipping",
    soldCount: "1.2K+ sold",
    inStock: true,
  },
  {
    id: 2,
    name: "Naruto Itachi Uchiha Akatsuki Premium Black T-Shirt",
    price: 24.99,
    originalPrice: 34.99,
    image: "/images/itachi-tshirt.jpg",
    rating: 4.8,
    reviews: 456,
    category: "Clothing",
    series: "Naruto",
    badge: "Hot Deal",
    seller: "NarutoMerch",
    location: "Seoul, Korea",
    shipping: "Free shipping",
    soldCount: "2.1K+ sold",
    inStock: true,
  },
  {
    id: 3,
    name: "Jujutsu Kaisen Characters Panel Design Premium T-Shirt",
    price: 27.99,
    originalPrice: 39.99,
    image: "/images/jjk-shirt.jpg",
    rating: 4.7,
    reviews: 234,
    category: "Clothing",
    series: "Jujutsu Kaisen",
    badge: "Trending",
    seller: "JJKFashion",
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
    category: "Home & Kitchen",
    series: "Naruto",
    badge: "Popular",
    seller: "AnimeCafe",
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
    category: "Collectibles",
    series: "General",
    badge: "Premium",
    seller: "SamuraiCrafts",
    location: "Kyoto, Japan",
    shipping: "Free shipping",
    soldCount: "120+ sold",
    inStock: true,
  },
  {
    id: 6,
    name: "Naruto Ramen Bowl Kawaii Hoodie - Beige/Tan Color",
    price: 42.99,
    originalPrice: 59.99,
    image: "/images/naruto-hoodie-beige.jpg",
    rating: 4.8,
    reviews: 312,
    category: "Clothing",
    series: "Naruto",
    badge: "Cute",
    seller: "KawaiiClothing",
    location: "Tokyo, Japan",
    shipping: "Free shipping",
    soldCount: "780+ sold",
    inStock: true,
  },
  {
    id: 7,
    name: "Naruto & Sasuke Friendship Hoodie - White Premium",
    price: 39.99,
    originalPrice: 54.99,
    image: "/images/naruto-hoodie-white.jpg",
    rating: 4.7,
    reviews: 267,
    category: "Clothing",
    series: "Naruto",
    badge: "Fan Favorite",
    seller: "TeamSevenShop",
    location: "Seoul, Korea",
    shipping: "Free shipping",
    soldCount: "950+ sold",
    inStock: true,
  },
]

const categories = ["All", "Clothing", "Home Decor", "Home & Kitchen", "Collectibles"]
const series = ["All", "Naruto", "Attack on Titan", "Jujutsu Kaisen", "General"]
const priceRanges = [
  { label: "Under $25", min: 0, max: 25 },
  { label: "$25 - $50", min: 25, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Number.POSITIVE_INFINITY },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSeries, setSelectedSeries] = useState("All")
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("relevance")

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSeries = selectedSeries === "All" || product.series === selectedSeries
    const matchesPrice =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.some((range) => {
        const priceRange = priceRanges.find((r) => r.label === range)
        return priceRange && product.price >= priceRange.min && product.price <= priceRange.max
      })

    return matchesSearch && matchesCategory && matchesSeries && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      case "popular":
        return Number.parseInt(b.soldCount.replace(/[^\d]/g, "")) - Number.parseInt(a.soldCount.replace(/[^\d]/g, ""))
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Anime Merchandise</h1>
              <p className="text-gray-600 mt-1">
                {sortedProducts.length.toLocaleString()} results • Authentic items from verified sellers
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for anime merchandise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="h-5 w-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-900 mb-3 block">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-white border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Series Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-900 mb-3 block">Anime Series</label>
                <Select value={selectedSeries} onValueChange={setSelectedSeries}>
                  <SelectTrigger className="bg-white border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {series.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-900 mb-3 block">Price</label>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <div key={range.label} className="flex items-center space-x-2">
                      <Checkbox
                        id={range.label}
                        checked={selectedPriceRanges.includes(range.label)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedPriceRanges([...selectedPriceRanges, range.label])
                          } else {
                            setSelectedPriceRanges(selectedPriceRanges.filter((r) => r !== range.label))
                          }
                        }}
                      />
                      <label htmlFor={range.label} className="text-sm text-gray-700">
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setSelectedSeries("All")
                  setSelectedPriceRanges([])
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6 bg-white rounded-lg shadow-sm border p-4">
              <span className="text-sm text-gray-600">
                Showing {sortedProducts.length} of {products.length} results
              </span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
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
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </Link>

                        {/* Badge */}
                        <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600 text-white text-xs">
                          {product.badge}
                        </Badge>

                        {/* Action Buttons */}
                        <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" variant="secondary" className="h-7 w-7 bg-white/90 hover:bg-white">
                            <Heart className="h-3 w-3" />
                          </Button>
                          <Button size="icon" variant="secondary" className="h-7 w-7 bg-white/90 hover:bg-white">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>

                        {/* Quick Add */}
                        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xs py-1"
                          >
                            <ShoppingCart className="h-3 w-3 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>

                      <div className="p-3">
                        {/* Seller Info */}
                        <div className="flex items-center gap-1 mb-2">
                          <span className="text-xs text-gray-500">by</span>
                          <span className="text-xs font-medium text-gray-700">{product.seller}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{product.location}</span>
                        </div>

                        <Link href={`/products/${product.id}`}>
                          <h3 className="font-medium text-sm text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors leading-tight">
                            {product.name}
                          </h3>
                        </Link>

                        {/* Rating and Reviews */}
                        <div className="flex items-center gap-1 mb-2">
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
                          <span className="font-bold text-gray-900">${product.price}</span>
                          <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
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

            {sortedProducts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                    setSelectedSeries("All")
                    setSelectedPriceRanges([])
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
