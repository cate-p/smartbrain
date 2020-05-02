import React from "react";

function ValidationMessage(props) {
	if (!props.valid) {
		return <div className="error-msg">{props.message}</div>;
	}
	return null;
}

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			nameValid: false,
			email: "",
			emailValid: false,
			password: "",
			passwordValid: false,
			formValid: false,
			errorMsg: {},
		};
	}

	validateForm = () => {
		const { nameValid, emailValid, passwordValid } = this.state;
		this.setState({
			formValid: nameValid && emailValid && passwordValid,
		});
	};

	// --------- Name --------

	onNameChange = (event) => {
		this.setState({ name: event.target.value }, this.validateName);
	};

	validateName = () => {
		const { name } = this.state;
		let nameValid = true;
		let errorMsg = { ...this.state.errorMsg };

		if (name.length < 3) {
			nameValid = false;
			errorMsg.name = "Must be at least 3 characters long";
		}

		this.setState({ nameValid, errorMsg }, this.validateForm);
	};

	// --------- Email --------

	onEmailChange = (event) => {
		this.setState({ email: event.target.value }, this.validateEmail);
	};

	validateEmail = () => {
		const { email } = this.state;
		let emailValid = true;
		let errorMsg = { ...this.state.errorMsg };

		// checks for format _@_._
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			emailValid = false;
			errorMsg.email = "Invalid email format";
		}

		this.setState({ emailValid, errorMsg }, this.validateForm);
	};

	// --------- Password --------

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value }, this.validatePassword);
	};

	validatePassword = () => {
		const { password } = this.state;
		let passwordValid = true;
		let errorMsg = { ...this.state.errorMsg };

		// must be 6 chars
		// must contain a number
		// must contain a special character

		if (password.length < 6) {
			passwordValid = false;
			errorMsg.password = "Password must be at least 6 characters long";
		} else if (!/\d/.test(password)) {
			passwordValid = false;
			errorMsg.password = "Password must contain a digit";
		} else if (!/[!@#$%^&*]/.test(password)) {
			passwordValid = false;
			errorMsg.password = "Password must contain special character: !@#$%^&*";
		}

		this.setState({ passwordValid, errorMsg }, this.validateForm);
	};

	// --------- Submit --------

	onSubmitRegister = () => {
		fetch("https://glacial-dusk-43127.herokuapp.com/register", {
			method: "post",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name,
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
		return (
			<article className="br3 ba bg-white-20 dark-gray b--black mv4 w-90 w-50-m w-25-l shadow-5 mw6 center">
				<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f2 fw6 ph0 mh0">Register</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="name"></label>
								<ValidationMessage
									valid={this.state.nameValid}
									message={this.state.errorMsg.name}
								/>
								<input
									className="form-field pa2 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
									placeholder="Name"
									type="text"
									name="name"
									id="name"
									onChange={this.onNameChange}
									value={this.state.name}
								/>
							</div>
							<div className="mt3">
								<label
									className="db fw6 lh-copy f6"
									htmlFor="email-address"
								></label>
								<ValidationMessage
									valid={this.state.emailValid}
									message={this.state.errorMsg.email}
								/>
								<input
									className="form-field pa2 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
									placeholder="Email"
									type="email"
									required
									name="email-address"
									id="email-address"
									onChange={this.onEmailChange}
									value={this.state.email}
								/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6" htmlFor="password"></label>
								<ValidationMessage
									valid={this.state.passwordValid}
									message={this.state.errorMsg.password}
								/>
								<input
									className="form-field pa2 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
									placeholder="Password"
									type="password"
									name="password"
									id="password"
									onChange={this.onPasswordChange}
									value={this.state.password}
								/>
							</div>
							<label className="pa0 ma0 lh-copy f6 pointer"></label>
						</fieldset>
						<div className="">
							<input
								onClick={this.onSubmitRegister}
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
								type="submit"
								value="Register"
								disabled={!this.state.formValid}
							/>
						</div>
						<div className="lh-copy mt3"></div>
					</div>
				</main>
			</article>
		);
	}
}

export default Register;
