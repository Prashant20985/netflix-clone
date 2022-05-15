// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP7tduPes1SVI7vSoNcEkAsl-3u2Ew5DU",
    authDomain: "netflix-clone-d6098.firebaseapp.com",
    projectId: "netflix-clone-d6098",
    storageBucket: "netflix-clone-d6098.appspot.com",
    messagingSenderId: "592604586262",
    appId: "1:592604586262:web:30f32caf2eba11dafef037"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }