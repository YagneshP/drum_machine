import React from "react";

const KeyContext = React.createContext({
	key:null,
	changeKey: ()=>{}
});

export default KeyContext
// export default KeyContextProvider = () => {
// 	return(
// 		<KeyContextProvider value={ key}>

// 		</KeyContextProvider>
// 	)
// }