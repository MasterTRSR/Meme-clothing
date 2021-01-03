import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBMRta8HrSUeZNI4lZe0gM4ZKEPBHwoRl8",
  authDomain: "deadkart.firebaseapp.com",
  projectId: "deadkart",
  storageBucket: "deadkart.appspot.com",
  messagingSenderId: "364767169088",
  appId: "1:364767169088:web:57c1eeaa2971abd1a5eda5",
  measurementId: "G-NKNLSGDP9N"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;