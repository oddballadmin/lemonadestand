import JobListUserApplied from "../components/Job/JobListUserApplied";
import { useUserContext } from "../hooks/useUserContext";
import { useEffect } from "react";

const Home = () => {
	const { user, refreshUser } = useUserContext(); // Initialize user as null
	useEffect(() => {
		refreshUser && refreshUser();
	}, []);

	return (
		<>
			<div>
				<h1>Welcome {user ? user.firstName : "Guest"}!</h1>
				{user && (
					<div>
						<p>Email: {user.email}</p>
						<small>ID: {user._id}</small>
						<div className="birthDay">
							{new Date(user.birthdate).toLocaleDateString()}
						</div>

						<JobListUserApplied />
					</div>
				)}
			</div>
		</>
	);
};

export default Home;
