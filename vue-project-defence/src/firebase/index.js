import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBUhCmtlD112Wiv8VJ-m0Np9vo4Mwb4QEk",
    authDomain: "taste-the-healthy-ones.firebaseapp.com",
    databaseURL: "https://taste-the-healthy-ones.firebaseio.com",
    projectId: "taste-the-healthy-ones",
    storageBucket: "taste-the-healthy-ones.appspot.com",
    messagingSenderId: "276270036804",
    appId: "1:276270036804:web:8192dadef6a7609e048911",
    measurementId: "G-73NMEHW62D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();