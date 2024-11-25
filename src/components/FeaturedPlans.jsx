const FeaturedPlans = () => {
  const plans = [
    {
      title: "Money Momentum",
      cagr: "7.20%",
      term: "3-Year Growth Plan",
      description: "Ideal for short-term savings with steady growth. Perfect for achieving your immediate financial goals.",
      color: "bg-gradient-to-r from-green-300 to-green-400 text-green-900",
    },
    {
      title: "Long-Term Wealth",
      cagr: "14.20%",
      term: "25-Year Investment",
      description: "Build generational wealth with high returns over the long term. Tailored for ambitious planners.",
      color: "bg-gradient-to-r from-gray-800 to-gray-900 text-white",
    },
    {
      title: "Focused Goals",
      cagr: "11.20%",
      term: "1-Year Target Plan",
      description: "Achieve specific financial objectives in just one year with precision-focused strategies.",
      color: "bg-gradient-to-r from-purple-300 to-purple-400 text-purple-900",
    },
    {
      title: "Fixed Income Assurance",
      cagr: "8.20%",
      term: "5-Year Stable Plan",
      description: "Ensure consistent income and financial security with reliable, fixed returns.",
      color: "bg-gradient-to-r from-yellow-300 to-yellow-400 text-yellow-900",
    },
  ];

  return (
    <section className="px-6 sm:px-12 lg:px-20 py-12 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        Featured Plans
      </h2>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl ${plan.color} shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl duration-300`}
          >
            {/* Plan Title */}
            <h3 className="text-3xl font-bold mb-2 tracking-wide">{plan.title}</h3>
            {/* Term */}
            <p className="text-lg font-medium mb-2">{plan.term}</p>
            {/* CAGR */}
            <p className="text-4xl font-bold mb-4">{plan.cagr}</p>
            {/* Description */}
            <p className="text-sm font-bold mb-6">{plan.description}</p>
            {/* Learn More Button */}
            <div className="flex items-center justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-md hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-all transform">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlans;
