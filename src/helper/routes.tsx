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
		const res = await axios.post(`/register`, user);
		console.log(res.data);
		toast.success("Registered successfully!");

		return res;
	} catch (err) {
		console.error(err);
		if (axios.isAxiosError(err) && err.response) {
			const errorResponse = err.response.data;
			if (errorResponse.error === "Password must be at least 6 characters") {
				toast.error("Password must be at least 6 characters!");
			}
			if (errorResponse.error === "Passwords do not match") {
				toast.error("Passwords do not match");
			}
			if (errorResponse.error === "Email already exists") {
				toast.error("Email already exists!");
			}
		} else {
			toast.error("Network error or server is down!");
		}
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
		console.log("rendered Jobs List");
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const createJob = async (job: CreateJobType) => {
	try {
		const res = await axios.post(`/jobs/create`, job);
		console.log(res.data);
		toast.success("Job Created successfully!");

		return res.data;
	} catch (err) {
		console.error(err);
		toast.error("Error creating job, please retry later!");
	}
};
export const applyJob = async (jobId: string, message: string) => {
	try {
		const res = await axios.post(`/jobs/apply/${jobId}`, {
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
		const res = await axios.get(`/profile/jobsdata`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
export const getJobApplicants = async (jobId: string) => {
	try {
		const res = await axios.get(`/jobs/${jobId}/applicants`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const deleteJob = async (jobId: string) => {
	try {
		const res = await axios.delete(`/jobs/delete/${jobId}`);
		console.log(res.data);
		toast.success("Job Deleted successfully!");

		return res;
	} catch (err) {
		console.error(err);
		toast.error("Error deleting job, please retry later!");
	}
};
