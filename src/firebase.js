import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBIEey1Qhpcotcv85MTdyzU-mujUTQowVI",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "e-commerce-shop-6f417.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "e-commerce-shop-6f417",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "e-commerce-shop-6f417.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "502829760871",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:502829760871:web:32ecfdab44d51db2876fc2",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-Y7SKE4TEM8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signInWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signUpWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email);

export const signOutUser = () => signOut(auth);

export const updateUserProfile = (user, profile) =>
  updateProfile(user, profile);

export { auth, sendEmailVerification };
