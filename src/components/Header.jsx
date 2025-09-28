import React from 'react'

const Header = () => {
  return (
    // No nav landmark, no aria-label for navigation
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo without proper semantic meaning */}
          <div className="flex items-center">
            <img 
              src="https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=S" 
              className="h-10 w-10"
              // Missing alt text
            />
            <div className="ml-2 text-xl font-bold text-poor-text">SaaSify</div>
          </div>
          
          {/* Navigation without proper structure */}
          <div className="hidden md:flex space-x-8">
            {/* Links without focus indicators, poor contrast */}
            <div className="text-poor-text hover:text-gray-900 cursor-pointer">Features</div>
            <div className="text-poor-text hover:text-gray-900 cursor-pointer">Pricing</div>
            <div className="text-poor-text hover:text-gray-900 cursor-pointer">About</div>
            <div className="text-poor-text hover:text-gray-900 cursor-pointer">Contact</div>
          </div>
          
          {/* Button without proper semantics */}
          <div className="flex items-center space-x-4">
            <div className="text-poor-text hover:text-gray-900 cursor-pointer">Sign In</div>
            {/* Button styled as div, missing role */}
            <div className="bg-poor-blue text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">
              Get Started
            </div>
          </div>
          
          {/* Mobile menu button without accessibility */}
          <div className="md:hidden">
            <div className="p-2 cursor-pointer">
              {/* Hamburger icon without proper label */}
              <div className="w-6 h-6">
                <div className="w-full h-0.5 bg-gray-600 mb-1"></div>
                <div className="w-full h-0.5 bg-gray-600 mb-1"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header