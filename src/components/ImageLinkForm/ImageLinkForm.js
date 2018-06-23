import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => { 
	return(
		<div>
			<p className="f3">
				{'This Awesome App Detects Faces in your Images. Give it a try!'}
			</p>
			<p className="f5 w-40 center">
				{'Insert a link to an image with someone\'s face below (for example, google "face image" and right-click to copy the image link), and watch the app work its magic'}
			</p>
			<div className="center">
				<div className="form center pa4 br3 shadow-5">
					<input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
					<button className="w-30 grow f4 link ph3 pv2 white"
									onClick={onPictureSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	)
}


export default ImageLinkForm;