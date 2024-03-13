import React from "react";

function InstagramHomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt="Instagram"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-black focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 20a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.57 4.57A9 9 0 0117.42 17.42 9 9 0 114.57 4.57z"
              />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-black focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-screen-lg mx-auto px-4">
        {/* Stories */}
        <div className="flex space-x-4 py-4">
          {/* Individual story component */}
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-200"></div>
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-200"></div>
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-200"></div>
          {/* Add more story components as needed */}
        </div>

        {/* Posts */}
        <div>
          {/* Individual post component */}
          <div className="border border-gray-200 rounded-lg mb-4">
            {/* Post header */}
            <div className="flex items-center p-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200"></div>
              <div className="ml-2">
                <div className="text-sm font-semibold text-gray-700">
                  Username
                </div>
                <div className="text-xs text-gray-500">Location</div>
              </div>
            </div>
            {/* Post image */}
            <img
              src="https://via.placeholder.com/640x640"
              alt="Post"
              className="w-full"
            />
            {/* Post actions */}
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <button className="text-gray-500 hover:text-black focus:outline-none">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Heart icon */}
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-black focus:outline-none">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Comment icon */}
                  </svg>
                </button>
              </div>
              <button className="text-gray-500 hover:text-black focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Save icon */}
                </svg>
              </button>
            </div>
            {/* Post description */}
            <div className="px-4 pb-2">
              <div className="text-sm font-semibold text-gray-700">
                Username
              </div>
              <div className="text-sm text-gray-700">Caption</div>
            </div>
          </div>
          {/* Add more post components as needed */}
        </div>
      </main>
    </div>
  );
}

export default InstagramHomePage;
