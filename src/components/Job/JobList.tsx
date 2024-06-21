import React, { useEffect } from "react";
import { getAllJobs } from "../../helper/routes";
import { JobBoardType } from "../../types";
import JobBoardItem from "./JobBoardItem";
import "../../styles/JobBoardList.css";

const JobList = () => {
	const [jobs, setJobs] = React.useState<JobBoardType[]>([]);
	const getJobsData = async () => {
		setJobs(await getAllJobs());
	};

	useEffect(() => {
		getJobsData();
	}, []);

	return (
		<div className="JobBoardList">
			{jobs.map((job: JobBoardType) => {
				return <JobBoardItem job={job} key={job._id} />;
			})}
		</div>
	);
};

export default JobList;
