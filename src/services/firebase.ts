import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBkp0dmP5jLcvPwgMQYNpIK6BmBIGmfaQo",
  authDomain: "chat-9bd07.firebaseapp.com",
  databaseURL: "https://chat-9bd07.firebaseio.com",
  projectId: "chat-9bd07",
  storageBucket: "chat-9bd07.appspot.com",
  messagingSenderId: "1096211615371",
  appId: "1:1096211615371:web:cdc5492dcfb9805788ce8e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
