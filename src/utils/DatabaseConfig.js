import * as firebase from "firebase/app";
import "firebase/firestore";

// Get environment set variables
const projectId = process.env.REACT_APP_PROJ_ID;
const apiKey = process.env.REACT_APP_API_KEY;

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey,
  projectId,
  authDomain: `${projectId}.firebaseapp.com`
});

const db = firebase.firestore();

export default db;
