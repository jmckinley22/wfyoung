import Link from 'next/link'

export default function Products() {
  const categories = [
    {
      title: 'Equine Products',
      description: 'Discover our comprehensive range of equine care products designed to keep your horses healthy and happy.',
      items: [
        'Grooming & Coat Care',
        'Hoof Care',
        'Joint & Muscle Support',
        'First Aid & Wound Care',
        'Fly & Insect Control'
      ],
      link: '/equine'
    },
    {
      title: 'Pet Care Products',
      description: 'Find the perfect solutions for your pets with our specially formulated pet care products.',
      items: [
        'Dog Care',
        'Cat Care',
        'Small Animal Care',
        'Health & Wellness',
        'Grooming Essentials'
      ],
      link: '/pet-care'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Our Products
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            Discover innovative solutions for animal wellness that everyone loves.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid gap-12 lg:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-700">
                      <svg
                        className="h-5 w-5 text-blue-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={category.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  View All {category.title}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Finding the Right Product?
          </h3>
          <p className="text-gray-600 mb-8">
            Our team is here to help you choose the perfect solution for your animals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
} 