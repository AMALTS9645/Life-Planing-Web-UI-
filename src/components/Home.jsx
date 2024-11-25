const Home = () => (
  <section className="relative text-center py-20 px-8 bg-gradient-to-br from-[#005f73] via-[#0a9396] to-[#94d2bd] text-white overflow-hidden">
    {/* Background Decorative Elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#001219] via-[#005f73] to-[#0a9396] opacity-60"></div>
    <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#94d2bd] to-[#ee9b00] rounded-full blur-3xl opacity-40 animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-[#0a9396] to-[#ca6702] rounded-full blur-3xl opacity-40 animate-pulse"></div>

    {/* Content Overlay */}
    <div className="relative z-10">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
        Your Future, Planned <br />
        With Confidence and Care
      </h1>

      {/* Supporting Text */}
      <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-gray-100">
        Take charge of your tomorrow with tailored life plans that bring your dreams within reach.
      </p>

      {/* Email Subscription Form */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border border-gray-300 rounded-full px-6 py-3 text-lg placeholder-gray-300 bg-gray-900 bg-opacity-40 text-white focus:outline-none focus:ring-4 focus:ring-[#0a9396] transition-all w-full sm:max-w-md"
        />
        <button className="px-8 py-3 bg-gradient-to-r from-[#ca6702] via-[#ee9b00] to-[#94d2bd] text-white text-lg font-bold rounded-full shadow-lg hover:from-[#ee9b00] hover:to-[#005f73] hover:scale-105 transition-all">
          Get Started
        </button>
      </div>

      {/* Additional Call to Action */}
      <p className="mt-6 text-sm text-gray-100">
        Already have an account?{' '}
        <a
          href="#login"
          className="text-white underline hover:text-[#94d2bd] transition-all"
        >
          Log in here
        </a>
      </p>
    </div>
  </section>
);

export default Home;
