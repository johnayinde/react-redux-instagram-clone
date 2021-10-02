import React from "react";
import "./SignButton.css";

function SignButton({ children }) {
	return (
		<div className="sign_Button">
			<button type="submit">{children}</button>
		</div>
	);
}

export default SignButton;
