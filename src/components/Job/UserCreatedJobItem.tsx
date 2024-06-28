import "../../styles/JobBoardItem.css";
import { UserCreatedJobType } from "../../types";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const UserCreatedJobItem = ({
	job,
	onDelete,
}: {
	job: UserCreatedJobType;
	onDelete: (jobId: string) => void;
}) => {
	const nav = useNavigate();
	const handleClick = () => {
		nav(`jobs/${job.id}/applicants`);
	};

	const handleDelete = () => {
		if (window.confirm("Are you sure you want to delete this job?")) {
			onDelete(job.id);
		}
	};

	return (
		<li key={job.id} className="JobBoardItem">
			<div className="editBar">
				<button
					className="delete"
					type="button"
					title="Delete"
					onClick={handleDelete}
				>
					<FaTrash aria-label="Delete" />
				</button>
			</div>
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
