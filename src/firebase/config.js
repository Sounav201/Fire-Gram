import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/database';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhNeSume1T4-bB07-YHLT2DKN2MENIxGU",
    authDomain: "fire-gram-d9132.firebaseapp.com",
    projectId: "fire-gram-d9132",
    storageBucket: "fire-gram-d9132.appspot.com",
    messagingSenderId: "655187364115",
    appId: "1:655187364115:web:6f3dfeb370cfd52f4ef2e6",
    measurementId: "G-D764KQSN3Y"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore= firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp};