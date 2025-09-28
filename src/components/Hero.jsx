import React from 'react'

const Hero = () => {
  return (
    // No section landmark, poor heading hierarchy
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Wrong heading level - should be h1, but using h2 */}
          <h2 className="text-poor-text text-5xl font-bold mb-6">
            Transform Your Business with SaaSify
          </h2>
          
          {/* Poor contrast text */}
          <p className="text-xl text-poor-gray mb-8 max-w-3xl mx-auto">
            Streamline your workflow, boost productivity, and scale your business with our cutting-edge SaaS platform. Join thousands of companies already transforming their operations.
          </p>
          
          {/* Buttons without proper semantics and poor contrast */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-poor-blue text-white px-8 py-3 rounded-lg text-lg font-medium cursor-pointer hover:bg-blue-600 transition duration-200">
              Start Free Trial
            </div>
            <div className="border border-poor-gray text-poor-text px-8 py-3 rounded-lg text-lg font-medium cursor-pointer hover:bg-gray-50 transition duration-200">
              Watch Demo
            </div>
          </div>
          
          {/* Missing alt text for hero image */}
          <div className="mt-16">
            <img 
              src="https://via.placeholder.com/800x400/E5E7EB/6B7280?text=Dashboard+Preview" 
              className="mx-auto rounded-xl shadow-2xl"
              // No alt text
            />
          </div>
          
          {/* Social proof without semantic meaning */}
          <div className="mt-16">
            <p className="text-poor-gray text-sm mb-8">Trusted by industry leaders</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Company logos without alt text */}
              <img src="https://via.placeholder.com/100x40/9CA3AF/FFFFFF?text=Logo1" />
              <img src="https://via.placeholder.com/100x40/9CA3AF/FFFFFF?text=Logo2" />
              <img src="https://via.placeholder.com/100x40/9CA3AF/FFFFFF?text=Logo3" />
              <img src="https://via.placeholder.com/100x40/9CA3AF/FFFFFF?text=Logo4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero