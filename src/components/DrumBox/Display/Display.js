import React, { useContext } from 'react'
import "./Display.css";
import KeyContext from "../../../context/KeyContext"
function Display() {
	const keyContext = useContext(KeyContext)
	return (
		<div id="display">
			{keyContext.key}
		</div>
	)
}

export default Display
