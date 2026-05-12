import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Tax Filing & Advisory",
    desc: "Individual & corporate tax returns, sales tax, income tax planning, and strategic tax optimization.",
    icon: "📊",
    gradient: "from-blue-50 to-indigo-50",
    link: "/services/tax-advisory",
  },
  {
    id: 2,
    title: "Company Registration",
    desc: "Private limited, sole proprietorship, partnership, and LLC setup with SECP compliance.",
    icon: "🏢",
    gradient: "from-emerald-50 to-teal-50",
    link: "/services/company-registration",
  },
  {
    id: 3,
    title: "Legal Compliance",
    desc: "SECP filings, labor laws, data protection, and regulatory compliance for all business types.",
    icon: "⚖️",
    gradient: "from-purple-50 to-pink-50",
    link: "/services/legal-compliance",
  },
  {
    id: 4,
    title: "Corporate Legal Docs",
    desc: "Contracts, agreements, memorandum, article drafting, and legal due diligence.",
    icon: "📑",
    gradient: "from-amber-50 to-orange-50",
    link: "/services/corporate-docs",
  },
];

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider bg-indigo-50 px-4 py-1.5 rounded-full inline-block">
            What we offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Service‑based solutions for your business
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto">
            End‑to‑end legal and tax support tailored to your needs, delivered
            with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative p-6 z-10">
                <div className="text-5xl mb-5 transition-transform duration-300 group-hover:scale-110 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-indigo-600 font-medium text-sm group-hover:text-indigo-800 transition-colors"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-indigo-600/5 rounded-tl-3xl group-hover:bg-indigo-600/10 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA (optional, strengthens trust) */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Need a custom solution?{" "}
            <Link
              to="/contact"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Talk to our experts →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
