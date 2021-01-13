import React from 'react'
import DrumItem from './DrumItem/DrumItem';
import "./DrumPad.css"
import bubbles from "../../assests/sounds/bubbles.mp3";
import piston_1 from "../../assests/sounds/piston-1.mp3";
import clay from "../../assests/sounds/clay.mp3";
import corona from "../../assests/sounds/corona.mp3";
import flash_1 from "../../assests/sounds/flash-1.mp3";
import glimmer from "../../assests/sounds/glimmer.mp3";
import moon from "../../assests/sounds/moon.mp3";
import ufo from "../../assests/sounds/ufo.mp3";
import wipe from "../../assests/sounds/wipe.mp3";
function DrumPad(props) {
	const padKeys=[
		{
			name:"Q",
			audio:bubbles,
			clipName:"bubbles"
		},
		{
			name:"W",
			audio: piston_1,
			clipName:"bubbles"
		},
		{
			name:"E",
			audio: clay,
			clipName:"bubbles"
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
	];
	return (
		<div className="pad-container">
			{padKeys.map((pad)=>{
			return	<DrumItem key={pad.name} pad={pad} />
			}
			)}
		</div>
	)
}

export default DrumPad
