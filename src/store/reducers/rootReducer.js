import authReducer from './authReducer'
import curriculumReducer from './curriculumReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth : authReducer,
    curriculum: curriculumReducer
})

export default rootReducer