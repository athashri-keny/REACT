import React from 'react'
import { Link } from 'react-router';
export default function Home() {

    return (
        <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="relative py-20 sm:py-32 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg text-white shadow-lg">
            <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Unlock Your Potential with Lorem Ipsum
              </h1>
              <p className="text-lg sm:text-xl text-white opacity-80">
                A tool that helps you to streamline your work effortlessly and efficiently. Download now to get started!
              </p>
    
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-600 transition duration-300"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                Download Now
              </Link>
            </div>
    
            <div className="absolute inset-0 flex justify-center items-center sm:my-20">
              <img
                className="w-96 sm:w-auto h-auto object-contain"
                src="https://i.ibb.co/5BCcDYB/Remote2.png"
                alt="product"
              />
            </div>
          </section>
    
          {/* Image Section */}
          <div className="grid place-items-center mt-20">
            <img
              className="w-64 sm:w-96 rounded-lg shadow-lg"
              src="https://i.ibb.co/2M7rtLk/Remote1.png"
              alt="product feature"
            />
          </div>
    
          {/* Section Title */}
          <h2 className="text-center text-3xl sm:text-4xl text-gray-800 font-semibold mt-12 mb-8">
            Experience the Future of Efficiency
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem Ipsum Yojo is not just a tool; it's a complete solution designed to help you optimize your work and boost productivity. Whether you're a professional or a creative, you'll find the features you need to succeed.
          </p>
        </div>
      );
}

