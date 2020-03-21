import firebase from 'firebase'

const config={
    apiKey: "AIzaSyCya3Nxyqv3hX8_sus4FfYLTAzmHKuKNMs",
    authDomain: "fir-react-6c018.firebaseapp.com",
    databaseURL: "https://fir-react-6c018.firebaseio.com",
    projectId: "fir-react-6c018",
    storageBucket: "fir-react-6c018.appspot.com",
    messagingSenderId: "203160725883",
    appId: "1:203160725883:web:e6e0d368b91f70f51e75de"
}
firebase.initializeApp(config);
export default firebase