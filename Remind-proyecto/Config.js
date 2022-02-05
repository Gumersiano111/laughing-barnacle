import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCNfJ9zzvQo_sUUb65N4L8moTR2RVoI1C4",
    authDomain: "remind-3f0eb.firebaseapp.com",
    databaseURL: "https://remind-3f0eb-default-rtdb.firebaseio.com",
    projectId: "remind-3f0eb",
    storageBucket: "remind-3f0eb.appspot.com",
    messagingSenderId: "1092202637776",
    appId: "1:1092202637776:web:a7a9393bbf9dd7a69ef1d5"
  };

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 


