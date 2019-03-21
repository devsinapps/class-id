import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'
import dataReducer from './dataReducer'
import roomReducer from './roomReducer'

const rootReducers = combineReducers({
	firestore: firestoreReducer,
	firebase: firebaseReducer,
	auth: authReducer,
	data: dataReducer,
	room: roomReducer
})

export default rootReducers