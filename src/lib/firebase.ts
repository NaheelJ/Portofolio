import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMjCdZMQ0in5YGN3RWFfrFNKQO7yQMWDY",
  authDomain: "naheel-j-portfolio.firebaseapp.com",
  projectId: "naheel-j-portfolio",
  storageBucket: "naheel-j-portfolio.firebasestorage.app",
  messagingSenderId: "1096258110748",
  appId: "1:1096258110748:web:a3f5cd3b07583713d0e6d9",
  measurementId: "G-NGJVFX6KJM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
