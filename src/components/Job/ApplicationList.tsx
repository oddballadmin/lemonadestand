import { JobApplicationType } from "../../types";
import JobApplicationsItem from "./JobApplicationsItem";
const ApplicationList = ({
	applicationList,
}: {
	applicationList: JobApplicationType[];
}) => {
	return (
		<ul className="JobBoardList">
			{applicationList.map((application: JobApplicationType) => (
				<JobApplicationsItem applicant={application} />
			))}
		</ul>
	);
};

export default ApplicationList;
