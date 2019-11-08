import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAL4JIOeAsogdg5hNTACL2J1WmxGfUG568",
    authDomain: "crown-db-8d043.firebaseapp.com",
    databaseURL: "https://crown-db-8d043.firebaseio.com",
    projectId: "crown-db-8d043",
    storageBucket: "crown-db-8d043.appspot.com",
    messagingSenderId: "845923703005",
    appId: "1:845923703005:web:db8b88604f2783d609e334",
    measurementId: "G-FDJ6EN5ZD2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;