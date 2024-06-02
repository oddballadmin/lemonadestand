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
					<NavLink to="error">Error</NavLink>
				</li>
				<li>
					<NavLink to="jobs">Jobs</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
