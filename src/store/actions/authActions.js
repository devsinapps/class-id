export const signIn = (credentials) => {
	return (dispatch, getState, {getFirebase})=>{
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then(()=>{
			dispatch({
				type: "SIGNIN_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "SIGNIN_ERROR",
				err
			})
		})
	}
}


export const signUp = (dataUser) => {
	return(dispatch, getState, {getFirebase, getFirestore})=>{
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			dataUser.email,
			dataUser.password
		).then((resp)=>{
			return firestore.collection('dataUserStudents').doc(resp.user.uid).set({
				userId: resp.user.uid,
				firstName: dataUser.firstName,
				lastName: dataUser.lastName,
				age: dataUser.age,
				gender: dataUser.gender,
				email: dataUser.email,
				phone: dataUser.email,
				npm: dataUser.npm,
				initials: dataUser.firstName[0] + dataUser.lastName[0],
				createdAt: new Date()
			})
		}).then(()=>{
			dispatch({
				type: "SIGNUP_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "SIGNUP_ERROR",
				err 
			})
		})
	}
}

export const signOut = () => {
	return(dispatch, getState, {getFirebase})=>{
		const firebase = getFirebase();

		firebase.auth().signOut().then(()=>{
			dispatch({
				type: "SIGNOUT_SUCCESS"
			})
		})
	}
}