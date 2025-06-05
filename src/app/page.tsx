'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Healthier Animals.<br />
            Happier Humans.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover innovative solutions everyone loves.
          </p>
          <Link
            href="/products"
            className="btn-primary"
          >
            View Products
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Animal's Health, Reimagined
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At W.F. Young, we're not just advancing animal wellness standards, we're reinventing them – 
              so you can enjoy more quality time with the pets you love.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Solutions You Can Trust
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Equine Category */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src="/images/products/equine-category.jpg"
                  alt="Equine Products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Equine</h3>
                <p className="text-gray-600 mb-4">
                  From shiny manes to healthy hooves, keep your horses looking and feeling their best.
                </p>
                <Link
                  href="/equine"
                  className="btn-primary"
                >
                  View Equine Products
                </Link>
              </div>
            </div>

            {/* Pet Care Category */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src="/images/products/pets-category.jpg"
                  alt="Pet Care Products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Pet Care</h3>
                <p className="text-gray-600 mb-4">
                  Give the animals you love everything they need to live a full life.
                </p>
                <Link
                  href="/pets"
                  className="btn-primary"
                >
                  View Pet Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Inside Scoop
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Have a question about our products? We've got you covered.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
