import "./../../styles/HeaderMenu.css";
import { FcMenu } from "react-icons/fc";
import Button from "./Button";
import { useOptionContext } from "./../../hooks/useOptionContext";
const HeaderMenu = () => {
	const context = useOptionContext();
	const { navToggle, setNavToggle } = context;
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
