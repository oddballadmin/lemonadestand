export interface JobType {
	_id: string;
	title: string;
	creator: string;
	dateApplied: string;
	status: "Accepted" | "Closed" | "Open";
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