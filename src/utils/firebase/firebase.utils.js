/* eslint-disable no-unused-vars */
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4389WKBSX1InyjjaedxlE7A8EEuf_H0U",
  authDomain: "clothing-sale-db.firebaseapp.com",
  projectId: "clothing-sale-db",
  storageBucket: "clothing-sale-db.appspot.com",
  messagingSenderId: "475877913500",
  appId: "1:475877913500:web:4e97af1089944054c90e59"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
