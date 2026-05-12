import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { BsMoon, BsSun } from "react-icons/bs";

import { AiOutlineHome } from "react-icons/ai";

import { FiPhone, FiAward } from "react-icons/fi";

import { RiBriefcaseLine } from "react-icons/ri";

export default function Navbar() {
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
      icon: <AiOutlineHome className="w-5 h-5" />,
    },

    {
      name: "Services",
      to: "/services",
      icon: <RiBriefcaseLine className="w-5 h-5" />,
    },

    {
      name: "Expertise",
      to: "/expertise",
      icon: <FiAward className="w-5 h-5" />,
    },

    {
      name: "Contact",
      to: "/contact",
      icon: <FiPhone className="w-5 h-5" />,
    },
  ];

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

  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-4 z-50 w-full hidden lg:flex justify-center px-4">
        <div
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
          <div className="flex items-center justify-between h-[72px] px-8">
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
                      text-base font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-indigo-600"
                          : "text-gray-700 dark:text-gray-300 hover:text-indigo-600"
                      }
                    `
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="
                w-11 h-11 rounded-full
                bg-gray-100 dark:bg-gray-800
                flex items-center justify-center
                text-gray-700 dark:text-gray-300
                hover:scale-105
                transition-all duration-300
              "
            >
              {isDark ? (
                <BsSun className="w-5 h-5" />
              ) : (
                <BsMoon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md">
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
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `
                    flex flex-col items-center justify-center
                    min-w-[60px]
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-indigo-600 scale-110"
                        : "text-gray-500 dark:text-gray-400"
                    }
                  `
                }
              >
                <div className="mb-1">{link.icon}</div>

                <span className="text-[11px] font-medium">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom spacing for mobile navbar */}
      <div className=" lg:h-6" />
    </>
  );
}
