import React,{ useEffect } from "react";
import DrumBox from "../DrumBox/DrumBox";
import  { useGlobal, pressKey } from "../../context/GlobalState"
import "./App.css"
function App() {

	const globalDispatch= useGlobal()[1];
	useEffect(()=>{
		const handleKeyDown = (event) => {
				pressKey(globalDispatch, event.key);
			}
		document.addEventListener("keydown", (event) => {handleKeyDown(event)})
		document.removeEventListener("keydown", (event) => {handleKeyDown(event)})
		return ()=>{ document.removeEventListener("keyd", (event) => {handleKeyDown(event)})}
	},[globalDispatch])

  return (
    <div className="App"  >
				<DrumBox />
    </div>
  );
}

export default App;
