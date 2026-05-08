import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-SDrMa8lfH_n_dlrZCy4Zw0gb2hW5BbI",
    authDomain: "main-website-398409.firebaseapp.com",
    databaseURL: "https://main-website-398409-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "main-website-398409",
    storageBucket: "main-website-398409.firebasestorage.app",
    messagingSenderId: "1015274416743",
    appId: "1:1015274416743:web:11e2695050fd12053b02c2",
    measurementId: "G-4QR1JTMYWL"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
