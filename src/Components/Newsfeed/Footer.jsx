import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="max-w-screen-lg mx-auto flex justify-center">
        {/* Home Link */}
        <div className="flex items-center">
          <Link
            to="/newsfeed"
            className="flex items-center text-gray-500 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <span className="ml-1">Home</span>
          </Link>
        </div>

        {/* Separator */}

        {/* Message Link */}
        <div className="flex items-center ml-4">
          <Link
            to="/messages"
            className="flex items-center text-gray-500 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <span className="ml-1">Message</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
