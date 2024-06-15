export interface JobType {
	_id: string;
	title: string;
	company: string;
	date: string;
	status: "Accepted" | "Closed" | "Open";
}

export interface JobApplyType {
    _id: string;
    userId: string;
    message: string;
    dateApplied: string;
}