import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAuz7l6V9tRRNqvDu1plAFjcXdMRqYOBug",
    authDomain: "portfolio-bhanuka.firebaseapp.com",
    projectId: "portfolio-bhanuka",
    storageBucket: "portfolio-bhanuka.firebasestorage.app",
    messagingSenderId: "362352768134",
    appId: "1:362352768134:web:f9c3dbb08d08c434d30d07",
    measurementId: "G-LK0W3PCHC2"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };