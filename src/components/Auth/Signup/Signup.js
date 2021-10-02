import { Facebook } from "@material-ui/icons";
import React from "react";
import "./Signup.css";
import SignButton from "../../utils/SignButton";
import SignupSigninContainer from "../../utils/Signup_Signin_Container";
import InputField from "./../../utils/InputField";
import Divider from "./../../utils/Divider";

function Signup() {
	return (
		<div>
			<SignupSigninContainer noAccountText="Login In">
				<div className="signup_header">
					<p>Sign us to see photos and videos from your friends</p>
					<SignButton>
						<Facebook className="facebook_icon" />
						<p>Log in with Facebook</p>
					</SignButton>
					<Divider />
				</div>
				<div className="signup_form">
					<InputField type="text" placeholder="Mobile Number or Email" />
					<InputField type="text" placeholder="Full Name" />
					<InputField type="text" placeholder="Username" />
					<InputField type="password" placeholder="Password" />
					<SignButton>
						<p>Next</p>
					</SignButton>
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
