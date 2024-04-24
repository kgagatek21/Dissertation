// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNo05ZmLnjCn37f8TE2o0CUunSt4JScgA",
  authDomain: "automated-irrigation-sys-8655c.firebaseapp.com",
  projectId: "automated-irrigation-sys-8655c",
  storageBucket: "automated-irrigation-sys-8655c.appspot.com",
  messagingSenderId: "157394465274",
  appId: "1:157394465274:web:4e339c769edd4e5d3ef443",
  measurementId: "G-SZQQ3LD1SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);