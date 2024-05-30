import "../../styles/UserHeadSection.css";
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
					<a href="#">Sign In</a>/<a href="#">Sign Up</a>
				</div>
			)}
		</div>
	);
};

export default UserHeadSection;
