import authReducer from './authReducer'
import curriculumReducer from './curriculumReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    curriculum: curriculumReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer