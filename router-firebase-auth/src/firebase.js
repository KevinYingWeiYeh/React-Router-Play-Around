
// Initialize Firebase
var config = {
  apiKey: "AIzaSyARn7B9nkPl3c_uz5Q41dL_cjYzP5XPKEo",
  authDomain: "react-router-firebase-98d59.firebaseapp.com",
  databaseURL: "https://react-router-firebase-98d59.firebaseio.com",
  projectId: "react-router-firebase-98d59",
  storageBucket: "",
  messagingSenderId: "238684643707"
};
firebase.initializeApp(config);

export const notes = firebase.database().ref('/notes');
export const users = firebase.database().ref('/users');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();


