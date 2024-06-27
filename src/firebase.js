
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAlAOfwTDSb_0J9KsgBoqoEgprOPDQVN7A",
    authDomain: "netflix-bba3f.firebaseapp.com",
    projectId: "netflix-bba3f",
    storageBucket: "netflix-bba3f.appspot.com",
    messagingSenderId: "196486219085",
    appId: "1:196486219085:web:9f396d86843e4f45486304",
    measurementId: "G-LK0G6HR4KC"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };