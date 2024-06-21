import React from "react";
import "../../styles/JobListUserApplied.css";
type JobListProps = {
	children: React.ReactNode;
};
const JobListUserApplied = ({ children }: JobListProps) => {
	return <ul className="JobListUserApplied">{children}</ul>;
};

export default JobListUserApplied;
