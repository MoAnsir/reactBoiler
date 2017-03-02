import React from 'react';

//Presentation components
function Title(props) {
	return(
		<p> Hello React!</p>
	)
}

export class Comp1 extends React.Component {
	render() {
		return(
			<div>
				<Title />
			</div>
		);
	}
}

export default Comp1;