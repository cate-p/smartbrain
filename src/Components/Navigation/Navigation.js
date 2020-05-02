import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav style={{ display: "flex", justifyContent: "center" }}>
				<p
					onClick={() => onRouteChange("signout")}
					className="fw6 f3 link dim white pa3 ma3 mb4 pointer"
				>
					Sign Out
				</p>
			</nav>
		);
	} else {
		return (
			<nav style={{ display: "flex", justifyContent: "center" }}>
				<p
					onClick={() => onRouteChange("signin")}
					className="fw6 f3 link dim white pa3 ma3 pointer"
				>
					Sign In
				</p>
				<p
					onClick={() => onRouteChange("register")}
					className="fw6 f3 link dim white pa3 ma3 pointer"
				>
					Register
				</p>
			</nav>
		);
	}
};

export default Navigation;
