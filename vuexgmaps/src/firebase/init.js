import firebase from 'firebase'
import firestore from 'firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBFjlJa7HL_gF1Xmb4IyIyofoHF3LXIMxY",
    authDomain: "vue-gmaps-47887.firebaseapp.com",
    databaseURL: "https://vue-gmaps-47887.firebaseio.com",
    projectId: "vue-gmaps-47887",
    storageBucket: "vue-gmaps-47887.appspot.com",
    messagingSenderId: "1007644974639",
    appId: "1:1007644974639:web:b3f6503ec0c02a05e130da",
    measurementId: "G-YM09HGHT07"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()