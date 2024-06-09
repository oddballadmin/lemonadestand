type UserLoginType = {
	email: string;
	password: string;
};

export const validateLogin = (user: UserLoginType) => {
	const isValid = false;

	if (!user.email) {
		return isValid;
	}
	if (!user.password) {
		return isValid;
	}
	if (user.email && user.password) {
		return true;
	}
};
