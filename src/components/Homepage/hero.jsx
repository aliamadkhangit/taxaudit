export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50/40 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Expert Tax & Corporate Solutions{" "}
              <br className="hidden sm:block" />
              for{" "}
              <span className="text-indigo-700">Individuals & Businesses</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
              Helping businesses and professionals handle tax filing, company
              registration, compliance, and legal documentation with confidence
              and clarity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <a
                href="#book-consultation"
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              >
                Book Consultation
              </a>
              <a
                href="#services"
                className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-xl shadow-sm transition-all text-center"
              >
                Explore Services
              </a>
            </div>

            {/* Small Trust Text */}
            <div className="pt-6 border-t border-gray-200/70 max-w-md mx-auto md:mx-0">
              <p className="text-sm text-gray-500 flex items-center gap-2 justify-center md:justify-start">
                <span className="text-indigo-600 text-lg">✓</span> Trusted by
                startups, business owners, freelancers, and growing companies
                across Pakistan.
              </p>
            </div>
          </div>

          {/* Right decorative element (optional authority symbol) */}
          <div className="hidden md:block flex-1 max-w-sm">
            <div className="bg-indigo-50/80 rounded-2xl p-6 shadow-xl border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-indigo-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800">
                  10+ Years of Excellence
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Recognized by leading chambers & professional bodies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
