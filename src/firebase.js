import "firebase/database";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDjroIeIPmSyMyzKuCNnJSMbFkRXvClSJo",
  authDomain: "react-contact-d75de.firebaseapp.com",
  databaseURL: "https://react-contact-d75de-default-rtdb.firebaseio.com",
  projectId: "react-contact-d75de",
  storageBucket: "react-contact-d75de.appspot.com",
  messagingSenderId: "165503432764",
  appId: "1:165503432764:web:c0fa6c18320a4fba83ab39"
};

const app = initializeApp(firebaseConfig);
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();