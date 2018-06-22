import React, { Component } from 'react';
import Tilt from 'react-tilt';
import physics from './physics.png';
import './Logo.css';

class Logo extends Component {
	render() {
		return(
			<div className="ma4 mt0">
				<Tilt className="Tilt br2 shadow-2"
							options={{  speed: 300 }} 
							style={{ height: 150, width: 150 }} >
					<div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}} alt="logo" src={physics} /></div>
				</Tilt>
			</div>
		)
	}
}

export default Logo;