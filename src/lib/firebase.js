import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2v-pduIqggfvI25UyRJCpNAOzFjKaDoQ",
    authDomain: "grainstam-b9f20.firebaseapp.com",
    projectId: "grainstam-b9f20",
    storageBucket: "grainstam-b9f20.appspot.com",
    messagingSenderId: "536609659767",
    appId: "1:536609659767:web:2d2b5398b95ca5b0615f72"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
