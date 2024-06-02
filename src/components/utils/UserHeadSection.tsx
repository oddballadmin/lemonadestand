import "../../styles/UserHeadSection.css";
import { NavLink } from "react-router-dom";

interface UserHeadSectionProps {
	isUserLoggedIn: boolean;
}
const UserHeadSection = ({ isUserLoggedIn }: UserHeadSectionProps) => {
	return (
		<div className="UserHeadSection">
			{isUserLoggedIn ? (
				<div>
					<p>Guest</p>
				</div>
			) : (
				<div className="authLinks">
					<NavLink to="login">Sign In</NavLink>/
					<NavLink to="register">Sign Up</NavLink>
				</div>
			)}
		</div>
	);
};

export default UserHeadSection;
