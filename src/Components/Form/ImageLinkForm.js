import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<h3 className="f3 white">
				{"This magic brain will detect faces in your pictures. Give it a try!"}
			</h3>
			<div className="center">
				<div className="form pa4 br4 shadow-4 center">
					<input
						className="f4 br4 pa2 w-70 center"
						placeholder="Paste here an image url..."
						type="text"
						onChange={onInputChange}
					/>
					<button
						className="fw6 br4 w-30 grow f4 link ph3 pv2 dib white bg-blue"
						onClick={onButtonSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
