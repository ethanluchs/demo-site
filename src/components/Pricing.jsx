import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month", 
      features: [
        "Up to 5 users",
        "10GB storage", 
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      features: [
        "Up to 25 users",
        "100GB storage",
        "Advanced analytics", 
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise", 
      price: "$99",
      period: "/month",
      features: [
        "Unlimited users",
        "1TB storage",
        "Enterprise analytics",
        "24/7 phone support", 
        "Advanced API",
        "Custom features",
        "Dedicated manager"
      ],
      popular: false
    }
  ]

  return (
    // No section landmark, poor background contrast
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrong heading level */}
        <div className="text-center mb-16">
          <h5 className="text-poor-text text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h5>
          <p className="text-poor-gray text-xl max-w-2xl mx-auto">
            Choose the plan that fits your team's needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            // Using div instead of article, missing proper structure
            <div 
              key={index} 
              className={`relative p-8 rounded-xl border-2 ${
                plan.popular 
                  ? 'border-poor-blue bg-white shadow-lg' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              {/* Popular badge without proper semantics */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-poor-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Poor heading hierarchy */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-poor-text mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-poor-text">
                    {plan.price}
                  </span>
                  <span className="text-poor-gray ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>
              
              {/* Feature list without proper list semantics */}
              <div className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center mb-3">
                    {/* Checkmark without proper alt text or semantic meaning */}
                    <span className="text-poor-green mr-3">✓</span>
                    <span className="text-poor-text">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Button without proper semantics */}
              <div 
                className={`w-full py-3 px-6 rounded-lg text-center font-medium cursor-pointer transition duration-200 ${
                  plan.popular
                    ? 'bg-poor-blue text-white hover:bg-blue-600'
                    : 'bg-gray-100 text-poor-text hover:bg-gray-200'
                }`}
              >
                Get Started
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional info without proper structure */}
        <div className="text-center mt-16">
          <p className="text-poor-gray mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <div className="text-poor-blue cursor-pointer hover:underline">
            Need a custom plan? Contact our sales team
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing