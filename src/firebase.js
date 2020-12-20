import firebase from 'firebase/app';

// Optionally import the services that you want to use
// import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDa4mWSZWh2sraGjchHnZFqZAJ4HyVb-aA",
    authDomain: "connectx-1d9fa.firebaseapp.com",
    projectId: "connectx-1d9fa",
    storageBucket: "connectx-1d9fa.appspot.com",
    messagingSenderId: "296359339757",
    appId: "1:296359339757:web:c4437d3bcc98855b518ee4"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

