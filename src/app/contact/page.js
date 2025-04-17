'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    
    try {
      // Send data to our API endpoint that connects to Google Sheets
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        // Success - show thank you message
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        })
      } else {
        // Handle validation or server errors
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMessage('Failed to submit form. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <div className="bg-primary-900 min-h-screen">
      <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 relative">
        {/* Decorative elements */}
        <div className="absolute top-24 right-4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-24 left-4 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/3 left-1/4 w-[1px] h-[30vh] bg-gradient-to-b from-primary-50/0 via-primary-50/20 to-primary-50/0 -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl font-medium tracking-tight text-primary-50 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get in Touch
            </motion.h1>
            <div className="mt-3 mx-auto w-24 h-[1px] bg-gradient-to-r from-primary-50/0 via-primary-50/80 to-primary-50/0"></div>
            <motion.p 
              className="mt-8 text-lg leading-8 text-primary-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to elevate your digital presence? Contact us to discuss your project requirements.
            </motion.p>
          </motion.div>
          
          {isSubmitted ? (
            <motion.div
              className="mx-auto max-w-xl rounded-2xl bg-primary-800/10 backdrop-blur-sm p-8 md:p-12 border border-primary-600/10 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-800/30 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-medium text-primary-50 mb-4">Thank You</h2>
                <p className="text-primary-300 mb-8">
                  Your message has been received. We&apos;ll be in touch with you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="rounded-full bg-primary-800/20 border border-primary-700/20 px-6 py-2 text-sm font-medium text-primary-200 transition-all hover:bg-primary-700/30"
                >
                  Send Another Message
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="mx-auto max-w-xl rounded-2xl bg-primary-800/10 backdrop-blur-sm p-8 md:p-12 border border-primary-600/10 shadow-xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {errorMessage && (
                <motion.div 
                  className="mb-6 p-4 bg-red-900/20 border border-red-800/30 rounded-lg text-red-300 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {errorMessage}
                </motion.div>
              )}
              
              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-primary-800/20 px-4 py-3 text-primary-100 shadow-sm ring-1 ring-inset ring-primary-700/30 placeholder:text-primary-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-primary-800/20 px-4 py-3 text-primary-100 shadow-sm ring-1 ring-inset ring-primary-700/30 placeholder:text-primary-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all"
                    placeholder="you@example.com"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="company" className="block text-sm font-medium text-primary-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-primary-800/20 px-4 py-3 text-primary-100 shadow-sm ring-1 ring-inset ring-primary-700/30 placeholder:text-primary-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all"
                    placeholder="Your company name"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-primary-800/20 px-4 py-3 text-primary-100 shadow-sm ring-1 ring-inset ring-primary-700/30 placeholder:text-primary-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all"
                    placeholder="How can we help you?"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="mt-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-gradient-to-r from-primary-50 to-primary-100 px-8 py-3 text-base font-medium text-primary-900 transition-all hover:from-primary-100 hover:to-primary-200 shadow-lg hover:shadow-xl disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.div>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  )
} 