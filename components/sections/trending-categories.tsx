"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { TrendingUp, ArrowRight } from "lucide-react"

const categories = [
  {
    id: "figures",
    name: "Premium Figures",
    description: "High-quality collectible figures",
    image: "/placeholder.svg?height=200&width=300",
    itemCount: "2.5K+ items",
    trending: "+15%",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "art",
    name: "Custom Art",
    description: "Original artwork & prints",
    image: "/placeholder.svg?height=200&width=300",
    itemCount: "1.8K+ items",
    trending: "+23%",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "clothing",
    name: "Anime Fashion",
    description: "Stylish anime-inspired clothing",
    image: "/placeholder.svg?height=200&width=300",
    itemCount: "3.2K+ items",
    trending: "+18%",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Keychains, bags & more",
    image: "/placeholder.svg?height=200&width=300",
    itemCount: "1.5K+ items",
    trending: "+12%",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "home",
    name: "Home Decor",
    description: "Transform your space",
    image: "/placeholder.svg?height=200&width=300",
    itemCount: "900+ items",
    trending: "+28%",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "collectibles",
    name: "Rare Collectibles",
    description: "Limited edition treasures",
    image: "/placeholder.svg?height=200&width=300",
    itemCount: "650+ items",
    trending: "+35%",
    color: "from-pink-500 to-rose-500",
  },
]

export function TrendingCategories() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
            <TrendingUp className="w-4 h-4 mr-1" />
            Trending Now
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the most popular anime merchandise categories loved by our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/categories/${category.id}`}>
                <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                      />

                      {/* Trending Badge */}
                      <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900 hover:bg-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {category.trending}
                      </Badge>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-white/90 mb-3">{category.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{category.itemCount}</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
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
  )
}
