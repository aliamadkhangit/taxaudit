import ContactForm from "../components/Contactform";
import { motion } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  cardHover,
  fadeItem,
  sectionFadeUp,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

export default function ExpertiseSection() {
  const expertise = [
    {
      title: "Tax Strategy & Optimization",
      description:
        "Minimize liabilities with legal tax planning for individuals, SMEs, and corporations.",
      icon: "📈",
    },
    {
      title: "Corporate Law & Governance",
      description:
        "Board resolutions, shareholder agreements, and corporate restructuring.",
      icon: "🏛️",
    },
    {
      title: "Litigation Support",
      description:
        "Representation before tax tribunals, FBR, and regulatory authorities.",
      icon: "⚖️",
    },
    {
      title: "International Tax & Transfer Pricing",
      description:
        "Cross-border transactions, DTAA, and compliance for global businesses.",
      icon: "🌍",
    },
  ];

  return (
    <>
      <motion.section
        id="expertise"
        className="py-20 bg-gray-50"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section header */}
          <motion.div
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.span
              variants={fadeItem}
              className="text-indigo-600 font-semibold text-sm uppercase tracking-wide"
            >
              Core Expertise
            </motion.span>
            <motion.h2
              variants={fadeItem}
              className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
            >
              Deep-domain legal & tax mastery
            </motion.h2>
            <motion.div
              variants={fadeItem}
              className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"
            ></motion.div>
            <motion.p
              variants={fadeItem}
              className="text-gray-500 mt-5 text-lg"
            >
              Our team brings decades of combined experience from top-tier firms
              and regulatory bodies.
            </motion.p>
          </motion.div>

          {/* Expertise grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {expertise.map((area, idx) => (
              <motion.div
                key={idx}
                variants={fadeItem}
                whileHover={cardHover}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Authority-building stat bar */}
          <motion.div
            variants={fadeItem}
            className="mt-16 bg-indigo-900/5 rounded-2xl p-6 md:p-8 border border-indigo-100"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-indigo-800 font-bold text-2xl md:text-3xl">
                  <AnimatedCounter end={98} suffix="%" />
                </p>
                <p className="text-gray-700 text-sm">
                  client satisfaction rate
                </p>
              </div>
              <div className="w-px h-10 bg-indigo-200 hidden md:block"></div>
              <div className="text-center md:text-left">
                <p className="text-indigo-800 font-bold text-2xl md:text-3xl">
                  <AnimatedCounter end={2500} suffix="+" />
                </p>
                <p className="text-gray-700 text-sm">
                  tax returns filed successfully
                </p>
              </div>
              <div className="w-px h-10 bg-indigo-200 hidden md:block"></div>
              <div className="text-center md:text-left">
                <p className="text-indigo-800 font-bold text-2xl md:text-3xl">
                  <AnimatedCounter end={15} suffix="+" />
                </p>
                <p className="text-gray-700 text-sm">
                  years of combined legal experience
                </p>
              </div>
              <div className="w-px h-10 bg-indigo-200 hidden md:block"></div>
              <div className="text-center md:text-left">
                <p className="text-indigo-800 font-bold text-2xl md:text-3xl">
                  <AnimatedCounter end={100} suffix="%" />
                </p>
                <p className="text-gray-700 text-sm">
                  confidential & compliant
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA within expertise (subtle but reinforces action) */}
          <motion.div variants={fadeItem} className="text-center mt-12">
            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-800 transition"
            >
              Let our experts guide you
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      <ContactForm />
    </>
  );
}
