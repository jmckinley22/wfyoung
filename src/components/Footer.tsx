import Link from 'next/link'

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Our Products', href: '/our-products' },
        { name: 'Equine', href: '/equine' },
        { name: 'Pet Care', href: '/pet-care' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Our Purpose', href: '/our-purpose' },
        { name: 'Our Story', href: '/our-story' },
        { name: 'Careers', href: '/careers' },
        { name: 'News', href: '/news' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Resources', href: '/resources' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} W.F. Young. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms and Conditions
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/transparency" className="text-gray-400 hover:text-white">
                Transparency in Coverage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 