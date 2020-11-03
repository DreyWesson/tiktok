import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Nf68dl1SIpxg6aTcVYcuMw3bI8APd9k",
  authDomain: "tiktok-8e455.firebaseapp.com",
  databaseURL: "https://tiktok-8e455.firebaseio.com",
  projectId: "tiktok-8e455",
  storageBucket: "tiktok-8e455.appspot.com",
  messagingSenderId: "180332853850",
  appId: "1:180332853850:web:f32dc832693542bb0a7663",
  measurementId: "G-HMXKBD9QD9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
