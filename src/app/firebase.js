// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBdG4HV2xEGh0cqk450W2-pjHV4oJ1WkOI',
  authDomain: 'wanted-data-c0b53.firebaseapp.com',
  projectId: 'wanted-data-c0b53',
  storageBucket: 'wanted-data-c0b53.appspot.com',
  messagingSenderId: '948021509452',
  appId: '1:948021509452:web:7859c29be0da8b840a63e9',
}

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
export { app, db, firebaseConfig }
