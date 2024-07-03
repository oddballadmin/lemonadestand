import { NavLink } from "react-router-dom";
import "./../styles/Navigation.css";

const Navigation = () => {
	return (
		<nav className="Navigation container">
			<ul>
				<li>
					<NavLink to="/" end>
						Home
					</NavLink>
				</li>

				<li>
					<NavLink to="jobs">Jobs</NavLink>
				</li>
				<li>
					<NavLink to="about">About</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
