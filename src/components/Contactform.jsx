import emailjs from "emailjs-com";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  buttonHover,
  buttonTap,
  cardHover,
  fadeItem,
  sectionFadeUp,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "tax-consultation",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      nextErrors.service = "Please select a service.";
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
    if (formErrors[name]) {
      setFormErrors((currentErrors) => {
        const nextErrors = { ...currentErrors };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      setSubmitStatus(null);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setFormErrors({});

    try {
      const result = await emailjs.send(
        "service_g5zv7as",
        "template_4oqakjo",
        {
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message: formData.message.trim(),
        },
        "wAHMhgO07gRmjvqj1",
      );

      console.log("Email sent:", result.text);
      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "tax-consultation",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact-form"
      className="py-20 bg-white"
      variants={sectionFadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side – info + trust badges */}
          <motion.div variants={staggerContainer}>
            <motion.span
              variants={fadeItem}
              className="text-indigo-600 font-semibold text-sm uppercase tracking-wide"
            >
              Get in touch
            </motion.span>
            <motion.h2
              variants={fadeItem}
              className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
            >
              Let’s talk about your{" "}
              <span className="text-indigo-700">legal & tax needs</span>
            </motion.h2>
            <motion.p
              variants={fadeItem}
              className="text-gray-500 mt-4 text-lg"
            >
              Fill out the form and one of our experts will reach out within 24
              hours.
            </motion.p>

            <motion.div variants={fadeItem} className="mt-8 space-y-5">
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start gap-4"
              >
                <div className="bg-indigo-50 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-indigo-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email support</h3>
                  <p className="text-gray-500">taxaudit486@gmail.com</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start gap-4"
              >
                <div className="bg-indigo-50 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-indigo-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Call us</h3>
                  <p className="text-gray-500">+923288042464</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start gap-4"
              >
                <div className="bg-indigo-50 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-indigo-700"
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
                  <h3 className="font-semibold text-gray-800">
                    Quick response
                  </h3>
                  <p className="text-gray-500">Average reply time: 4 hours</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Trust badge row */}
            <motion.div
              variants={fadeItem}
              className="mt-10 flex flex-wrap gap-4"
            >
              <div className="bg-gray-50 rounded-full px-4 py-2 text-xs font-medium text-gray-600">
                🔒 100% Confidential
              </div>
              <div className="bg-gray-50 rounded-full px-4 py-2 text-xs font-medium text-gray-600">
                ⚡ No obligation quote
              </div>
              <div className="bg-gray-50 rounded-full px-4 py-2 text-xs font-medium text-gray-600">
                ✅ Secure transmission
              </div>
            </motion.div>
          </motion.div>

          {/* Right side – form */}
          <motion.div
            variants={fadeItem}
            whileHover={cardHover}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Request a consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.fullName)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none ${
                    formErrors.fullName
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Full Name"
                />
                {formErrors.fullName && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.email)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none ${
                    formErrors.email
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="conatct@example.com"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none"
                  placeholder="+92"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service interested in *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.service)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none bg-white ${
                    formErrors.service
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
                >
                  <option value="tax-consultation">Tax Consultation</option>
                  <option value="company-registration">
                    Company Registration
                  </option>
                  <option value="legal-compliance">Legal Compliance</option>
                  <option value="corporate-docs">Corporate Legal Docs</option>
                  <option value="other">Other / Not sure</option>
                </select>
                {formErrors.service && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.service}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message / Questions
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none"
                  placeholder="Tell us about your requirement..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3.5 rounded-xl transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send message →"
                )}
              </motion.button>

              <AnimatePresence mode="wait">
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm flex items-center gap-2"
                  >
                    <span>✓</span> Thank you! We’ll get back to you shortly.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm"
                  >
                    Something went wrong. Please try again or call us directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
