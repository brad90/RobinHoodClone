const isEmail = (email) => {
	if (!email.includes("@")) {
		return false;
	}
	return true;
};

export const validateSignUpForm = (payload) => {
	const errors = {};
	let message = "";
	var isFormValid = true;

	if (typeof payload.email !== "string" || !isEmail(payload.email)) {
		isFormValid = false;
		errors.email = "Please provide a correct email address";
	}

	if (typeof payload.password !== "string" || payload.password.trim().length < 8) {
		isFormValid = false;
		errors.email = "Password must be at least 8 characters long";
	}

	return { success: isFormValid, errors, message };
};
