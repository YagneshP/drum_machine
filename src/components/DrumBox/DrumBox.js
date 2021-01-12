import React from 'react'
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import classes from './DrumBox.module.css';

function DrumBox() {
	return (
		<div className={classes.Drum_Box} id="drum-machine">
			<DrumPad/>
			<Display/>
		</div>
	)
}

export default DrumBox
