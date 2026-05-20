import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/923288042464"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#1ebc57] z-50 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center ring-2 ring-white/10"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        className="w-5 h-5 sm:w-7 sm:h-7"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M20.52 3.48a11.6 11.6 0 0 0-16.49 0 11.6 11.6 0 0 0 0 16.49L1 23l3.03-.8A11.6 11.6 0 0 0 12 24C18.627 24 24 18.627 24 12c0-3.177-1.241-6.164-3.48-8.52zM12.02 21.07c-2.05 0-3.98-.55-5.64-1.58l-.39-.25-3.38.89.9-3.31-.26-.36A8.28 8.28 0 0 1 3.12 12C3.12 7.03 7.05 3.12 12 3.12S20.88 7.03 20.88 12 16.99 21.07 12.02 21.07zM16.98 14.74c-.28-.14-1.65-.81-1.9-.9s-.37-.13-.54.14-.6.9-.74 1.08-.27.21-.51.07c-.25-.14-1.04-.38-1.98-1.22-.73-.64-1.21-1.43-1.35-1.67-.14-.24-.01-.37.1-.5.1-.1.23-.27.34-.41.11-.13.14-.23.2-.38.06-.15.03-.28-.01-.39-.04-.11-.4-1.03-.55-1.41-.15-.36-.31-.31-.48-.31-.18-.003-.38-.003-.58-.003s-.41.06-.62.29c-.2.23-.77.74-.77 1.8 0 1.06.87 2.42 1 2.6.12.18 1.78 2.66 4.73 3.86.66.28 1.2.43 1.61.56.67.22 1.28.19 1.77.11.54-.09 1.66-.67 1.9-1.32.25-.65.25-1.21.17-1.4-.09-.19-.32-.3-.58-.44z"
        />
      </svg>
    </motion.a>
  );
}
