"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"
import { useParams } from "next/navigation"

// Mock product data - in a real app, this would come from an API
const products = {
  1: {
    id: 1,
    name: "Attack on Titan Eren LED Night Lamp - 3D Acrylic Design",
    price: 34.99,
    originalPrice: 49.99,
    images: ["/images/eren-lamp.jpg", "/images/eren-lamp.jpg", "/images/eren-lamp.jpg", "/images/eren-lamp.jpg"],
    rating: 4.9,
    reviews: 287,
    category: "Home Decor",
    series: "Attack on Titan",
    badge: "Best Seller",
    inStock: true,
    stockCount: 15,
    description:
      "This stunning LED night lamp features Eren Jaeger from Attack on Titan in a beautiful 3D acrylic design. The lamp creates a mesmerizing purple glow that's perfect for any anime fan's room. With multiple color options and remote control, it's both functional and decorative.",
    features: [
      "3D acrylic design with LED lighting",
      "Multiple color options with remote control",
      "USB powered for easy setup",
      "Perfect for bedroom, office, or gaming setup",
      "Official Attack on Titan licensed design",
      "Durable acrylic construction",
    ],
    specifications: {
      Height: "8 inches (20cm)",
      Material: "Acrylic, LED",
      Series: "Attack on Titan",
      Manufacturer: "LEDAnimeShop",
      "Power Source": "USB (cable included)",
      Weight: "0.5 lbs",
    },
  },
  2: {
    id: 2,
    name: "Naruto Itachi Uchiha Akatsuki Premium Black T-Shirt",
    price: 24.99,
    originalPrice: 34.99,
    images: [
      "/images/itachi-tshirt.jpg",
      "/images/itachi-tshirt.jpg",
      "/images/itachi-tshirt.jpg",
      "/images/itachi-tshirt.jpg",
    ],
    rating: 4.8,
    reviews: 456,
    category: "Clothing",
    series: "Naruto",
    badge: "Hot Deal",
    inStock: true,
    stockCount: 25,
    description:
      "Premium quality black t-shirt featuring Itachi Uchiha from Naruto with the iconic Akatsuki red cloud symbols. Made from high-quality cotton blend for comfort and durability. Perfect for any Naruto fan.",
    features: [
      "Premium cotton blend material",
      "High-quality screen printing",
      "Pre-shrunk for perfect fit",
      "Available in multiple sizes",
      "Official Naruto licensed design",
      "Machine washable",
    ],
    specifications: {
      Material: "60% Cotton, 40% Polyester",
      Sizes: "S, M, L, XL, XXL",
      Series: "Naruto",
      Manufacturer: "NarutoMerch",
      Care: "Machine wash cold",
      Weight: "0.3 lbs",
    },
  },
  // Add more products as needed
}

const reviews = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Amazing quality! The LED lamp looks exactly like in the pictures and the lighting effects are incredible. Highly recommend for any Attack on Titan fan.",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "/placeholder-user.jpg",
    rating: 4,
    date: "1 month ago",
    comment:
      "Great product overall. The remote control works perfectly and the different color options are awesome. Only minor complaint is the base could be a bit heavier.",
    verified: true,
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    date: "1 month ago",
    comment:
      "Perfect addition to my anime collection. Fast shipping and excellent packaging. Will definitely buy more from this store!",
    verified: false,
  },
]

const relatedProducts = [
  {
    id: 3,
    name: "Jujutsu Kaisen Panel T-Shirt",
    price: 27.99,
    image: "/images/jjk-shirt.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Kakashi Coffee Mug",
    price: 16.99,
    image: "/images/kakashi-cup.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Premium Katana Set",
    price: 149.99,
    image: "/images/katana.webp",
    rating: 4.9,
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number(params.id)
  const product = products[productId as keyof typeof products]

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} of product ${params.id} to cart`)
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
            <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">{product.badge}</Badge>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square relative rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{product.category}</Badge>
              <Badge variant="outline">{product.series}</Badge>
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-green-600">${product.price}</span>
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
              <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                {product.inStock ? `In Stock (${product.stockCount} available)` : "Out of Stock"}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stockCount}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="flex-1" size="lg" onClick={handleAddToCart} disabled={!product.inStock}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" onClick={() => setIsWishlisted(!isWishlisted)}>
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-600">On orders over $35</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <p className="text-sm font-medium">Authentic</p>
                <p className="text-xs text-gray-600">100% genuine</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                <p className="text-sm font-medium">30-Day Returns</p>
                <p className="text-xs text-gray-600">Easy returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">{product.description}</p>
              <h3 className="font-semibold text-lg mb-4">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="font-medium">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id}>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{review.name}</h4>
                          {review.verified && (
                            <Badge variant="outline" className="text-xs">
                              Verified Purchase
                            </Badge>
                          )}
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                    {review.id !== reviews[reviews.length - 1].id && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                  <Button
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">${relatedProduct.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
