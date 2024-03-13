import React, { useEffect, useState } from "react";
import Libano from "../Assets/Libano.png";
import Rogelio from "../Assets/Rogelio.png";
import Odi from "../Assets/Odi.png";
import Tantan from "../Assets/Tantan.png";
import { useNavigate } from "react-router-dom";
import PostCard from "../Components/Newsfeed/PostCard";
import firebasePost from "../config/firebase-functionsPost";

function InstagramHomePage() {
  const { createData: CreatePost, postData } = firebasePost();
  const [postCaption, setPostCaption] = useState("");

  const getUsername = localStorage.getItem("account.username");
  const navigate = useNavigate();

  useEffect(() => {
    if (getUsername === null) navigate("/");
  });

  return (
    <main className="max-w-screen-lg mx-auto px-4">
      {/* Stories */}
      <div className="flex space-x-4 py-4">
        {/* Individual story component */}
        <img className="w-20 h-20 rounded-full" src={Libano} alt="Image" />
        <img className="w-20 h-20 rounded-full" src={Rogelio} alt="Image" />
        <img className="w-20 h-20 rounded-full" src={Odi} alt="Image" />
        <img className="w-20 h-20 rounded-full" src={Tantan} alt="Image" />
        {/* Add more story components as needed */}
      </div>

      {/* Create Post */}
      <div className="border border-gray-200 rounded-lg mb-4 p-4">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full bg-gray-200"
            src="https://via.placeholder.com/150"
            alt="User"
          />
          <textarea
            className="ml-4 w-full resize-none border rounded-lg p-2 focus:outline-none"
            rows="3"
            placeholder="What's on your mind?"
            value={postCaption}
            onChange={(e) => setPostCaption(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
            onClick={() => CreatePost(getUsername, postCaption)}
          >
            Post
          </button>
        </div>
      </div>
      {postData.map((post) => {
        return (
          <PostCard
            postID={post.id}
            username={post.username}
            caption={post.caption}
            date={post.dateposted}
          />
        );
      })}
    </main>
  );
}

export default InstagramHomePage;
