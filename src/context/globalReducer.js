import * as actionTypes from "./actionTypes"

const globalReducer = (state, action)=>{
	switch(action.type){
		case action.type = actionTypes.PRESS_KEY :
			return {
				...state,
				currentClip : state.padKeys.filter(padKey => padKey.name === action.payload.toUpperCase()),
			};
		 default :
			return state
	}
}

export default globalReducer;