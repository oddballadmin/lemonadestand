import React from "react";
import "../../styles/JobListUserApplied.css";
import JobList from "./JobList";
import JobItemApplied from "./JobItemApplied";

const JobListUserApplied = () => {
	return (
		<div className="JobListUserApplied">
			<h3>Jobs Applied</h3>
			<JobList>
				<JobItemApplied
					status="Open"
					title="Software Engineer"
					company="Google"
					date="2021-09-01"
					_id="1"
				/>
				<JobItemApplied
					status="Accepted"
					title="Product Manager"
					company="Facebook"
					date="2021-09-02"
					_id="2"
				/>
				<JobItemApplied
					status="Closed"
					title="Data Analyst"
					company="Amazon"
					date="2021-09-03"
					_id="3"
				/>
			</JobList>
		</div>
	);
};

export default JobListUserApplied;
