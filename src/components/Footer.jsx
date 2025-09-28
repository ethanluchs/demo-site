import React from 'react'

const Footer = () => {
  return (
    // No footer landmark, poor semantic structure
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info without proper heading */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://via.placeholder.com/40x40/FFFFFF/3B82F6?text=S" 
                className="h-10 w-10"
                // Missing alt text
              />
              <div className="ml-2 text-xl font-bold">SaaSify</div>
            </div>
            <p className="text-poor-gray mb-4">
              Empowering businesses with innovative SaaS solutions for the modern world.
            </p>
            {/* Social media links without proper labels */}
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-poor-gray rounded cursor-pointer hover:bg-gray-600"></div>
              <div className="w-8 h-8 bg-poor-gray rounded cursor-pointer hover:bg-gray-600"></div>
              <div className="w-8 h-8 bg-poor-gray rounded cursor-pointer hover:bg-gray-600"></div>
            </div>
          </div>
          
          {/* Footer sections without proper headings */}
          <div>
            <p className="font-semibold mb-4 text-poor-gray">Product</p>
            <div className="space-y-2">
              <div className="text-poor-gray hover:text-white cursor-pointer">Features</div>
              <div className="text-poor-gray hover:text-white cursor-pointer">Pricing</div>
              <div className="text-poor-gray hover:text-white cursor-pointer">Integrations</div>
              <div className="text-poor-gray hover:text-white cursor-pointer">API</div>
            </div>
          </div>
          
          <div>
            <p className="font-semibold mb-4 text-poor-gray">Company</p>
            <div className="space-y-2">
              <div className="text-poor-gray hover:text-white cursor-pointer">About</div>
              <div className="text-poor-gray hover:text-white cursor-pointer">Careers</div>
              <div className="text-poor-gray hover:text-white cursor-pointer">Press</div>
              <div className="text-poor-gray hover:text-white cursor-pointer">Blog</div>
            </div>
          </div>
          
          <div>
            <p className="font-semibold mb-4 text-poor-gray">Support</p>
            <div className="space-y-2">
              <div className="text-poor-gray hover:text-white cursor-pointer">Help Center</div>
              <div className="text-poor-gray hover:text-white cursor-pointer">Contact</div>
              <div className="text-poor-gray hover:text-white cursor-pointer">Status</div>
              <div className="text-poor-gray hover:text-white cursor-pointer">Security</div>
            </div>
          </div>
        </div>
        
        {/* Newsletter signup without proper form semantics */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h6 className="text-lg font-semibold mb-2 text-poor-gray">Stay updated</h6>
              <p className="text-poor-gray">Get the latest news and updates</p>
            </div>
            
            {/* Form without proper semantics and labels */}
            <div className="flex">
              <div className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 w-64">
                {/* Input styled as div, no label */}
                <div className="text-poor-gray">Enter your email</div>
              </div>
              <div className="bg-poor-blue text-white px-6 py-2 rounded-r-lg cursor-pointer hover:bg-blue-600 transition duration-200">
                Subscribe
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright info without proper structure */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-poor-gray">
            © 2025 SaaSify. All rights reserved. 
            <span className="mx-2">|</span>
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="mx-2">|</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer