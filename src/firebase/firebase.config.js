// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY_5mJu0cCjliXUTqK8OnOU1okydrvG6M",
  authDomain: "dragon-newsletter-with-react.firebaseapp.com",
  projectId: "dragon-newsletter-with-react",
  storageBucket: "dragon-newsletter-with-react.appspot.com",
  messagingSenderId: "183515582165",
  appId: "1:183515582165:web:c8c815227f45b0c5a65c5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;