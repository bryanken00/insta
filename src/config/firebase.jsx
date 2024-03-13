import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPXggVyw8UkcW1BdgZ7obtWtSs5ZOwHr0",
  authDomain: "myinstagram-7581b.firebaseapp.com",
  projectId: "myinstagram-7581b",
  storageBucket: "myinstagram-7581b.appspot.com",
  messagingSenderId: "896444717944",
  appId: "1:896444717944:web:a4a4e765223c8def31c68d",
  measurementId: "G-6HZ4Q7GNCG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
