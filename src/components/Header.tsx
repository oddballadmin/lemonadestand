import HeaderMenu from "./utils/HeaderMenu";
import "./../styles/Header.css";
import UserHeadSection from "./utils/UserHeadSection";
import { NavLink } from "react-router-dom";
type HeaderProps = {
	title: string;
};

const Header = ({ title }: HeaderProps) => {
	return (
		<header className="Header container">
			<div className="brand">
				<NavLink to="/">{title}</NavLink>
			</div>
			<div className="Profile">
				<UserHeadSection isUserLoggedIn={false} />
				<HeaderMenu />
			</div>
		</header>
	);
};

export default Header;
