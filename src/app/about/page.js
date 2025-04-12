'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function AboutPage() {
  // Section refs for animations
  const missionRef = useRef(null)
  const leadershipRef = useRef(null)
  const expertiseRef = useRef(null)

  // Enhanced animations
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for smoother motion
    }
  }

  return (
    <div className="bg-primary-900 min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-24 left-4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-24 right-4 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Hero section with improved parallax effect */}
      <section className="pt-32 pb-10 sm:pt-40 sm:pb-12 relative">
        <motion.div 
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-0 left-1/3 w-[1px] h-[30vh] bg-gradient-to-b from-primary-50/0 via-primary-50/20 to-primary-50/0"></div>
          <div className="absolute top-20 right-1/4 w-[1px] h-[25vh] bg-gradient-to-b from-primary-50/0 via-primary-50/10 to-primary-50/0"></div>
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl font-medium tracking-tight text-primary-50 sm:text-6xl">
                Our Story
              </h1>
              <div className="mt-3 mx-auto w-24 h-[1px] bg-gradient-to-r from-primary-50/0 via-primary-50/80 to-primary-50/0"></div>
            </motion.div>
            <motion.p 
              className="mt-8 text-lg leading-8 text-primary-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Founded by former AWS leaders and military digital transformation experts, 
              OKLA Labs brings enterprise-grade solutions to forward-thinking organizations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company mission section with refined styling */}
      <motion.section 
        className="pt-10 pb-24 sm:pt-12 sm:pb-32 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        ref={missionRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-medium tracking-tight text-primary-50 sm:text-4xl">
                Our Mission
              </h2>
              <div className="mt-3 mx-auto w-24 h-[1px] bg-gradient-to-r from-primary-50/0 via-primary-50/80 to-primary-50/0"></div>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="backdrop-blur-sm"
              >
                <p className="text-lg text-primary-200 mb-6 leading-relaxed">
                  At OKLA Labs, we exist to bridge the gap between enterprise-level digital innovation and organizations of all sizes. Our mission is to democratize access to transformative technology solutions that drive measurable growth.
                </p>
                <p className="text-lg text-primary-200 leading-relaxed">
                  By combining our expertise from AWS and military digital transformation projects, we deliver solutions that are both technically excellent and strategically sound.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="backdrop-blur-sm"
              >
                <h3 className="text-xl font-medium text-primary-50 mb-6">Core Values</h3>
                <ul className="space-y-4">
                  {["Technical Excellence Without Compromise", "Client-Centric Solutions", "Data-Driven Decision Making", "Operational Discipline", "Continuous Innovation"].map((value, i) => (
                    <motion.li 
                      key={value} 
                      className="flex gap-x-3 text-primary-300"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary-500 flex-none">•</span>
                      <span>{value}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership section with premium styling */}
      <section 
        className="py-24 sm:py-32 bg-primary-900 relative" 
        ref={leadershipRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-medium tracking-tight text-primary-50 sm:text-4xl">
              Our Leadership
            </h2>
            <div className="mt-3 mx-auto w-24 h-[1px] bg-gradient-to-r from-primary-50/0 via-primary-50/80 to-primary-50/0"></div>
            <p className="mt-8 text-lg leading-8 text-primary-300">
              With decades of combined experience, our leadership team brings unparalleled expertise to every client engagement.
            </p>
          </motion.div>
          
          <motion.div 
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="rounded-2xl bg-primary-800/10 backdrop-blur-sm p-8 md:p-12 lg:p-16 border border-primary-600/10 shadow-xl">
              <motion.p 
                className="text-lg text-primary-200 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our executive team comprises former AWS senior architects and strategists who have directed enterprise-scale digital transformation initiatives for Fortune 500 companies. Their cloud engineering expertise has consistently delivered 40%+ reductions in operational costs while enhancing system reliability to 99.99% uptime.
              </motion.p>
              
              <motion.p 
                className="text-lg text-primary-200 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Additionally, our leadership includes veterans who spearheaded digital modernization programs for the U.S. Navy and Marine Corps, overseeing the transformation of mission-critical applications and communication systems. This unique combination of corporate and military experience instills a culture of precision, discipline, and strategic thinking that drives exceptional results for our clients.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium text-primary-50 mb-5">Collective Expertise</h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-primary-600/0 via-primary-600/30 to-primary-600/0 mb-6"></div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {['AWS', 'Digital Transformation', 'Enterprise Architecture', 'Military Systems', 'UX/UI Design', 'Web Application Development', 'Cloud Architecture', 'Growth Engineering', 'Sales Strategy', 'Customer Experience'].map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    className="inline-flex items-center rounded-full bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 px-4 py-1.5 text-sm text-primary-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + (i * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.1)", 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise section with enhanced visuals */}
      <section 
        className="py-24 sm:py-32 relative overflow-hidden"
        ref={expertiseRef}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-400/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-medium tracking-tight text-primary-50 sm:text-4xl">Our Expertise</h2>
            <div className="mt-3 mx-auto w-24 h-[1px] bg-gradient-to-r from-primary-50/0 via-primary-50/80 to-primary-50/0"></div>
            <p className="mt-8 text-lg leading-8 text-primary-300">
              Leveraging our extensive experience across various domains to deliver comprehensive solutions.
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
              {[
                {
                  title: "AWS & Cloud Engineering",
                  description: "Our team brings direct experience from AWS, implementing cloud-native solutions that optimize performance, security, and cost-efficiency for organizations of all sizes.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                    </svg>
                  )
                },
                {
                  title: "Military-Grade Digital Systems",
                  description: "With extensive experience transforming digital operations in the U.S. Navy and Marine Corps, we bring military-grade precision and security to every implementation.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  )
                },
                {
                  title: "Web Application Development",
                  description: "From front-end user experiences to back-end infrastructure, our team builds scalable, responsive web applications that deliver exceptional performance across all devices.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  )
                },
                {
                  title: "Growth Engineering",
                  description: "We combine data analytics, conversion optimization, and strategic customer acquisition techniques to create sustainable growth frameworks for our clients.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  className="rounded-xl bg-primary-800/10 backdrop-blur-sm p-8 border border-primary-700/20 shadow-apple"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-800/50 text-primary-200">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-medium text-primary-50">{item.title}</h3>
                  </div>
                  <p className="text-primary-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA section with enhanced appeal */}
      <section className="py-24 sm:py-32 bg-primary-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-1/3 h-1/2 bg-primary-600/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-medium tracking-tight text-primary-50 sm:text-4xl">Ready to Work With Us?</h2>
            <p className="mt-6 text-lg leading-8 text-primary-300">
              Experience the unique advantage of working with a team that brings AWS expertise and military precision to your digital challenges.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-6">
              <motion.a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-primary-50 to-primary-100 px-8 py-3 text-sm font-medium text-primary-900 transition-all hover:from-primary-100 hover:to-primary-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/services"
                className="text-sm font-medium text-primary-200 transition-all flex items-center gap-1 group"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                Explore Our Services 
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 