import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { useState, useEffect } from "react";

const tableName = "Post";

const firebasePost = () => {
  const [postData, _setData] = useState([]);
  const userCollectionRef = collection(db, tableName);
  const currentDate = Timestamp.now();

  useEffect(() => {
    readData();
  }, []);

  const createData = async (username, caption, image) => {
    await addDoc(userCollectionRef, {
      username: username,
      caption: caption,
      imgPath: image,
      dateposted: currentDate,
    });
    readData();
  };

  const readData = async () => {
    const data = await getDocs(userCollectionRef);
    const sortedData = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .sort((a, b) => b.dateposted.seconds - a.dateposted.seconds); // Sort by dateposted in descending order
    _setData(sortedData);
  };

  const updateData = async (id, Password) => {
    const userDoc = doc(db, tableName, id);
    const newPassword = { Password: Password };
    await updateDoc(userDoc, newPassword);
    readData();
  };

  const deleteData = async (id) => {
    const userDoc = doc(db, tableName, id);
    await deleteDoc(userDoc);
    readData();
  };

  return { createData, postData, updateData, deleteData, readData };
};

export default firebasePost;
