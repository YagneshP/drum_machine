import { useReducer, createContext, useContext } from "react";
// import KeyContext from "./KeyContext";
import globalReducer from "./globalReducer";
import * as actionTypes from "./actionTypes"
import bubbles from "../assests/sounds/bubbles.mp3";
import piston_1 from "../assests/sounds/piston-1.mp3";
import clay from "../assests/sounds/clay.mp3";
import corona from "../assests/sounds/corona.mp3";
import flash_1 from "../assests/sounds/flash-1.mp3";
import glimmer from "../assests/sounds/glimmer.mp3";
import moon from "../assests/sounds/moon.mp3";
import ufo from "../assests/sounds/ufo.mp3";
import wipe from "../assests/sounds/wipe.mp3";
 export const GlobalContext = createContext();
 export const useGlobal = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return [state, dispatch];
};
export const pressKey = (dispatch,key) => {
		dispatch({
			type: actionTypes.PRESS_KEY,
			payload:key
		})
}

const GlobalState = props => {
	const intialState = {
		padKeys : [
			{
				name:"Q",
				audio:bubbles,
				clipName:"bubbles"
			},
			{
				name:"W",
				audio: piston_1,
				clipName:"piston_1"
			},
			{
				name:"E",
				audio: clay,
				clipName:"clay"
			},
			{
				name:"A",
				audio: corona,
				clipName:"corona"
			},
			{
				name:"S",
				audio: moon,
				clipName:"moon"
			},
			{
				name:"D",
				audio: flash_1,
				clipName:"flash_1"
			},
			{
				name:"Z",
				audio: glimmer,
				clipName:"glimmer"
			},
			{
				name:"X",
				audio: ufo,
				clipName:"ufo"
			},
			{
				name:"C",
				audio: wipe,
				clipName:"wipe"
			}
		],
		currentClip:null,
	}
	


	const [state, dispatch] = useReducer(globalReducer, intialState)
	return(
		<GlobalContext.Provider value={{state:state, dispatch}}>
			{props.children}
		</GlobalContext.Provider>
	)
}

export default GlobalState;