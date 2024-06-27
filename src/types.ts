export interface JobType {
	_id: string;
	title: string;
	creator: string;
	dateApplied: string;
	status: "Accepted" | "Closed" | "Open";
	description?: string;
}

export interface JobBoardType extends JobType {
	description: string;
	dateCreated: string;
	location: string;
	applicants: string[];
	payment: number;
}

export interface CreateJobType {
	title: string | undefined;
	description: string | undefined;
	zipcode: number | undefined;
	payment: number | undefined;
	creator: string | undefined;
	
}

export interface UserCreatedJobType{
	title: string;
	description: string;
	location: string;
	dateCreated: string;
	applicants: number ;
	id: string;
}

export interface JobApplicationType{
	name: string;
	email: string;
	dateApplied: string;
	phone: number;
	message: string;
}