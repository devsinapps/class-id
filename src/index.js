import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './components/style/minify/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import * as serviceWorker from './serviceWorker';
//Reducer
import rootReducers from './store/reducer/rootReducers'
//Config
import firebaseConfig from './config/firebaseConfig'
const store = createStore(rootReducers,
		compose(
			applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
			reduxFirestore(firebaseConfig),
			reactReduxFirebase(firebaseConfig, {useFirestoreForProfile: true, userProfile:'dataUserStudents', attachAuthIsReady: true})
		)
	);


ReactDOM.render(
	<Provider store={store}>
	<Routes />
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
