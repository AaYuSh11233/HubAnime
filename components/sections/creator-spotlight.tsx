"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star, Users, ShoppingBag, MapPin, ArrowRight, Verified } from "lucide-react"

const featuredCreators = [
  {
    id: 1,
    name: "Sakura Artisan",
    username: "@sakura_artisan",
    avatar: "/placeholder.svg?height=80&width=80",
    cover: "/placeholder.svg?height=200&width=400",
    location: "Tokyo, Japan",
    speciality: "Premium Figures",
    rating: 4.9,
    followers: 12500,
    totalSales: 2340,
    verified: true,
    description:
      "Creating authentic anime figures with meticulous attention to detail. Each piece is handcrafted with love.",
    featuredProducts: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
  },
  {
    id: 2,
    name: "Digital Dreams Studio",
    username: "@digital_dreams",
    avatar: "/placeholder.svg?height=80&width=80",
    cover: "/placeholder.svg?height=200&width=400",
    location: "Seoul, Korea",
    speciality: "Custom Art",
    rating: 4.8,
    followers: 8900,
    totalSales: 1890,
    verified: true,
    description: "Bringing your favorite anime characters to life through stunning digital artwork and prints.",
    featuredProducts: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
  },
  {
    id: 3,
    name: "Otaku Fashion Co.",
    username: "@otaku_fashion",
    avatar: "/placeholder.svg?height=80&width=80",
    cover: "/placeholder.svg?height=200&width=400",
    location: "Los Angeles, USA",
    speciality: "Anime Fashion",
    rating: 4.7,
    followers: 15600,
    totalSales: 3120,
    verified: true,
    description: "Stylish anime-inspired clothing that lets you express your passion in everyday life.",
    featuredProducts: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
  },
]

export function CreatorSpotlight() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">👨‍🎨 Creator Spotlight</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Top Creators</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover talented artists and makers who bring anime magic to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredCreators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Cover Image */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={creator.cover || "/placeholder.svg"}
                      alt={`${creator.name} cover`}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Verified Badge */}
                    {creator.verified && (
                      <Badge className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white">
                        <Verified className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Creator Info */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <Image
                          src={creator.avatar || "/placeholder.svg"}
                          alt={creator.name}
                          width={60}
                          height={60}
                          className="rounded-full border-4 border-white shadow-lg -mt-8 relative z-10"
                        />
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{creator.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{creator.username}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span>{creator.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Speciality */}
                    <Badge className="mb-3 bg-purple-100 text-purple-800 hover:bg-purple-200">
                      {creator.speciality}
                    </Badge>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{creator.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="font-semibold text-sm">{creator.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">Rating</span>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span className="font-semibold text-sm">{creator.followers.toLocaleString()}</span>
                        </div>
                        <span className="text-xs text-gray-500">Followers</span>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <ShoppingBag className="w-4 h-4 text-green-500" />
                          <span className="font-semibold text-sm">{creator.totalSales.toLocaleString()}</span>
                        </div>
                        <span className="text-xs text-gray-500">Sales</span>
                      </div>
                    </div>

                    {/* Featured Products */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Featured Products</h4>
                      <div className="flex gap-2">
                        {creator.featuredProducts.map((product, idx) => (
                          <Image
                            key={idx}
                            src={product || "/placeholder.svg"}
                            alt={`Featured product ${idx + 1}`}
                            width={50}
                            height={50}
                            className="rounded-lg object-cover"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button asChild className="w-full anime-button">
                      <Link href={`/creators/${creator.id}`}>
                        Visit Shop
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent"
          >
            <Link href="/creators">
              Discover All Creators
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
