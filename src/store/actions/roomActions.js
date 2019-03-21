export const updateRoom = (dataRoom) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('classList').doc(dataRoom.id).set({
			idRoom: dataRoom.idRoom,
			status: dataRoom.status,
			room: dataRoom.room,
			bookedBy: dataRoom.bookedBy,
			bookedId: dataRoom.bookedId
		}).then(()=>{
			dispatch({
				type: "UPDATE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_ERROR",
				err
			})
		})
	}
}