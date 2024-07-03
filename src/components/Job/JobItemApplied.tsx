import "../../styles/JobItemApplied.css";
import { JobType } from "../../types";
// import { FaTrash } from "react-icons/fa";

const JobItemApplied = ({ job }: { job: JobType }) => {
	console.log(new Date(job.dateApplied).toLocaleDateString());
	return (
		<li key={job._id} className="JobItemApplied">
			{/* <div className="editBar">
				<button className="delete" type="button" title="Delete">
					<FaTrash aria-label="Delete" />
				</button>
			</div> */}
			<div className="jobItemContent">
				<h4>{job.title}</h4>
				<p>{job.creator}</p>
				<p>{new Date(job.dateApplied).toLocaleDateString()}</p>
				<p className={job.status.toLowerCase()}>{job.status}</p>
			</div>
		</li>
	);
};

export default JobItemApplied;
