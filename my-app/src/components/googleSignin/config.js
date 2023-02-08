import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAb9ojbmyHrtOt_1wE2t0gt5sLo68rYZQw",
    authDomain: "landingpage-d562e.firebaseapp.com",
    projectId: "landingpage-d562e",
    storageBucket: "landingpage-d562e.appspot.com",
    messagingSenderId: "84013312183",
    appId: "1:84013312183:web:62e73d6bbf5db01cf8c532"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export { auth, provider };