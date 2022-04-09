import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsgoMKBftRFuGznL0stbrfUEo4gDth6Ig",
  authDomain: "house-marketplace-app-a46d3.firebaseapp.com",
  projectId: "house-marketplace-app-a46d3",
  storageBucket: "house-marketplace-app-a46d3.appspot.com",
  messagingSenderId: "22365843682",
  appId: "1:22365843682:web:e94eafb5a78dd1532a6ebb"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()