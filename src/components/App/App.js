import React,{ useEffect, useState } from "react";
import DrumBox from "../DrumBox/DrumBox";
import KeyContext from "../../context/KeyContext"
import "./App.css"
function App() {
	const[pressedKey, setPressedKey] = useState();
	
useEffect(()=>{
	document.addEventListener("keydown", (event) =>{
		setPressedKey(event.key)
	})

},[])

  return (
    <div className="App"  >
			<KeyContext.Provider value={{key: pressedKey, changeKey: (val)=>{setPressedKey(val)}}}>
			     <DrumBox />
			</KeyContext.Provider>
			
    </div>
  );
}

export default App;
