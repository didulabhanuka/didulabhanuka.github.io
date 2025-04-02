import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuz7l6V9tRRNqvDu1plAFjcXdMRqYOBug",
  authDomain: "portfolio-bhanuka.firebaseapp.com",
  projectId: "portfolio-bhanuka",
  storageBucket: "portfolio-bhanuka.firebasestorage.app",
  messagingSenderId: "362352768134",
  appId: "1:362352768134:web:f9c3dbb08d08c434d30d07",
  measurementId: "G-LK0W3PCHC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };