import firebase from 'firebase'

const config ={
    apiKey: "AIzaSyCHKJrkA0ZGdr44J8VqCQ2zLHa1RYMCwZo",
    authDomain: "fir-cloud-messaging-9bd43.firebaseapp.com",
    databaseURL: "https://fir-cloud-messaging-9bd43.firebaseio.com",
    projectId: "fir-cloud-messaging-9bd43",
    storageBucket: "fir-cloud-messaging-9bd43.appspot.com",
    messagingSenderId: "983375576294",
    appId: "1:983375576294:web:9a05572ff0bedf61928f27"
}
firebase.initializeApp(config)

export default firebase