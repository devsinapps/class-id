const initState = {
	roomError: ''
}

const roomReducer = (state = initState, action) => {
	switch(action.type){
		case "UPDATE_SUCCESS":
			console.log( "UPDATE_SUCCESS");
			return{
				...state,
				roomError: ''
			}

		case "UPDATE_ERROR":
			console.log( "UPDATE_ERROR");
			return{
				...state,
				roomError: 'UPDATE_ERROR'
			}

		default:
			return state
	}
}

export default roomReducer