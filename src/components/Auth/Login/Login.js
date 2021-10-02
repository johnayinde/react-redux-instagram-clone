import React from "react";
import "./Login.css";

import { Facebook } from "@material-ui/icons";
import InputField from "../../utils/InputField";
import SignupSigninContainer from "../../utils/Signup_Signin_Container";
import SignButton from "../../utils/SignButton";
import { Divider } from "@material-ui/core";

function Login() {
	return (
		<div>
			<SignupSigninContainer noAccountText="Sign Up">
				<form className="login_form" action="">
					<div className="emailContainer">
						<InputField
							type="text"
							placeholder="Phone number, username or email"
						/>
					</div>

					<div className="passwordContainer">
						<InputField type="password" placeholder="Password" />
						{/* <p>Show</p> */}
					</div>
					<SignButton>
						<p>Login</p>
					</SignButton>
				</form>

				<Divider />

				<div className="socialContainer">
					<Facebook />
					<p>Log in with Facebook</p>
				</div>
				<p>Forget password?</p>
			</SignupSigninContainer>
		</div>
	);
}

export default Login;
