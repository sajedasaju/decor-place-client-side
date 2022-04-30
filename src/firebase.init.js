// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl4iFycRoKUSlzGCO4z7R8bb8jxMcWMYo",
    authDomain: "decor-place.firebaseapp.com",
    projectId: "decor-place",
    storageBucket: "decor-place.appspot.com",
    messagingSenderId: "83465314655",
    appId: "1:83465314655:web:e4f07934bff8d66f6656ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;