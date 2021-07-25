import firebase from "firebase";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDUXrOm70eI5B1cN0xhGKhCYwvRL7Lus6I",
    authDomain: "facebook-clone-69f0b.firebaseapp.com",
    projectId: "facebook-clone-69f0b",
    storageBucket: "facebook-clone-69f0b.appspot.com",
    messagingSenderId: "341465015453",
    appId: "1:341465015453:web:e72955f1948b0d2d452074"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };