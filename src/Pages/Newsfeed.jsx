import React, { useEffect, useState } from "react";
import Libano from "../Assets/Libano.png";
import Rogelio from "../Assets/Rogelio.png";
import Odi from "../Assets/Odi.png";
import Tantan from "../Assets/Tantan.png";
import { useNavigate } from "react-router-dom";
import PostCard from "../Components/Newsfeed/PostCard";
import firebasePost from "../config/firebase-functionsPost";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Modify import statement
import { storage } from "../config/firebase";

function InstagramHomePage() {
  const { createData: CreatePost, postData } = firebasePost();
  const [postCaption, setPostCaption] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const getUsername = localStorage.getItem("account.username");
  const navigate = useNavigate();

  useEffect(() => {
    if (getUsername === null) navigate("/");
  }, [getUsername, navigate]); // Add dependencies to useEffect

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = () => {
    const randomFileName = uuidv4(); // Generate random file name
    const storageRef = ref(storage, `images/${randomFileName}.png`); // Reference to storage location with random file name
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Error uploading image: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          console.log(imageUrl);
          // After image is uploaded, create post with image URL
          CreatePost(getUsername, postCaption, downloadURL);
        });
      }
    );
  };

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
        <div className="flex justify-between items-center mt-2">
          {/* Image Upload */}
          <label htmlFor="imageUpload">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          {/* Post Button */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
            onClick={handleUpload}
          >
            Post
          </button>
        </div>
      </div>
      {postData.map((post) => {
        return (
          <PostCard
            key={post.id}
            postID={post.id}
            username={post.username}
            caption={post.caption}
            imgPath={post.imgPath}
            date={post.dateposted}
          />
        );
      })}
    </main>
  );
}

export default InstagramHomePage;
