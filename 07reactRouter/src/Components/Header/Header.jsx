import React from "react";
import { Link, NavLink } from "react-router"; // Use "react-router-dom" for routing

export default function Header() {
    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <nav className="px-4 py-4 sm:px-8 lg:px-12 border-b border-gray-200">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
              {/* Logo Section */}
              <Link to="/" className="flex items-center">
                <img
                  src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                  alt="Logo"
                  className="h-10 sm:h-12"
                />
              </Link>
    
              {/* Navigation Menu */}
              <div className="hidden lg:flex space-x-8 items-center">
                <ul className="flex space-x-8">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `text-lg font-medium ${isActive ? "text-orange-600" : "text-gray-800"} hover:text-orange-700 transition duration-300`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `text-lg font-medium ${isActive ? "text-orange-600" : "text-gray-800"} hover:text-orange-700 transition duration-300`
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `text-lg font-medium ${isActive ? "text-orange-600" : "text-gray-800"} hover:text-orange-700 transition duration-300`
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Github"
                      className={({ isActive }) =>
                        `text-lg font-medium ${isActive ? "text-orange-600" : "text-gray-800"} hover:text-orange-700 transition duration-300`
                      }
                    >
                      Github
                    </NavLink>
                  </li>
                  
                </ul>
              </div>
    
              {/* Login and Get Started Buttons */}
              <div className="flex items-center space-x-4">
                <Link
                  to="#"
                  className="text-gray-800 bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-lg font-semibold transition duration-300"
                >
                  Log in
                </Link>
                <Link
                  to="#"
                  className="text-white bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-lg font-semibold transition duration-300"
                >
                  Get Started
                </Link>
              </div>
    
              {/* Mobile Menu Toggle (not visible on large screens) */}
              <div className="lg:hidden">
                <button className="text-gray-800 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>
      );
}
