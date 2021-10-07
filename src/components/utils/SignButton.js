import React from "react";
import "./SignButton.css";

function SignButton({ children, onclick }) {
	return (
		<div className="sign_Button">
			<button type="submit" onClick={onclick}>
				{children}
			</button>
		</div>
	);
}

export default SignButton;
