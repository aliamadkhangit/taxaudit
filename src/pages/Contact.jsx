import ContactForm from "../components/Contactform";
import { motion } from "framer-motion";
import {
  buttonHover,
  buttonTap,
  fadeItem,
  sectionFadeUp,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

export default function Contact() {
  return (
    <>
      <ContactForm />
      <ContactCTA />
    </>
  );
}

function ContactCTA() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-indigo-900 text-white"
      variants={sectionFadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={staggerContainer}>
          <motion.h2
            variants={fadeItem}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to secure your business & taxes?
          </motion.h2>
          <motion.p
            variants={fadeItem}
            className="text-indigo-100 text-lg max-w-2xl mx-auto mb-8"
          >
            Get a confidential consultation with our legal and tax experts.
          </motion.p>
          <motion.div
            variants={fadeItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact-form"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="bg-white text-indigo-900 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Book your free consultation →
            </motion.a>
            <motion.a
              href="tel:+923001234567"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="border border-indigo-300 text-white font-medium py-3 px-8 rounded-xl hover:bg-indigo-800 transition"
            >
              Call us: +923288042464
            </motion.a>
          </motion.div>
          <motion.p
            variants={fadeItem}
            className="text-indigo-200 text-sm mt-8"
          >
            Response within 24 hours | 100% confidential
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
