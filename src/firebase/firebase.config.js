// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAENL4FUp-Z8Oc4Iy10c91ZsFJlcWCjRg",
    authDomain: "coffee-store-f7a11.firebaseapp.com",
    projectId: "coffee-store-f7a11",
    storageBucket: "coffee-store-f7a11.firebasestorage.app",
    messagingSenderId: "397744660310",
    appId: "1:397744660310:web:eb7eb70b786ccd95d300f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);