import { Mail, Shield, Award, Briefcase } from "lucide-react";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  buttonHover,
  buttonTap,
  fadeItem,
  floatingBlob,
  sectionFadeUp,
  staggerContainer,
  viewportOnce,
} from "../../lib/animations";

const heroWords = ["Expert", "Tax", "&", "Corporate"];

export default function HeroSection() {
  return (
    <>
      <motion.section
        variants={sectionFadeUp}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden bg-linear-to-br from-[#f8fafd] via-white to-indigo-50/30 pt-20 pb-28 md:pt-5 md:pb-36"
      >
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            {...floatingBlob}
            className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"
          />
          <motion.div
            {...floatingBlob}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {/* Trust badge */}
              <motion.div
                variants={fadeItem}
                className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6"
              >
                <Shield className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">
                  Pakistan's Trusted Tax & Legal Partner
                </span>
              </motion.div>

              <motion.h1
                variants={staggerContainer}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight"
              >
                {heroWords.map((word) => (
                  <motion.span
                    key={word}
                    variants={fadeItem}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
                <span className="text-indigo-700 relative inline-block">
                  Solutions
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-indigo-200"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 4 L200 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </span>
                <br />
                for{" "}
                <span className="text-indigo-700">
                  Individuals & Businesses
                </span>
              </motion.h1>

              <motion.p
                variants={fadeItem}
                className="text-lg sm:text-xl text-gray-600 mt-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Helping businesses and professionals handle tax filing, company
                registration, compliance, and legal documentation with
                confidence and clarity.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeItem}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
              >
                <motion.a
                  href="#contact-form"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="group bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3.5 px-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Book Consultation
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
                >
                  Explore Services
                </motion.a>
              </motion.div>

              {/* Trust Text + Social Icons Row */}
              <motion.div
                variants={fadeItem}
                className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto lg:mx-0"
              >
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <span className="text-indigo-600 text-lg">✓</span>
                  Trusted by startups, business owners, freelancers, and growing
                  companies across Pakistan.
                </p>

                {/* Social Icons - Professional Presence */}
                <div className="flex items-center gap-3">
                  {/* <span className="text-xs text-gray-400">Follow us:</span>
                <a
                  href="https://linkedin.com/company/trustedge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a> */}
                  <motion.a
                    href="https://twitter.com/trustedge"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </motion.a>
                  {/* <a
                  href="https://github.com/trustedge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a> */}
                  <motion.a
                    href="mailto:hello@trustedge.com"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Enhanced Authority Card */}
            <motion.div
              className="flex-1 max-w-md w-full"
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-indigo-100/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-12 -mt-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-14 w-14 bg-linear-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center shadow-md">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 text-lg">
                        10+ Years of Excellence
                      </span>
                      <p className="text-xs text-gray-500">
                        Industry leadership
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Briefcase className="w-4 h-4 text-indigo-600" />
                      <span className="text-gray-700">
                        2500+ tax returns filed successfully
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Shield className="w-4 h-4 text-indigo-600" />
                      <span className="text-gray-700">
                        100% compliance & confidentiality
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 italic">
                      "Recognized by leading chambers & professional bodies
                      across Pakistan."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Stats Row */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                  <div className="text-xl font-bold text-indigo-700">98%</div>
                  <div className="text-xs text-gray-500">Satisfaction</div>
                </div>
                <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                  <div className="text-xl font-bold text-indigo-700">15+</div>
                  <div className="text-xs text-gray-500">Experts</div>
                </div>
                <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                  <div className="text-xl font-bold text-indigo-700">24/7</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
