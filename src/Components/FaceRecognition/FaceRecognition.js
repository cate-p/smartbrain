import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className="center ma">
			<div className="border pa3 ba dark-gray b--black br4 shadow-5 center absolute f4">
				<img
					id="inputimage"
					alt=""
					src={imageUrl}
					width="650px"
					height="auto"
				/>
				<div
					className="bounding-box"
					style={{
						top: box.topRow,
						right: box.rightCol,
						bottom: box.bottomRow,
						left: box.leftCol,
					}}
				></div>
			</div>
		</div>
	);
};

export default FaceRecognition;
