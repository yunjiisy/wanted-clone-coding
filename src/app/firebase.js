// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import dummy from '../../public/data/jobCardDummy.json'
import { collection, addDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBdG4HV2xEGh0cqk450W2-pjHV4oJ1WkOI',
  authDomain: 'wanted-data-c0b53.firebaseapp.com',
  projectId: 'wanted-data-c0b53',
  storageBucket: 'wanted-data-c0b53.appspot.com',
  messagingSenderId: '948021509452',
  appId: '1:948021509452:web:7859c29be0da8b840a63e9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
