
import authReducer from "./authReducer.js"
import projectReducer from "./projectReducer.js"
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

import { combineReducers } from 'redux'
const reducers=combineReducers({
	auth: authReducer,
	project:projectReducer,
	firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default reducers;