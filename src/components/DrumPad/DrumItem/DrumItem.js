import React, { useContext, useEffect, useRef, useState } from 'react';
import KeyContext from "../../../context/KeyContext"
import "./DrumItem.css"
function DrumItem(props) {
	const audioRef = useRef(null);
const keyContext = useContext(KeyContext);
	const {pad} = props;
useEffect(()=>{
	if(keyContext.key){

	if(keyContext.key.toUpperCase() === audioRef.current.id){
			audioRef.current.play();
		}
	}
},[keyContext.key])

	const handleClick = () =>{
		keyContext.changeKey(audioRef.current.id)
	audioRef.current.play();
	console.log(keyContext.changeKey);
	}

	return (
		<div className="drum-pad"  onClick={handleClick} >
			{pad.name}
			<audio src={pad.audio} ref={audioRef} className="clip" id={pad.name} ></audio>
		</div>
	)
}

export default DrumItem
