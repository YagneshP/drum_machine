import React from 'react'
import "./Display.css";
import {useGlobal} from "../../../context/GlobalState"
function Display() {
const globalState = useGlobal()[0];
const { currentClip} = globalState;

	return (
		<div id="display">
			{currentClip ? (currentClip.length > 0 ? currentClip[0].clipName.toUpperCase() : null):null}
		</div>
	)
}

export default Display
