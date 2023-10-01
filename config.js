import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCraoK2Un_-FVqIc1y8N11p8jlvT5UmfXQ",
  authDomain: "e-ride-92ced.firebaseapp.com",
  projectId: "e-ride-92ced",
  storageBucket: "e-ride-92ced.appspot.com",
  messagingSenderId: "58788101835",
  appId: "1:58788101835:web:e658bac4c1c40b53bd654e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
