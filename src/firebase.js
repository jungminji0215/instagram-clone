import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3vAlqTdqBFV8oIAtOViUejOpCmzATR9o",
    authDomain: "instagram-clone-react-67cc1.firebaseapp.com",
    projectId: "instagram-clone-react-67cc1",
    storageBucket: "instagram-clone-react-67cc1.appspot.com",
    messagingSenderId: "732196600992",
    appId: "1:732196600992:web:4cc18f73e6f1dc6c07ddc5",
    measurementId: "G-FHRJCDMYW9"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};