import React from "react";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: "",
			signInPassword: "",
		};
	}
	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value });
	};
	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value });
	};

	onSubmitSignIn = () => {
		fetch("https://glacial-dusk-43127.herokuapp.com/signin", {
			method: "post",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword,
			}),
		})
			.then((response) => response.json())
			.then((user) => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange("home");
				}
			});
	};

	render() {
		const { onRouteChange } = this.props;
		return (
			<article className="br3 ba bg-white-20 dark-gray b--black mv4 w-90 w-50-m w-25-l shadow-5 mw6 center">
				<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f2 fw6 ph0 mh0">Sign In</legend>
							<div className="mt3">
								<label
									className="db fw6 lh-copy f6 tl"
									htmlFor="email-address"
								></label>
								<input
									className="pa2 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
									placeholder="Email"
									type="email"
									name="email-address"
									id="email-address"
									onChange={this.onEmailChange}
								/>
							</div>
							<div className="mv3">
								<label
									className="db fw6 lh-copy f6 tl"
									htmlFor="password"
								></label>
								<input
									className="pa2 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
									placeholder="Password"
									type="password"
									name="password"
									id="password"
									onChange={this.onPasswordChange}
								/>
							</div>
							<label className="pa0 ma0 lh-copy f6 pointer"></label>
						</fieldset>
						<div className="">
							<input
								onClick={this.onSubmitSignIn}
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
								type="submit"
								value="Sign in"
							/>
						</div>
						{/* <div className="lh-copy mt3">
							<p
								onClick={() => onRouteChange("register")}
								className="f4 link dim black db pointer"
							>
								Register
							</p>
						</div> */}
					</div>
				</main>
			</article>
		);
	}
}

export default SignIn;
