import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB-C5ty3cfAEIt5EbHSM488jKqPCDJJ444",
  authDomain: "volunteer-app-6b386.firebaseapp.com",
  projectId: "volunteer-app-6b386",
  storageBucket: "volunteer-app-6b386.firebasestorage.app",
  messagingSenderId: "58333969760",
  appId: "1:58333969760:web:fa142ae581c12df183f205",
  measurementId: "G-EN6BC9H25R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;