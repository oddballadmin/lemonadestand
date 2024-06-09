import axios from "axios";
import { validateLogin } from "./validate";
type UserRegisterType = {
	firstName: string;
	lastName: string;
	phone: string;
	zipcode: string;
	email: string;
	password: string;
	password2: string;
	birthdate: string;
};
type UserLoginType = {
	email: string;
	password: string;
};
export const register = async (user: UserRegisterType) => {
	try {
		const res = await axios.post(`/register`, user);
		console.log(res.data);

		return res;
	} catch (err) {
		console.error(err);
	}
};
export const login = async (user: UserLoginType) => {
	try {
		if (!validateLogin(user)) {
			return;
		}
		const res = await axios.post(`/login`, user);
		console.log(res.data);

		return res;
	} catch (err) {
		console.error(err);
	}
};
