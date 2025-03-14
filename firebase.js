// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAl9OlVDnZZpZwcWft9_jvdn_2VDpiBKbg",
    authDomain: "camarinians-wall.firebaseapp.com",
    projectId: "camarinians-wall",
    storageBucket: "camarinians-wall.firebasestorage.app",
    messagingSenderId: "1019298262602",
    appId: "1:1019298262602:web:6aaa132d872515fc8580b3",
    measurementId: "G-5V0E174JPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, query, orderBy, onSnapshot };
