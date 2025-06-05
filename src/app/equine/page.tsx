'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function Equine() {
  const products: Product[] = [
    {
      name: 'Hip & Joint Supplement',
      description: 'Veterinarian developed superfood supplement for optimal joint health and mobility.',
      price: 27.29,
      image: '/images/products/hip-joint-supplement.jpg',
      category: 'Health & Wellness'
    },
    {
      name: 'Skin & Coat Supplement',
      description: "Keep your horse's coat shiny and healthy with our specialized supplement.",
      price: 22.67,
      image: '/images/products/skin-coat-supplement.jpg',
      category: 'Grooming'
    },
    {
      name: 'Senior Blend Supplement',
      description: 'Specially formulated for senior horses to maintain health and vitality.',
      price: 29.99,
      image: '/images/products/senior-blend.jpg',
      category: 'Health & Wellness'
    }
  ]

  const categories = [
    'Grooming & Coat Care',
    'Hoof Care',
    'Joint & Muscle Support',
    'First Aid & Wound Care',
    'Senior Care',
    'Performance Support'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Equine Products
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            From shiny manes to healthy hooves, discover our comprehensive range of equine care products.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-900 font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Our team of equine experts is here to help you choose the right products for your horse.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:800-628-9653"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Call 800-628-9653
            </a>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            100% Satisfaction Guaranteed
          </h2>
          <p className="text-gray-600">
            If you're not completely satisfied with your purchase, return it for a full refund.
          </p>
        </div>
      </div>
    </div>
  )
} 