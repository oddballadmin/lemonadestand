import React, { useEffect } from "react";
import "../../styles/JobBoardItem.css";
import { JobBoardType } from "../../types";
import ApplyForm from "./ApplyForm";

const JobBoardItem = ({ job }: { job: JobBoardType }) => {
	const [applicantCount, setApplicantCount] = React.useState<number>(0);
	const [viewMore, setViewMore] = React.useState<boolean>(false);
	const [viewApply, setViewApply] = React.useState<boolean>(false);
	const changeViewMore = () => {
		setViewMore((prevState) => !prevState);
	};
	const changeApplyModal = () => {
		setViewApply((prevState) => !prevState);
	};
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
			{viewApply ? (
				<ApplyForm jobId={job._id} setViewApply={setViewApply} />
			) : viewMore ? (
				<div className="descContainer">
					<div className="desc">
						<h3>Job Description</h3>
						<p>{job.description}</p>
					</div>
					<div className="btnGroup">
						<button onClick={changeApplyModal}>Apply</button>
						<button onClick={changeViewMore}>View Less</button>
					</div>
				</div>
			) : (
				<>
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
						<button onClick={changeViewMore}>View More Info</button>
					</div>
				</>
			)}
		</li>
	);
};

export default JobBoardItem;
