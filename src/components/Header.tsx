import HeaderMenu from "./utils/HeaderMenu";
import "./../styles/Header.css";
import UserHeadSection from "./utils/UserHeadSection";

type HeaderProps = {
	title: string;
};

const Header = ({ title }: HeaderProps) => {
	return (
		<header className="Header container">
			<div className="brand">
				<p>{title}</p>
			</div>
			<div className="Profile">
				<UserHeadSection isUserLoggedIn={false} />
				<HeaderMenu />
			</div>
		</header>
	);
};

export default Header;
