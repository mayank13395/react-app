import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB8YEJIdmy8AMIA6UkIlK6J5uibmz4giH4",
    authDomain: "dazzling-docers.firebaseapp.com",
    databaseURL: "https://dazzling-docers.firebaseio.com",
    projectId: "dazzling-docers",
    storageBucket: "dazzling-docers.appspot.com",
    messagingSenderId: "998222124094",
    appId: "1:998222124094:web:0c3a346bace701971a2d6f"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;