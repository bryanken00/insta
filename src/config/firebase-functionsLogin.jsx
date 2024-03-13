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

const tableName = "Accounts";

const firebaseMessage = () => {
  const [UserData, _setData] = useState([]);
  const userCollectionRef = collection(db, tableName);
  const currentDate = Timestamp.now();

  useEffect(() => {
    readData();
  }, []);

  const createData = async (username, password, email) => {
    await addDoc(userCollectionRef, {
      username: username,
      password: password,
      email: email,
      dateCreated: currentDate,
    });
    readData();
  };

  const readData = async () => {
    const data = await getDocs(userCollectionRef);
    _setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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

  return { createData, UserData, updateData, deleteData, readData };
};

export default firebaseMessage;
