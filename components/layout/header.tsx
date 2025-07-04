"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, Heart, Package, Bell, Sparkles, TrendingUp, Users, Star } from "lucide-react"

const categories = [
  { name: "Figures", href: "/categories/figures", icon: "🎎" },
  { name: "Art & Prints", href: "/categories/art", icon: "🎨" },
  { name: "Clothing", href: "/categories/clothing", icon: "👕" },
  { name: "Accessories", href: "/categories/accessories", icon: "🎒" },
  { name: "Home Decor", href: "/categories/home", icon: "🏠" },
  { name: "Collectibles", href: "/categories/collectibles", icon: "💎" },
]

const quickLinks = [
  { name: "New Arrivals", href: "/new-arrivals", icon: Sparkles },
  { name: "Trending", href: "/trending", icon: TrendingUp },
  { name: "Top Creators", href: "/creators", icon: Users },
  { name: "Best Sellers", href: "/best-sellers", icon: Star },
]

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const cartItemCount = 3 // This would come from your cart state
  const notificationCount = 2 // This would come from your notification state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b" : "bg-white border-b"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-bold text-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HubAnime
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium hover:text-purple-600 transition-colors flex items-center gap-1">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-4">
                <DropdownMenuLabel className="text-base font-semibold">Shop by Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild className="p-3 rounded-lg hover:bg-purple-50">
                      <Link href={category.href} className="flex items-center gap-2">
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-sm">{category.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium hover:text-purple-600 transition-colors">
                Discover
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Quick Links</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {quickLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link href={link.href} className="flex items-center gap-2">
                      <link.icon className="h-4 w-4" />
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/creators"
              className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
            >
              Creators
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search anime merchandise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-2 w-full rounded-full border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
              />
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border p-4 z-50"
                >
                  <p className="text-sm text-gray-500 mb-2">Popular searches</p>
                  <div className="flex flex-wrap gap-2">
                    {["Naruto Figure", "Attack on Titan", "Custom Art", "Anime Hoodie"].map((term) => (
                      <Badge key={term} variant="secondary" className="cursor-pointer hover:bg-purple-100">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex">
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 hover:bg-red-600">
                  {notificationCount}
                </Badge>
              )}
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <AnimatePresence>
                  {cartItemCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2"
                    >
                      <Badge className="h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-purple-500 hover:bg-purple-600">
                        {cartItemCount}
                      </Badge>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders" className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Wishlist
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/auth/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/register">Sign Up</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-bold text-xl inline-block">
                      HubAnime
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Navigation</h3>
                        <div className="space-y-2">
                          <Link href="/" className="block py-2 text-gray-700 hover:text-purple-600">
                            Home
                          </Link>
                          <Link href="/creators" className="block py-2 text-gray-700 hover:text-purple-600">
                            Creators
                          </Link>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3">Categories</h3>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              className="flex items-center gap-3 py-2 text-gray-700 hover:text-purple-600"
                            >
                              <span className="text-lg">{category.icon}</span>
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                        <div className="space-y-2">
                          {quickLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="flex items-center gap-3 py-2 text-gray-700 hover:text-purple-600"
                            >
                              <link.icon className="h-4 w-4" />
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-t">
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input type="search" placeholder="Search..." className="pl-10 rounded-full" />
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1 anime-button">
                        <Link href="/auth/login">Sign In</Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 bg-transparent">
                        <Link href="/auth/register">Sign Up</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
