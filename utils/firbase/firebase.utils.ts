import { initializeApp } from "firebase/app";
import {
  getAuth, 
signInWithRedirect, 
signInWithPopup, 
GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBBEhu5rTClo4m94zi6WtxN-Ovy3sp2tXw",
  authDomain: "react-8b37c.firebaseapp.com",
  projectId: "react-8b37c",
  storageBucket: "react-8b37c.appspot.com",
  messagingSenderId: "55442454132",
  appId: "1:55442454132:web:435c117df8da0a2dcc4321"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  promt: 'select_acconut'
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithGooglePopup(auth, provider)