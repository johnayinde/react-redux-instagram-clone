const registerUser = (user) => {
	return {
		type: "LOGIN",
		payload: user,
	};
};
const logoutUser = () => {
	return {
		type: "LOGOUT",
	};
};

export { registerUser, logoutUser };
