'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function ServicesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const serviceRef = useRef(null)
  const isServiceInView = useInView(serviceRef, { once: false, amount: 0.2 })

  // Service items with enhanced corporate descriptions
  const services = [
    {
      id: 1,
      title: "Technology Modernization",
      description: "Transform legacy infrastructure into agile, scalable digital ecosystems that accelerate your competitive advantage.",
      deliverables: [
        "Enterprise-grade website development with optimal UX architecture",
        "Technology stack optimization and infrastructure modernization",
        "Custom digital solutions engineered for sustained performance",
        "Scalable architecture designed for future growth imperatives"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Growth Strategy",
      description: "Leverage data-driven methodologies to identify and capitalize on high-value market opportunities for sustainable business expansion.",
      deliverables: [
        "Market positioning analysis with competitive differentiation",
        "Strategic roadmap development with phased implementation guidelines",
        "Operational efficiency optimization to maximize resource allocation",
        "Performance analytics framework with actionable intelligence dashboards"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Customer Acquisition",
      description: "Implement precision-targeted outreach campaigns that convert high-potential prospects into strategic client relationships.",
      deliverables: [
        "Multi-channel acquisition strategy with client-specific customization",
        "LinkedIn outreach campaigns leveraging executive networking protocols",
        "Engagement optimization through strategic content alignment",
        "Conversion pipeline development with systematic nurturing sequences"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      )
    }
  ]

  return (
    <div className="bg-primary-900 min-h-screen">
      {/* Hero section */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl font-medium tracking-tight text-primary-50 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Strategic Solutions for <br />
              <span className="mt-2 block">Enterprise Excellence</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-primary-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Leveraging deep industry expertise to deliver transformative outcomes for forward-thinking organizations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services section */}
      <motion.section 
        ref={serviceRef}
        className="py-20 sm:py-24"
        initial={{ opacity: 0 }}
        animate={isServiceInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-primary-50 sm:text-4xl">Our Service Portfolio</h2>
            <p className="mt-6 text-lg leading-8 text-primary-300">
              Comprehensive solutions engineered to accelerate your business trajectory and maximize stakeholder value.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-5xl gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className="relative overflow-hidden rounded-lg bg-primary-800 p-8 shadow-apple ring-1 ring-primary-700/5"
                initial={{ opacity: 0, y: 30 }}
                animate={isServiceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 * i }}
              >
                <div className="flex items-center gap-x-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-700 text-primary-200">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-primary-50">{service.title}</h3>
                </div>
                <p className="mt-4 mb-8 text-primary-300">
                  {service.description}
                </p>
                <h4 className="text-md font-medium text-primary-200 mb-4">Core Deliverables:</h4>
                <ul className="space-y-3">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex gap-x-3 text-primary-300">
                      <span className="text-primary-500 flex-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Methodology section */}
      <section className="py-20 sm:py-24 bg-primary-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-medium tracking-tight text-primary-50 sm:text-4xl">Our Methodology</h2>
            <p className="mt-6 text-lg leading-8 text-primary-300">
              A systematic approach that consistently delivers exceptional results through proven frameworks and adaptive execution.
            </p>
          </motion.div>
          
          <motion.div 
            className="mx-auto max-w-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-primary-800/10 p-8 shadow-apple border border-primary-700/10">
                <h3 className="text-xl font-medium text-primary-50 mb-4">Discovery & Analysis</h3>
                <p className="text-primary-300">
                  Comprehensive evaluation of your current state, competitive landscape, and target objectives to establish strategic imperatives.
                </p>
              </div>
              <div className="rounded-lg bg-primary-800/10 p-8 shadow-apple border border-primary-700/10">
                <h3 className="text-xl font-medium text-primary-50 mb-4">Strategic Blueprint</h3>
                <p className="text-primary-300">
                  Development of a meticulously crafted execution framework aligned with organizational objectives and market dynamics.
                </p>
              </div>
              <div className="rounded-lg bg-primary-800/10 p-8 shadow-apple border border-primary-700/10">
                <h3 className="text-xl font-medium text-primary-50 mb-4">Implementation</h3>
                <p className="text-primary-300">
                  Precision-driven execution with adaptive management protocols to ensure optimal resource utilization and milestone achievement.
                </p>
              </div>
              <div className="rounded-lg bg-primary-800/10 p-8 shadow-apple border border-primary-700/10">
                <h3 className="text-xl font-medium text-primary-50 mb-4">Optimization & Scale</h3>
                <p className="text-primary-300">
                  Continuous performance enhancement through data-driven refinement and expansion of successful implementation vectors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-medium tracking-tight text-primary-50 sm:text-4xl">Ready to Accelerate Your Success?</h2>
            <p className="mt-6 text-lg leading-8 text-primary-300">
              Partner with OKLA Labs to unlock your organization&apos;s full potential through our proven execution framework.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-full bg-primary-50 px-8 py-3 text-sm font-medium text-primary-900 transition-all hover:bg-primary-200"
              >
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 