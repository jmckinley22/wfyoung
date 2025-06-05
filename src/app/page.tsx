import Link from 'next/link'

export default function Home() {
  const features = [
    {
      title: 'Equine',
      description: 'From shiny manes to healthy hooves, keep your horses looking and feeling their best.',
      link: '/equine',
      linkText: 'View Equine Products',
    },
    {
      title: 'Pet Care',
      description: 'Give the animals you love everything they need to live a full life.',
      link: '/pet-care',
      linkText: 'View Pet Products',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Healthier Animals.
              <br />
              Happier Humans.
            </h1>
            <p className="text-xl mb-8">
              Discover innovative solutions everyone loves.
            </p>
            <Link
              href="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Your Animal's Health, Reimagined
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At W.F. Young, we're not just advancing animal wellness standards, we're reinventing them – so you can enjoy more quality time with the pets you love.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 text-blue-600 hover:text-blue-800 font-semibold"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Solutions You Can Trust
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <Link
                    href={feature.link}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    {feature.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">The Inside Scoop</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have a question about our products? We've got you covered.
          </p>
          <Link
            href="/resources"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View Resources
          </Link>
        </div>
      </section>
    </div>
  )
}
