import axios from "axios";
import { validateLogin } from "./validate";
import { toast } from "react-hot-toast";
import { CreateJobType } from "../types";
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
		const res = await axios.post(`/api/register`, user);
		console.log(res.data);
		toast.success("Registered successfully!");

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
		const res = await axios.post(`/api/login`, user);
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
		const res = await axios.get(`/api/user`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
export const getProfile = async () => {
	try {
		const res = await axios.get(`/api/profile`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const getJobsById = async (id: string) => {
	try {
		const res = await axios.get(`/api/jobs/${id}`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
export const getAppliedJobs = async () => {
	try {
		const res = await axios.get(`/api/profile/appdata`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
export const getAllJobs = async () => {
	try {
		const res = await axios.get(`/api/jobs/all`);
		console.log("rendered Jobs List");
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const createJob = async (job: CreateJobType) => {
	try {
		const res = await axios.post(`/api/jobs/create`, job);
		console.log(res.data);
		toast.success("Job Created successfully!");

		return res;
	} catch (err) {
		console.error(err);
		toast.error("Error creating job, please retry later!");
	}
};
export const applyJob = async (jobId: string, message: string) => {
	try {
		const res = await axios.post(`/api/jobs/apply/${jobId}`, {
			jobId,
			message,
		});
		console.log(res.data);
		toast.success("Applied successfully!");

		return res;
	} catch (err) {
		console.error(err);
		toast.error("Error applying job, please retry later!");
	}
};

export const getUserCreatedJobs = async () => {
	try {
		const res = await axios.get(`/api/profile/jobsdata`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
export const getJobApplicants = async (jobId: string) => {
	try {
		const res = await axios.get(`/api/jobs/${jobId}/applicants`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
