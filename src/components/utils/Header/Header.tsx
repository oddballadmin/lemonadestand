import HeaderMenu from "./HeaderMenu";
import "./styles/Header.css";
type HeaderProps = {
	title: string;
};

const Header = ({ title }: HeaderProps) => {
	return (
		<header className="Header">
			<div className="brand">
				<p>{title}</p>
			</div>
			<div className="Profile">
				<p>Guest</p>
				<HeaderMenu />
			</div>
		</header>
	);
};

export default Header;
