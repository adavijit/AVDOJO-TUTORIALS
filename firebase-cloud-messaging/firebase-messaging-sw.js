importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
firebase.initializeApp({
    apiKey: "AIzaSyCHKJrkA0ZGdr44J8VqCQ2zLHa1RYMCwZo",
    authDomain: "fir-cloud-messaging-9bd43.firebaseapp.com",
    databaseURL: "https://fir-cloud-messaging-9bd43.firebaseio.com",
    projectId: "fir-cloud-messaging-9bd43",
    storageBucket: "fir-cloud-messaging-9bd43.appspot.com",
    messagingSenderId: "983375576294",
    appId: "1:983375576294:web:9a05572ff0bedf61928f27"})

const initMessaging = firebase.messaging()