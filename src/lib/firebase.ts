import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLt0le4Vo06kk7TEsFjkaAOYTS3tJt-yg",
  authDomain: "portofolio-cea55.firebaseapp.com",
  projectId: "portofolio-cea55",
  storageBucket: "portofolio-cea55.firebasestorage.app",
  messagingSenderId: "91114937243",
  appId: "1:91114937243:web:bbdcead546c6a2d8eedf3e",
  measurementId: "G-14SM1S9V2T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
