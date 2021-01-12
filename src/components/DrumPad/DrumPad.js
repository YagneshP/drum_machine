import React from 'react'
import DrumItem from './DrumItem/DrumItem';
import "./DrumPad.css"

function DrumPad() {
	const padKeys=["Q","W","E","A","S","D","Z","X","C"];
	return (
		<div className="pad-container">
			{padKeys.map((pad)=>{
			return	<DrumItem key={pad} pad={pad} />
			}
			)}
		</div>
	)
}

export default DrumPad
