import React from "react";
import "./InputField.css";

function InputField({ type, placeholder }) {
	return (
		<div className="input_field">
			<input type={type} placeholder={placeholder} />
		</div>
	);
}

export default InputField;
