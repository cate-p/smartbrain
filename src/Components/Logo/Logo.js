import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt
				className="Tilt br-100 shadow-2 center"
				options={{ max: 25 }}
				style={{ height: 150, width: 150 }}
			>
				<div className="Tilt-inner pa3 center">
					<img
						style={{ paddingTop: "5px" }}
						alt="logo"
						type="png"
						src={brain}
					/>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
