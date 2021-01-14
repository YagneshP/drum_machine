import React, {  useEffect, useRef } from 'react';
import {useGlobal,pressKey} from "../../../context/GlobalState"

import "./DrumItem.css"
function DrumItem (props) {
	const audioRef = useRef(null);
	const [globalState,globalDispatch]= useGlobal();
	const {padKey} = props;
	const{currentClip} = globalState
useEffect(()=>{
	if(currentClip){
	if(currentClip.length > 0 ){
			if(audioRef.current.id === currentClip[0].name){
				audioRef.current.play()
			}
		}	
	}  
},[currentClip])
	const handleClick = () =>{
	audioRef.current.play();
	pressKey(globalDispatch, audioRef.current.id);
	}
	return (<div className="drum-pad" key={padKey.name} onClick={handleClick} >
	{padKey.name}
	<audio src={padKey.audio} ref={audioRef} className="clip" id={padKey.name} ></audio>
	</div> )
	
}

export default DrumItem;



// const keyContext = useContext(KeyContext);
// useEffect(()=>{
// 	if(keyContext.key){

// 	if(keyContext.key.toUpperCase() === audioRef.current.id){
// 		audioRef.current.src = music
// 			audioRef.current.play();
// 		}
// 	}

// },[keyContext.key])


// useEffect(()=>{
	// if(globalState.currentClip){
	// 	console.log(globalState.currentClip[0].name);
	// 	if(audioRef.current.id === globalState.currentClip[0].name )
	// 	audioRef.current.src = globalState.currentClip[0].audio;
	// 	audioRef.current.play();
	// 	console.log(audioRef.current)
	// }

	// const curAudio = document.getElementById(`${globalState.currentClip[0].name}`)
	// curAudio.play();
		
// },[globalState.currentClip])