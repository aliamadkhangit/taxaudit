import { useState } from "react";
import {
  ShieldCheck,
  FileCheck,
  Star,
  Users,
  Clock,
  Award,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Licensed Tax Consultants",
    description: "Certified professionals with years of industry experience",
    stat: "15+",
    statLabel: "Years combined",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: FileCheck,
    title: "100% Compliance Assurance",
    description: "Guaranteed adherence to all regulatory requirements",
    stat: "100%",
    statLabel: "Success rate",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Star,
    title: "Client Trusted Excellence",
    description: "4.9/5 rating from 200+ satisfied clients",
    stat: "4.9",
    statLabel: "Average rating",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Users,
    title: "500+ Business Served",
    description: "From startups to established enterprises",
    stat: "500+",
    statLabel: "Happy clients",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Clock,
    title: "24/7 Expert Support",
    description: "Round-the-clock assistance for urgent matters",
    stat: "24/7",
    statLabel: "Availability",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Award,
    title: "Industry Recognized",
    description: "Featured in leading legal & business publications",
    stat: "12",
    statLabel: "Awards won",
    color: "from-rose-500 to-red-600",
  },
];

export default function TrustSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider bg-indigo-50 px-4 py-1.5 rounded-full inline-block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Trusted by professionals across Pakistan
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto">
            We combine legal expertise, tax mastery, and business acumen to
            deliver uncompromising quality.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient accent line on top */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${point.color} rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></div>

              <div className="flex items-start gap-4">
                {/* Icon container with gradient background */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all`}
                >
                  <point.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-indigo-700 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {point.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-indigo-600">
                      {point.stat}
                    </span>
                    <span className="text-xs text-gray-500">
                      {point.statLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative corner dot */}
              <div className="absolute bottom-3 right-3 w-2 h-2 bg-indigo-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Bar – Additional Authority */}
        <div className="mt-16 bg-indigo-900 rounded-2xl p-8 text-center text-white shadow-xl">
          <div className="flex flex-col md:flex-row justify-around items-center gap-6">
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-indigo-200 text-sm">Client Satisfaction</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-indigo-700"></div>
            <div>
              <div className="text-3xl font-bold">2500+</div>
              <div className="text-indigo-200 text-sm">Tax Returns Filed</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-indigo-700"></div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-indigo-200 text-sm">Years Experience</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-indigo-700"></div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-indigo-200 text-sm">Confidential</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
