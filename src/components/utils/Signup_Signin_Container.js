import React from "react";
import "./Signup_Signin_Container.css";
import NoAccount from "./NoAccount";
import { logo, socialicon } from "./images";

function SignupSigninContainer({ children, noAccountText }) {
	return (
		<div className="signup_signin_container">
			<div className="signup_signin_container_top">
				<div className="signup_signin_header">
					<img src={logo} alt="" />
				</div>
				{children}
			</div>

			<div className="signup_signin_container_bottom">
				{/* <a href=""></a> */}
				<NoAccount linkText={noAccountText} />
			</div>
			<div className="mobile_app_container">
				<p>Get the app.</p>
				<img src={socialicon} alt="" />
			</div>
		</div>
	);
}

export default SignupSigninContainer;
