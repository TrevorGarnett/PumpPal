// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzw7Wyb7hjP9StRNlLbCwBCxQRZvUL__A",
    authDomain: "pumppal-a2962.firebaseapp.com",
    projectId: "pumppal-a2962",
    storageBucket: "pumppal-a2962.appspot.com",
    messagingSenderId: "326628791122",
    appId: "1:326628791122:web:d177504f15ecdde779208b",
    measurementId: "G-Y8GCK63G2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;