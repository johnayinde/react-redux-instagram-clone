import { useField } from "formik";
import React from "react";
import "./InputField.css";

// function InputField({ type, placeholder, value, onchange }) {
// 	return (
// 		<div className="input_field">
// 			<input
// 				type={type}
// 				value={value}
// 				onChange={onchange}
// 				placeholder={placeholder}
// 			/>
// 		</div>
// 	);
// }

const InputField = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className="input_field">
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};
export default InputField;
