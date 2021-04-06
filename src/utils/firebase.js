import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAWoshzv9zsJ0s6p-FMnEinzLmTpTmEBqY",
    authDomain: "funmilolajire-portfolio.firebaseapp.com",
    projectId: "funmilolajire-portfolio",
    storageBucket: "funmilolajire-portfolio.appspot.com",
    messagingSenderId: "1020383866798",
    appId: "1:1020383866798:web:e6518018ed2cbe3674e23f",
    measurementId: "G-7NW6WM6KC7"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
firebase.analytics();
//initialize database
const db = firebase.database();

//messages collection
const messagesRef = db.ref('messages');

export const saveMessage = (name, email, message) => {
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    }, error => error ? "error" : "success")
}
