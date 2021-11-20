import React from "react";
import { LOGIN } from "./constants";
import "./NoAccount.css";

function NoAccount({ linkText }) {
	return (
		<div className="signLink">
			<p>Dont't have an account? </p>

			{linkText === LOGIN ? (
				<a href="/login">
					<p className="link">Sign In</p>
				</a>
			) : (
				<a href="/register">
					<p className="link">Sign Up</p>
				</a>
			)}
		</div>
	);
}

export default NoAccount;
