import React from "react";
import "./InputField.css";

function InputField({ type, placeholder, value, onchange }) {
	return (
		<div className="input_field">
			<input
				type={type}
				value={value}
				onChange={onchange}
				placeholder={placeholder}
			/>
		</div>
	);
}

export default InputField;
