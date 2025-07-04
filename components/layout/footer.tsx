import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  Shield,
  Truck,
  CreditCard,
  Globe,
} from "lucide-react"

const footerLinks = {
  shop: [
    { name: "All Products", href: "/products" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Sale Items", href: "/sale" },
    { name: "Gift Cards", href: "/gift-cards" },
  ],
  categories: [
    { name: "Figures & Collectibles", href: "/categories/figures" },
    { name: "Art & Prints", href: "/categories/art" },
    { name: "Clothing & Fashion", href: "/categories/clothing" },
    { name: "Home & Living", href: "/categories/home" },
    { name: "Accessories", href: "/categories/accessories" },
  ],
  creators: [
    { name: "Become a Creator", href: "/creators/join" },
    { name: "Creator Resources", href: "/creators/resources" },
    { name: "Success Stories", href: "/creators/stories" },
    { name: "Creator Guidelines", href: "/creators/guidelines" },
    { name: "Featured Creators", href: "/creators/featured" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Track Your Order", href: "/track" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
    { name: "Community", href: "/community" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/hubanime", color: "hover:text-blue-600" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/hubanime", color: "hover:text-sky-500" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/hubanime", color: "hover:text-pink-600" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/hubanime", color: "hover:text-red-600" },
]

const trustBadges = [
  { icon: Shield, text: "Secure Shopping" },
  { icon: Truck, text: "Fast Shipping" },
  { icon: CreditCard, text: "Safe Payments" },
  { icon: Heart, text: "Made with Love" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-bold text-xl inline-block">
              HubAnime
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Your ultimate destination for unique anime merchandise from talented creators worldwide. Discover
              authentic figures, custom art, stylish clothing, and rare collectibles.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-sm text-gray-400">
                  <badge.icon className="h-4 w-4 text-purple-400" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Creators */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Creators</h3>
            <ul className="space-y-3">
              {footerLinks.creators.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Get the latest updates on new products, exclusive deals, and creator spotlights.
            </p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600 p-2 rounded-lg">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Email Us</p>
                <p className="text-sm text-gray-300">support@hubanime.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Call Us</p>
                <p className="text-sm text-gray-300">1-800-HUBANIME</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Visit Us</p>
                <p className="text-sm text-gray-300">Tokyo, Japan</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-300">
            <span>© 2024 HubAnime. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Available worldwide</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="text-gray-300 hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">Secure payments powered by:</p>
            <div className="flex items-center gap-4">
              {["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"].map((method) => (
                <Badge key={method} variant="outline" className="border-gray-600 text-gray-400">
                  {method}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
