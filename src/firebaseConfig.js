import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk975k2TEPiKSdbmGK3fBbnoBFyIV1Fl8",
  authDomain: "sisturnoreact.firebaseapp.com",
  projectId: "sisturnoreact",
  storageBucket: "sisturnoreact.firebasestorage.app",
  messagingSenderId: "686059304071",
  appId: "1:686059304071:web:d0059505f20e43e616f422",
  measurementId: "G-NMSNN6T2H4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };