// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCtXkqXAtqT4OyTB2Zd6AFk9EbguPeQrXM",
   authDomain: "hackhatonmoduleb.firebaseapp.com",
   databaseURL: "https://hackhatonmoduleb-default-rtdb.firebaseio.com",
   projectId: "hackhatonmoduleb",
   storageBucket: "hackhatonmoduleb.appspot.com",
   messagingSenderId: "553979345745",
   appId: "1:553979345745:web:6b6a2c4443fdc67e3ab170"

};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
const database = getDatabase(firebase_app)


export   {firebase_app, auth, database }