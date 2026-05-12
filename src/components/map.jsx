import { motion } from "framer-motion";
import {
  buttonHover,
  buttonTap,
  cardHover,
  fadeItem,
  sectionFadeUp,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

export default function LocationMap() {
  const OfficeAddress = "DHA Phase 5, Lahore, Pakistan";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217958.6880388857!2d74.20311165!3d31.48212055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903eb7c1dd6c7%3A0xa4a279ab33614dc7!2sDHA%20Phase%205%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715600000000!5m2!1sen!2s";

  return (
    <motion.section
      id="location"
      className="py-16 bg-gray-50"
      variants={sectionFadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div variants={staggerContainer} className="text-center mb-10">
          <motion.span
            variants={fadeItem}
            className="text-indigo-600 font-semibold text-sm uppercase tracking-wide"
          >
            Visit Our Office
          </motion.span>
          <motion.h2
            variants={fadeItem}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            We’re located in the heart of the business district
          </motion.h2>
          <motion.p
            variants={fadeItem}
            className="text-gray-500 max-w-2xl mx-auto mt-3"
          >
            Drop by for a face‑to‑face consultation or reach us through the
            form.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-8 items-stretch"
        >
          {/* Map container */}
          <motion.div
            variants={fadeItem}
            whileHover={cardHover}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-80 md:h-auto min-h-75"
          >
            <iframe
              title="TrustEdge Office Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>

          {/* Address & details */}
          <motion.div
            variants={fadeItem}
            whileHover={cardHover}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-center border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-indigo-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Main Office</h3>
                <p className="text-gray-600 mt-1">{OfficeAddress}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Suite 204, Business Arcade
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-indigo-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  Working Hours
                </h3>
                <p className="text-gray-600">
                  Monday – Friday: 9:00 AM – 6:00 PM
                </p>
                <p className="text-gray-500 text-sm">
                  Saturday: 10:00 AM – 2:00 PM (virtual only)
                </p>
              </div>
            </div>

            <motion.a
              href="https://maps.google.com/?q=DHA+Phase+5+Lahore+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="inline-flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 font-semibold py-2.5 px-5 rounded-xl hover:bg-indigo-100 transition mt-2"
            >
              Get Directions
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
