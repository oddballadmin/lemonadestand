import axios from "axios";
import { validateLogin } from "./validate";
import { toast } from "react-hot-toast";

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
			toast.error("Invalid login credentials!");
			return;
		}
		const res = await axios.post(`/login`, user);
		console.log(res.data);
		toast.success("Logged in successfully!");

		return res;
	} catch (err) {
		console.error(err);
		if (axios.isAxiosError(err) && err.response) {
			const errorResponse = err.response.data;
			if (errorResponse.error === "User not found") {
				toast.error("User not found!");
			} else {
				toast.error("Error logging in!");
			}
		} else {
			toast.error("Network error or server is down!");
		}
	}
};

export const getUser = async () => {
	try {
		const res = await axios.get(`/user`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
export const getProfile = async () => {
	try {
		const res = await axios.get(`/profile`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const getJobsById = async (id: string) => {
	try {
		const res = await axios.get(`/jobs/${id}`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
export const getAppliedJobs = async () => {
	try {
		const res = await axios.get(`/profile/appdata`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
export const getAllJobs = async () => {
	try {
		const res = await axios.get(`/jobs/all`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
