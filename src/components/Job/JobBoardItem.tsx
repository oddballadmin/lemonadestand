import React, { useEffect } from "react";
import "../../styles/JobBoardItem.css";
import { JobBoardType } from "../../types";
const JobBoardItem = ({ job }: { job: JobBoardType }) => {
	const [applicantCount, setApplicantCount] = React.useState<number>(0);
	useEffect(() => {
		getApplicantCount();
	});
	const getApplicantCount = () => {
		if (!job.applicants) {
			setApplicantCount(0);
			return;
		}
		setApplicantCount(job.applicants.length);
	};

	return (
		<li key={job._id} className="JobBoardItem">
			<h3>{job.title}</h3>
			<p>{job.creator}</p>
			<p>Published: {new Date(job.dateCreated).toLocaleDateString()}</p>
			<p>ZipCode: {job.location}</p>
			<div className="row">
				<p>Applicants: {applicantCount}</p>
				<p className={job.status.toLowerCase()}>{job.status}</p>
			</div>
			<div className="row">
				<p>Job Price: ${job.payment}</p>
				<button>View More Info</button>
			</div>
		</li>
	);
};

export default JobBoardItem;
