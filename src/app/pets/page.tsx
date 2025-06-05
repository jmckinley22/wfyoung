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

export default function Pets() {
  const products: Product[] = [
    {
      name: 'The Missing Link® Hip & Joint Supplement',
      description: 'Veterinarian developed superfood supplement for optimal joint health and mobility.',
      price: 27.29,
      image: '/images/products/pet-hip-joint.jpg',
      category: 'Hip & Joint'
    },
    {
      name: 'The Missing Link® Skin & Coat Supplement',
      description: "Support your pet's skin health and coat shine with our specialized supplement.",
      price: 22.67,
      image: '/images/products/pet-skin-coat.jpg',
      category: 'Skin & Coat'
    },
    {
      name: 'The Missing Link® Dental Chews',
      description: 'Smartmouth™ dental chews for dogs - promotes dental health and fresh breath.',
      price: 8.81,
      image: '/images/products/dental-chews.jpg',
      category: 'Dental Health'
    }
  ]

  const categories = [
    'Dental Health',
    'Digestive Health',
    'Hip & Joint',
    'Life Stages',
    'Skin & Coat',
    'Special Diets'
  ]

  const animalTypes = [
    'Dog',
    'Cat',
    'Bird',
    'Multi-Pet Household'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Pet Care Products
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            Discover our comprehensive range of pet care products for healthier, happier pets.
          </p>
        </div>

        {/* Animal Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Animal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {animalTypes.map((type) => (
              <div
                key={type}
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <p className="text-gray-900 font-medium">{type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Need</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
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
            Our pet care experts are here to help you choose the right products for your pets.
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
            USE IT, LOVE IT. OR YOUR MONEY BACK. GUARANTEED
          </h2>
          <p className="text-gray-600">
            We stand by our products and if you're unsatisfied for any reason, you can return the product for a full refund. No questions asked.
          </p>
        </div>
      </div>
    </div>
  )
} 