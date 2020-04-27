import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyByAsg0LWU1KmXlbSL10dz7z-be4TYBdPw",
    authDomain: "cv-react-519cb.firebaseapp.com",
    databaseURL: "https://cv-react-519cb.firebaseio.com",
    projectId: "cv-react-519cb",
    storageBucket: "cv-react-519cb.appspot.com",
    messagingSenderId: "228432439003",
    appId: "1:228432439003:web:ac460cad2063a411110efe",
    measurementId: "G-1JZ42JCL7X"
};

firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;