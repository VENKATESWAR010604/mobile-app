import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVRDWNvPoWRu1NoPuG2d7s1vucbChhfbM",
  authDomain: "react-native-auth-7d67e.firebaseapp.com",
  projectId: "react-native-auth-7d67e",
  storageBucket: "react-native-auth-7d67e.appspot.com",
  messagingSenderId: "1011461851420",
  appId: "1:1011461851420:web:ce7dce8e9da4b17b6692d9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

