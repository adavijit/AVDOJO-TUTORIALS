import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBteH-VXypmgWFN-zhyVIjnNivzAbKnO2w",
    authDomain: "react-firebase-auth-3ca91.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-3ca91.firebaseio.com",
    projectId: "react-firebase-auth-3ca91",
    storageBucket: "react-firebase-auth-3ca91.appspot.com",
    messagingSenderId: "1149455173",
    appId: "1:1149455173:web:f9cff62c9d5ee6cae24c2c"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;