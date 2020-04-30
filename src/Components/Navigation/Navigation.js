import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav style={{ display: "flex", justifyContent: "flex-end" }}>
				<p
					onClick={() => onRouteChange("signout")}
					className="fw6 f3 link dim white pa3 mr4 pointer"
				>
					Sign Out
				</p>
			</nav>
		);
	} else {
		return (
			<nav style={{ display: "flex", justifyContent: "flex-end" }}>
				<p
					onClick={() => onRouteChange("signin")}
					className="fw6 f3 link dim white pa3 mr4 pointer"
				>
					Sign In
				</p>
				<p
					onClick={() => onRouteChange("register")}
					className="fw6 f3 link dim white pa3 mr4 pointer"
				>
					Register
				</p>
			</nav>
		);
	}
};

export default Navigation;
