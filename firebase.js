import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDx5ClC2Ygtm1xNSh_B_63bfXV2xpgkf34",
  authDomain: "fikretoole.firebaseapp.com",
  databaseURL: "https://fikretoole-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fikretoole",
  storageBucket: "fikretoole.appspot.com",
  messagingSenderId: "133798653069",
  appId: "1:133798653069:web:c9a75c8175c28f2cb1c6c4",
  measurementId: "G-QNBLZC4KDD"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

