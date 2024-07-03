import { useUserContext } from "../hooks/useUserContext";
import { useEffect, useState } from "react";
import {
	getAppliedJobs,
	getUserCreatedJobs,
	deleteJob,
} from "../helper/routes";
import { JobType, UserCreatedJobType } from "../types";
import JobListUserApplied from "../components/Job/JobListUserApplied";
import JobItemApplied from "../components/Job/JobItemApplied";
import UserCreatedJobList from "../components/Job/UserCreatedJobList";
import UserCreatedJobItem from "../components/Job/UserCreatedJobItem";
import "../styles/Home.css";
import { useOptionContext } from "../hooks/useOptionContext";

const Home = () => {
	const { setNavToggle } = useOptionContext();
	const { user, refreshUser, loading, setLoading } = useUserContext();
	const [appliedJobs, setAppliedJobs] = useState<JobType[]>([]);
	const [userCreatedJobs, setUserCreatedJobs] = useState<UserCreatedJobType[]>(
		[]
	);

	const getAppliedJobsData = async () => {
		const data = await getAppliedJobs();
		setAppliedJobs(data);
	};

	const getUserCreatedJobsData = async () => {
		const data = await getUserCreatedJobs();
		setUserCreatedJobs(data);
	};

	const handleDeleteJob = async (jobId: string) => {
		try {
			await deleteJob(jobId);
			setUserCreatedJobs((prevJobs) =>
				prevJobs.filter((job) => job.id !== jobId)
			);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		setNavToggle(false);
		if (user) {
			setLoading(true);
			refreshUser && refreshUser();
			getAppliedJobsData();
			getUserCreatedJobsData();
			setLoading(false);
		}
	}, []);

	return (
		<div className="Home">
			<h1>Welcome {user ? user.firstName : "Guest"}!</h1>
			{loading && <p>Loading Data.......</p>}
			{user ? (
				<>
					<p>Email: {user.email}</p>

					<div className="infoContainer">
						<div className="row">
							<h2>Jobs you have applied to</h2>
							{appliedJobs.length > 0 ? (
								<JobListUserApplied>
									{appliedJobs.map((job) => (
										<JobItemApplied job={job} key={job._id} />
									))}
								</JobListUserApplied>
							) : (
								<p>No Jobs Have Been Applied To</p>
							)}
						</div>
						<div className="row">
							<h2>Jobs you have created</h2>
							{userCreatedJobs.length > 0 ? (
								<UserCreatedJobList>
									{userCreatedJobs.map((job) => (
										<UserCreatedJobItem
											job={job}
											onDelete={handleDeleteJob}
											key={job.id}
										/>
									))}
								</UserCreatedJobList>
							) : (
								<p>No Jobs Have Been Created</p>
							)}
						</div>
					</div>
				</>
			) : (
				<h1>Login to view your dashboard</h1>
			)}
		</div>
	);
};

export default Home;
