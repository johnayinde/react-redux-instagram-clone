import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import SignButton from "./SignButton";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/user/userAction";

function SignupFormik() {
	const dispatch = useDispatch();

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
				name: "",
				username: "",
				photo: "",
			}}
			validationSchema={Yup.object({
				email: Yup.string().email("Invalid email address").required("Required"),
				password: Yup.string()
					.min(5, "minimun character must be 5")
					.required("Required"),
				name: Yup.string().required("Required"),
				username: Yup.string().required("Required"),
				photo: Yup.string().optional(),
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					dispatch(registerUser(values));
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
					label="Full Name"
					name="name"
					type="text"
					placeholder="Full Name"
				/>

				<InputField
					label="Photo URL"
					name="photo"
					type="text"
					placeholder="Photo Url"
				/>

				<InputField
					label="Username"
					name="username"
					type="text"
					placeholder="Username"
				/>

				<InputField
					label="Password"
					name="password"
					type="password"
					placeholder="Password"
				/>

				<SignButton>
					<p>Next</p>
				</SignButton>
			</Form>
		</Formik>
	);
}

export default SignupFormik;
