import {initializeApp} from "firebase/app";
import firebase from "firebase/compat/app"
import {getFirestore} from "@firebase/firestore";
import { getDatabase } from 'firebase/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7itQkz2YGyi5T-uIXOGvREiv67ByUqlM",
    authDomain: "wavyfm-b9d27.firebaseapp.com",
    databaseURL: "https://wavyfm-b9d27-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wavyfm-b9d27",
    storageBucket: "wavyfm-b9d27.appspot.com",
    messagingSenderId: "966579175275",
    appId: "1:966579175275:web:048034acda80ddb8e3562e",
    measurementId: "G-Y6C6WLGT27"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const db = getDatabase(app);
export const db_fire = firebase.initializeApp(firebaseConfig).firestore();
