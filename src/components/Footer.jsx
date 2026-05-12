import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="font-bold text-white text-xl">TrustEdge</span>
            </div>
            <p className="text-sm max-w-xs">
              Professional legal & tax solutions built on trust and expertise.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="text-white font-semibold mb-3">Quick links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-indigo-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-indigo-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-indigo-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2025 TrustEdge. All rights reserved. Empowering Pakistan’s
          businesses.
        </div>
      </div>
    </footer>
  );
}
