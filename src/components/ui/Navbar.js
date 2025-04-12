'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={`${scrolled ? 'bg-primary-900/90' : 'bg-primary-900/50'} backdrop-blur-apple transition-all duration-300`} aria-label="Global">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                <Image 
                  src="/logo.jpeg" 
                  alt="OKLA Labs Logo" 
                  width={32} 
                  height={32} 
                  className="mr-2 rounded-sm" 
                />
                <span className="text-xl font-medium text-primary-50">OKLA Labs</span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-primary-200 transition-colors duration-300 hover:text-primary-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/contact"
                className="text-sm font-medium text-primary-50 transition-all duration-300 hover:opacity-80"
              >
                Get Started <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" 
              aria-hidden="true" 
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-900 px-6 py-6 sm:max-w-sm"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                  <Image 
                    src="/logo.jpeg" 
                    alt="OKLA Labs Logo" 
                    width={32} 
                    height={32} 
                    className="mr-2 rounded-sm" 
                  />
                  <span className="text-xl font-medium text-primary-50">OKLA Labs</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-primary-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-primary-800">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-primary-200 transition-colors hover:text-primary-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <Link
                        href="/contact"
                        className="block px-3 py-2.5 text-base font-medium text-primary-50 transition-all hover:opacity-80"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get Started <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 