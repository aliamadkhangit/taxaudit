import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Guideline", to: "/guideline" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-indigo-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-800">
              Trust<span className="text-indigo-700">Edge</span>
            </span>
            <span className="hidden md:inline-block text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
              Legal + Tax
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `font-medium transition text-sm lg:text-base ${
                    isActive
                      ? "text-indigo-700"
                      : "text-gray-600 hover:text-indigo-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="ml-4 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2.5 px-5 rounded-xl transition shadow-md hover:shadow-lg text-sm"
            >
              Book Consultation
            </NavLink>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-indigo-700 font-medium"
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 bg-indigo-700 text-white text-center py-2 rounded-lg font-semibold"
            >
              Book Consultation
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
