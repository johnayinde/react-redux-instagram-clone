import React from "react";
import "./Login.css";

import { Facebook } from "@material-ui/icons";
import SignupSigninContainer from "../../utils/Signup_Signin_Container";
import { Divider } from "@material-ui/core";
import { SIGNUP } from "../../utils/constants";
import SigninFormik from "../../utils/SigninFormik";

function Login() {
	return (
		<div>
			<SignupSigninContainer noAccountText={SIGNUP}>
				<form className="login_form" action=""></form>
				<SigninFormik />

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
