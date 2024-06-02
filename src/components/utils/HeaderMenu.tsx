import "./../../styles/HeaderMenu.css";
import { FcMenu } from "react-icons/fc";
import Button from "./Button";
import { useOptionContext } from "./../../context/OptionsContext";

const HeaderMenu = () => {
	const { navToggle, setNavToggle } = useOptionContext();
	const toggleNav = () => {
		setNavToggle(!navToggle);
		console.log(navToggle);
	};
	return (
		<div className="HeaderMenu">
			<Button action={toggleNav} name="MenuToggle">
				<FcMenu />
			</Button>
		</div>
	);
};

export default HeaderMenu;
