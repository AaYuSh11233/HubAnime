"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Gift, Zap, Bell } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="mb-6 bg-yellow-500 text-black hover:bg-yellow-400">
            <Gift className="w-4 h-4 mr-1" />
            Exclusive Perks
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay in the Loop</h2>

          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Get exclusive deals, early access to new products, and insider updates from your favorite creators
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="bg-white/20 p-2 rounded-full">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-lg">Early Access</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="bg-white/20 p-2 rounded-full">
                <Gift className="h-5 w-5" />
              </div>
              <span className="text-lg">Exclusive Deals</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="bg-white/20 p-2 rounded-full">
                <Bell className="h-5 w-5" />
              </div>
              <span className="text-lg">Creator Updates</span>
            </motion.div>
          </div>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 py-4 text-lg bg-white/10 border-white/30 text-white placeholder-white/70 focus:bg-white/20"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 text-lg"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-purple-200 mt-4">Join 50,000+ anime fans. Unsubscribe anytime.</p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Welcome to the Family!</h3>
                <p className="text-purple-100">Check your email for a special welcome gift 🎁</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
