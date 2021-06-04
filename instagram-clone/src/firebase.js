import firebase from 'firebase/app';
import 'firebase/firestore';
require('firebase/auth');
require('firebase/storage');
{/* initalizing the firebase app*/}

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAAD6Qh0iVA-3l2zAtWoUKPeJuueoCjMlY",
    authDomain: "instagram-clone-f23da.firebaseapp.com",
    databaseURL: "https://instagram-clone-f23da-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-f23da",
    storageBucket: "instagram-clone-f23da.appspot.com",
    messagingSenderId: "130429568244",
    appId: "1:130429568244:web:c9ca5c63ef92b76beccaa1",
    measurementId: "G-5D62B64DW8"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

  
export { db, auth, storage }
