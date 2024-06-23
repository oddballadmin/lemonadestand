import React, { useEffect, useMemo } from "react";
import { getAllJobs } from "../../helper/routes";
import { JobBoardType } from "../../types";
import JobBoardItem from "./JobBoardItem";
import "../../styles/JobBoardList.css";

const JobList = ({ filterInput }: { filterInput: number | undefined }) => {
	const [jobs, setJobs] = React.useState<JobBoardType[]>([]);
	const getJobsData = async () => {
		setJobs(await getAllJobs());
	};

	useEffect(() => {
		getJobsData();
	}, []);

	const filteredJobs = useMemo(
		() =>
			jobs.filter((job: JobBoardType) => {
				return filterInput
					? job.location.includes(filterInput.toString())
					: true;
			}),
		[filterInput, jobs]
	);

	return (
		<div className="JobBoardList">
			{filteredJobs.length > 0 ? (
				filteredJobs.map((job: JobBoardType) => (
					<JobBoardItem job={job} key={job._id} />
				))
			) : (
				<h2>Jobs in your area not found</h2>
			)}
		</div>
	);
};

export default JobList;
