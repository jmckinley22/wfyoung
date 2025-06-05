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

export default function PetsPage() {
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
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Pet Care Products</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-blue-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category}</h3>
                <p className="text-gray-600 mb-4">
                  Discover our range of {category.toLowerCase()} products.
                </p>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 