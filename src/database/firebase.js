import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7f90RvlbkNsEh2a724cLTCNxPjjyReuo",
  authDomain: "rt-soft-world.firebaseapp.com",
  databaseURL: "https://rt-soft-world-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rt-soft-world",
  storageBucket: "rt-soft-world.appspot.com",
  messagingSenderId: "210910930311",
  appId: "1:210910930311:web:27b2219d24ffb178b41f22",
  measurementId: "G-19YMH42KQQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
