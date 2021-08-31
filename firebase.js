import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh7NV-ADKgfdpNFuldCcWzhpOokKz-B_Q",
  authDomain: "interviewer-bb74f.firebaseapp.com",
  projectId: "interviewer-bb74f",
  storageBucket: "interviewer-bb74f.appspot.com",
  messagingSenderId: "1019165415710",
  appId: "1:1019165415710:web:aa91df63931fb5121a910f",
  measurementId: "G-KRYG7ZJZQ6"
};

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}else {
  app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };