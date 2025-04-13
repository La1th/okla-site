'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.2 });

  return (
    <div className="overflow-hidden bg-primary-900">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary-900 text-primary-50">
        <motion.div 
          className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transform Your Business
          </motion.h1>
          
          <motion.div 
            className="h-24 sm:h-32 md:h-40 bg-primary-50 my-6 sm:my-8 md:my-10 rounded-sm"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          />
          
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Expert technology consulting and growth strategy by former AWS leaders and military contract managers.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="/contact"
              className="rounded-full bg-primary-50 px-8 py-3 text-sm font-medium text-primary-900 transition-all hover:bg-primary-200"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="text-sm font-medium text-primary-200 transition-all hover:text-primary-50"
            >
              Learn more →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview Section */}
      <motion.section 
        ref={servicesRef}
        className="bg-primary-900 pt-4 pb-20 sm:pt-8 sm:pb-24"
        initial={{ opacity: 0 }}
        animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-medium tracking-tight text-primary-50 sm:text-4xl">Our Services</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-300">
              Comprehensive solutions for your business growth and technology needs
            </p>
          </motion.div>
          
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3">
            {/* Service Card 1 */}
            <motion.div 
              className="relative overflow-hidden rounded-lg bg-primary-800 p-8 shadow-apple ring-1 ring-primary-700/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium text-primary-50">Technology Modernization</h3>
              <p className="mt-4 text-primary-300">
                Upgrade your systems with cutting-edge solutions that drive efficiency and growth.
              </p>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div 
              className="relative overflow-hidden rounded-lg bg-primary-800 p-8 shadow-apple ring-1 ring-primary-700/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-medium text-primary-50">Growth Strategy</h3>
              <p className="mt-4 text-primary-300">
                Develop comprehensive strategies to expand your market presence and revenue.
              </p>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div 
              className="relative overflow-hidden rounded-lg bg-primary-800 p-8 shadow-apple ring-1 ring-primary-700/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-medium text-primary-50">Customer Acquisition</h3>
              <p className="mt-4 text-primary-300">
                Optimize your customer acquisition process and increase profitability.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
