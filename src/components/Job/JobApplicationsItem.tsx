import "../../styles/JobApplicationsItem.css";
import { JobApplicationType } from "../../types";

const JobApplicationsItem = ({
	applicant,
}: {
	applicant: JobApplicationType;
}) => {
	return (
		<div className="JobApplicationsItem">
			<div className="entries">
				<div className="basicInfo">
					<h3>{applicant.name}</h3>
					<p>
						Applied On: {new Date(applicant.dateApplied).toLocaleDateString()}
					</p>
				</div>
				<div className="contactInfo">
					<p>Email: {applicant.email}</p>
					<p>Phone: {applicant.phone}</p>
				</div>

				<div className="message">
					<p>Message: {applicant.message}</p>
				</div>
			</div>
		</div>
	);
};

export default JobApplicationsItem;
