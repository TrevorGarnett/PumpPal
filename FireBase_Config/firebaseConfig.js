// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { isSupported } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzw7Wyb7hjP9StRNlLbCwBCxQRZvUL__A",
    authDomain: "pumppal-a2962.firebaseapp.com",
    projectId: "pumppal-a2962",
    storageBucket: "pumppal-a2962.firebasestorage.app",
    messagingSenderId: "326628791122",
    appId: "1:326628791122:web:d177504f15ecdde779208b",
    measurementId: "G-Y8GCK63G2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
const initializeAnalytics = async () => {
    const supported = await isSupported();
    if (supported) {
        const { getAnalytics } = await import("firebase/analytics");
        const analytics = getAnalytics(app);
        console.log("Firebase Analytics initialized: ", analytics);
    } else {
        // Analytics not supported
        // console.warn("Analytics not supported");
        console.log("Firebase Analytics not supported");
    }
};

initializeAnalytics();

export { app, auth };
