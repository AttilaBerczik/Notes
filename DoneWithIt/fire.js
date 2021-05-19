import firebase from "firebase/app";
require("firebase/auth");

const config = {
    apiKey: "AIzaSyAY6Wp926yK3POO1zJ4DcsQfc7MMbla8yc",
    authDomain: "notes-fdc89.firebaseapp.com",
    projectId: "notes-fdc89",
    storageBucket: "notes-fdc89.appspot.com",
    messagingSenderId: "855997765914",
    appId: "1:855997765914:web:23bddcac555e721c0fb4a3",
};
const initFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
};
initFirebase();

export default firebase;
