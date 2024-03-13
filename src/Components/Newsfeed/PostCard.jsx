import React from "react";

const PostCard = ({ postID, username, caption, date }) => {
  const formattedDate = date
    ? new Date(date.seconds * 1000).toLocaleDateString()
    : "";
  return (
    <div key={postID} className="mx-auto mb-4">
      <div className="bg-white rounded-lg shadow-md">
        {/* Post header */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="ml-2">
            <div className="text-sm font-semibold text-gray-700">
              {username}
            </div>
            <div className="text-xs text-gray-500">{formattedDate}</div>
            <div className="text-xs text-gray-500">Location</div>
          </div>
        </div>
        {/* Post image */}
        <img
          src="https://via.placeholder.com/200x150"
          alt="Post"
          className="w-full h-auto"
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
          <div className="text-sm font-semibold text-gray-700">{username}</div>
          <div className="text-sm text-gray-700">{caption}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
