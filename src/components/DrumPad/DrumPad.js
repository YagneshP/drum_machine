import React from 'react'
import DrumItem from './DrumItem/DrumItem';
import "./DrumPad.css"
import {useGlobal} from "../../context/GlobalState";

function DrumPad() {
	const globalState= useGlobal()[0];
	return (
		<div className="pad-container">
			{globalState.padKeys.map(padKey =>	<DrumItem key={padKey.name}padKey={padKey} />	)}
		</div>
	)
}

export default DrumPad
