'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [],
}

export default function Footer() {
  return (
    <footer className="bg-primary-900 border-t border-primary-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <motion.nav 
          className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {navigation.main.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm text-primary-300 hover:text-primary-50 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
        
        <motion.p 
          className="mt-8 text-center text-xs text-primary-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} OKLA Labs. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
} 