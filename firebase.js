// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQzLfaRm-TvTje9GZJImD2-Enr2dAinDI',
  authDomain: 'insta-clone-25a36.firebaseapp.com',
  projectId: 'insta-clone-25a36',
  storageBucket: 'insta-clone-25a36.appspot.com',
  messagingSenderId: '369163535847',
  appId: '1:369163535847:web:a4c98822814d1b88c32942',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
