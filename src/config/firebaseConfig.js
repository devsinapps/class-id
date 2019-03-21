import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 var config = {
    apiKey: "AIzaSyCqFuyCKEX_LUlbaZh2NQh8hxN8IJqp9AM",
    authDomain: "fir-crud-ab735.firebaseapp.com",
    databaseURL: "https://fir-crud-ab735.firebaseio.com",
    projectId: "fir-crud-ab735",
    storageBucket: "fir-crud-ab735.appspot.com",
    messagingSenderId: "52164301682"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase