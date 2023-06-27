// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVpyohBjYRKKjyEEXf8WYRGRNNh1qiGPg",
  authDomain: "turkana-mammadova.firebaseapp.com",
  projectId: "turkana-mammadova",
  storageBucket: "turkana-mammadova.appspot.com",
  messagingSenderId: "1038890879972",
  appId: "1:1038890879972:web:36676a78801090f49295f1",
  measurementId: "G-0GWC8BTE9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
