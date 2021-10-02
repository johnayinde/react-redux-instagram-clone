import React from "react";
import "./NoAccount.css";

function NoAccount({ linkText }) {
	return (
		<div className="signLink">
			<p>Dont't have an account? </p>
			<p>{linkText}</p>
		</div>
	);
}

export default NoAccount;
