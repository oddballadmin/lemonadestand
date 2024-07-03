import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobsById, getJobApplicants } from "../helper/routes";
import { JobApplicationType, JobType } from "../types";
import ApplicationList from "../components/Job/ApplicationList";
import { useOptionContext } from "../hooks/useOptionContext";

const Applicants = () => {
	const { setNavToggle } = useOptionContext();
	const { jobId } = useParams();
	const [applicants, setApplicants] = useState<JobApplicationType[]>([]);
	const [job, setJob] = useState<JobType>();
	const getApplicants = async () => {
		if (!jobId) return;

		const res = await getJobApplicants(jobId);
		setApplicants(res);
	};
	const getJob = async ({ id }: { id: string | undefined }) => {
		if (!id) return;
		const res = await getJobsById(id);
		setJob(res);
	};
	useEffect(() => {
		setNavToggle(false);

		getJob({ id: jobId });
		getApplicants();
	}, [jobId]);

	return (
		<div>
			<div className="ApplicantList">
				<div className="row">
					<h2>Job: {job?.title}</h2>
					<p className={job?.status.toLowerCase()}>{job?.status}</p>
					<p>{job?.description}</p>
					{applicants && applicants.length > 0 ? (
						<ApplicationList applicationList={applicants} />
					) : (
						<h3>No Applicants Were Found</h3>
					)}
				</div>
			</div>
		</div>
	);
};

export default Applicants;
