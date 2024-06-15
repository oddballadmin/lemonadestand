import React from "react";
type JobListProps = {
	children: React.ReactNode;
};
const JobList = ({ children }: JobListProps) => {
	return <ul className="listContainer">{children}</ul>;
};

export default JobList;
