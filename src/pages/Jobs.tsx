import React from "react";
import JobList from "../components/Job/JobList";
import { useUserContext } from "../hooks/useUserContext";

const Jobs = () => {
	const { user } = useUserContext();
	if (!user) {
		return <h2>Please log in to view this page</h2>;
	} else {
		return (
			<>
				<h2>Local Job List</h2>
				<button>Create Job</button>
				<JobList />
			</>
		);
	}
};

export default Jobs;
