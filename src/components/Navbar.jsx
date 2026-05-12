import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { BsMoon, BsSun } from "react-icons/bs";

import { AiOutlineHome } from "react-icons/ai";

import { FiPhone, FiAward } from "react-icons/fi";

import { RiBriefcaseLine } from "react-icons/ri";
import { buttonHover, buttonTap, easeOutExpo } from "../lib/animations";

export default function Navbar() {
  const location = useLocation();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");

      if (saved === "dark") return true;
      if (saved === "light") return false;

      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return false;
  });

  const navLinks = [
    {
      name: "Home",
      to: "/",
      section: "top",
      icon: <AiOutlineHome className="w-5 h-5" />,
    },

    {
      name: "Services",
      to: "/services",
      section: "services",
      icon: <RiBriefcaseLine className="w-5 h-5" />,
    },

    {
      name: "Expertise",
      to: "/expertise",
      section: "expertise",
      icon: <FiAward className="w-5 h-5" />,
    },

    {
      name: "Contact",
      to: "/contact",
      section: "contact-form",
      icon: <FiPhone className="w-5 h-5" />,
    },
  ];

  const isMobileActive = (section) => {
    if (location.pathname !== "/") return false;

    if (section === "top") {
      return !location.hash || location.hash === "#top";
    }

    return location.hash === `#${section}`;
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = location.hash?.replace("#", "");

    if (!hash) return;

    const section = document.getElementById(hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: easeOutExpo }}
        className="sticky top-4 z-50 w-full hidden lg:flex justify-center px-4"
      >
        <motion.div
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
          className="
            w-[90%] max-w-7xl mx-auto
            bg-white/85 dark:bg-gray-900/85
            backdrop-blur-xl
            rounded-full
            shadow-xl shadow-black/5
            border border-gray-200 dark:border-gray-800
            transition-all duration-300
          "
        >
          <div className="flex items-center justify-between h-18 px-8">
            {/* Logo */}
            <Link
              to="/"
              className="
                text-2xl font-bold tracking-tight
                text-gray-900 dark:text-white
              "
            >
              Tax
              <span className="text-indigo-600">Aduite</span>
            </Link>

            {/* Desktop Links */}
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `
                      group relative text-base font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-indigo-600"
                          : "text-gray-700 dark:text-gray-300 hover:text-indigo-600"
                      }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-indigo-500 transition-transform duration-300 group-hover:scale-x-100" />
                      {isActive ? (
                        <motion.span
                          layoutId="desktop-active-pill"
                          className="absolute -bottom-1 left-0 h-0.5 w-full bg-indigo-600"
                        />
                      ) : null}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="
                w-11 h-11 rounded-full
                bg-gray-100 dark:bg-gray-800
                flex items-center justify-center
                text-gray-700 dark:text-gray-300
                transition-all duration-300
              "
            >
              {isDark ? (
                <BsSun className="w-5 h-5" />
              ) : (
                <BsMoon className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Bottom Navbar */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.08 }}
        className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md"
      >
        <div
          className="
            bg-white/90 dark:bg-gray-900/90
            backdrop-blur-xl
            border border-gray-200 dark:border-gray-800
            shadow-2xl shadow-black/10
            rounded-[30px]
            px-2 py-3
          "
        >
          <div className="flex items-center justify-around">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.section === "top" ? "/#top" : `/#${link.section}`}
                onClick={() => {
                  if (link.section === "top" && location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="flex min-w-15 justify-center"
              >
                {(() => {
                  const isActive = isMobileActive(link.section);

                  return (
                    <motion.div
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative flex flex-col items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "text-indigo-600"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="mobile-active-pill"
                          className="absolute -top-2 h-1 w-7 rounded-full bg-indigo-600"
                        />
                      ) : null}
                      <motion.div
                        className="mb-1"
                        animate={isActive ? { scale: 1.12 } : { scale: 1 }}
                        transition={{ duration: 0.22 }}
                      >
                        {link.icon}
                      </motion.div>
                      <span className="text-[11px] font-medium">
                        {link.name}
                      </span>
                    </motion.div>
                  );
                })()}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom spacing for mobile navbar */}
      <div className=" lg:h-6" />
    </>
  );
}
