import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmr40nqHLQ2fwSMQm4ntp2Bw5hEhjVDTE",
  authDomain: "challenge-c6912.firebaseapp.com",
  projectId: "challenge-c6912",
  storageBucket: "challenge-c6912.appspot.com",
  messagingSenderId: "411306938984",
  appId: "1:411306938984:web:a4edd5714b7faf437a61dd",
  measurementId: "G-L1V53KBTWZ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
