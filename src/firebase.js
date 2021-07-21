// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase, { firestore } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBplG_gi_m9yHUijZ7ttPDnlBb3zEZ7VS4",
    authDomain: "facebookclone-4968f.firebaseapp.com",
    projectId: "facebookclone-4968f",
    storageBucket: "facebookclone-4968f.appspot.com",
    messagingSenderId: "563274742053",
    appId: "1:563274742053:web:c97016834dca1215d142cc",
    measurementId: "G-D0CZ5QWPR3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;