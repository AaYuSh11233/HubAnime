"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    username: "@alexchen_otaku",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "HubAnime has completely transformed my anime collection! The quality of figures I've purchased here is absolutely incredible, and the creators are so talented.",
    product: "Premium Naruto Figure",
    verified: true,
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    username: "@maria_anime_lover",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "I love supporting independent creators on this platform. The custom artwork I commissioned exceeded all my expectations. Truly amazing community!",
    product: "Custom Attack on Titan Art",
    verified: true,
    location: "Madrid, Spain",
  },
  {
    id: 3,
    name: "Kenji Tanaka",
    username: "@kenji_collector",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "As a long-time anime collector, I can say HubAnime offers some of the most unique and high-quality merchandise I've ever seen. The attention to detail is phenomenal.",
    product: "Limited Edition Dragon Ball Set",
    verified: true,
    location: "Tokyo, Japan",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    username: "@sarah_anime_fan",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The customer service is outstanding, and the shipping was incredibly fast. My One Piece hoodie is now my favorite piece of clothing!",
    product: "One Piece Hoodie",
    verified: true,
    location: "London, UK",
  },
  {
    id: 5,
    name: "David Kim",
    username: "@david_otaku_life",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "HubAnime connects me with creators who truly understand anime culture. Every purchase feels special and supports amazing artists.",
    product: "Demon Slayer Keychain Set",
    verified: true,
    location: "Seoul, Korea",
  },
  {
    id: 6,
    name: "Emma Wilson",
    username: "@emma_anime_art",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The variety and creativity on this platform is unmatched. I've found so many unique pieces that I couldn't find anywhere else!",
    product: "Custom Anime Portrait",
    verified: true,
    location: "Sydney, Australia",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">💬 Customer Love</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied anime fans who've found their perfect merchandise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-purple-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

                  {/* Product */}
                  <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                    {testimonial.product}
                  </Badge>

                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs">Verified</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{testimonial.username}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
