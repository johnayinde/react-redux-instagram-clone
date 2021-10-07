import { Facebook } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Signup.css";
import SignButton from "../../utils/SignButton";
import SignupSigninContainer from "../../utils/Signup_Signin_Container";
import InputField from "./../../utils/InputField";
import Divider from "./../../utils/Divider";
import { registerUser } from "../../../Redux/user/userAction";

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [photoURL, setPhotoURL] = useState("");

	const dispatch = useDispatch();

	const registerToApp = (e) => {
		e.preventDefault();
		dispatch(
			registerUser({
				email,
				password,
				name,
				username,
				photoURL,
			})
		);
	};
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
					<form action="">
						{" "}
						{/* to enable submit on enter key stroke */}
						<InputField
							value={email}
							onchange={(e) => setEmail(e.target.value)}
							type="text"
							placeholder="Mobile Number or Email"
						/>
						<InputField
							value={name}
							onchange={(e) => setName(e.target.value)}
							type="text"
							placeholder="Full Name"
						/>
						<InputField
							value={photoURL}
							onchange={(e) => setPhotoURL(e.target.value)}
							type="text"
							placeholder="Photo Url"
						/>
						<InputField
							value={username}
							onchange={(e) => setUsername(e.target.value)}
							type="text"
							placeholder="Username"
						/>
						<InputField
							value={password}
							onchange={(e) => setPassword(e.target.value)}
							type="password"
							placeholder="Password"
						/>
						<SignButton onclick={registerToApp}>
							<p>Next</p>
						</SignButton>
					</form>
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
