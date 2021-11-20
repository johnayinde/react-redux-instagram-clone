import { Facebook } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Signup.css";
import SignButton from "../../utils/SignButton";
import SignupSigninContainer from "../../utils/Signup_Signin_Container";
import InputField from "./../../utils/InputField";
import Divider from "./../../utils/Divider";
import { registerUser } from "../../../Redux/user/userAction";
import { LOGIN } from "../../utils/constants";
import SignupFormik from "../../utils/SignupFormik";

function Signup() {
	return (
		<div>
			<SignupSigninContainer noAccountText={LOGIN}>
				<div className="signup_header">
					<p>Sign us to see photos and videos from your friends</p>
					<SignButton>
						<Facebook className="facebook_icon" />
						<p>Log in with Facebook</p>
					</SignButton>
					<Divider />
				</div>
				<div className="signup_form">
					<SignupFormik />
				</div>
				<div className="signup_footer">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
						doloribus sunt expedita vitae hic itaque numquam.
					</p>
				</div>
			</SignupSigninContainer>
		</div>
	);
}

export default Signup;
