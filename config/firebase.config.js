import {getApp, getApps, initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAq7GUrBRo3gu9LawJMznLBsgoqdWzAKto",
    authDomain: "chatapp-95fd9.firebaseapp.com",
    projectId: "chatapp-95fd9",
    storageBucket: "chatapp-95fd9.appspot.com",
    messagingSenderId: "986485991552",
    appId: "1:986485991552:web:466828578abac8f8879e65"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);

const firestoreDB = getFirestore(app);

export {app, firebaseAuth, firestoreDB};