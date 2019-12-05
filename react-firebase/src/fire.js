import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "your api key",
    authDomain: "###",
    databaseURL: "https://react-firebase-43197.firebaseio.com",
    projectId: "####",
    storageBucket: "###",
    messagingSenderId: "###",
    appId: "###",
    measurementId: "###"
  };
var fire = firebase.initializeApp(firebaseConfig);
export default fire;