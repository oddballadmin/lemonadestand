// import JobListUserApplied from "../components/Job/JobListUserApplied";
import { useUserContext } from "../hooks/useUserContext";
import { useEffect, useState } from "react";
import { getAppliedJobs, getUserCreatedJobs } from "../helper/routes";
import { JobType, UserCreatedJobType } from "../types";
import JobListUserApplied from "../components/Job/JobListUserApplied";
import JobItemApplied from "../components/Job/JobItemApplied";
import UserCreatedJobList from "../components/Job/UserCreatedJobList";
import UserCreatedJobItem from "../components/Job/UserCreatedJobItem";

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
	useEffect(() => {
		refreshUser && refreshUser();
		getAppliedJobsData();
		getUserCreatedJobsData();
	}, []);

	return (
		<div>
			<h1>Welcome {user ? user.firstName : "Guest"}!</h1>
			{user && (
				<div>
					<p>Email: {user.email}</p>
					<div className="birthDay">
						<p>Birthdate: {new Date(user.birthdate).toLocaleDateString()}</p>
					</div>
					<div className="row">
						<h2>Jobs you have applied to</h2>
						{appliedJobs && (
							<JobListUserApplied>
								{appliedJobs.map((job) => (
									<JobItemApplied job={job} />
								))}
							</JobListUserApplied>
						)}
					</div>
					<div className="row">
						<h2>Jobs you have created</h2>
						<UserCreatedJobList>
							{userCreatedJobs?.map((job) => (
								<UserCreatedJobItem job={job} />
							))}
						</UserCreatedJobList>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
