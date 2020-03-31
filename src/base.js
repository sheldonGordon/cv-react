import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByAsg0LWU1KmXlbSL10dz7z-be4TYBdPw",
    authDomain: "cv-react-519cb.firebaseapp.com",
    databaseURL: "https://cv-react-519cb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base