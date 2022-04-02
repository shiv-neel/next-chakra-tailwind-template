// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app'
import 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { Auth, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB0NYe9W4eeS3k-pgzsVetjDjp5zmysZOA',
	authDomain: 'animetracker-55c34.firebaseapp.com',
	projectId: 'animetracker-55c34',
	storageBucket: 'animetracker-55c34.appspot.com',
	messagingSenderId: '424308066705',
	appId: '1:424308066705:web:115ee328c1599736fdb230',
	measurementId: 'G-2KJ39Q99D5',
}

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig)
export const auth: Auth = getAuth(app)
export const db: Firestore = getFirestore(app)
