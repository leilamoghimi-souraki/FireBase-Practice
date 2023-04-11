// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Your web app's Firebase configuration
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyByTf9CI7EyXYFS7H0MnFza1xowo1TYVzo",
    authDomain: "reactnative-log.firebaseapp.com",
    projectId: "reactnative-log",
    storageBucket: "reactnative-log.appspot.com",
    messagingSenderId: "869521321371",
    appId: "1:869521321371:web:6999a06983df085119053e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export const db = getFirestore(app);
// export { auth };
export default app;