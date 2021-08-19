import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCZOveRApFteblCDj1DhoCXGPXztSrvYfU",
    authDomain: "react-crud-631fd.firebaseapp.com",
    projectId: "react-crud-631fd",
    storageBucket: "react-crud-631fd.appspot.com",
    messagingSenderId: "1012196949375",
    appId: "1:1012196949375:web:d873dceb373942d7aa2e4a"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  firebase.analytics();
 
  export default fireDb.database().ref();