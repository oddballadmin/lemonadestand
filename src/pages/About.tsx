import { useEffect } from "react";
import { useOptionContext } from "../hooks/useOptionContext";
const About = () => {
	const { setNavToggle } = useOptionContext();
	return (
		useEffect(() => {
			setNavToggle(false);
		}, []),
		(
			<div>
				<h1>About</h1>
				<p>
					**TO USE THIS APP YOU MUST HAVE COOKIES ENABLED**
					<br />
					This application was built to allow users to find local jobs within a
					certain radius of their location.
					<br />
					Users can create an account, log in, and search for jobs based on
					their location. They can also apply for jobs and view jobs they have
					applied for!
					<br /> Users can also create jobs, and view the users who have applied
					to their job postings.
				</p>
			</div>
		)
	);
};

export default About;
