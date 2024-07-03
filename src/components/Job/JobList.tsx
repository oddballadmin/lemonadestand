import { useMemo } from "react";
import { JobBoardType } from "../../types";
import JobBoardItem from "./JobBoardItem";
import "../../styles/JobBoardList.css";

const JobList = ({
	filterInput,
	jobs,
}: {
	filterInput: number | undefined;
	jobs: JobBoardType[];
}) => {
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
