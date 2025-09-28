import React from 'react'

const Features = () => {
  const features = [
    {
      title: "Analytics Dashboard",
      description: "Get insights with our powerful analytics tools",
      icon: "📊"
    },
    {
      title: "Team Collaboration", 
      description: "Work together seamlessly with your team",
      icon: "👥"
    },
    {
      title: "API Integration",
      description: "Connect with your favorite tools and services", 
      icon: "🔗"
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it",
      icon: "🚀"
    },
    {
      title: "Security First",
      description: "Enterprise-grade security for your data",
      icon: "🔒"
    },
    {
      title: "Scalable Infrastructure", 
      description: "Grows with your business needs",
      icon: "⚡"
    }
  ]

  return (
    // No section landmark
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Poor heading hierarchy - skipping from h2 to h4 */}
        <div className="text-center mb-16">
          <h4 className="text-poor-text text-3xl font-bold mb-4">
            Powerful Features for Modern Teams
          </h4>
          <p className="text-poor-gray text-xl max-w-2xl mx-auto">
            Everything you need to streamline your workflow and boost productivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            // Poor semantic structure, using div instead of article
            <div key={index} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Emoji icons without proper labels */}
              <div className="text-4xl mb-4">{feature.icon}</div>
              
              {/* Inconsistent heading levels */}
              <h6 className="text-xl font-semibold text-poor-text mb-3">
                {feature.title}
              </h6>
              
              {/* Poor contrast description text */}
              <p className="text-poor-gray">
                {feature.description}
              </p>
              
              {/* Link without proper semantics */}
              <div className="mt-4 text-poor-blue cursor-pointer hover:underline">
                Learn more →
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action without proper button semantics */}
        <div className="text-center mt-16">
          <div className="bg-poor-green text-white px-8 py-3 rounded-lg text-lg font-medium cursor-pointer hover:bg-green-500 transition duration-200 inline-block">
            Explore All Features
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features