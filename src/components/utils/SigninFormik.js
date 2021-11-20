import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import SignButton from "./SignButton";
import InputField from "./InputField";

function SigninFormik({ register }) {
	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validationSchema={Yup.object({
				email: Yup.string().email("Invalid email address").required("Required"),
				password: Yup.string()
					.min(5, "minimun character must be 5")
					.required("Required"),
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			<Form>
				<InputField
					label="Email"
					name="email"
					type="email"
					placeholder="Mobile Number or Email"
				/>

				<InputField
					label="Password"
					name="password"
					type="password"
					placeholder="Password"
				/>

				<SignButton onclick={register}>
					<p>Next</p>
				</SignButton>
			</Form>
		</Formik>
	);
}

export default SigninFormik;
