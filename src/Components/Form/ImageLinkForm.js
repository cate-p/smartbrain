import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<h3 className="f3 pa4 white">
				{"This magic brain will detect faces in your pictures. Give it a try!"}
			</h3>
			<div className="center">
				<div className="form pa3 ba dark-gray b--black br4 shadow-5 center">
					<input
						className="f4 br4 pa2 w-70 center"
						placeholder="Paste image url"
						type="text"
						onChange={onInputChange}
					/>
					<button
						className="fw6 br4 w-30 grow f4 link pa2 dib white bg-blue tc"
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
