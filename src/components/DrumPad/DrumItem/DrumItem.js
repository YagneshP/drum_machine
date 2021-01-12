import React from 'react'
import "./DrumItem.css"
function DrumItem(props) {
	const {pad} = props;
	return (
		<div className="drum-pad">
			{pad}
		</div>
	)
}

export default DrumItem
