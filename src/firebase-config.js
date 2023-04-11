import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDS5e2c8PkfzZlJ_9dSjbc6lD-do9TNnRE",
  authDomain: "authentication-tutorial-64857.firebaseapp.com",
  projectId: "authentication-tutorial-64857",
  storageBucket: "authentication-tutorial-64857.appspot.com",
  messagingSenderId: "798411242868",
  appId: "1:798411242868:web:91af419889997eba6a0021"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();