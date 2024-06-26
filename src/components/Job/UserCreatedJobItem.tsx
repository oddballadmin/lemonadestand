import "../../styles/JobBoardItem.css";
import { UserCreatedJobType } from "../../types";
import { useNavigate } from "react-router-dom";

const UserCreatedJobItem = ({ job }: { job: UserCreatedJobType }) => {
	const nav = useNavigate();
	const handleClick = () => {
		nav(`jobs/${job.id}/applicants`);
	};
	return (
		<li key={job.id} className="JobBoardItem">
			<h3>{job.title}</h3>
			<p>ID: {job.id}</p>
			<p>Published: {new Date(job.dateCreated).toLocaleDateString()}</p>
			<p>ZipCode: {job.location}</p>
			<div className="row">
				<p>Applicants: {job.applicants}</p>
				<button onClick={handleClick}>View Job Info</button>
			</div>
		</li>
	);
};

export default UserCreatedJobItem;
