// import JobListUserApplied from "../components/Job/JobListUserApplied";
import { useUserContext } from "../hooks/useUserContext";
import { useEffect, useState } from "react";
import { getAppliedJobs, getUserCreatedJobs } from "../helper/routes";
import { JobType, UserCreatedJobType } from "../types";
import JobListUserApplied from "../components/Job/JobListUserApplied";
import JobItemApplied from "../components/Job/JobItemApplied";
import UserCreatedJobList from "../components/Job/UserCreatedJobList";
import UserCreatedJobItem from "../components/Job/UserCreatedJobItem";
import { deleteJob } from "../helper/routes";
import "../styles/Home.css";

const Home = () => {
	const { user, refreshUser } = useUserContext(); // Initialize user as null
	const [appliedJobs, setAppliedJobs] = useState<JobType[]>();
	const [userCreatedJobs, setUserCreatedJobs] =
		useState<UserCreatedJobType[]>();
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
			setUserCreatedJobs((prevJobs = []) =>
				prevJobs.filter((job) => job.id !== jobId)
			);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		refreshUser && refreshUser();
		getAppliedJobsData();
		getUserCreatedJobsData();
	}, []);

	return (
		<div className="Home">
			<h1>Welcome {user ? user.firstName : "Guest"}!</h1>
			{user && (
				<>
					<p>Email: {user.email}</p>
					<div className="birthDay">
						<p>Birthdate: {new Date(user.birthdate).toLocaleDateString()}</p>
					</div>
					<div className="infoContainer">
						<div className="row">
							<h2>Jobs you have applied to</h2>
							{appliedJobs && appliedJobs.length > 0 ? (
								<JobListUserApplied>
									{appliedJobs.map((job) => (
										<JobItemApplied job={job} />
									))}
								</JobListUserApplied>
							) : (
								<p>No Jobs Have Been Applied To</p>
							)}
						</div>
						<div className="row">
							<h2>Jobs you have created</h2>
							{userCreatedJobs && userCreatedJobs?.length > 0 ? (
								<UserCreatedJobList>
									{userCreatedJobs?.map((job) => (
										<UserCreatedJobItem job={job} onDelete={handleDeleteJob} />
									))}
								</UserCreatedJobList>
							) : (
								<p>No Jobs Have Been Created</p>
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
